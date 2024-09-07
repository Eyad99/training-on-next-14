import React from 'react';

const AsyncAndSync = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Asynchronous</h4>
				<span className='text-muted-foreground'>
					Programming method where operations are run independently allowing the program to continue running while waiting for certain tasks
					to complete
				</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Synchronous</h4>
				<span className='text-muted-foreground'>
					Programming approach where tasks of a program are executed sequentially one at a time.
				</span>
			</div>
		</section>
	);
};

export default AsyncAndSync;
