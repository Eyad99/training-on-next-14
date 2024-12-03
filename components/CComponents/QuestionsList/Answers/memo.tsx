import React from 'react';

const Memo = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div>
				<h4 className='font-bold text-3xl'>useMemo | React.memo </h4>
				<span className='text-muted-foreground'>Use useMemo for memoizing values (e.g., expensive computations or derived state)</span>
				<span className='text-muted-foreground'>Use React.memo for memoizing components to prevent re-renders when props don’t change</span>
			</div>
		</section>
	);
};

export default Memo;
