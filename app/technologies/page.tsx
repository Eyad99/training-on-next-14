import Link from 'next/link';
import React from 'react';

const Technologies = () => {
	return (
		<div className='flex gap-4'>
			<Link href={'/technologies/indexed-db'}>
				<h4>Indexed Db</h4>
			</Link>
			<Link href={'/technologies/react-hook-form'}>
				<h4>React Form Hook</h4>
			</Link>
		</div>
	);
};

export default Technologies;
