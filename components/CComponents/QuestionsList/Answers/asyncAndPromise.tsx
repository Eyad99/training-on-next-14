import React from 'react';

const AsyncAndPromise = () => {
	return (
		<div>
			<table className='text-rtl'>
				<thead>
					<tr>
						<th>الميزة</th>
						<th>Promises (.then/.catch) </th>
						<th>async/await</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>سهولة القراءة </td>
						<td>أقل وضوحًا، معقدة عند التداخل </td>
						<td>أسهل وأوضح</td>
					</tr>
					<tr>
						<td>معالجة الأخطاء </td>
						<td>باستخدام .catch() </td>
						<td>باستخدام try...catch</td>
					</tr>
					<tr>
						<td>الأداء</td>
						<td>يعتمد على Promise نفسه</td>
						<td>يعتمد على Promise نفسه</td>
					</tr>
					<tr>
						<td>الاستخدام المناسب </td>
						<td>عند الحاجة إلى تشغيل عدة عمليات غير متزامنة بالتوازي </td>
						<td>عندما تحتاج إلى تنفيذ العمليات بالتتابع بطريقة سهلة</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default AsyncAndPromise;
