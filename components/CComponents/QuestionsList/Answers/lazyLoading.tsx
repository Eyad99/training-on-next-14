import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const LazyLoading = () => {
	return (
		<section className='flex flex-col gap-4'>
			<h1 className='text-3xl font-bold'>Lazy Loading</h1>
			<span className='text-muted-foreground text-rtl'>
				التحميل الكسول (Lazy Loading) هو تقنية لتحميل المحتوى أو الموارد فقط عند الحاجة إليها، بدلاً من تحميلها عند تحميل الصفحة بالكامل.
				يهدف ذلك إلى تحسين أداء الموقع أو التطبيق، خاصة من حيث سرعة التحميل وتقليل استهلاك البيانات.
			</span>
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'>كيف يعمل Lazy Loading؟</h4>
				<ul className='px-4'>
					<li>
						تحديد العناصر المؤجلة: يتم وضع علامات على العناصر (مثل الصور) في كود HTML باستخدام خصائص مثل loading="lazy" (مدعومة في المتصفحات
						الحديثة) أو باستخدام مكتبات JavaScript.
					</li>
					<li>
						مراقبة التمرير: عندما يقترب المستخدم من العنصر أثناء التمرير (أي عندما يصبح العنصر قريبًا من منطقة العرض "viewport")، يتم تحميله
						تلقائيًا.
					</li>
					<li>استبدال مؤقت: في بعض الأحيان، يتم عرض عنصر نائب (placeholder) مثل صورة رمادية أو رمز تحميل حتى يتم جلب المحتوى الحقيقي.</li>
				</ul>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'>فوائد Lazy Loading:</h4>
				<ul className='px-4'>
					<li>تسريع تحميل الصفحة: لأن الموارد غير الضرورية لا تُحمّل في البداية.</li>
					<li>تسريع تحميل الصفحة: لأن الموارد غير الضرورية لا تُحمّل في البداية.</li>
					<li>تحسين تجربة المستخدم: الصفحة تظهر بشكل أسرع، مما يقلل من وقت الانتظار.</li>
					<li>تقليل الحمل على الخادم: يتم طلب الموارد فقط عند الحاجة.</li>
				</ul>
			</div>

			<div className='flex flex-col gap-2 '>
				<div className='flex flex-col  '>
					<h4 className='font-bold text-2xl text-rtl'>1. Lazy Loading للمكونات (Dynamic Imports):</h4>
					<span className='text-muted-foreground text-rtl'>
						Next.js يدعم التحميل الديناميكي للمكونات باستخدام دالة dynamic المدمجة، وهي تعتمد على مفهوم Lazy Loading. هذا يعني أنك تستطيع
						تحميل مكون معين فقط عند الحاجة إليه بدلاً من تضمينه في الحزمة الأولية (bundle).
					</span>
					<CodeMirrorEditor
						value={`import dynamic from 'next/dynamic';

// تحميل المكون بشكل ديناميكي
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>جاري التحميل...</p>, // عنصر نائب أثناء التحميل
  ssr: false, // تعطيل التحميل على الخادم (اختياري)
});

function MyPage() {
  return (
    <div>
      <h1>صفحتي</h1>
      <HeavyComponent />
    </div>
  );
}

export default MyPage;`}
					/>
				</div>

				<div className='flex flex-col text-rtl'>
					<h4 className='font-bold text-2xl'>2. Lazy Loading للصور (Next.js Image Component):</h4>
					<span className='text-muted-foreground text-rtl'>
						Next.js يوفر مكون الذي يدعم Lazy Loading بشكل افتراضي. هذا المكون يستخدم الخاصية loading="lazy" المدعومة في HTML لتأجيل تحميل
						الصور حتى تقترب من منطقة العرض.
					</span>
				</div>

				<div className='flex flex-col text-rtl'>
					<h4 className='font-bold text-2xl'>3. Lazy Loading للصفحات (التحميل التلقائي للتعليمات البرمجية):</h4>
					<span className='text-muted-foreground text-rtl'>
						Next.js يعتمد على تقسيم التعليمات البرمجية (Code Splitting) بشكل تلقائي عند استخدام نظام التوجيه (Routing). كل صفحة في مجلد
						pages يتم تحميلها فقط عندما ينتقل المستخدم إليها.
					</span>
				</div>

				<div className='flex flex-col text-rtl'>
					<h4 className='font-bold text-2xl'>4. التأثير على الأداء وتجربة المستخدم في Next.js:</h4>
					<ul className='px-4'>
						<li>تسريع التحميل الأولي (First Contentful Paint): بفضل تحميل المحتوى حسب الحاجة.</li>
						<li>تحسين Lighthouse Score: لأن Lazy Loading يقلل من الموارد المحملة غير الضرورية.</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default LazyLoading;
