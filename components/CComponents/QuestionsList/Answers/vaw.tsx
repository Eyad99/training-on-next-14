import React from 'react';

const Vaw = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-3xl'>⚙️ Webpack vs. Vite — من ناحية التطوير (dev server) و البناء (build)</h4>
				<span>
					Vite لا يعيد بناء المشروع بالكامل عند كل تعديل بينما Webpack يقوم بعملية bundling كاملة أو شبه كاملة في الذاكرة، وهذا الفرق
					الرئيسي الذي يجعل Vite أسرع في التطوير (dev mode).
				</span>
			</div>

			{/* Webpack */}
			<div className='flex flex-col text-rtl'>
				<span className='text-muted-foreground'>🔹 Webpack (القديم نسبيًا) </span>
				<span>عند تشغيل المشروع (npm start أو webpack-dev-server):</span>
				<ul className='list-disc list-inside text-gray-700 space-y-2'>
					<li>Webpack يقرأ كل المشروع كاملًا.</li>
					<li>يحوّل كل الملفات (JS, CSS, Images...) إلى Bundles (عادةً ملف واحد كبير أو أكثر).</li>
					<li>يشغّل dev server يعرض الناتج في المتصفح.</li>
					<li>عند تعديل أي ملف → Webpack يعيد تجميع (rebundle) المشروع أو أجزاء كبيرة منه.</li>
				</ul>
				<span>⚠️ هذا يعني أنه:</span>
				<ul className='list-disc list-inside text-gray-700 space-y-2'>
					<li>يبني المشروع كامل أو شبه كامل في الذاكرة.</li>
					<li>كل تعديل = عملية "bundling" جديدة.</li>
					<li>لذلك التطوير على مشاريع كبيرة ممكن يكون بطيء جدًا.</li>
				</ul>
			</div>

			{/* Vite */}
			<div className='flex flex-col text-rtl'>
				<span className='text-muted-foreground'>🔹 Vite (الجيل الحديث)</span>
				<span>عند تشغيل vite dev:</span>
				<ul className='list-disc list-inside text-gray-700 space-y-2'>
					<li>لا يقوم بعملية bundling كاملة في البداية 🚫 , بل يشغل dev server فوري يعتمد على native ES Modules.</li>
					<li>عند فتح المتصفح → Vite يرسل فقط الملفات التي تطلبها الصفحة (مثل React components المطلوبة فعلاً).</li>
					<li>عند تعديل أي ملف:</li>
					<ul className='list-disc list-inside text-gray-700 space-y-2 px-6'>
						<li>لا يعيد بناء كل شيء ❌</li>
						<li>فقط يحدث الجزء المعدل عبر Hot Module Replacement (HMR) ⚡</li>
						<li>التحديث يتم تقريبًا فوريًا (100ms)</li>
					</ul>
				</ul>
			</div>
			<div className='flex flex-col text-rtl'>
				<span className='text-muted-foreground'>🧠 السر وراء السرعة</span>
				<div className='overflow-x-auto'>
					<table className='w-full border-collapse border border-gray-300'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 p-2'>النقطة</th>
								<th className='border border-gray-300 p-2'>Webpack</th>
								<th className='border border-gray-300 p-2'>Vite</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border border-gray-300 p-2'>التحزيم (bundling) في وضع التطوير</td>
								<td className='border border-gray-300 p-2'>نعم، يقوم بتحزيم كامل المشروع</td>
								<td className='border border-gray-300 p-2'>لا، يستخدم ES Modules مباشرة</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>التحويل (transpile)</td>
								<td className='border border-gray-300 p-2'>عبر Babel عادةً</td>
								<td className='border border-gray-300 p-2'>عبر esbuild (مكتوب بـ Go – سريع جدًا)</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>عند التعديل</td>
								<td className='border border-gray-300 p-2'>يعيد bundling جزئي أو كامل</td>
								<td className='border border-gray-300 p-2'>يحدّث فقط الموديل المعدل (HMR)</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>السرعة في المشاريع الكبيرة</td>
								<td className='border border-gray-300 p-2'>أبطأ</td>
								<td className='border border-gray-300 p-2'>أسرع بكثير ⚡</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>البناء النهائي (production)</td>
								<td className='border border-gray-300 p-2'>يستخدم Webpack</td>
								<td className='border border-gray-300 p-2'>يستخدم Rollup (أو أحيانًا esbuild)</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default Vaw;
