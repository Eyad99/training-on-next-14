'use client';

import React, { useEffect } from 'react';
import { qsList } from './questions';
import Link from 'next/link';

const QuestionsList = () => {
	useEffect(() => {
		const handleScroll = (event: any) => {
			if (event.target.closest('a')) {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		};

		document.addEventListener('click', handleScroll);

		return () => {
			document.removeEventListener('click', handleScroll);
		};
	}, []);

	return (
		<div className='flex flex-col gap-2 items-start'>
			{qsList?.map((list) => {
				return (
					<div key={list?.id} className=' w-full hover:bg-gray-400'>
						<Link href={`/questions?qs=${list.param}`} passHref>
							<span className='flex text-start p-[2px]'>{list?.title}</span>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default QuestionsList;
