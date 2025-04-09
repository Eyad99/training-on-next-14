import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

interface ListItemProps {
	text: string;
	isBold?: boolean;
}

const ListItem = ({ text, isBold = false }: ListItemProps) => <li className={`${isBold ? 'font-bold' : ''} text-rtl`}>{text}</li>;

interface ComponentTypeProps {
	title: string;
	items: ListItemProps[];
	codeExample: string;
}

const ComponentType = ({ title, items, codeExample }: ComponentTypeProps) => (
	<div className='flex flex-col gap-4'>
		<ul className='flex flex-col gap-2 px-4'>
			{items.map((item, index) => (
				<ListItem key={index} {...item} />
			))}
		</ul>
		<div className='mt-2'>
			<CodeMirrorEditor value={codeExample} />
		</div>
	</div>
);

const ControllerAndUncontroller = () => {
	const controlledItems: ListItemProps[] = [
		{ text: '✅ 1. Controlled Component (المُتحكم به)', isBold: true },
		{ text: 'يتم تخزين البيانات في state وإدارتها عبر React.' },
		{ text: 'كل تغيير في المدخلات يتم تخزينه داخل حالة (state) المكون.' },
		{ text: 'مناسب إذا كنت تحتاج إلى تحديث الحالة بشكل ديناميكي أو التفاعل مع القيم.' },
	];

	const uncontrolledItems: ListItemProps[] = [
		{ text: '✅ 2. Uncontrolled Component (غير المُتحكم به)', isBold: true },
		{ text: 'يتم تخزين البيانات داخل DOM مباشرةً باستخدام ref.' },
		{ text: 'React لا يتحكم في القيم، بل يتم الوصول إليها فقط عند الحاجة.' },
		{ text: 'مناسب إذا كنت لا تحتاج إلى تحديث الحالة في كل تغيير.' },
	];

	const controlledCode = `
'use client';
import { useState } from 'react';

export default function ControlledEditor() {
	const [content, setContent] = useState('');

	return (
		<div>
			<h2>Controlled Editor</h2>
			<textarea
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="اكتب هنا..."
				className="w-full h-40 border p-2"
			/>
			<p>المحتوى الحالي: {content}</p>
		</div>
	);
}
`;

	const uncontrolledCode = `
'use client';

import { useRef } from 'react';

export default function UncontrolledEditor() {
	const textRef = useRef<HTMLTextAreaElement>(null);

	const handleShowContent = () => {
		alert(المحتوى: "textRef.current?.value");
	};

	return (
		<div>
			<h2>Uncontrolled Editor</h2>
			<textarea ref={textRef} placeholder="اكتب هنا..." className="w-full h-40 border p-2" />
			<button onClick={handleShowContent} className="mt-2 p-2 bg-blue-500 text-white rounded">
				عرض المحتوى
			</button>
		</div>
	);
}
`;

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<h3 className='font-bold text-2xl'>🔹 الفرق بين Controlled و Uncontrolled Components في React</h3>

			<ComponentType title='Controlled Component' items={controlledItems} codeExample={controlledCode} />

			<ComponentType title='Uncontrolled Component' items={uncontrolledItems} codeExample={uncontrolledCode} />

			<div className='overflow-x-auto'>
				<table className='w-full border-collapse border border-gray-300'>
					<thead>
						<tr className='bg-gray-100'>
							<th className='border border-gray-300 p-2'>الميزة</th>
							<th className='border border-gray-300 p-2'>Controlled Component</th>
							<th className='border border-gray-300 p-2'>Uncontrolled Component</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='border border-gray-300 p-2'>الأداء</td>
							<td className='border border-gray-300 p-2'>أقل كفاءة مع الإدخال المتكرر </td>
							<td className='border border-gray-300 p-2'>أكثر كفاءة لأنه لا يعيد التصيير (re-render)</td>
						</tr>
						<tr>
							<td className='border border-gray-300 p-2'>الإدارة عبر React </td>
							<td className='border border-gray-300 p-2'>نعم، يتم التحكم في القيم داخل state </td>
							<td className='border border-gray-300 p-2'>لا، القيم موجودة في DOM فقط</td>
						</tr>
						<tr>
							<td className='border border-gray-300 p-2'>سهولة التفاعل مع البيانات </td>
							<td className='border border-gray-300 p-2'>نعم، مناسب لميزات مثل البحث الفوري والحفظ التلقائي </td>
							<td className='border border-gray-300 p-2'>لا، تحتاج إلى ref للوصول إلى القيم</td>
						</tr>
						<tr>
							<td className='border border-gray-300 p-2'>متى تستخدمه؟ </td>
							<td className='border border-gray-300 p-2'>إذا كنت بحاجة إلى تحديث مستمر أو تفاعل مع القيم </td>
							<td className='border border-gray-300 p-2'>إذا كنت تحتاج إلى قراءة القيم فقط عند الحاجة</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ControllerAndUncontroller;
