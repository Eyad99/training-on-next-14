import React from 'react';

interface TableRowProps {
	feature: string;
	promises: string;
	asyncAwait: string;
}

const TableRow = ({ feature, promises, asyncAwait }: TableRowProps) => (
	<tr className='hover:bg-gray-50 transition-colors'>
		<td className='border border-gray-300 p-2 font-medium'>{feature}</td>
		<td className='border border-gray-300 p-2'>{promises}</td>
		<td className='border border-gray-300 p-2'>{asyncAwait}</td>
	</tr>
);

interface NoteItemProps {
	text: string;
}

const NoteItem = ({ text }: NoteItemProps) => <li className='text-blue-700'>{text}</li>;

const AsyncAndPromise = () => {
	const comparisonRows: TableRowProps[] = [
		{
			feature: 'سهولة القراءة',
			promises: 'أقل وضوحًا، معقدة عند التداخل',
			asyncAwait: 'أسهل وأوضح',
		},
		{
			feature: 'معالجة الأخطاء',
			promises: 'باستخدام .catch()',
			asyncAwait: 'باستخدام try...catch',
		},
		{
			feature: 'الأداء',
			promises: 'يعتمد على Promise نفسه',
			asyncAwait: 'يعتمد على Promise نفسه',
		},
		{
			feature: 'الاستخدام المناسب',
			promises: 'عند الحاجة إلى تشغيل عدة عمليات غير متزامنة بالتوازي',
			asyncAwait: 'عندما تحتاج إلى تنفيذ العمليات بالتتابع بطريقة سهلة',
		},
	];

	const additionalNotes: NoteItemProps[] = [
		{ text: 'async/await هو مجرد سكر سينتاكس (syntactic sugar) للـ Promises' },
		{ text: 'يمكن استخدام async/await مع Promise.all() للحصول على أفضل النتائج' },
		{ text: 'كلاهما يستخدم نفس آلية التنفيذ الأساسية' },
	];

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<h3 className='font-bold text-2xl text-center'>مقارنة بين Promises و Async/Await</h3>

			<div className='overflow-x-auto'>
				<table className='w-full border-collapse border border-gray-300'>
					<thead>
						<tr className='bg-gray-100'>
							<th className='border border-gray-300 p-2'>الميزة</th>
							<th className='border border-gray-300 p-2'>Promises (.then/.catch)</th>
							<th className='border border-gray-300 p-2'>async/await</th>
						</tr>
					</thead>
					<tbody>
						{comparisonRows.map((row, index) => (
							<TableRow key={index} {...row} />
						))}
					</tbody>
				</table>
			</div>

			<div className='bg-blue-50 p-4 rounded-lg'>
				<h3 className='font-bold text-lg text-blue-800 mb-2'>ملاحظات إضافية:</h3>
				<ul className='flex flex-col gap-2'>
					{additionalNotes.map((note, index) => (
						<NoteItem key={index} {...note} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default AsyncAndPromise;
