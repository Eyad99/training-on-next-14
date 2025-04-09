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

interface KeywordItemProps {
	title: string;
	description: string;
	example?: string;
	language?: string;
	notes?: string[];
}

const KeywordItem = ({ title, description, example, language = 'javascript', notes }: KeywordItemProps) => (
	<div className='flex flex-col gap-2'>
		<h4 className='font-bold text-lg text-rtl'>{title}</h4>
		<p className='text-muted-foreground text-rtl'>{description}</p>
		{example && <CodeMirrorEditor value={example} />}
		{notes && notes.length > 0 && (
			<ul className='flex flex-col gap-1 px-4'>
				{notes.map((note, index) => (
					<li key={index} className='text-muted-foreground text-rtl'>
						• {note}
					</li>
				))}
			</ul>
		)}
	</div>
);

const JsKeywords = () => {
	const varLetConstExample = `var name = "أحمد"; // قديم
let age = 25; // قابل للتغيير
const city = "القاهرة"; // ثابت
age = 26; // مسموح
// city = "الرياض"; // خطأ`;

	const functionExample = `function sayHello(name) {
  return \`مرحبًا \${name}\`;
}
console.log(sayHello("علي")); // مرحبًا علي`;

	const returnExample = `function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5`;

	const ifElseExample = `let number = 10;
if (number > 0) {
  console.log("موجب");
} else if (number === 0) {
  console.log("صفر");
} else {
  console.log("سالب");
}`;

	const switchExample = `let day = 1;
switch (day) {
  case 1:
    console.log("الإثنين");
    break;
  case 2:
    console.log("الثلاثاء");
    break;
  default:
    console.log("يوم غير معروف");
}`;

	const loopsExample = `// for
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// while
let j = 0;
while (j < 3) {
  console.log(j); // 0, 1, 2
  j++;
}

// do...while
let k = 0;
do {
  console.log(k); // 0, 1, 2
  k++;
} while (k < 3);`;

	const breakContinueExample = `for (let i = 0; i < 5; i++) {
  if (i === 3) break; // تتوقف عند 3
  console.log(i); // 0, 1, 2
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // تتخطى 2
  console.log(i); // 0, 1, 3, 4
}`;

	const tryCatchExample = `try {
  let result = 10 / 0;
  if (!isFinite(result)) throw "خطأ في القسمة";
} catch (error) {
  console.log(error); // خطأ في القسمة
} finally {
  console.log("تم التنفيذ"); // ينفذ دائمًا
}`;

	const classExample = `class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  bark() {
    return \`\${this.name} ينبح\`;
  }
}
const dog = new Dog("كلب");
console.log(dog.bark()); // كلب ينبح`;

	const newExample = `const date = new Date();
console.log(date); // التاريخ الحالي`;

	const thisExample = `const person = {
  name: "محمد",
  sayName: function() {
    return this.name;
  },
};
console.log(person.sayName()); // محمد`;

	const asyncAwaitExample = `async function fetchData() {
  const response = await fetch("https://api.example.com");
  const data = await response.json();
  console.log(data);
}
fetchData();`;

	const importExportExample = `// module.js
export const greet = () => "مرحبًا";

// main.js
import { greet } from "./module.js";
console.log(greet()); // مرحبًا`;

	const typeValuesExample = `let isActive = true;
let nothing = null;
let notDefined;
console.log(isActive, nothing, notDefined); // true, null, undefined`;

	const typeCheckExample = `console.log(typeof "نص"); // string
console.log([] instanceof Array); // true`;

	const reservedWordsExample = `let if = 5; // خطأ`;

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<SectionItem
				title='ما هي الكلمات المفتاحية في JavaScript؟'
				description='الكلمات المفتاحية في JavaScript هي كلمات لها وظائف محددة داخل اللغة، تُستخدم للتحكم في تدفق الكود، تعريف المتغيرات، إنشاء الكائنات، أو إدارة الأخطاء. تم تحديدها منذ بداية اللغة وتتطور مع إصدارات ECMAScript (مثل ES6 وما بعدها).'
			/>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>قائمة الكلمات المفتاحية الشائعة في JavaScript وشرحها</h3>

				<KeywordItem
					title='1. var, let, const'
					description='التعريف: تُستخدم لتعريف المتغيرات. الفرق: var: تعريف متغير قديم، له نطاق عام أو دالة (Function Scope)، ويمكن إعادة تعريفه. let: تعريف متغير بنطاق كتلة (Block Scope)، يمكن تغيير قيمته. const: تعريف ثابت بنطاق كتلة، لا يمكن تغيير قيمته المباشرة (لكن يمكن تعديل خصائص الكائنات داخله).'
					example={varLetConstExample}
				/>

				<KeywordItem title='2. function' description='التعريف: تُستخدم لإنشاء دالة.' example={functionExample} />

				<KeywordItem title='3. return' description='التعريف: تُرجع قيمة من الدالة وتنهي تنفيذها.' example={returnExample} />

				<KeywordItem title='4. if, else, else if' description='التعريف: تُستخدم للتحكم في التدفق الشرطي.' example={ifElseExample} />

				<KeywordItem
					title='5. switch, case, break, default'
					description='التعريف: تُستخدم للتحكم في التدفق بناءً على قيم متعددة.'
					example={switchExample}
				/>

				<KeywordItem title='6. for, while, do' description='التعريف: تُستخدم للحلقات التكرارية.' example={loopsExample} />

				<KeywordItem
					title='7. break, continue'
					description='التعريف: break: توقف الحلقة أو الـ switch. continue: تتخطى التكرار الحالي وتنتقل للتالي.'
					example={breakContinueExample}
				/>

				<KeywordItem title='8. try, catch, finally, throw' description='التعريف: تُستخدم لإدارة الأخطاء.' example={tryCatchExample} />

				<KeywordItem title='9. class, extends, super' description='التعريف: تُستخدم للبرمجة الكائنية (OOP).' example={classExample} />

				<KeywordItem title='10. new' description='التعريف: تُنشئ مثيلًا جديدًا من كائن أو فئة.' example={newExample} />

				<KeywordItem title='11. this' description='التعريف: تشير إلى الكائن الحالي.' example={thisExample} />

				<KeywordItem
					title='12. async, await'
					description='التعريف: تُستخدم للتعامل مع العمليات غير المتزامنة (Asynchronous).'
					example={asyncAwaitExample}
				/>

				<KeywordItem
					title='13. import, export'
					description='التعريف: تُستخدم لاستيراد وتصدير الوحدات (Modules).'
					example={importExportExample}
				/>

				<KeywordItem title='14. true, false, null, undefined' description='التعريف: قيم منطقية أو خاصة.' example={typeValuesExample} />

				<KeywordItem title='15. typeof, instanceof' description='التعريف: تُستخدم للتحقق من الأنواع.' example={typeCheckExample} />
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>كلمات محجوزة أخرى</h3>
				<p className='text-muted-foreground text-rtl'>هناك كلمات أخرى محجوزة لأغراض مستقبلية أو خاصة، مثل:</p>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• debugger: للتوقف عند نقطة في الكود للتصحيح.</li>
					<li className='text-rtl'>• delete: لحذف خاصية من كائن.</li>
					<li className='text-rtl'>• in: للتحقق من وجود خاصية في كائن.</li>
					<li className='text-rtl'>• with: (غير مستحسن استخدامها).</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>ملاحظات</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• الكلمات المفتاحية حساسة لحالة الأحرف (Case-sensitive)، أي أن If ليست مثل if.</li>
					<li className='text-rtl'>• لا يمكن استخدامها كأسماء متغيرات:</li>
				</ul>
				<CodeMirrorEditor value={reservedWordsExample} />
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خلاصة</h3>
				<p className='text-muted-foreground text-rtl'>
					الكلمات المفتاحية في JavaScript هي الأدوات الأساسية التي تُشكل بنية الكود وتتحكم في سلوكه. من تعريف المتغيرات (let, const) إلى
					الحلقات (for, while) والدوال (function) وإدارة الأخطاء (try, catch)، كل كلمة لها دورها الخاص.
				</p>
			</div>
		</section>
	);
};

export default JsKeywords;
