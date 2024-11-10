import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { revalidateTag } from 'next/cache';

interface User {
	id: string;
	name: string;
}

export default async function ServerAction() {
	const users = await fetch('https://672ff1a966e42ceaf15f0d9d.mockapi.io/mock-users/users');
	const data = await users.json();

	async function addUser(formData: FormData) {
		'use server';
		const name = formData.get('name');
		const res = await fetch('https://672ff1a966e42ceaf15f0d9d.mockapi.io/mock-users/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name }),
			next: { tags: ['users'] },
		});
		const datae = await res.json();
		revalidateTag('users');
		// console.log('resresresres', datae);
	}

	return (
		<div className='flex flex-col gap-6'>
			<form action={addUser} className='flex gap-4 w-1/2'>
				<Input name='name' type='text' placeholder='Enter User Name' />
				<Button type='submit'>All User</Button>
			</form>
			<div className='flex  flex-wrap'>
				{data.map((item: User) => (
					<h1 key={item.id} className='font-bold py-4 w-[20%]'>
						{item.name}
					</h1>
				))}
			</div>
		</div>
	);
}
