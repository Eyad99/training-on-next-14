import React from 'react';

const OocssAndBem = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Oocss (Object-Oriented CSS)</h4>
				<span className='text-muted-foreground'>الفكرة هي فصل البنية عن التصميم بحيث تكون هناك مكونات قابلة لإعادة الاستخدام</span>
				<ul className='px-6'>
					<li className='font-bold list-none'>المزايا</li>
					<li>تسهيل إعادة استخدام الأكواد</li>
					<li>تقليل التكرار</li>
					<li>تحسين الأداء</li>
				</ul>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>BEM (Block, Element, Modifier)</h4>
				<span className='text-muted-foreground'>الهدف الرئيسي هو جعل الأكواد أكثر قابلية للقراءة والتنظيم</span>
				<ul className='px-6'>
					<li>Block: يمثل المكون الرئيسي (مثل زر أو نافذة).</li>
					<li>Element: يمثل عناصر فرعية داخل الكتلة (مثل نص الزر أو أيقونة داخله).</li>
					<li>Modifier: يستخدم لتغيير الشكل أو السلوك (مثل حجم الزر أو لونه).</li>
				</ul>
				<ul className='px-6'>
					<li>.button {} "Block"</li>
					<li>.button__icon {} "Element"</li>
					<li>.button--primary {} "Modifier"</li>
				</ul>
				<ul className='px-6'>
					<li className='list-none font-bold'>المزايا</li>
					<li>يضمن تناسق التسمية.</li>
					<li>يسهل تحديد العلاقات بين العناصر.</li>
					<li>مناسب جدًا للمشاريع الكبيرة.</li>
				</ul>
			</div>

			<table>
				<thead>
					<tr>
						<th>BEM</th>
						<th>OOCSS</th>
						<th>العنصر</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>تنظيم التسميات لتكون واضحة ومنظمة</td>
						<td>التركيز على المكونات القابلة لإعادة الاستخدام </td>
						<td>الهدف</td>
					</tr>
					<tr>
						<td>الكتلة-العنصر-المعدل</td>
						<td>فصل البنية عن الجلد</td>
						<td>المبادئ</td>
					</tr>
					<tr>
						<td>مناسب للفرق الكبيرة والمشاريع الكبيرة</td>
						<td>مناسب أكثر للتصميمات المعقدة</td>
						<td>القابلية للتطبيق</td>
					</tr>
					<tr>
						<td>صارم في التسمية باستخدام نمط محدد</td>
						<td>أقل تركيزًا على التسمية</td>
						<td>التسمية</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default OocssAndBem;
