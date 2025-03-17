import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const ControllerAndUncontroller = () => {
	return (
		<div className='flex flex-col gap-4'>
			<h4 className='font-bold text-2xl text-rtl'>🔹 الفرق بين Controlled و Uncontrolled Components في React</h4>
			<ul className='text-rtl'>
				<li className='font-bold list-none'> ✅ 1. Controlled Component (المُتحكم به)</li>
				<li>يتم تخزين البيانات في state وإدارتها عبر React.</li>
				<li>كل تغيير في المدخلات يتم تخزينه داخل حالة (state) المكون.</li>
				<li>مناسب إذا كنت تحتاج إلى تحديث الحالة بشكل ديناميكي أو التفاعل مع القيم.</li>
			</ul>
			<CodeMirrorEditor
				value={`
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
                `}
			/>

			<ul className='text-rtl'>
				<li className='font-bold list-none'>✅ 2. Uncontrolled Component (غير المُتحكم به)</li>
				<li>يتم تخزين البيانات داخل DOM مباشرةً باستخدام ref.</li>
				<li>React لا يتحكم في القيم، بل يتم الوصول إليها فقط عند الحاجة.</li>
				<li>مناسب إذا كنت لا تحتاج إلى تحديث الحالة في كل تغيير.</li>
			</ul>
			<CodeMirrorEditor
				value={`
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

                `}
			/>

			<table className='text-rtl'>
				<thead>
					<tr>
						<th>الميزة</th>
						<th>Controlled Component</th>
						<th>Uncontrolled Component</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>الأداء</td>
						<td>أقل كفاءة مع الإدخال المتكرر </td>
						<td>أكثر كفاءة لأنه لا يعيد التصيير (re-render)</td>
					</tr>
					<tr>
						<td>الإدارة عبر React </td>
						<td>نعم، يتم التحكم في القيم داخل state </td>
						<td>لا، القيم موجودة في DOM فقط</td>
					</tr>
					<tr>
						<td>سهولة التفاعل مع البيانات </td>
						<td>نعم، مناسب لميزات مثل البحث الفوري والحفظ التلقائي </td>
						<td>لا، تحتاج إلى ref للوصول إلى القيم</td>
					</tr>
					<tr>
						<td>متى تستخدمه؟ </td>
						<td>إذا كنت بحاجة إلى تحديث مستمر أو تفاعل مع القيم </td>
						<td>إذا كنت تحتاج إلى قراءة القيم فقط عند الحاجة</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ControllerAndUncontroller;
