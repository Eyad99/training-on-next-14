import React from 'react';
import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';

interface SectionItemProps {
	title: string;
	description: string;
}

const SectionItem = ({ title, description }: SectionItemProps) => (
	<div className='flex flex-col gap-2'>
		<h3 className='font-bold text-2xl text-rtl'>{title}</h3>
		<p className='text-muted-foreground text-rtl'>{description}</p>
	</div>
);

interface CodeExampleProps {
	title: string;
	code: string;
	language?: string;
}

const CodeExample = ({ title, code, language = 'javascript' }: CodeExampleProps) => (
	<div className='flex flex-col gap-2'>
		<h4 className='font-bold text-xl text-rtl'>{title}</h4>
		<CodeMirrorEditor value={code} />
	</div>
);

interface ComparisonRowProps {
	feature: string;
	fullSyntax: string;
	shortSyntax: string;
}

const ComparisonRow = ({ feature, fullSyntax, shortSyntax }: ComparisonRowProps) => (
	<tr className='hover:bg-gray-50 transition-colors'>
		<td className='border border-gray-300 p-2 font-medium text-rtl'>{feature}</td>
		<td className='border border-gray-300 p-2 text-rtl'>{fullSyntax}</td>
		<td className='border border-gray-300 p-2 text-rtl'>{shortSyntax}</td>
	</tr>
);

