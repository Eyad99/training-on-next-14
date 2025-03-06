import React from 'react';

const ElementAndComponent = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>React Elements</h4>
				<span className='text-muted-foreground'>
					Are the smallest units that represent what you see on the screen. They are immutable and describe what the UI should look like.
				</span>
				<span className='text-muted-foreground'>
					React elements describe what you want to see on the screen. They are created using the React.createElement() function or by using
					JSX syntax.
				</span>
				<div className='flex flex-col px-4'>
					<h4 className='font-bold text-xl'>Examples</h4>
					<span className='text-muted-foreground'>
						<h4 className='font-bold text-xl'>JSX</h4>
						const element = <span>Hello, World!</span>
					</span>
					<span className='text-muted-foreground'>
						<h4 className='font-bold text-xl'>React.createElement</h4>
						const element = React.createElement('span', null, 'Hello, World!');
					</span>
				</div>
				<div className='flex flex-col px-4'>
					<span className='text-muted-foreground text-rtl'>ما يظهر على الشاشة" = Object يمثل DOM Tag (immutable)</span>
					<span className='text-muted-foreground text-rtl'>مثل: div, h1</span>
				</div>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>React Components</h4>
				<span className='text-muted-foreground'>
					A React component is a JavaScript function or class that optionally accepts input (known as "props") and returns a React element
					describing what should appear on the screen. Components are reusable pieces of UI that can be composed together to build more
					complex UIs.
				</span>
				<div className='flex flex-col px-4'>
					<span className='text-muted-foreground text-rtl'>الكيان الذي ينشئ العناصر" = Function أو Class ترجع Elements.</span>
					<span className='text-muted-foreground text-rtl'>مثل: App(), Navbar()</span>
				</div>
			</div>
		</section>
	);
};

export default ElementAndComponent;
