import React from 'react';

const TreeShaking = () => {
	return (
		<section className='flex flex-col gap-4'>
			<h4 className='font-bold text-3xl'>TreeShaking </h4>
			<span className='text-muted-foreground text-rtl'>
				هو تقنية تُستخدم في JavaScript لإزالة الكود غير المستخدم تلقائيًا أثناء عملية الباندلينغ، مما يقلل حجم الملفات ويحسن أداء التطبيقات{' '}
			</span>
			<span className='text-muted-foreground text-rtl'>يعتمد على ES6 Modules وأدوات مثل Webpack و Rollup</span>
		</section>
	);
};

export default TreeShaking;
