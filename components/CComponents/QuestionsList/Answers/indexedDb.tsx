import React from 'react';

const IndexedDb = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div>
				<h4 className='font-bold text-3xl'>IndexedDB </h4>
				<span className='text-muted-foreground'>
					IndexedDB هو نظام قاعدة بيانات مدمجة في المتصفح، يتيح تخزين كميات كبيرة من البيانات بصورة غير متزامنة (asynchronous) وفي هيئة
					كائنات (object storage). يدعم هذه التقنية معظم المتصفحات الحديثة، وهي تُستخدم لتخزين بيانات تطبيقات الويب مثل بيانات المستخدم،
					الملفات المؤقتة، والتطبيقات غير المتصلة بالإنترنت.
				</span>
			</div>
		</section>
	);
};

export default IndexedDb;
