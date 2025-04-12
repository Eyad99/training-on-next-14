import React from 'react';

export function sum(num1: number, num2: number) {
	return num1 + num2;
}

export async function fetchUser(userId: number) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	if (!response.ok) {
		throw new Error('Failed to fetch user');
	}
	return response.json();
}

const Jests = async () => {
	return <div>Jest functions</div>;
};

export default Jests;
