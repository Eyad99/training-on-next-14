import React from 'react';

const LazyLoading = () => {
	return (
		<div>
			<span className='text-muted-foreground'>
				التحميل الكسول (Lazy Loading) هو تقنية لتحميل المحتوى أو الموارد فقط عند الحاجة إليها، بدلاً من تحميلها عند تحميل الصفحة بالكامل.
				يهدف ذلك إلى تحسين أداء الموقع أو التطبيق، خاصة من حيث سرعة التحميل وتقليل استهلاك البيانات.
			</span>
			<ul className='text-rtl'></ul>
		</div>
	);
};

export default LazyLoading;
