import React from 'react';

const HooksInReact = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col gap-4'>
				<h4 className='font-bold text-3xl text-rtl'>use()</h4>
				<span className='text-muted-foreground text-rtl'>
					يُستخدم للتعامل مع القيم غير المتزامنة (مثل الوعود Promises - Context) داخل المكونات. يُمكّن المطورين من كتابة تعليمات برمجية
					متزامنة المظهر عند التعامل مع العمليات غير المتزامنة.
				</span>
				<span className='text-muted-foreground text-rtl'>
					يمكن استخدامه لانتظار نتيجة وعد (Promise) داخل المكون، مما يُسهل التعامل مع البيانات المُحمّلة بشكل غير متزامن.
				</span>
			</div>

			<div className='flex flex-col gap-4'>
				<h4 className='font-bold text-3xl text-rtl'>useFormStatus()</h4>
				<span className='text-muted-foreground text-rtl'>
					يُساعد هذا الهوك في تتبع حالة النماذج (Forms)، مثل معرفة ما إذا كان النموذج قيد الإرسال أو إذا كانت هناك أخطاء.
				</span>
				<span className='text-muted-foreground text-rtl'>
					يُساعد هذا الهوك في تتبع حالة النماذج (Forms)، مثل معرفة ما إذا كان النموذج قيد الإرسال أو إذا كانت هناك أخطاء.
				</span>
			</div>

			<div className='flex flex-col gap-4'>
				<h4 className='font-bold text-3xl text-rtl'>useActionState()</h4>
				<span className='text-muted-foreground text-rtl'>يُتيح هذا الهوك الوصول إلى حالة النموذج الحالية، بما في ذلك القيم والأخطاء.</span>
				<span className='text-muted-foreground text-rtl'>
					يُستخدم لإدارة والتحكم في حالة النموذج بشكل أكثر فعالية، مما يُسهل عملية التحقق من صحة البيانات وتقديم ردود فعل للمستخدم.
				</span>
			</div>

			<div className='flex flex-col gap-4'>
				<h4 className='font-bold text-3xl text-rtl'>useOptimistic()</h4>
				<span className='text-muted-foreground text-rtl'>
					{' '}
					يُساعد هذا الهوك في تنفيذ تحديثات متفائلة (Optimistic Updates)، حيث يتم تحديث واجهة المستخدم بشكل فوري قبل تأكيد العملية من
					الخادم، مما يُحسّن تجربة المستخدم.
				</span>
				<span className='text-muted-foreground text-rtl'>
					يُستخدم في السيناريوهات التي تتطلب استجابة سريعة من واجهة المستخدم، مثل تحديث قائمة بعد إضافة عنصر جديد، مع افتراض نجاح العملية.
				</span>
			</div>
		</section>
	);
};

export default HooksInReact;
