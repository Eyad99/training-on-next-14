import React from 'react';

const Promises = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Promises</h4>
				<span className='text-muted-foreground'>A promise can be in one of three states: pending, fulfilled, or rejected.</span>
				<span className='text-muted-foreground'>
					Promises are important because they provide a cleaner and more manageable way to handle asynchronous operations compared to
					callbacks.
				</span>
			</div>
		</section>
	);
};

export default Promises;
