interface User {
	id: number;
	name: string;
	username: string;
	email: string;
}

export default async function UsersServer() {
	await new Promise((resolve, reject) => setTimeout(resolve, 2000));
	const users = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await users.json();

	return (
		<div className='flex flex-col gap-6'>
			{data.map((item: User) => (
				<h1 key={item.id} className='font-bold'>
					{item.name}
				</h1>
			))}
		</div>
	);
}
