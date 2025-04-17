import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sumFn(num1: number, num2: number) {
  return num1 + num2;
}

export async function fetchUser(userId: number) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	if (!response.ok) {
		throw new Error('Failed to fetch user');
	}
	return response.json();
}
