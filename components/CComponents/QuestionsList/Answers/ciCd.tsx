import React from 'react';

const CiCd = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>CI & CD</h4>
				<span className='text-muted-foreground text-rtl'>
					CI/CD هو اختصار لـ Continuous Integration (التكامل المستمر) و Continuous Delivery أو Continuous Deployment (التسليم المستمر أو
					النشر المستمر). هذه ممارسات تُستخدم في تطوير البرمجيات لتحسين جودة الكود وتسريع عملية إطلاق البرامج أو التطبيقات.
				</span>
				<ul className='px-6 text-rtl'>
					<li className='font-bold list-none'>1. التكامل المستمر (Continuous Integration - CI): </li>
					<li>
						الفكرة الأساسية هنا هي أن المطورين يدمجون التغييرات التي يجرونها على الكود بشكل متكرر (ربما يوميًا أو عدة مرات في اليوم) في
						مستودع مركزي مشترك (مثل GitHub أو GitLab).
					</li>
					<li>
						بعد كل دمج، يتم تشغيل اختبارات تلقائية (مثل اختبارات الوحدة أو اختبارات الأداء) للتأكد من أن الكود الجديد لا يسبب أخطاء أو يعطل
						البرنامج.
					</li>
					<li>الهدف: اكتشاف المشاكل مبكرًا وتقليل التعارضات بين التغييرات التي يقوم بها عدة مطورين.</li>

					<li className='font-bold list-none text-rtl'>2. التسليم المستمر (Continuous Delivery - CD): </li>
					<li>هذه الخطوة تأتي بعد التكامل المستمر. بعد اجتياز الكود للاختبارات، يتم تحضيره ليصبح جاهزًا للنشر (Deployment) في أي وقت.</li>
					<li>
						في التسليم المستمر، يتم تحديث الكود في بيئة الإنتاج بشكل يدوي، أي أن المطور أو الفريق يقرر متى يتم إطلاق التحديث للمستخدمين.
					</li>
						
					<li className='font-bold list-none text-rtl'>3. النشر المستمر (Continuous Deployment - CD): </li>
					<li>هذا يشبه التسليم المستمر، لكن النشر يحدث بشكل تلقائي تمامًا دون تدخل يدوي، بشرط أن يجتاز الكود جميع الاختبارات.</li>
					<li>بمعنى آخر، كل تغيير صغير يتم دمجه ويجتاز الاختبارات يذهب مباشرة إلى المستخدمين.</li>
				</ul>

				<div className='flex flex-col text-rtl'>
					<h6 className='font-bold text-xl'>لماذا CI/CD مهم؟</h6>
					<span>تسريع التطوير: بدلاً من الانتظار أسابيع أو أشهر لإطلاق تحديث، يمكن إصدار التغييرات بسرعة.</span>
					<span>تحسين الجودة: الاختبارات التلقائية تكتشف الأخطاء مبكرًا.</span>
					<span>تقليل المخاطر: التغييرات الصغيرة والمتكررة أسهل في الإدارة من التغييرات الكبيرة.</span>
					<span>تعاون أفضل: الفرق تعمل معًا بسلاسة أكبر.</span>
				</div>
			</div>
		</section>
	);
};

export default CiCd;
