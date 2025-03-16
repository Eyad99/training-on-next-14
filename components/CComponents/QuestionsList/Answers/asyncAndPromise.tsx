import React from 'react';

const AsyncAndPromise = () => {
	return (
		<div>
			<table className='text-rtl'>
				<thead>
					<tr>
						<th>async/await</th>
						<th>Promises (.then/.catch) </th>
						<th>الميزة</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>أسهل وأوضح</td>
						<td>أقل وضوحًا، معقدة عند التداخل </td>
						<td>سهولة القراءة </td>
					</tr>
					<tr>
						<td>باستخدام try...catch</td>
						<td>باستخدام .catch() </td>
						<td>معالجة الأخطاء </td>
					</tr>
					<tr>
						<td>يعتمد على Promise نفسه</td>
						<td>يعتمد على Promise نفسه</td>
						<td>الأداء</td>
					</tr>
					<tr>
						<td>عندما تحتاج إلى تنفيذ العمليات بالتتابع بطريقة سهلة</td>
						<td>عند الحاجة إلى تشغيل عدة عمليات غير متزامنة بالتوازي </td>
						<td>الاستخدام المناسب </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default AsyncAndPromise;
