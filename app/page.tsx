'use client';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setTimeout(() => {
			setCount((prev) => {
				console.log('count', prev + 1);
				return prev + 1;
			});
			setCount((prev) => {
				console.log(prev + 1);
				return prev + 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return <>Home {count}</>;
}
