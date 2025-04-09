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
	regularCookie: string;
	httpOnlyCookie: string;
}

const ComparisonRow = ({ feature, regularCookie, httpOnlyCookie }: ComparisonRowProps) => (
	<tr className='hover:bg-gray-50 transition-colors'>
		<td className='border border-gray-300 p-2 font-medium text-rtl'>{feature}</td>
		<td className='border border-gray-300 p-2 text-rtl'>{regularCookie}</td>
		<td className='border border-gray-300 p-2 text-rtl'>{httpOnlyCookie}</td>
	</tr>
);

const CookieAndHttpOnlyCookie = () => {
	const comparisonRows: ComparisonRowProps[] = [
		{
			feature: 'الوصول عبر JavaScript',
			regularCookie: 'يمكن الوصول إليها وقراءتها/تعديلها بـ document.cookie.',
			httpOnlyCookie: 'لا يمكن الوصول إليها عبر JavaScript بسبب خاصية HttpOnly.',
		},
		{
			feature: 'الأمان',
			regularCookie: 'أقل أمانًا، عرضة لهجمات XSS إذا احتوت على بيانات حساسة.',
			httpOnlyCookie: 'أكثر أمانًا، محمية من هجمات XSS.',
		},
		{
			feature: 'الاستخدام',
			regularCookie: 'لتخزين بيانات عامة مثل التفضيلات أو الإعدادات.',
			httpOnlyCookie: 'لتخزين بيانات حساسة مثل معرفات الجلسات أو التوكنات.',
		},
		{
			feature: 'طريقة التعيين',
			regularCookie: 'يمكن تعيينها من العميل أو الخادم بدون قيود إضافية.',
			httpOnlyCookie: 'يجب تعيينها من الخادم مع إضافة HttpOnly.',
		},
		{
			feature: 'مثال على الهجوم',
			regularCookie: 'إذا كان هناك XSS، يمكن للمهاجم سرقة الكوكيز.',
			httpOnlyCookie: 'حتى مع XSS، لا يمكن للمهاجم الوصول إليها.',
		},
	];

	const regularCookieExample = `document.cookie = "username=eyad; expires=Thu, 18 Dec 2025 12:00:00 UTC";
console.log(document.cookie); // يطبع: "username=eyad"`;

	const httpOnlyCookieExample = `// في Node.js (Express)
const express = require("express");
const app = express();

app.get("/set-cookie", (req, res) => {
  res.cookie("sessionID", "xyz789", {
    httpOnly: true, // تفعيل HttpOnly
    secure: true, // يُرسل فقط عبر HTTPS
    maxAge: 24 * 60 * 60 * 1000, // مدة صلاحية 24 ساعة
  });
  res.send("Cookie set!");
});

app.listen(3000);`;

	const fullExample = `res.cookie("sessionID", "xyz789", {
  httpOnly: true,
  secure: true,
  sameSite: "Strict",
});`;

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<SectionItem
				title='ما هي الكوكيز (Cookie)؟'
				description='الكوكيز هي بيانات صغيرة يرسلها الخادم (Server) إلى متصفح المستخدم، ويقوم المتصفح بتخزينها وإرسالها مرة أخرى إلى الخادم مع كل طلب لاحق. تُستخدم الكوكيز عادةً لتتبع جلسات المستخدم، تخزين تفضيلاته، أو الاحتفاظ بمعلومات مثل حالة تسجيل الدخول.'
			/>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خصائص الكوكيز العادية:</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>
						• يمكن الوصول إليها عبر JavaScript: يمكن للنصوص البرمجية في صفحة الويب قراءة الكوكيز أو تعديلها باستخدام document.cookie.
					</li>
					<li className='text-rtl'>• تُرسل مع طلبات HTTP: تُرسل تلقائيًا مع كل طلب HTTP إلى الخادم الذي أنشأها.</li>
					<li className='text-rtl'>• غير محمية افتراضيًا: إذا لم يتم تعيين خيارات أمان إضافية، يمكن أن تكون عرضة للهجمات.</li>
				</ul>
			</div>

			<CodeExample title='مثال على الكوكيز العادية:' code={regularCookieExample} />

			<SectionItem
				title='ما هي الكوكيز المحمية بـ HttpOnly (HttpOnlyCookie)؟'
				description='HttpOnlyCookie هي نوع خاص من الكوكيز يتم تعيينه مع خاصية HttpOnly، وهي علامة (flag) تُضاف إلى الكوكيز عند إنشائها بواسطة الخادم. الهدف الأساسي من هذه الخاصية هو تعزيز الأمان عن طريق منع الوصول إلى الكوكيز عبر JavaScript.'
			/>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خصائص HttpOnlyCookie:</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>
						• لا يمكن الوصول إليها عبر JavaScript: خاصية HttpOnly تمنع النصوص البرمجية (مثل تلك الموجودة في المتصفح) من قراءة أو تعديل
						الكوكيز، مما يحميها من هجمات مثل XSS (Cross-Site Scripting).
					</li>
					<li className='text-rtl'>
						• تُرسل فقط عبر HTTP/HTTPS: تُرسل تلقائيًا مع طلبات HTTP إلى الخادم، لكنها غير مرئية للكود الجانبي للعميل (Client-side code).
					</li>
					<li className='text-rtl'>
						• مصممة للأمان: تُستخدم عادةً لتخزين بيانات حساسة مثل معرفات الجلسات (Session IDs) أو الرموز المميزة (Tokens).
					</li>
				</ul>
			</div>

			<CodeExample title='مثال على HttpOnlyCookie:' code={httpOnlyCookieExample} />

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>الفرق بين الكوكيز العادية و HttpOnlyCookie</h3>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse border border-gray-300'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 p-2 text-rtl'>الجانب</th>
								<th className='border border-gray-300 p-2 text-rtl'>الكوكيز العادية (Cookie)</th>
								<th className='border border-gray-300 p-2 text-rtl'>HttpOnlyCookie</th>
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
				<h3 className='font-bold text-xl text-rtl'>شرح هجمات XSS وعلاقتها بـ HttpOnly</h3>
				<p className='text-muted-foreground text-rtl'>
					XSS (Cross-Site Scripting): هجوم يقوم فيه المهاجم بحقن نصوص برمجية ضارة في صفحة ويب يراها المستخدمون الآخرون. إذا كانت الكوكيز
					العادية تحتوي على معرف جلسة وتمت سرقتها عبر XSS (مثل alert(document.cookie) في نص ضار)، يمكن للمهاجم استخدامها لانتحال شخصية
					المستخدم. مع HttpOnlyCookie، حتى لو نجح الهجوم، لن يتمكن المهاجم من الوصول إلى الكوكيز لأنها غير متاحة لـ JavaScript.
				</p>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>متى تستخدم كل منهما؟</h3>
				<div className='flex flex-col gap-4'>
					<div>
						<h4 className='font-bold text-lg text-rtl'>الكوكيز العادية:</h4>
						<p className='text-muted-foreground text-rtl'>
							عندما تحتاج إلى الوصول إلى الكوكيز من جانب العميل (Client-side) باستخدام JavaScript.
						</p>
						<p className='text-muted-foreground text-rtl'>مثال: تخزين تفضيلات المستخدم مثل الوضع الليلي (Dark Mode) أو اللغة المفضلة.</p>
					</div>
					<div>
						<h4 className='font-bold text-lg text-rtl'>HttpOnlyCookie:</h4>
						<p className='text-muted-foreground text-rtl'>عندما تحتاج إلى حماية بيانات حساسة لا يجب أن يصل إليها العميل.</p>
						<p className='text-muted-foreground text-rtl'>مثال: معرفات الجلسات (Session IDs)، رموز المصادقة (Authentication Tokens).</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>كيفية تعيين HttpOnlyCookie؟</h3>
				<p className='text-muted-foreground text-rtl'>
					يتم تعيين خاصية HttpOnly من الخادم فقط (لا يمكن فعل ذلك من JavaScript على جانب العميل). إليك أمثلة بلغات مختلفة:
				</p>
				<CodeExample title='مثال كامل:' code={fullExample} />
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خصائص أخرى ذات صلة</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• Secure: تُضاف مع HttpOnly غالبًا لضمان إرسال الكوكيز عبر HTTPS فقط.</li>
					<li className='text-rtl'>
						• SameSite: تحدد ما إذا كان يمكن إرسال الكوكيز مع طلبات عبر المواقع (Cross-site requests). القيم: Strict, Lax, None.
					</li>
				</ul>
			</div>

			<div className='flex flex-col gap-4'>
				<h3 className='font-bold text-xl text-rtl'>خلاصة</h3>
				<ul className='flex flex-col gap-2 px-4'>
					<li className='text-rtl'>• الكوكيز العادية: بيانات يمكن الوصول إليها من JavaScript، مفيدة لتخزين بيانات غير حساسة.</li>
					<li className='text-rtl'>
						• HttpOnlyCookie: كوكيز محمية لا يمكن الوصول إليها من JavaScript، مصممة لحماية البيانات الحساسة من هجمات XSS.
					</li>
					<li className='text-rtl'>• الفرق الأساسي يكمن في الأمان وإمكانية الوصول.</li>
				</ul>
			</div>
		</section>
	);
};

export default CookieAndHttpOnlyCookie;