const Fragment = () => {
	const comparisonRows: ComparisonRowProps[] = [
		{
			feature: 'الكتابة',
			fullSyntax: 'أطول وأكثر وضوحًا',
			shortSyntax: 'مختصرة وسريعة',
		},
		{
			feature: 'دعم المفاتيح (Keys)',
			fullSyntax: 'يدعم إضافة key للعناصر في القوائم',
			shortSyntax: 'لا يدعم key',
		},
		{
			feature: 'الاستخدام',
			fullSyntax: 'عند الحاجة إلى key (مثل القوائم)',
			shortSyntax: 'للحالات البسيطة بدون key',
		},
	];

	const withoutFragmentExample = `function MyComponent() {
  return (
    <div>
      <h1>العنوان</h1>
      <p>الوصف</p>
    </div>
  );
}`;

	const withFullFragmentExample = `import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>العنوان</h1>
      <p>الوصف</p>
    </React.Fragment>
  );
}`;

	const withShortFragmentExample = `function MyComponent() {
  return (
    <>
      <h1>العنوان</h1>
      <p>الوصف</p>
    </>
  );
}`;

	const listExample = `function ItemList() {
  const items = ["عنصر 1", "عنصر 2", "عنصر 3"];

  return (
    <>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}`;

	const listWithKeysExample = `function ItemList() {
  const items = ["عنصر 1", "عنصر 2", "عنصر 3"];

  return (
    <React.Fragment>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <h2>{item}</h2>
          <p>تفاصيل عن {item}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}`;

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<SectionItem
				title='ما هو Fragment في React؟'
				description='Fragment في React هو أداة أو طريقة تُستخدم لتجميع عدة عناصر (Elements) معًا دون الحاجة إلى إضافة عنصر إضافي في شجرة DOM (Document Object Model). بمعنى آخر، هو "غلاف غير مرئي" يسمح لك بإرجاع عدة عناصر من مكون (Component) دون إنشاء عقدة (Node) إضافية في HTML الناتج.'
			/>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>لماذا نستخدم Fragment؟</h3>
				<p className='text-muted-foreground text-rtl'>
					في React، كل مكون يجب أن يُرجع عنصرًا واحدًا فقط (Single Root Element). إذا كنت بحاجة إلى إرجاع عدة عناصر متجاورة (مثل عدة
					&lt;div&gt; أو &lt;p&gt; أو غيرها)، يمكن أن تستخدم Fragment لتجنب إضافة عنصر أب (Parent Element) غير ضروري.
				</p>
				<p className='text-muted-foreground text-rtl'>
					قبل إدخال Fragments في React (في الإصدار 16.2)، كان يتعين عليك دائمًا لف العناصر المتعددة داخل عنصر أب مثل &lt;div&gt;، مما قد
					يؤدي إلى:
				</p>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• HTML زائد غير ضروري: إضافة &lt;div&gt; إضافية قد تؤثر على التصميم أو البنية.</li>
					<li className='text-rtl'>• مشاكل التنسيق: أحيانًا لا تحتاج إلى عنصر أب في الـ DOM لأغراض الـ CSS أو الـ Semantics.</li>
					<li className='text-rtl'>• أداء أفضل: تقليل عدد العناصر في DOM يحسن الأداء بشكل طفيف.</li>
				</ul>
				<p className='text-muted-foreground text-rtl'>Fragments تحل هذه المشكلة بجعل الكود أنظف وأكثر كفاءة.</p>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>كيف يعمل Fragment؟</h3>
				<p className='text-muted-foreground text-rtl'>React يوفر طريقتين لاستخدام Fragments:</p>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• الصيغة الكاملة: باستخدام &lt;React.Fragment&gt;.</li>
					<li className='text-rtl'>• الصيغة المختصرة: باستخدام &lt;&gt;&lt;/&gt; (Syntax shorthand).</li>
				</ul>
			</div>

			<CodeExample title='مثال بدون Fragment:' code={withoutFragmentExample} />

			<CodeExample title='مثال مع Fragment (الصيغة الكاملة):' code={withFullFragmentExample} />

			<CodeExample title='مثال مع Fragment (الصيغة المختصرة):' code={withShortFragmentExample} />

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>متى نستخدم Fragment؟</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• إرجاع عناصر متعددة: عندما تحتاج إلى إرجاع أكثر من عنصر واحد من دون غلاف إضافي.</li>
					<li className='text-rtl'>• تجنب التأثير على التصميم: إذا كان إضافة &lt;div&gt; يعطل الـ CSS (مثل Flexbox أو Grid).</li>
					<li className='text-rtl'>• تحسين البنية الدلالية (Semantics): للحفاظ على HTML نظيف ومنطقي.</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>مثال عملي:</h3>
				<p className='text-muted-foreground text-rtl'>لنفترض أنك تريد عرض قائمة من العناصر:</p>
				<CodeExample title='مثال قائمة مع Fragment:' code={listExample} />
				<p className='text-muted-foreground text-rtl'>الناتج في DOM:</p>
				<pre className='bg-gray-100 p-4 rounded text-rtl'>
					{`<li>عنصر 1</li>
<li>عنصر 2</li>
<li>عنصر 3</li>`}
				</pre>
				<p className='text-muted-foreground text-rtl'>
					بدون Fragment، كنت ستضطر لإضافة &lt;div&gt; أو &lt;ul&gt;، لكن هنا لم تكن هناك حاجة لذلك إذا كان &lt;ul&gt; موجودًا في المكون
					الأب.
				</p>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>الفرق بين الصيغة الكاملة والمختصرة</h3>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse border border-gray-300'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 p-2 text-rtl'>الجانب</th>
								<th className='border border-gray-300 p-2 text-rtl'>&lt;React.Fragment&gt;</th>
								<th className='border border-gray-300 p-2 text-rtl'>&lt;&gt;&lt;/&gt;</th>
							</tr>
						</thead>
						<tbody>
							{comparisonRows.map((row, index) => (
								<ComparisonRow key={index} {...row} />
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>مثال مع مفاتيح (Keys):</h3>
				<p className='text-muted-foreground text-rtl'>عند استخدام map في قائمة، تحتاج إلى key لكل عنصر:</p>
				<CodeExample title='مثال مع مفاتيح:' code={listWithKeysExample} />
				<p className='text-muted-foreground text-rtl'>لا يمكن استخدام &lt;&gt;&lt;/&gt; هنا لأنه لا يدعم key.</p>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>فوائد Fragment</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• كود أنظف: تقليل العناصر غير الضرورية في DOM.</li>
					<li className='text-rtl'>• أداء أفضل: تقليل عدد العقد في شجرة DOM.</li>
					<li className='text-rtl'>• مرونة: يعمل مع أي نوع من العناصر دون قيود.</li>
				</ul>
			</div>
		</section>
	);
};

export default Fragment;
