import React from 'react';

const WebSafty = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>CSRF (Cross-Site Request Forgery)</h4>
				<span className='text-muted-foreground text-rtl'>
					هجوم يهدف إلى استغلال مصادقة المستخدم (Authentication) لتمرير طلبات ضارة إلى الخادم دون علم المستخدم.
				</span>
				<ul className='text-rtl list-none'>
					<li className='list-none font-bold'>الحماية</li>
					<li>استخدام رموز CSRF Tokens في النماذج.</li>
					<li>التحقق من مصدر الطلب (Origin).</li>
					<li>استخدام نفس الموقع (SameSite) لملفات تعريف الارتباط (Cookies).</li>
				</ul>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>CORS (Cross-Origin Resource Sharing)</h4>
				<span className='text-muted-foreground text-rtl'>
					آلية أمان في المتصفح تهدف إلى التحكم في كيفية مشاركة الموارد بين المواقع (Cross-Origin).
				</span>
				<ul className='text-rtl list-none'>
					<li className='list-none font-bold'>الحماية</li>
					<li>إعداد الخادم للسماح بالنطاقات الموثوقة فقط باستخدام رؤوس CORS.</li>
					<li>تحديد الأساليب (Methods) والمصادر (Origins) المسموح بها بعناية.</li>
				</ul>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>XSS (Cross-Site Scripting)</h4>
				<span className='text-muted-foreground text-rtl'>
					هجوم يستهدف إدخال سكريبتات ضارة في صفحات الويب، ليتم تنفيذها عند زيارة المستخدم للصفحة.
				</span>
				<ul className='text-rtl list-none'>
					<li className='list-none font-bold'>كيف يعمل</li>
					<li>يستغل المهاجم ضعفًا في الموقع لإدخال كود JavaScript ضار.</li>
					<li>يتم تنفيذ الكود الضار في متصفح المستخدم، مما يسمح بسرقة ملفات تعريف الارتباط (Cookies) أو التلاعب بواجهة المستخدم.</li>
				</ul>
				<ul className='text-rtl list-none'>
					<li className='list-none font-bold'>أنواع XSS:</li>
					<li>Stored XSS: يتم تخزين الكود الضار في قاعدة بيانات الموقع (مثل تعليقات المستخدمين).</li>
					<li>Reflected XSS: يتم إرسال الكود الضار كجزء من الرابط ويتم تنفيذه عند فتح الرابط.</li>
					<li>DOM-Based XSS: يحدث في JavaScript مباشرة دون الحاجة إلى تدخل الخادم.</li>
				</ul>
				<ul className='text-rtl list-none'>
					<li className='list-none font-bold'>الحماية</li>
					<li>تصفية مدخلات المستخدم (Input Sanitization).</li>
					<li>استخدام Content Security Policy (CSP) لمنع تشغيل سكريبتات غير موثوقة.</li>
					<li>ترميز المخرجات (Output Encoding).</li>
				</ul>
			</div>

			<table>
				<thead>
					<tr className='text-rtl'>
						<th>الحماية</th>
						<th>طريقة التنفيذ</th>
						<th>الغرض</th>
						<th>الهجوم</th>
					</tr>
				</thead>
				<tbody className='text-rtl'>
					<tr>
						<td>CSRF Tokens، التحقق من المصدر.</td>
						<td>إرسال طلبات عبر جلسة مستخدم شرعية. </td>
						<td>استغلال مصادقة المستخدم لتنفيذ طلبات ضارة. </td>
						<td>CSRF</td>
					</tr>
					<tr>
						<td>إعداد رؤوس CORS على الخادم.</td>
						<td>حظر الطلبات بين النطاقات المختلفة.</td>
						<td>منع مشاركة الموارد بين المواقع بدون إذن. </td>
						<td>CORS</td>
					</tr>
					<tr>
						<td>تصفية المدخلات، CSP.</td>
						<td>استغلال إدخال البيانات وتنفيذ JavaScript.</td>
						<td>إدخال وتشغيل سكريبتات ضارة في متصفحات المستخدمين.</td>
						<td>XSS</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default WebSafty;
