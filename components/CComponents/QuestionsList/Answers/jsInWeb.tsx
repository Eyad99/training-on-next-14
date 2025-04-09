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

interface UseCaseItemProps {
	title: string;
	description: string;
	code?: string;
	codeLanguage?: string;
}

const UseCaseItem = ({ title, description, code, codeLanguage = 'javascript' }: UseCaseItemProps) => (
	<div className='flex flex-col gap-2'>
		<h4 className='font-bold text-lg text-rtl'>{title}</h4>
		<p className='text-muted-foreground text-rtl'>{description}</p>
		{code && <CodeMirrorEditor value={code} />}
	</div>
);

const JsInWeb = () => {
	const changeColorExample = `<button onclick="changeColor()">غير اللون</button>
<script>
  function changeColor() {
    document.body.style.backgroundColor = "lightblue";
  }
</script>`;

	const domManipulationExample = `<ul id="myList">
  <li>عنصر 1</li>
</ul>
<button onclick="addItem()">أضف عنصر</button>
<script>
  function addItem() {
    const li = document.createElement("li");
    li.textContent = "عنصر جديد";
    document.getElementById("myList").appendChild(li);
  }
</script>`;

	const formValidationExample = `<form onsubmit="return validateForm()">
  <input type="text" id="username" placeholder="اسم المستخدم">
  <button type="submit">إرسال</button>
</form>
<script>
  function validateForm() {
    const username = document.getElementById("username").value;
    if (username === "") {
      alert("يرجى إدخال اسم المستخدم!");
      return false;
    }
    return true;
  }
</script>`;

	const fetchDataExample = `fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    document.getElementById("result").innerHTML = data[0].name;
  });`;

	const reactExample = `import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>العدد: {count}</p>
      <button onClick={() => setCount(count + 1)}>زيادة</button>
    </>
  );
}`;

	const animationExample = `const box = document.getElementById("box");
box.style.transition = "transform 1s";
box.addEventListener("click", () => {
  box.style.transform = "translateX(100px)";
});`;

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<SectionItem
				title='لماذا نستخدم JavaScript في الويب؟'
				description='JavaScript تُعتبر العمود الفقري لتطوير الويب التفاعلي. بينما يتولى HTML بناء هيكل الصفحة و CSS تنسيقها وتحسين مظهرها، فإن JavaScript تُضيف الحياة والديناميكية إلى صفحات الويب. بدونها، ستكون المواقع مجرد صفحات ثابتة غير قادرة على التفاعل مع المستخدمين بشكل فعّال.'
			/>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>الأسباب الرئيسية لاستخدام JavaScript في الويب:</h3>

				<UseCaseItem
					title='1. إضافة التفاعلية (Interactivity)'
					description='JavaScript تسمح للمواقع بالاستجابة لأفعال المستخدمين في الوقت الفعلي، مثل النقر على زر، إدخال بيانات، أو التمرير في الصفحة.'
					code={changeColorExample}
					codeLanguage='html'
				/>
				<p className='text-muted-foreground text-rtl'>بدون JavaScript، لن يحدث شيء عند النقر على الزر.</p>

				<UseCaseItem
					title='2. التعامل مع DOM (Document Object Model)'
					description='JavaScript تتيح لك تعديل محتوى الصفحة، هيكلتها، أو أنماطها ديناميكيًا أثناء تصفح المستخدم للموقع.'
					code={domManipulationExample}
					codeLanguage='html'
				/>
				<p className='text-muted-foreground text-rtl'>هذا يسمح بتحديث الصفحة دون الحاجة إلى إعادة تحميلها.</p>

				<UseCaseItem
					title='3. التحقق من البيانات (Validation)'
					description='JavaScript تُستخدم للتحقق من صحة البيانات التي يدخلها المستخدم قبل إرسالها إلى الخادم، مما يحسن تجربة المستخدم ويقلل الحمل على الخادم.'
					code={formValidationExample}
					codeLanguage='html'
				/>
				<p className='text-muted-foreground text-rtl'>بدون JavaScript، سيتعين إرسال النموذج إلى الخادم أولاً للتحقق، مما يؤخر الاستجابة.</p>

				<UseCaseItem
					title='4. التعامل مع الخوادم (Asynchronous Operations)'
					description='JavaScript تتيح للمواقع طلب البيانات من الخوادم وتحديث الصفحة دون إعادة تحميلها باستخدام تقنيات مثل AJAX أو Fetch API.'
					code={fetchDataExample}
				/>
				<p className='text-muted-foreground text-rtl'>هذا يُستخدم في مواقع مثل تويتر أو فيسبوك لتحديث المحتوى ديناميكيًا.</p>

				<UseCaseItem
					title='5. تطوير تطبيقات ويب كاملة (Single Page Applications - SPA)'
					description='بفضل أطر عمل مثل React، Vue.js، و Angular (التي تعتمد على JavaScript)، يمكن بناء تطبيقات ويب حديثة تعمل كتطبيقات سطح المكتب دون إعادة تحميل الصفحات.'
					code={reactExample}
					codeLanguage='jsx'
				/>
				<p className='text-muted-foreground text-rtl'>هذا يخلق تجربة مستخدم سلسة وتفاعلية.</p>

				<UseCaseItem
					title='6. دعم جميع المتصفحات'
					description='JavaScript مدعومة في كل متصفح حديث (Chrome، Firefox، Safari، Edge)، مما يجعلها الخيار الوحيد تقريبًا للتفاعلية على جانب العميل (Client-side).'
				/>

				<UseCaseItem
					title='7. تحسين تجربة المستخدم (UX)'
					description='إضافة تأثيرات بصرية (مثل الرسوم المتحركة)، تحميل المحتوى تدريجيًا (Lazy Loading)، وعرض رسائل فورية (مثل التنبيهات أو الإشعارات).'
					code={animationExample}
				/>

				<UseCaseItem
					title='8. إمكانية التكامل مع تقنيات أخرى'
					description='تعمل JavaScript مع HTML وCSS مباشرة، تتكامل مع أدوات الخادم مثل Node.js لتطوير تطبيقات Full-stack، وتُستخدم مع مكتبات مثل jQuery (في السابق) أو Three.js للرسومات ثلاثية الأبعاد.'
				/>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>لماذا لا يمكن الاستغناء عن JavaScript في الويب؟</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>
						• HTML وCSS وحدهما محدودان: يمكنهما إنشاء صفحات ثابتة فقط، لكنهما لا يستطيعان التعامل مع الأحداث أو البيانات الديناميكية.
					</li>
					<li className='text-rtl'>
						• البدائل قليلة: هناك محاولات مثل WebAssembly، لكن JavaScript لا تزال اللغة الأساسية للتفاعلية بسبب دعمها الواسع وسهولتها.
					</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>أمثلة على مواقع تعتمد على JavaScript</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• Google: البحث التلقائي والاقتراحات تعتمد على JS.</li>
					<li className='text-rtl'>• Facebook: تحديث الخلاصة (News Feed) دون إعادة تحميل.</li>
					<li className='text-rtl'>• YouTube: تشغيل الفيديو، التعليقات، والتوصيات.</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خلاصة: لماذا نستخدم JS في الويب؟</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• لجعل المواقع تفاعلية و ديناميكية.</li>
					<li className='text-rtl'>• لتحسين تجربة المستخدم من خلال الاستجابة الفورية.</li>
					<li className='text-rtl'>• للتعامل مع البيانات وتعديل الصفحات دون إعادة تحميل.</li>
					<li className='text-rtl'>• لبناء تطبيقات ويب حديثة باستخدام أطر عمل مثل React.</li>
					<li className='text-rtl'>• لأنها مدعومة عالميًا ومتكاملة مع تقنيات الويب الأخرى.</li>
				</ul>
				<p className='text-muted-foreground text-rtl mt-2'>
					باختصار، JavaScript هي اللغة التي تحول صفحات الويب من مجرد مستندات ثابتة إلى تطبيقات تفاعلية غنية بالمميزات.
				</p>
			</div>
		</section>
	);
};

export default JsInWeb;
