import React from 'react';

const FunctionTypes = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'> Function Declarations </h4>
				<span className='text-muted-foreground'>
					Are hoisted and can be used before they are declared. They are commonly used for defining reusable functions in global or function
					scopes.
				</span>
				<span className='text-muted-foreground font-bold'>function greet()</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Function Expressions</h4>
				<span className='text-muted-foreground'>
					Are not hoisted and are typically used when functions need to be assigned to variables or passed as arguments to other functions.
				</span>
				<span className='text-muted-foreground font-bold'>const greet = function()</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Arrow Functions</h4>
				<span className='text-muted-foreground'>
					Provide a concise syntax and are well-suited for short functions or when you need to preserve the this context from the
					surrounding code.
				</span>
				<span className='text-muted-foreground font-bold'>const greet = ()</span>
			</div>
		</section>
	);
};

export default FunctionTypes;
