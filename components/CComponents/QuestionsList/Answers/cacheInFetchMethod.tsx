import React from 'react';

const CacheInFetchMethod = () => {
	return (
		<section className='flex flex-col gap-4'>
			<h1 className='font-bold text-xl'>Next 14 [force-cache by default]</h1>
			<h1 className='font-bold text-xl'>Next 15 [no-store by default]</h1>

			<div className='flex flex-col gap-4'>
				<h4 className='font-bold text-3xl text-rtl'>انواع القيم ضمن الكاش</h4>
				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>default</h1>
					<span className='text-muted-foreground text-rtl'>
						يعتمد على سلوك التخزين المؤقت الافتراضي للمتصفح. إذا كانت هناك نسخة مخبأة صالحة، فقد يتم استخدامها، وإلا سيتم جلب المورد من
						الشبكة
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم عندما ترغب في السماح للمتصفح بإدارة التخزين المؤقت بناءً على إعداداته الافتراضية.
					</span>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>no-store</h1>
					<span className='text-muted-foreground text-rtl'>
						يمنع تخزين الاستجابة في ذاكرة التخزين المؤقت. يتم دائمًا جلب المورد من الشبكة، ولا يتم حفظ الاستجابة للاستخدام المستقبلي.
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم للمحتوى الحساس أو المتغير باستمرار، حيث يجب التأكد من الحصول على أحدث نسخة في كل طلب.{' '}
					</span>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>no-cache</h1>
					<span className='text-muted-foreground text-rtl'>
						يُجبر المتصفح على التحقق من صحة النسخة المخبأة مع الخادم قبل استخدامها، مما يضمن الحصول على أحدث نسخة متاحة. إذا كانت النسخة
						المخبأة صالحة، سيتم استخدامها؛ وإلا، سيتم جلب نسخة جديدة من الخادم وتحديث الكاش.{' '}
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم عندما يكون من المحتمل أن يتغير المحتوى، ولكن لا يزال من المفيد استخدام النسخة المخبأة بعد التحقق من تحديثها.{' '}
					</span>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>force-cache</h1>
					<span className='text-muted-foreground text-rtl'>
						يُجبر المتصفح على استخدام النسخة المخبأة إذا كانت متاحة، حتى لو كانت قديمة. إذا لم تكن هناك نسخة مخبأة، يتم جلب المورد من الشبكة
						وتخزينه في الكاش للاستخدام المستقبلي.
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم عندما يكون الأداء مهمًا وتكون البيانات نادرًا ما تتغير، مثل ملفات الوسائط الثابتة.
					</span>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>reload</h1>
					<span className='text-muted-foreground text-rtl'>
						يُجبر المتصفح على جلب المورد من الشبكة، متجاهلاً أي نسخة مخبأة. بعد الجلب، يتم تحديث الكاش بالاستجابة الجديدة.
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم عندما تحتاج إلى التأكد من الحصول على أحدث نسخة من المورد وتحديث الكاش بالبيانات الجديدة.
					</span>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>only-if-cached</h1>
					<span className='text-muted-foreground text-rtl'>
						يُجبر المتصفح على استخدام النسخة المخبأة فقط. إذا لم تكن هناك نسخة مخبأة، يفشل الطلب دون محاولة جلب المورد من الشبكة.
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم لتجنب طلبات الشبكة غير الضرورية، والاعتماد فقط على البيانات المخبأة. يجب أن يكون الطلب في هذا الوضع من نفس الأصل
						(origin) ليتمكن من الوصول إلى الكاش
					</span>
				</div>
			</div>

			<div className='flex flex-col gap-4'>
				<h4 className='font-bold text-3xl text-rtl'>سلوك جلب البيانات</h4>
				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>force-static [export const dynamic = 'force-static' ]</h1>
					<span className='text-muted-foreground text-rtl'>
						يُجبر Next.js على توليد الصفحة بشكل ثابت أثناء وقت البناء (build time)، مما يعني أن المحتوى يتم إنشاؤه مرة واحدة ولا يتغير حتى
						يتم إعادة بناء التطبيق.
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم للمحتوى الذي نادرًا ما يتغير، مثل الصفحات التعريفية أو المقالات الثابتة.
					</span>
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl'>force-dynamic [export const dynamic = 'force-dynamic' ]</h1>
					<span className='text-muted-foreground text-rtl'>
						يُجبر Next.js على توليد الصفحة ديناميكيًا في كل مرة يتم فيها طلبها، مما يعني أن المحتوى يمكن أن يتغير بناءً على البيانات أو
						تفاعلات المستخدم في وقت التشغيل.
					</span>
					<span className='text-muted-foreground text-rtl'>
						يُستخدم للصفحات التي تعتمد على بيانات متغيرة باستمرار أو تحتاج إلى تخصيص للمستخدم، مثل لوحات التحكم أو الصفحات الشخصية.
					</span>
				</div>
			</div>
		</section>
	);
};

export default CacheInFetchMethod;
