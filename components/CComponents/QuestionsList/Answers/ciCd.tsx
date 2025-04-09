import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
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

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>ما هو Pipeline؟</h4>
				<span className='text-muted-foreground text-rtl'>
					Pipeline (خط الأنابيب) هو سلسلة من الخطوات الآلية التي يتم تنفيذها في عملية CI/CD. يُعتبر الـ Pipeline هو "التطبيق العملي" لمفهوم
					CI/CD.
				</span>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>مكونات Pipeline النموذجية</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>Build:</strong> بناء التطبيق (مثل تجميع الكود أو إنشاء صورة Docker)
					</li>
					<li>
						<strong>Test:</strong> تشغيل الاختبارات (وحدة، تكامل، أداء)
					</li>
					<li>
						<strong>Deploy:</strong> نشر التطبيق إلى بيئة (مثل خادم أو سحابة)
					</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>مثال على Pipeline بسيط</h4>
				<span className='text-muted-foreground text-rtl'>عندما ترفع كودًا إلى GitHub:</span>
				<ul className='list-decimal pr-6 text-rtl'>
					<li>يتم بناء التطبيق</li>
					<li>تُشغّل الاختبارات</li>
					<li>إذا نجحت، يُنشر التطبيق إلى خادم</li>
				</ul>

				<div className='mt-4'>
					<h5 className='font-bold text-xl text-rtl'>مثال على GitHub Actions Pipeline</h5>
					<CodeMirrorEditor
						value={`name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    # Build
    - name: Build Application
      run: |
        npm install
        npm run build
        
    # Test
    - name: Run Tests
      run: npm test
        
    # Deploy (if tests pass)
    - name: Deploy
      if: success()
      run: |
        echo "Deploying application..."
        # أوامر النشر الخاصة بك هنا`}
					/>
				</div>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>أدوات شائعة لإنشاء Pipelines</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>GitHub Actions:</strong> مدمج مباشرة مع GitHub، سهل الاستخدام
					</li>
					<li>
						<strong>Jenkins:</strong> منصة مفتوحة المصدر، مرنة وقوية
					</li>
					<li>
						<strong>GitLab CI/CD:</strong> مدمج مع GitLab، يوفر حلاً متكاملاً
					</li>
					<li>
						<strong>CircleCI:</strong> سحابي، سهل الإعداد والاستخدام
					</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>فوائد استخدام Pipelines</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>الأتمتة:</strong> تقليل الأخطاء البشرية وتوفير الوقت
					</li>
					<li>
						<strong>التناسق:</strong> ضمان تنفيذ نفس الخطوات في كل مرة
					</li>
					<li>
						<strong>السرعة:</strong> تسريع عملية التطوير والنشر
					</li>
					<li>
						<strong>الموثوقية:</strong> اكتشاف المشاكل مبكراً قبل الوصول إلى الإنتاج
					</li>
				</ul>
			</div>
		</section>
	);
};

export default CiCd;
