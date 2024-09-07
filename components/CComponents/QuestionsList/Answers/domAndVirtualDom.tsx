import React from 'react';

const DomAndVirtualDom = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Dom</h4>
				<span className='text-muted-foreground'>DOM is the browser's interface for rendering and manipulating the document structure</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Virtual-Dom</h4>
				<span className='text-muted-foreground'>
					A lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing the direct manipulation
					required on the real DOM
				</span>
			</div>
		</section>
	);
};

export default DomAndVirtualDom;
