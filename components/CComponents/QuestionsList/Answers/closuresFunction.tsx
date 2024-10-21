'use client';
import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const ClosuresFunction = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Closures Function</h4>
				<span className='text-muted-foreground'>
					Closures are functions that have access to variables from another function’s scope. This is achieved by creating a function inside
					another function, and the inner function has access to the outer function’s variables.
				</span>
				<span className='text-muted-foreground'>
					عمليات الإغلاق هي وظائف يمكنها الوصول إلى المتغيرات من نطاق وظيفة أخرى. يتم تحقيق ذلك عن طريق إنشاء دالة داخل دالة أخرى ، والوظيفة
					الداخلية لها حق الوصول إلى متغيرات الوظيفة الخارجية.
				</span>
				<span className='text-muted-foreground'>
					Closures are useful because they enable data encapsulation. They allow you to create functions with private variables, helping to
					prevent accidental interference from other parts of the code. This is particularly beneficial in web development.
				</span>
				<span className='text-muted-foreground'>
					الإغلاق مفيد لأنه يتيح تغليف البيانات. إنها تسمح لك بإنشاء وظائف ذات متغيرات خاصة ، مما يساعد على منع التداخل العرضي من أجزاء أخرى
					من الكود. هذا مفيد بشكل خاص في تطوير الويب.
				</span>
			</div>

			<CodeMirrorEditor
				value={`function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // Output: 1
counter1(); // Output: 2

const counter2 = createCounter();
counter2(); // Output: 1;`}
			/>
		</section>
	);
};

export default ClosuresFunction;
