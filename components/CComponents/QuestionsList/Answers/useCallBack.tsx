import React from 'react';

const UseCallBack = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div>
				<h4 className='font-bold text-3xl'>UseCallback </h4>
				<span className='text-muted-foreground'>
					The useCallback hook in React is used to memoize a function, which means that the function will only be recreated when its
					dependencies change. This can be useful when passing a function as a prop to a child component, as it can prevent unnecessary
					re-renders of the child component. By memoizing the function, you can ensure that the function reference remains the same between
					renders, unless the dependencies change. This can lead to performance improvements in certain situations, especially when the
					function is expensive to create.
				</span>
			</div>
			<div>
				<h4 className='font-bold text-3xl'>UseMemo</h4>
				<span className='text-muted-foreground'>useMemo memoizes values.</span>
			</div>
		</section>
	);
};

export default UseCallBack;
