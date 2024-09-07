'use server';

import { get } from '@/utils/api/page';

// export async function getUsers() {
// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/users');
// 		const data = await response.json();
// 		return data;
// 	} catch (error: any) {
// 		console.log(error.message);
// 	}
// }

// Export an async function directly
export async function getUsers() {
	return get('users');
}
