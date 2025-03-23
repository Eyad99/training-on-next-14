import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const EventLoop = () => {
	return (
		<section className='flex flex-col gap-4'>
			<h4 className='font-bold text-3xl'>Event Loop</h4>
			<span className='text-muted-foreground text-rtl'>
				الـ Event Loop (حلقة الأحداث) هي آلية أساسية في JavaScript تُستخدم لإدارة تنفيذ الكود غير المتزامن (Asynchronous) في بيئة تعتمد على
				خيط واحد (Single-threaded). بمعنى آخر، JavaScript تعمل على خيط واحد فقط، لكنها قادرة على التعامل مع العمليات غير المتزامنة مثل
				استدعاءات الـ API أو المؤقتات (timers) أو قراءة الملفات بفضل الـ Event Loop.
			</span>
			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='font-bold text-xl'>كيف تعمل JavaScript؟</h5>
				<span>
					JavaScript هي لغة غير متزامنة (non-blocking) تعتمد على نموذج يُسمى Concurrency Model. هذا النموذج يعتمد على ثلاث مكونات رئيسية:
				</span>
				<ul className='px-4'>
					<li>
						<span className='font-fold'>Call Stack (مكدس الاستدعاء):</span>المكان الذي يتم فيه تتبع تنفيذ الدوال. عندما تستدعي دالة، تُضاف
						إلى المكدس، وعندما تنتهي، تُزال منه.
					</li>
					<li>
						<span className='font-fold'>Web APIs:</span>وهي واجهات برمجية مقدمة من المتصفح (مثل setTimeout، fetch، أو DOM) تتعامل مع
						العمليات غير المتزامنة خارج المحرك الرئيسي لـ JavaScript.
					</li>
					<li>
						<span className='font-fold'>Task Queue (قائمة المهام)</span>مكان يتم فيه تخزين المهام غير المتزامنة التي أكملت تنفيذها وتنتظر
						العودة إلى المكدس.
					</li>
				</ul>
				<span className='text-muted-foreground'>الـ Event Loop هو الجسر الذي يربط بين هذه المكونات لضمان تنفيذ الكود بسلاسة.</span>
			</div>

			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='font-bold text-xl'>مكونات الـ Event Loop بالتفصيل</h5>
				<div className='flex flex-col gap-2'>
					<h6 className='font-bold'>1. Call Stack (مكدس الاستدعاء)</h6>
					<ul className='px-2'>
						<li>المكدس هو بنية بسيطة تعمل بنظام LIFO (Last In, First Out).</li>
						<li>عندما تقوم بتشغيل دالة، يتم وضعها في المكدس. إذا استدعت هذه الدالة دالة أخرى، تُضاف الدالة الجديدة أعلى المكدس.</li>
						<li>بمجرد انتهاء الدالة، تُزال من المكدس، ويعود التنفيذ إلى الدالة السابقة.</li>
					</ul>
					<CodeMirrorEditor
						value={`function foo() {
  console.log("Hello");
}
foo();`}
					/>
					<div className='flex flex-col gap-2 border border-red-300 shadow-md'>
						<ul className='px-2 list-inside'>
							<li>يتم وضع foo في المكدس.</li>
							<li>يتم تنفيذ console.log.</li>
							<li>تُزال foo من المكدس بعد الانتهاء.</li>
						</ul>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<h6 className='font-bold'>2. Web APIs</h6>
					<ul className='px-2'>
						<li>
							عندما تستخدم دالة غير متزامنة مثل setTimeout أو fetch، لا يتم تنفيذها داخل محرك JavaScript مباشرة. بدلاً من ذلك، يتم إرسالها
							إلى Web APIs التي يوفرها المتصفح.
						</li>
						<li>هذه الـ APIs تعمل في الخلفية بشكل مستقل عن الخيط الرئيسي لـ JavaScript.</li>
					</ul>
					<CodeMirrorEditor
						value={`console.log("Start");
setTimeout(() => console.log("Timeout"), 1000);
console.log("End");`}
					/>

					<div className='flex flex-col gap-2 border border-red-300 shadow-md'>
						<ul className='px-2 list-inside'>
							<li>console.log("Start") يذهب إلى المكدس ويُنفذ فورًا.</li>
							<li>setTimeout يُرسل إلى Web APIs مع مؤقت 1000 مللي ثانية، ثم يتم إزالته من المكدس فورًا (لأن دوره انتهى كاستدعاء).</li>
							<li>console.log("End") يُنفذ فورًا.</li>
							<li>بعد 1000 مللي ثانية، تنتهي مهمة setTimeout في Web APIs وتنتقل إلى Task Queue.</li>
						</ul>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<h6 className='font-bold'>3. Task Queue (قائمة المهام)</h6>
					<ul className='px-2'>
						<li>
							بمجرد أن تكمل Web APIs المهمة (مثل انتهاء المؤقت أو استجابة الـ API)، يتم وضع الدالة المرتبطة بها (Callback) في Task Queue.
						</li>
						<li>هناك نوعان رئيسيان من الـ Queues:</li>
						<ul className='px-2'>
							<li>
								<span className='font-bold'>Macro Task Queue:</span>للمهام مثل setTimeout، setInterval، وأحداث المستخدم (مثل النقر).
							</li>
							<li>
								<span className='font-bold'>Micro Task Queue:</span>للمهام ذات الأولوية العالية مثل وعود (Promises) أو process.nextTick في
								Node.js.
							</li>
						</ul>

						<li>الـ Microtasks تُنفذ قبل الـ Macrotasks حتى لو كانت في الـ Queue لاحقًا.</li>
					</ul>
					<CodeMirrorEditor value={``} />
				</div>

				<div className='flex flex-col gap-2'>
					<h6 className='font-bold'>4. Event Loop</h6>
					<ul className='px-2'>
						<li>دور الـ Event Loop هو مراقبة المكدس وقائمة المهام باستمرار.</li>
						<li>
							إذا كان المكدس فارغًا (أي لا يوجد كود متزامن يُنفذ حاليًا)، يأخذ الـ Event Loop أول مهمة من الـ Task Queue ويدفعها إلى المكدس
							لتنفيذها.
						</li>
					</ul>
					<div className='flex flex-col gap-2 border border-red-300 shadow-md'>
						<ul className='px-2 list-inside'>
							<li>بعد تنفيذ console.log("End")، يصبح المكدس فارغًا.</li>
							<li>ينتظر الـ Event Loop حتى ينتهي المؤقت (1000 مللي ثانية).</li>
							<li>عندما يصبح الـ Callback جاهزًا في الـ Task Queue، يدفعه الـ Event Loop إلى المكدس ليُنفذ (console.log("Timeout")).</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='font-bold text-xl'>تسلسل العملية خطوة بخطوة</h5>
				<ul className='px-4'>
					<li>يبدأ الكود المتزامن بتنفيذه في المكدس.</li>
					<li>أي عملية غير متزامنة تُرسل إلى Web APIs.</li>
					<li>عند اكتمال العملية في Web APIs، يتم إرسال الـ Callback إلى الـ Task Queue.</li>
					<li>يتحقق الـ Event Loop:</li>
					<ul className='px-2'>
						<li>إذا كان المكدس فارغًا، يأخذ المهمة الأولى من الـ Microtask Queue (إن وجدت) وينفذها.</li>
						<li>ثم ينتقل إلى الـ Macrotask Queue وينفذ المهمة التالية.</li>
					</ul>
					<li>تستمر الحلقة طالما هناك مهام تنتظر.</li>
				</ul>

				<CodeMirrorEditor
					value={`console.log("Start");  // 1

setTimeout(() => console.log("Timeout"), 0); //4 

Promise.resolve().then(() => console.log("Promise"));  // 3

console.log("End");  // 2
            `}
				/>

				<div className='flex flex-col gap-2 border border-red-300 shadow-md'>
					<ul className='px-2 list-inside'>
						<li>console.log("Start") يُنفذ أولاً (المكدس).</li>
						<li>setTimeout يُرسل إلى Web APIs، ويوضع الـ Callback في الـ Macrotask Queue بعد 0 مللي ثانية.</li>
						<li>Promise.resolve().then يُضاف إلى الـ Microtask Queue.</li>
						<li>console.log("End") يُنفذ (المكدس).</li>
						<li>المكدس يصبح فارغًا، فيتحقق الـ Event Loop:</li>
						<ul className='px-2'>
							<li>ينفذ الـ Microtasks أولاً (Promise).</li>
							<li>ثم ينفذ الـ Macrotasks (Timeout).</li>
						</ul>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default EventLoop;
