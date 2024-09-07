import React from 'react';

const Jsx = () => {
	return (
		<section className='flex flex-col gap-2'>
			<h4 className='font-bold text-3xl'>JSX (JavaScript XML)</h4>{' '}
			<div className='flex flex-col gap-4'>
				<span className='text-muted-foreground'>
					JSX (JavaScript XML) is a syntax extension for JavaScript that is commonly used with React to describe what the UI should look
					like. It allows developers to write HTML-like syntax directly within JavaScript code, which is then transformed into JavaScript
					objects that React can understand and render as part of the UI.
				</span>
				<span className='text-muted-foreground'>
					JSX is a sy ntax sugar for React.createElement() calls. It allows developers to write UI components in a way that looks similar to
					HTML but is actually a combination of JavaScript and XML-like syntax.
				</span>
				<span className='text-muted-foreground'>
					Under the hood, JSX is compiled to React.createElement() calls that create a tree of React elements. These elements are plain
					JavaScript objects that represent the structure of the UI
				</span>
			</div>
		</section>
	);
};

export default Jsx;
