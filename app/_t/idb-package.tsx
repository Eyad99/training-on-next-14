// import { openDB } from 'idb';

// // initiate DB
// const initializeDB = async () => {
// 	const db = await openDB('my-database', 1, {
// 		upgrade(db) {
// 			if (!db.objectStoreNames.contains('users')) {
// 				db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
// 			}
// 		},
// 	});
// 	return db;
// };

// export const dbPromise = initializeDB();

// export async function get(key) {
// 	return (await dbPromise).get('keyval', key);
// }
// export async function set(key, val) {
// 	return (await dbPromise).put('keyval', val, key);
// }
// export async function del(key) {
// 	return (await dbPromise).delete('keyval', key);
// }
// export async function clear() {
// 	return (await dbPromise).clear('keyval');
// }
// export async function keys() {
// 	return (await dbPromise).getAllKeys('keyval');
// }

// // Add To DB
// export const addUser = async (user) => {
// 	const db = await dbPromise;
// 	await db.add('users', user);
// };

// // Get From  DB
// export const getUsers = async () => {
// 	const db = await dbPromise;
// 	return await db.getAll('users');
// };

// import React, { useEffect, useState } from 'react';
// import { addUser, getUsers } from './indexedDB';

// const App = () => {
// 	const [users, setUsers] = useState([]);

// 	useEffect(() => {
// 		const fetchUsers = async () => {
// 			const data = await getUsers();
// 			setUsers(data);
// 		};
// 		fetchUsers();
// 	}, []);

// 	const handleAddUser = async () => {
// 		const newUser = { name: 'Eyad', email: 'eyad@example.com' };
// 		await addUser(newUser);
// 		const updatedUsers = await getUsers();
// 		setUsers(updatedUsers);
// 	};

// 	return (
// 		<div>
// 			<button onClick={handleAddUser}>Add User</button>
// 			<ul>
// 				{users.map((user) => (
// 					<li key={user.id}>{user.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default App;
