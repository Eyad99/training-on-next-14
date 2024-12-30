import React from 'react';

const OptimizationTools = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div>
				<h4 className='font-bold text-3xl'>Optimization Tools </h4>
				<table>
					<thead>
						<tr>
							<th>كيف يعكس الأداء</th>
							<th>الهدف الأساسي</th>
							<th>المصطلح</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>وقت الاستجابة الأولية</td>
							<td>أول ظهور للمحتوى</td>
							<td>FCP</td>
						</tr>
						<tr>
							<td>سرعة تحميل المحتوى</td>
							<td>تحميل أكبر عنصر مرئي</td>
							<td>LCP</td>
						</tr>
						<tr>
							<td>تفاعل الصفحة</td>
							<td>الوقت الذي يمنع المستخدم من التفاعل</td>
							<td>TBT</td>
						</tr>
						<tr>
							<td>تجربة المستخدم</td>
							<td>استقرار التخطيط</td>
							<td>CLS</td>
						</tr>
						<tr>
							<td>تجربة المستخدم البصرية</td>
							<td>سرعة تحميل المحتوى المرئي</td>
							<td>Speed Index</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default OptimizationTools;
