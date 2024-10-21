import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const ForEach = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>ForEach</h4>
				<span className='text-muted-foreground'>
					It is commonly used when you need to loop through all elements of an array without needing to manipulate the iteration variable or
					break out of the loop.
				</span>
			</div>
			<CodeMirrorEditor
				value={`
            array.forEach(function(currentValue, index, array) {
  // Code to execute for each element
});
`}
			/>

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Key Differences Between forEach() and a Standard for Loop:</h4>
				<span className='text-muted-foreground'>
					<ul>
						<li>No Loop Control</li>
						<li>Implicit Iteration</li>
						<li>No Return Value</li>
						<li>Readability</li>
					</ul>
				</span>
				<span className='text-muted-foreground'>
					While forEach() is great for simple tasks where you don't need to control the loop's flow, a for loop is more versatile when you
					need finer control over iteration.
				</span>
			</div>
		</section>
	);
};

export default ForEach;
