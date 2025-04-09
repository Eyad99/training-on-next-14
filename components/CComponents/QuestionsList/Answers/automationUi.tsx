import React from 'react';

const AutomationUI = () => {
	return (
		<div className='p-6 max-w-4xl mx-auto text-rtl'>
			<div className='p-6'>
				<h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>أتمتة اختبار واجهة المستخدم (Automation UI)</h2>

				<div className='space-y-6'>
					{/* التعريف */}
					<section className='bg-blue-50 p-4 rounded-lg'>
						<h3 className='text-lg font-semibold text-blue-800 mb-2'>ما هو Automation UI؟</h3>
						<p className='text-gray-700 leading-relaxed'>
							Automation UI يعني أتمتة اختبار واجهة المستخدم (User Interface Automation)، وهو عملية استخدام أدوات أو برمجيات لتقليد تفاعل
							المستخدم مع واجهة تطبيق (مثل موقع ويب، تطبيق سطح مكتب، أو تطبيق جوال) بشكل آلي بدلاً من تنفيذ هذه الاختبارات يدويًا. الهدف هو
							التحقق من أن الواجهة تعمل كما هو متوقع (من حيث الوظائف، التصميم، والأداء) دون تدخل بشري مستمر.
						</p>
					</section>

					{/* لماذا نستخدم */}
					<section className='bg-green-50 p-4 rounded-lg'>
						<h3 className='text-lg font-semibold text-green-800 mb-2'>لماذا نستخدم Automation UI؟</h3>
						<ul className='list-disc list-inside text-gray-700 space-y-2'>
							<li>
								توفير الوقت والجهد: اختبار الواجهة يدويًا قد يستغرق ساعات، خاصة إذا كان التطبيق معقدًا أو يحتاج إلى اختبار متكرر بعد كل
								تحديث.
							</li>
							<li>الدقة: الأتمتة تقلل من الأخطاء البشرية (مثل نسيان اختبار وظيفة معينة).</li>
							<li>التكرار: يمكن تشغيل نفس الاختبارات مرات عديدة بسهولة (مثل اختبارات الانحدار - Regression Testing).</li>
							<li>التغطية الشاملة: يمكن اختبار سيناريوهات متعددة (مثل إدخال بيانات غير صحيحة) بسرعة.</li>
							<li>التكامل مع CI/CD: يمكن دمج اختبارات Automation UI في خطوط الأنابيب (Pipelines) لضمان جودة التطبيق قبل النشر.</li>
						</ul>
					</section>

					{/* كيف يعمل */}
					<section className='bg-purple-50 p-4 rounded-lg'>
						<h3 className='text-lg font-semibold text-purple-800 mb-2'>كيف يعمل Automation UI؟</h3>
						<p className='text-gray-700 mb-4'>
							يتم تنفيذ Automation UI باستخدام أدوات مخصصة تتفاعل مع عناصر واجهة المستخدم (مثل الأزرار، الحقول، القوائم) بناءً على تعليمات
							مكتوبة في نصوص برمجية. العملية تتضمن الخطوات التالية:
						</p>
						<ul className='list-disc list-inside text-gray-700 space-y-2'>
							<li>تحديد السيناريوهات: اختيار الوظائف التي تريد اختبارها (مثل تسجيل الدخول، إضافة منتج إلى السلة).</li>
							<li>كتابة النصوص البرمجية: باستخدام أداة أو لغة برمجة (مثل Selenium مع JavaScript أو Python).</li>
							<li>تشغيل الاختبارات: الأداة تتفاعل مع الواجهة كما لو كانت مستخدمًا حقيقيًا.</li>
							<li>تحليل النتائج: تقارير توضح ما إذا كانت الاختبارات ناجحة أو فاشلة.</li>
						</ul>
					</section>

					{/* الأدوات */}
					<section className='bg-yellow-50 p-4 rounded-lg'>
						<h3 className='text-lg font-semibold text-yellow-800 mb-2'>أدوات شائعة لـ Automation UI</h3>
						<div className='space-y-4'>
							<div className='bg-white p-4 rounded-md shadow-sm'>
								<h4 className='font-semibold text-gray-800 mb-2'>Cypress:</h4>
								<ul className='list-disc list-inside text-gray-700 space-y-1'>
									<li>أداة حديثة لاختبار تطبيقات الويب، تركز على تجربة المطور.</li>
									<li>سهلة الاستخدام مع JavaScript/TypeScript.</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AutomationUI;
