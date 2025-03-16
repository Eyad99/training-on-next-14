import { User_Res } from '@/core/models/page';
import { getUsers } from '@/core/services/page';
import React, { Suspense } from 'react';

export default async function Home() {
	const fetchUsers = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
			const data = await response.json();
			return data;
		} catch (error: any) {
			console.error(error.message);
		}
	};

	const data: User_Res[] = await fetchUsers();

	return (
		<>
			{data?.map((item: User_Res) => (
				<div key={item.id}>
					<h5>{item.name}</h5>
				</div>
			))}
		</>
	);
}
