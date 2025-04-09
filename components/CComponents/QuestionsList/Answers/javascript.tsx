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

interface FeatureItemProps {
	title: string;
	description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => (
	<div className='flex flex-col gap-1'>
		<h4 className='font-bold text-lg text-rtl'>{title}</h4>
		<p className='text-muted-foreground text-rtl'>{description}</p>
	</div>
);

const JavaScript = () => {
	const buttonClickExample = `// تغيير نص زر عند النقر عليه
document.getElementById("myButton").addEventListener("click", function() {
  this.textContent = "تم النقر!";
});`;

	const changeContentExample = `document.getElementById("title").innerHTML = "مرحبًا بالعالم!";`;

	const validateFormExample = `function validateForm() {
  let input = document.getElementById("username").value;
  if (input === "") {
    alert("يرجى إدخال اسم المستخدم!");
  }
}`;

	const fetchDataExample = `fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));`;

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<SectionItem
				title='ما هي JavaScript (JS)؟'
				description='JavaScript هي لغة برمجة عالية المستوى (High-level) تُستخدم بشكل رئيسي لتطوير تطبيقات الويب التفاعلية. تم إنشاؤها في عام 1995 بواسطة Brendan Eich في شركة Netscape، وكانت تُسمى في البداية "LiveScript" قبل أن يتم تغيير اسمها إلى JavaScript.'
			/>

			<div className='flex flex-col gap-4'>
				<p className='text-muted-foreground text-rtl'>
					JavaScript هي واحدة من التقنيات الأساسية الثلاثة لتطوير الويب إلى جانب HTML (للهيكلة) و CSS (للتنسيق)، ولكنها المسؤولة عن إضافة
					التفاعلية (Interactivity) إلى صفحات الويب.
				</p>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>لماذا تُستخدم JavaScript؟</h3>
				<p className='text-muted-foreground text-rtl'>
					JavaScript تُعتبر "لغة الويب" لأنها تُشغّل الجزء الديناميكي من المواقع. بدونها، ستكون صفحات الويب مجرد صفحات ثابتة. إليك بعض
					استخداماتها:
				</p>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>
						• إضافة التفاعلية: مثل النوافذ المنبثقة، الزر الذي يغير لون الصفحة، أو تحديث المحتوى دون إعادة تحميل الصفحة.
					</li>
					<li className='text-rtl'>
						• التعامل مع البيانات: إرسال واستقبال البيانات من الخوادم (مثل تعبئة نموذج أو تحميل بيانات ديناميكية).
					</li>
					<li className='text-rtl'>• التحكم في DOM: تعديل عناصر صفحة الـ HTML أثناء التنقل (مثل إضافة عنصر جديد إلى قائمة).</li>
					<li className='text-rtl'>• تطبيقات الويب الكاملة: بفضل إطار عمل مثل React أو Vue، يمكن بناء تطبيقات ويب معقدة.</li>
					<li className='text-rtl'>
						• خارج الويب: مع Node.js، أصبحت JavaScript تُستخدم لتطوير تطبيقات الخادم (Backend)، تطبيقات سطح المكتب، وحتى تطبيقات الجوال.
					</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>كيف تعمل JavaScript؟</h3>
				<p className='text-muted-foreground text-rtl'>
					JavaScript تعمل داخل المتصفح (مثل Chrome، Firefox) باستخدام محرك JavaScript (مثل V8 في Chrome). المحرك يقوم بترجمة الكود إلى
					تعليمات يفهمها الحاسوب وينفذها.
				</p>
				<CodeExample title='مثال بسيط:' code={buttonClickExample} />
				<p className='text-muted-foreground text-rtl'>هذا الكود يضيف حدثًا إلى زر في صفحة الـ HTML، وعند النقر عليه يتغير نصه.</p>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خصائص JavaScript</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<FeatureItem
						title='لغة مفسرة (Interpreted)'
						description='لا تحتاج إلى تجميع (Compilation) مثل C++، بل تُنفذ مباشرة في المتصفح أو Node.js.'
					/>
					<FeatureItem title='تعدد الاستخدامات' description='تعمل على جانب العميل (Client-side) وجانب الخادم (Server-side).' />
					<FeatureItem title='ديناميكية' description='يمكن تغيير أنواع البيانات أثناء التنفيذ (Dynamically Typed).' />
					<FeatureItem title='موجهة للأحداث (Event-driven)' description='تعتمد على التفاعل مع الأحداث مثل النقر أو الكتابة.' />
					<FeatureItem title='مفتوحة المصدر' description='متاحة مجانًا مع مجتمع كبير يدعمها.' />
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>أمثلة عملية على استخدام JavaScript</h3>

				<div className='flex flex-col gap-4'>
					<div>
						<h4 className='font-bold text-lg text-rtl'>1. تغيير محتوى صفحة:</h4>
						<CodeExample title='' code={changeContentExample} />
						<p className='text-muted-foreground text-rtl mt-2'>يغير نص عنصر في صفحة الـ HTML.</p>
					</div>

					<div>
						<h4 className='font-bold text-lg text-rtl'>2. التحقق من إدخال المستخدم:</h4>
						<CodeExample title='' code={validateFormExample} />
						<p className='text-muted-foreground text-rtl mt-2'>يتحقق مما إذا كان حقل الإدخال فارغًا.</p>
					</div>

					<div>
						<h4 className='font-bold text-lg text-rtl'>3. طلب بيانات من خادم (API):</h4>
						<CodeExample title='' code={fetchDataExample} />
						<p className='text-muted-foreground text-rtl mt-2'>يجلب بيانات من خادم ويعرضها في وحدة التحكم.</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>JavaScript خارج المتصفح</h3>
				<p className='text-muted-foreground text-rtl'>مع ظهور Node.js في عام 2009، أصبح بإمكان JavaScript العمل خارج المتصفح:</p>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• تطوير الخادم (Backend): بناء خوادم باستخدام Express.js.</li>
					<li className='text-rtl'>• تطبيقات سطح المكتب: باستخدام Electron (مثل تطبيقات VS Code وSlack).</li>
					<li className='text-rtl'>• تطبيقات الجوال: باستخدام React Native.</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>أدوات ومكتبات شائعة مع JavaScript</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• React.js: لتطوير واجهات مستخدم تفاعلية.</li>
					<li className='text-rtl'>• Node.js: لتشغيل JavaScript على الخادم.</li>
					<li className='text-rtl'>• Vue.js وAngular: إطارات عمل أخرى للواجهات.</li>
					<li className='text-rtl'>• jQuery: مكتبة قديمة لتسهيل التعامل مع DOM (أقل استخدامًا الآن).</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>لماذا JavaScript مهمة؟</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• الانتشار الواسع: تعمل على كل متصفح حديث تقريبًا.</li>
					<li className='text-rtl'>• سهولة التعلم: مناسبة للمبتدئين بسبب بساطتها النسبية.</li>
					<li className='text-rtl'>• مجتمع ضخم: يوفر مكتبات وأدوات كثيرة تساعد في التطوير.</li>
					<li className='text-rtl'>• تعدد الاستخدامات: للويب، الخوادم، الجوال، وأكثر.</li>
				</ul>
			</div>
		</section>
	);
};

export default JavaScript;
