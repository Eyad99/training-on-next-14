import React from 'react';

const Hydration = () => {
	return (
		<section className='flex flex-col gap-4'>
			<h4 className='font-bold text-3xl'>Hydration</h4>
			<div className='flex flex-col gap-4'>
				<span className='text-muted-foreground text-rtl'>
					Hydration هو عملية إضافة الوظائف التفاعلية (Interactivity) إلى HTML الذي تم توليده مسبقًا على الخادم (Server) أو تم توليده كصفحات
					ثابتة (Static). عندما يتم عرض صفحة ويب باستخدام SSR أو SSG، يتم إرسال HTML جاهز إلى المتصفح، لكن هذا الـ HTML يكون ساكنًا (Static)
					وغير تفاعلي. الهدف من Hydration هو ربط هذا الـ HTML بالـ JavaScript المرتبط به (مثل React Components)، مما يتيح للصفحة الاستجابة
					للتفاعلات مثل النقر، إدخال البيانات، أو تحديث المحتوى ديناميكيًا.
				</span>
				<span className='text-muted-foreground text-rtl'>
					بمعنى آخر، Hydration هو الخطوة التي تحول الصفحة من حالة "ساكنة" (مثل صفحة HTML عادية) إلى حالة "تفاعلية" (Interactive) عن طريق
					تهيئة الـ Virtual DOM الخاص بـ React وتفعيل الحدث المستمعين (Event Listeners) والوظائف الأخرى.
				</span>
			</div>
			<div className='flex flex-col gap-4'>
				<h5 className='font-bold text-2xl text-rtl'>كيف يعمل Hydration؟</h5>
				<ul className='text-rtl px-4'>
					<li>توليد الـ HTML على الخادم: عندما يقوم المستخدم بطلب صفحة، يولد الخادم الـ HTML الأساسي باستخدام المكونات (Components).</li>
					<li>إرسال الصفحة إلى المتصفح: يتم إرسال هذا الـ HTML مع الـ CSS إلى المتصفح.</li>
					<li>تنفيذ JavaScript: يقوم المتصفح بتنفيذ JavaScript المدمج (مثل React)، ويتم "ترطيب" الصفحة عن طريق:</li>
					<ul className='text-rtl list-decimal px-4'>
						<li>مقارنة الـ Virtual DOM (الذي يتم إنشاؤه من JavaScript) بالـ HTML الموجود فعليًا.</li>
						<li>إضافة التفاعلية (مثل Event Listeners) دون إعادة بناء الصفحة من الصفر.</li>
					</ul>
					<li>النتيجة: تصبح الصفحة جاهزة للتفاعل مع المستخدم بسرعة دون انتظار إعادة تحميل المحتوى.</li>
				</ul>
			</div>
			<div className='flex flex-col gap-4'>
				<h5 className='font-bold text-2xl text-rtl'>Hydration في Next.js</h5>
				<span className='text-muted-foreground text-rtl'>
					Next.js هو إطار عمل يعتمد على React، ويدعم أنماط الـ Rendering المختلفة مثل SSR، SSG، وClient-Side Rendering (CSR). يلعب Hydration
					دورًا حاسمًا في تحسين تجربة المستخدم عند استخدام SSR أو SSG.
				</span>

				<div className='flex flex-col gap-4'>
					<h5 className='font-bold text-2xl text-rtl'>كيف يتم تطبيق Hydration في Next.js؟</h5>
					<ul className='text-rtl px-4'>
						<li>عندما تستخدم getServerSideProps (لـ SSR) أو getStaticProps (لـ SSG)، يولد Next.js HTML ساكنًا على الخادم.</li>
						<li>بعد تحميل الصفحة في المتصفح، يقوم Next.js تلقائيًا بتحميل JavaScript الخاص بالتطبيق (Bundle) ويبدأ عملية Hydration.</li>
						<li>
							أثناء Hydration، يقوم React بفحص الـ HTML الذي تم إنشاؤه على الخادم ويربطه بالـ JavaScript الموجود محليًا، مما يجعل المكونات
							تفاعلية.
						</li>
						<li>يتم ذلك بسرعة لضمان أن المستخدم لا ينتظر وقتًا طويلاً ليصبح التطبيق قابلًا للتفاعل.</li>
					</ul>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h5 className='font-bold text-2xl text-rtl'>Hydration ضمن Render Patterns في Next.js</h5>
				<span className='text-muted-foreground text-rtl'>Hydration يُستخدم بشكل رئيسي في أنماط الـ Rendering التالية في Next.js:</span>
				<ul className='text-rtl px-4 list-inside'>
					<li className='font-semibold'>Server-Side Rendering (SSR):</li>
					<ul className='text-rtl px-4'>
						<li>يتم استخدام no-store لتوليد الصفحة في كل طلب.</li>
						<li>Hydration يحدث بعد تحميل الصفحة لتفعيل التفاعلية.</li>
					</ul>
					<li className='font-semibold'>Static Site Generation (SSG):</li>
					<ul className='text-rtl px-4'>
						<li>لا يم استخدام شيء اذا ان الصفحة هي static لتوليد صفحا ثابتة أثناء عمية ال [build time]</li>
						<li>Hydration يحدث عند تحميل الصفحة في المتصفح لجعلها تفاعلية.</li>
					</ul>
					<li className='font-semibold'>Client-Side Rendering (CSR):</li>
					<ul className='text-rtl px-4'>
						<li>
							في حالات CSR (مثل استخدام useEffect لجلب البيانات)، لا يُستخدم Hydration بشكل مباشر لأن الصفحة تبدأ فارغة وتعتمد على
							JavaScript لتوليد المحتوى.
						</li>
						<li>ومع ذلك، إذا تم دمج SSR أو SSG مع CSR، يمكن أن يحدث Hydration لربط المحتوى المُولد مسبقًا.</li>
					</ul>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h5 className='font-bold text-2xl text-rtl'>مزايا Hydration في Next.js</h5>
				<ul className='text-rtl px-4 '>
					<li>تحسين SEO: بفضل SSR وSSG، يتم تحميل المحتوى مباشرة، مما يجعله مرئيًا لمحركات البحث.</li>
					<li>أداء أفضل: يقلل من وقت التحميل الأولي مقارنة بـ CSR.</li>
					<li>تجربة مستخدم سلسة: التفاعلية تُضاف بسرعة دون إعادة تحميل الصفحة.</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h5 className='font-bold text-2xl text-rtl'>الخلاصة</h5>
				<span className='text-muted-foreground text-rtl'>
					{' '}
					Hydration في Next.js هو الجسر بين الـ HTML الساكن المولد على الخادم والتطبيق التفاعلي في المتصفح. يُستخدم بشكل رئيسي في SSR وSSG،
					حيث يضمن تحميلًا سريعًا وتجربة مستخدم سلسة. مع تحسينات مثل Partial Hydration، أصبحت عملية Hydration أكثر مرونة وكفاءة. إذا كنت
					بحاجة إلى تفاصيل إضافية أو أمثلة عملية أخرى، لا تتردد في السؤال!
				</span>
			</div>
		</section>
	);
};

export default Hydration;
