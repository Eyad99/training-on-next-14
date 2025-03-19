import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const Suspense = () => {
	return (
		<section className='flex flex-col gap-4'>
			<h1 className='text-3xl font-bold'>Suspense </h1>
			<span className='text-muted-foreground text-rtl'>
				Suspense هي آلية في React تتيح لك "تعليق" عرض مكون معين حتى يكتمل تحميل شيء ما (مثل مكون ديناميكي أو بيانات من API)، وخلال هذه
				الفترة يتم عرض محتوى احتياطي (fallback) مثل رسالة "جاري التحميل..." أو مؤشر تحميل.
			</span>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'> كيف تعمل؟ </h4>
				<ul className='px-4'>
					<li>يتم استخدام مكون Suspense كغلاف (wrapper) حول المكونات التي تعتمد على تحميل غير متزامن.</li>
					<li>يتم تحديد المحتوى الاحتياطي باستخدام الخاصية fallback.</li>
				</ul>

				<CodeMirrorEditor
					value={`import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>مرحبًا</h1>
      <Suspense fallback={<p>جاري التحميل...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
                `}
				/>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'> العلاقة بين Suspense وLazy Loading: </h4>
				<ul className='px-4'>
					<li>React.lazy: هو الجزء الذي ينفذ Lazy Loading فعليًا، حيث يؤخر تحميل المكون حتى يتم استدعاؤه.</li>
					<li>Suspense: يدير تجربة الانتظار أثناء تحميل هذا المكون، مما يجعل العملية أكثر سلاسة من الناحية البصرية والوظيفية.</li>
				</ul>
				<span>
					بدون Suspense، إذا حاولت تحميل مكون باستخدام React.lazy دون غلاف مناسب، قد يتسبب ذلك في أخطاء أو تجربة مستخدم سيئة (مثل شاشة فارغة
					أثناء التحميل). Suspense تحل هذه المشكلة.
				</span>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'> تأثير Suspense على Lazy Loading: </h4>
				<ul className='px-4 list-inside'>
					<li>تحسين تجربة المستخدم:</li>
					<ul className='px-2'>
						<li>
							بدلاً من ترك المستخدم يواجه تأخيرًا غير واضح، يتم عرض محتوى احتياطي واضح (مثل "Loading...")، مما يعطي إشارة بأن شيئًا ما يتم
							تحميله.
						</li>
						<li>
							مثال: في موقع كبير، إذا كان هناك قسم ثقيل (مثل رسم بياني تفاعلي)، يمكن لـ Suspense إظهار رسالة تحميل بدلاً من شاشة بيضاء.
						</li>
					</ul>
					<li>تبسيط إدارة الحالة:</li>
					<span className='px-2'>
						Suspense تجعل من السهل التعامل مع المكونات غير المتزامنة دون الحاجة إلى كتابة منطق معقد للتحميل اليدوي (مثل حالات isLoading في
						الحالة التقليدية).
					</span>

					<li>التكامل مع Next.js:</li>
					<span className='px-2'>
						{' '}
						في Next.js، عند استخدام next/dynamic (الذي يعتمد داخليًا على React.lazy)، يمكنك دمج Suspense لتحديد الـ loading fallback بطريقة
						مشابهة.
					</span>

					<CodeMirrorEditor
						value={`import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicComponent = dynamic(() => import('../components/DynamicComponent'));

function MyPage() {
  return (
    <div>
      <h1>صفحتي</h1>
      <Suspense fallback={<p>جاري التحميل...</p>}>
        <DynamicComponent />
      </Suspense>
      </div>
      );
      }
      
      export default MyPage;`}
					/>

					<li> دعم تحميل البيانات (Data Fetching): </li>
					<span className='px-2'>
						Suspense ليست مقتصرة على المكونات فقط. في الإصدارات الحديثة من React (مثل React 18)، يمكن استخدامها مع مكتبات مثل Relay أو
						مكتبات إدارة البيانات لتعليق التقديم حتى تكتمل جلب البيانات، مما يعزز Lazy Loading على مستوى أعمق.
					</span>
				</ul>
			</div>
		</section>
	);
};

export default Suspense;
