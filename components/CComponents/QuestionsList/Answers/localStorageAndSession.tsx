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

interface StorageItemProps {
	title: string;
	description: string;
	example?: string;
	language?: string;
	notes?: string[];
}

const StorageItem = ({ title, description, example, language = 'javascript', notes }: StorageItemProps) => (
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

interface ComparisonRowProps {
	aspect: string;
	localStorage: string;
	sessionStorage: string;
}

const ComparisonRow = ({ aspect, localStorage, sessionStorage }: ComparisonRowProps) => (
	<tr className='border-b'>
		<td className='p-2 text-rtl'>{aspect}</td>
		<td className='p-2 text-rtl'>{localStorage}</td>
		<td className='p-2 text-rtl'>{sessionStorage}</td>
	</tr>
);

const LocalStorageAndSession = () => {
	const localStorageExample = `// حفظ البيانات
localStorage.setItem("username", "أحمد");

// استرجاع البيانات
console.log(localStorage.getItem("username")); // أحمد

// حذف بيانات
localStorage.removeItem("username");

// مسح كل البيانات
localStorage.clear();`;

	const sessionStorageExample = `// حفظ البيانات
sessionStorage.setItem("cart", "كتاب");

// استرجاع البيانات
console.log(sessionStorage.getItem("cart")); // كتاب

// حذف بيانات
sessionStorage.removeItem("cart");

// مسح كل البيانات
sessionStorage.clear();`;

	const jsonExample = `const data = { name: "أحمد", age: 30 };
localStorage.setItem("user", JSON.stringify(data));
const retrieved = JSON.parse(localStorage.getItem("user"));
console.log(retrieved.name); // أحمد`;

	const practicalExample = `// حفظ اسم المستخدم في Local Storage
localStorage.setItem("user", "محمد");

// افتح تبويبًا جديدًا، سيظل الاسم متاحًا
console.log(localStorage.getItem("user")); // محمد

// حفظ اسم المستخدم في Session Storage
sessionStorage.setItem("user", "علي");

// افتح تبويبًا جديدًا، لن يظهر الاسم
console.log(sessionStorage.getItem("user")); // null`;

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<SectionItem
				title='ما هو Local Storage؟'
				description='Local Storage هو جزء من واجهة التخزين في الويب (Web Storage API) في المتصفح، يُستخدم لتخزين البيانات محليًا على جهاز المستخدم. البيانات المخزنة في Local Storage تظل موجودة حتى يتم حذفها يدويًا، ولا تنتهي صلاحيتها تلقائيًا.'
			/>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خصائص Local Storage:</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• الدوام: البيانات تبقى محفوظة حتى يتم مسحها يدويًا باستخدام الكود أو من إعدادات المتصفح.</li>
					<li className='text-rtl'>• السعة: عادةً 5-10 ميجابايت (حسب المتصفح).</li>
					<li className='text-rtl'>• النطاق: مشترك بين جميع علامات التبويب (Tabs) والنوافذ لنفس الموقع (Same Origin).</li>
					<li className='text-rtl'>• الوصول: يتم الوصول إليه عبر window.localStorage.</li>
				</ul>
				<CodeMirrorEditor value={localStorageExample} />
			</div>

			<SectionItem
				title='ما هو Session Storage؟'
				description='Session Storage هو أيضًا جزء من Web Storage API، لكنه يُستخدم لتخزين البيانات مؤقتًا خلال جلسة واحدة فقط (Session). الجلسة تعني علامة تبويب (Tab) واحدة في المتصفح، والبيانات تُحذف تلقائيًا عند إغلاق علامة التبويب.'
			/>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خصائص Session Storage:</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• الدوام: البيانات تستمر فقط أثناء الجلسة (حتى إغلاق علامة التبويب).</li>
					<li className='text-rtl'>• السعة: 5-10 ميجابايت (مثل Local Storage).</li>
					<li className='text-rtl'>• النطاق: خاص بعلامة تبويب واحدة فقط، ولا يُشارك بين علامات التبويب الأخرى حتى لو كانت لنفس الموقع.</li>
					<li className='text-rtl'>• الوصول: يتم الوصول إليه عبر window.sessionStorage.</li>
				</ul>
				<CodeMirrorEditor value={sessionStorageExample} />
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>الفرق بين Local Storage و Session Storage</h3>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse border'>
						<thead>
							<tr className='bg-muted'>
								<th className='p-2 text-rtl border'>الجانب</th>
								<th className='p-2 text-rtl border'>Local Storage</th>
								<th className='p-2 text-rtl border'>Session Storage</th>
							</tr>
						</thead>
						<tbody>
							<ComparisonRow
								aspect='مدة التخزين'
								localStorage='دائمة حتى يتم حذفها يدويًا.'
								sessionStorage='مؤقتة، تُحذف عند إغلاق علامة التبويب.'
							/>
							<ComparisonRow
								aspect='النطاق'
								localStorage='مشترك بين جميع علامات التبويب للموقع.'
								sessionStorage='خاص بعلامة تبويب واحدة فقط.'
							/>
							<ComparisonRow
								aspect='الاستخدام'
								localStorage='لتخزين بيانات طويلة الأمد (مثل الإعدادات).'
								sessionStorage='لتخزين بيانات مؤقتة (مثل حالة النموذج).'
							/>
							<ComparisonRow aspect='السعة' localStorage='5-10 ميجابايت (حسب المتصفح).' sessionStorage='5-10 ميجابايت (حسب المتصفح).' />
							<ComparisonRow
								aspect='الأداء عند الإغلاق'
								localStorage='البيانات تبقى بعد إغلاق المتصفح.'
								sessionStorage='البيانات تُحذف عند إغلاق التبويب.'
							/>
							<ComparisonRow aspect='الوصول' localStorage='localStorage' sessionStorage='sessionStorage' />
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>متى نستخدم كل منهما؟</h3>

				<StorageItem
					title='Local Storage:'
					description='عندما تحتاج إلى حفظ بيانات تستمر عبر الجلسات والتبويبات.'
					notes={[
						'تفضيلات المستخدم (مثل الوضع الليلي: Dark Mode).',
						'بيانات تسجيل الدخول المحلية (مثل رمز المستخدم إذا لم يكن حساسًا).',
						'حفظ تقدم اللعبة في لعبة ويب.',
					]}
				/>

				<StorageItem
					title='Session Storage:'
					description='عندما تحتاج إلى بيانات مؤقتة مرتبطة بجلسة واحدة فقط.'
					notes={[
						'تخزين بيانات نموذج أثناء تعبئته (إذا أُغلق التبويب، لا حاجة للبيانات).',
						'حالة الصفحة أثناء التنقل بين خطوات متعددة في عملية (مثل تسجيل متعدد الخطوات).',
						'سلة تسوق مؤقتة مرتبطة بعلامة تبويب واحدة.',
					]}
				/>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>مثال عملي للمقارنة</h3>
				<CodeMirrorEditor value={practicalExample} />
				<p className='text-muted-foreground text-rtl mt-2'>
					إذا أغلقت المتصفح وأعدت فتحه، سيظل "محمد" موجودًا في Local Storage، بينما يُحذف "علي" تلقائيًا من Session Storage عند إغلاق
					التبويب.
				</p>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>ملاحظات إضافية</h3>

				<StorageItem
					title='الأمان:'
					description='كلاهما غير آمن لتخزين بيانات حساسة (مثل كلمات المرور أو التوكنات) لأنهما يمكن الوصول إليهما عبر JavaScript (مثل هجمات XSS). استخدم الكوكيز مع HttpOnly لهذا الغرض.'
				/>

				<StorageItem title='التوافق:' description='كلاهما مدعوم في جميع المتصفحات الحديثة.' />

				<StorageItem
					title='النوع:'
					description='البيانات تُخزن كنصوص (Strings)، لذا تحتاج إلى تحويل الكائنات باستخدام JSON.stringify و JSON.parse.'
					example={jsonExample}
				/>

				<StorageItem
					title='الفرق مقارنةً بالكوكيز:'
					description='الفرق بين Local/Session Storage والكوكيز من حيث الاستخدام والسلوك.'
					notes={[
						'Local/Session Storage أسهل في الاستخدام من الكوكيز، لأنهما لا يتطلبان إعدادات من الخادم.',
						'الكوكيز تُرسل مع كل طلب HTTP، بينما Local و Session Storage لا تُرسل إلى الخادم تلقائيًا.',
					]}
				/>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خلاصة</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• Local Storage: للبيانات الدائمة المشتركة بين التبويبات.</li>
					<li className='text-rtl'>• Session Storage: للبيانات المؤقتة الخاصة بعلامة تبويب واحدة.</li>
					<li className='text-rtl'>• الاختيار بينهما يعتمد على مدة التخزين التي تحتاجها وسلوك التطبيق.</li>
				</ul>
			</div>
		</section>
	);
};

export default LocalStorageAndSession;
