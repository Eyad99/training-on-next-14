import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const ReactLazyAndDynamic = () => {
	return (
		<section className='flex flex-col gap-4'>
			<h4 className='font-bold text-2xl text-rtl'>React.Lazy And Dynamic</h4>
			<span className='text-muted-foreground text-rtl'>
				الفرق بين React.lazy و dynamic في Next.js يكمن في السياق، الغرض، وكيفية استخدامهما، على الرغم من أنهما يشتركان في الهدف الأساسي وهو
				تحقيق Lazy Loading (التحميل البطيء) للمكونات. دعني أوضح الفروقات بالتفصيل:
			</span>

			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='text-xl font-bold'>1. المصدر والإطار:</h5>
				<ul className='px-4 text-rtl'>
					<li className='text-red-400'>React.lazy:</li>
					<ul className='px-2'>
						<li>ميزة أصلية (native) في مكتبة React، تم تقديمها في React 16.6.</li>
						<li>تعمل في أي مشروع React بغض النظر عن إطار العمل (standalone React أو مع أطر مثل Next.js).</li>
						<li>تعتمد على JavaScript الأساسي لتحميل المكونات ديناميكيًا باستخدام import().</li>
					</ul>
					<li className='text-red-400'>dynamic في Next.js:</li>
					<ul className='px-2'>
						<li>أداة مخصصة مقدمة من Next.js (مبنية فوق React.lazy داخليًا).</li>
						<li>
							مصممة خصيصًا لتعمل ضمن بيئة Next.js، مع دعم إضافي لميزات مثل Server-Side Rendering (SSR) والتوليد الثابت (Static Generation).
						</li>
					</ul>
				</ul>
			</div>

			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='text-xl font-bold'>2. الاستخدام الأساسي:</h5>
				<ul className='px-4 text-rtl'>
					<li className='text-red-400'>React.lazy:</li>
					<ul className='px-2'>
						<li>تُستخدم لتحميل المكونات ديناميكيًا في وقت التشغيل (runtime).</li>
						<li>تتطلب دائمًا استخدام Suspense لإدارة حالة التحميل.</li>
						<li>لا تقدم خيارات إضافية مثل تعطيل SSR أو تخصيص الـ fallback بشكل مباشر.</li>
					</ul>
					<CodeMirrorEditor
						value={`
						import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<p>جاري التحميل...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
                `}
					/>
					<li className='text-red-400'>dynamic في Next.js:</li>
					<ul className='px-2'>
						<li>تُستخدم أيضًا لتحميل المكونات ديناميكيًا، لكنها توفر مزيدًا من التحكم والمرونة في سياق Next.js.</li>
						<li>تتيح خيارات مثل تعطيل SSR، تحديد عنصر التحميل (loading component)، وتكامل أفضل مع ميزات Next.js.</li>
					</ul>
					<CodeMirrorEditor
						value={`
				 import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/DynamicComponent'), {
  loading: () => <p>جاري التحميل...</p>,
  ssr: false, // تعطيل التحميل على الخادم
});

function MyPage() {
  return <DynamicComponent />;
}
                `}
					/>
				</ul>
			</div>

			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='text-xl font-bold'>3. التكامل مع Server-Side Rendering (SSR):</h5>
				<ul className='px-4 text-rtl'>
					<li className='text-red-400'>React.lazy:</li>
					<ul className='px-2'>
						<li>
							لا يدعم SSR بشكل افتراضي. إذا استخدمته في تطبيق يعتمد على التقديم من جانب الخادم، قد تواجه مشاكل لأن React.lazy يعمل فقط على
							جانب العميل (client-side).
						</li>
						<li>تحتاج إلى حلول إضافية (workarounds) إذا كنت تريد استخدامه مع SSR.</li>
					</ul>
					<li className='text-red-400'>dynamic في Next.js:</li>
					<ul className='px-2'>
						<li>مصمم ليعمل مع SSR في Next.js. يمكنك التحكم فيما إذا كنت تريد تحميل المكون على الخادم أم لا باستخدام الخيار ssr: false.</li>
						<li>إذا تم تعطيل SSR، يتم تحميل المكون فقط على جانب العميل، مما يجعله مشابهًا لـ React.lazy ولكن مع تحكم أكبر.</li>
					</ul>
				</ul>
			</div>

			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='text-xl font-bold'>4. إدارة الـ Fallback:</h5>
				<ul className='px-4 text-rtl'>
					<li className='text-red-400'>React.lazy:</li>
					<ul className='px-2'>
						<li>يعتمد على Suspense لتوفير الـ fallback (محتوى التحميل الاحتياطي).</li>
						<li>لا يمكنك تحديد الـ fallback مباشرة داخل React.lazy، بل يجب أن يتم ذلك في مكان منفصل في الشجرة (component tree).</li>
					</ul>
					<li className='text-red-400'>dynamic في Next.js:</li>
					<ul className='px-2'>
						<li>يسمح لك بتحديد الـ loading مباشرة كخيار ضمن الاستدعاء، مما يجعل الكود أكثر إيجازًا وتنظيمًا.</li>
						<li>لا يتطلب بالضرورة استخدام Suspense بشكل صريح إذا حددت loading.</li>
					</ul>
				</ul>
			</div>

			<div className='flex flex-col gap-2 text-rtl'>
				<h5 className='text-xl font-bold'>5. الأداء والتحسين:</h5>
				<ul className='px-4 text-rtl'>
					<li className='text-red-400'>React.lazy:</li>
					<ul className='px-2'>
						<li>يعتمد على المتصفح لتحميل المكونات ديناميكيًا، لكنه لا يوفر تحسينات إضافية خاصة بإطار معين.</li>
						<li>مناسب للمشاريع البسيطة أو التي لا تستخدم Next.js.</li>
					</ul>
					<li className='text-red-400'>dynamic في Next.js:</li>
					<ul className='px-2'>
						<li>
							يستفيد من تحسينات Next.js مثل تقسيم التعليمات البرمجية (code splitting) التلقائي وتحسين الأداء في سياق التوجيه (routing) وبيئة
							الإنتاج.
						</li>
						<li>يتكامل مع ميزات Next.js الأخرى مثل prefetching والتحميل المسبق.</li>
					</ul>
				</ul>
			</div>

			<div className='flex flex-col gap-2 text-rtl'>
				<table>
					<thead>
						<tr>
							<th>الميزة</th>
							<th>React.lazy</th>
							<th>dynamic في Next.js</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>المصدر</td>
							<td>React أصلي</td>
							<td>Next.js مخصص</td>
						</tr>
						<tr>
							<td>دعم SSR</td>
							<td>لا يدعم افتراضيًا</td>
							<td>نعم (مع تحكم ssr: false)</td>
						</tr>
						<tr>
							<td>إدارة Fallback</td>
							<td>عبر Suspense</td>
							<td>عبر loading أو Suspense</td>
						</tr>
						<tr>
							<td>المرونة</td>
							<td>أقل مرونة</td>
							<td>أكثر مرونة</td>
						</tr>
						<tr>
							<td>الاستخدام المثالي</td>
							<td>مشاريع React عامة</td>
							<td>مشاريع Next.js</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ReactLazyAndDynamic;
