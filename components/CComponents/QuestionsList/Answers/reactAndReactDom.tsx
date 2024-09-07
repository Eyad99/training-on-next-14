import React from 'react';

const ReactAndReactDom = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>React</h4>
				<span className='text-muted-foreground'>Used for building components, managing state, and handling UI logic.</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>React-Dom</h4>
				<span className='text-muted-foreground'>
					Used to render those components into the browser's DOM and manage the updates to the DOM .
				</span>
			</div>
		</section>
	);
};

export default ReactAndReactDom;
