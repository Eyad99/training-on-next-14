'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { User_Res } from '@/core/models/page';
import { useQuery } from '@tanstack/react-query';
import { useGlobalStore } from '@/core/store/global';
import { ConnectionClosedEvent } from 'mongodb';
import Editor from '@/components/RComponents/Editor';

export default function Home() {
	// const fetchUsers = async () => {
	// 	try {
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
	// 		const data = await response.json();
	// 		return data;
	// 	} catch (error: any) {
	// 		console.error(error.message);
	// 	}
	// };

	// const data: User_Res[] = await fetchUsers();

	// *****************************************************************************   /
	/* Debounce */
	// const [timeout, setT] = useState<NodeJS.Timeout | null>(null);

	// const handleSearchForKol = (searchText: string) => {};

	// const handleSearch = (event: any) => {
	// 	if (timeout) clearTimeout(timeout);
	// 	setT(
	// 		setTimeout(() => {
	// 			handleSearchForKol(event.target.value);
	// 		}, 1000)
	// 	);
	// };

	// <input
	// 	type='text'
	// 	placeholder='Search KOLs, Filters, Tokens'
	// 	onChange={(event) => {
	// 		event.preventDefault();
	// 		handleSearch(event);
	// 	}}
	// 	className='bg-transparent text-white placeholder-neutral-500 outline-none w-full text-sm'
	// />;

	const [content, setContent] = useState('');

	const handleContentChange = useCallback((newValue: string) => {
		setContent(newValue);
	}, []);

	const { setUsers, users } = useGlobalStore((state) => state);

	const { data, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			if (!response.ok) throw new Error('فشل تحميل البيانات');
			return response.json();
		},
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		if (data && data?.length > 0) {
			setUsers(data);
		}
	}, [data]);

	if (isLoading) return 'loading';

	return (
		<>
			{data?.map((item: User_Res) => (
				<div key={item.id}>
					<h5>{item.name}</h5>
				</div>
			))}

			<div className='max-w-xl mx-auto mt-10 space-y-6'>
				{/* ✅ Controlled Component */}
				<div className='border p-4 rounded-md shadow-md'>
					<h2 className='text-lg font-semibold'>✅ Controlled Editor</h2>
					<Editor value={content} onChange={handleContentChange} isControlled={true} />
					<p className='mt-2'>
						📌 المحتوى الحالي: <strong>{content}</strong>
					</p>
				</div>

				{/* 🔶 Uncontrolled Component */}
				<div className='border p-4 rounded-md shadow-md'>
					<h2 className='text-lg font-semibold'>🔶 Uncontrolled Editor</h2>
					<Editor isControlled={false} />
				</div>
			</div>
		</>
	);
}
