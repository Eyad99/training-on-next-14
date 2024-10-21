import React from 'react';

const Solid = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Single Responsibility Principle (SRP)</h4>
				<span className='text-muted-foreground'>
					UserProfile component should only handle the display and management of a user's profile,not handle authentication.
				</span>
				<span className='text-muted-foreground'>التعامل ع كل ملف بحد ذاتو ويكون خاص في</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Open/Closed Principle (OCP)</h4>
				<span className='text-muted-foreground'>
					Components should be built in a way that allows new functionality to be added without modifying existing code.
				</span>
				<span className='text-muted-foreground'>
					يجب بناء المكونات بطريقة تسمح بإضافة وظائف جديدة دون تعديل التعليمات البرمجية الموجودة.
				</span>
				<span className='text-muted-foreground' dir='rtl'>
					وفينا نعتبر الـ
					<span className='inline-block' dir='ltr'>
						HOC
					</span>
					كمثال يوضح الفكرة بأنه يأخذ كومبوننت ويُرجِع كومبوننت
				</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Liskov Substitution Principle (LSP)</h4>
				<span className='text-muted-foreground'>
					Encourages you to create components (reusable) that can be easily swapped with each other.{' '}
				</span>
				<span className='text-muted-foreground'>بناء مكونات قابلة لاعادة الاستخدام واستخدامها عند الابناء</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Interface Segregation Principle (ISP)</h4>
				<span className='text-muted-foreground'>Clients should not be forced to depend on interfaces they do not use.</span>
				<span className='text-muted-foreground'>عدم تحميل مواضيع للمستخدم ليس له علاقة بها.</span>
				<span className='text-muted-foreground'>
					يعني اذا عندي كوبوننت للكتاب ومطبوع فيه الاسم والوصف بس واذا بدي اجي مرقلو الداتا من غير مكان ما مرق اوبجكت كامل للكتاب بس مرق
					الاسم والوصف
				</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Dependency Inversion Principle (DIP)</h4>
				<span className='text-muted-foreground'>
					Compose components using higher-order components (HOCs) or render props to inject dependencies.
				</span>
				<span className='text-muted-foreground'>
					Ensures that high-level components don't depend directly on low-level modules. Instead, both should depend on abstractions. This
					promotes flexibility, maintainability, and testability.{' '}
				</span>
				<span className='text-muted-foreground'> يؤلف المكونات باستخدام مكونات أعلى ترتيب (هوكس)</span>
				<span className='text-muted-foreground'>او اذا بدك تجيب بيانات من اباك ايند ساوي ملف للاتصال وقم باستخدامه بالكان الذي تريده</span>
			</div>
		</section>
	);
};

export default Solid;
