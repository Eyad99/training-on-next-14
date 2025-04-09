import React from 'react';

interface CacheItemProps {
	title: string;
	descriptions: string[];
}

const CacheItem = ({ title, descriptions }: CacheItemProps) => (
	<div className='flex flex-col gap-2'>
		<h2 className='font-bold text-xl text-rtl'>{title}</h2>
		{descriptions.map((description, index) => (
			<p key={index} className='text-muted-foreground text-rtl'>
				{description}
			</p>
		))}
	</div>
);

interface SectionProps {
	title: string;
	items: CacheItemProps[];
}

const Section = ({ title, items }: SectionProps) => (
	<div className='flex flex-col gap-4'>
		<h3 className='font-bold text-2xl text-rtl'>{title}</h3>
		<div className='flex flex-col gap-4'>
			{items.map((item, index) => (
				<CacheItem key={index} {...item} />
			))}
		</div>
	</div>
);

const CacheInFetchMethod = () => {
	const cacheTypes: CacheItemProps[] = [
		{
			title: 'default',
			descriptions: [
				'يعتمد على سلوك التخزين المؤقت الافتراضي للمتصفح. إذا كانت هناك نسخة مخبأة صالحة، فقد يتم استخدامها، وإلا سيتم جلب المورد من الشبكة',
				'يُستخدم عندما ترغب في السماح للمتصفح بإدارة التخزين المؤقت بناءً على إعداداته الافتراضية.',
			],
		},
		{
			title: 'no-store',
			descriptions: [
				'يمنع تخزين الاستجابة في ذاكرة التخزين المؤقت. يتم دائمًا جلب المورد من الشبكة، ولا يتم حفظ الاستجابة للاستخدام المستقبلي.',
				'يُستخدم للمحتوى الحساس أو المتغير باستمرار، حيث يجب التأكد من الحصول على أحدث نسخة في كل طلب.',
			],
		},
		{
			title: 'no-cache',
			descriptions: [
				'يُجبر المتصفح على التحقق من صحة النسخة المخبأة مع الخادم قبل استخدامها، مما يضمن الحصول على أحدث نسخة متاحة. إذا كانت النسخة المخبأة صالحة، سيتم استخدامها؛ وإلا، سيتم جلب نسخة جديدة من الخادم وتحديث الكاش.',
				'يُستخدم عندما يكون من المحتمل أن يتغير المحتوى، ولكن لا يزال من المفيد استخدام النسخة المخبأة بعد التحقق من تحديثها.',
			],
		},
		{
			title: 'force-cache',
			descriptions: [
				'يُجبر المتصفح على استخدام النسخة المخبأة إذا كانت متاحة، حتى لو كانت قديمة. إذا لم تكن هناك نسخة مخبأة، يتم جلب المورد من الشبكة وتخزينه في الكاش للاستخدام المستقبلي.',
				'يُستخدم عندما يكون الأداء مهمًا وتكون البيانات نادرًا ما تتغير، مثل ملفات الوسائط الثابتة.',
			],
		},
		{
			title: 'reload',
			descriptions: [
				'يُجبر المتصفح على جلب المورد من الشبكة، متجاهلاً أي نسخة مخبأة. بعد الجلب، يتم تحديث الكاش بالاستجابة الجديدة.',
				'يُستخدم عندما تحتاج إلى التأكد من الحصول على أحدث نسخة من المورد وتحديث الكاش بالبيانات الجديدة.',
			],
		},
		{
			title: 'only-if-cached',
			descriptions: [
				'يُجبر المتصفح على استخدام النسخة المخبأة فقط. إذا لم تكن هناك نسخة مخبأة، يفشل الطلب دون محاولة جلب المورد من الشبكة.',
				'يُستخدم لتجنب طلبات الشبكة غير الضرورية، والاعتماد فقط على البيانات المخبأة. يجب أن يكون الطلب في هذا الوضع من نفس الأصل (origin) ليتمكن من الوصول إلى الكاش',
			],
		},
	];

	const behaviorTypes: CacheItemProps[] = [
		{
			title: "force-static [export const dynamic = 'force-static' ]",
			descriptions: [
				'يُجبر Next.js على توليد الصفحة بشكل ثابت أثناء وقت البناء (build time)، مما يعني أن المحتوى يتم إنشاؤه مرة واحدة ولا يتغير حتى يتم إعادة بناء التطبيق.',
				'يُستخدم للمحتوى الذي نادرًا ما يتغير، مثل الصفحات التعريفية أو المقالات الثابتة.',
			],
		},
		{
			title: "force-dynamic [export const dynamic = 'force-dynamic' ]",
			descriptions: [
				'يُجبر Next.js على توليد الصفحة ديناميكيًا في كل مرة يتم فيها طلبها، مما يعني أن المحتوى يمكن أن يتغير بناءً على البيانات أو تفاعلات المستخدم في وقت التشغيل.',
				'يُستخدم للصفحات التي تعتمد على بيانات متغيرة باستمرار أو تحتاج إلى تخصيص للمستخدم، مثل لوحات التحكم أو الصفحات الشخصية.',
			],
		},
	];

	return (
		<section className='flex flex-col gap-6'>
			<div className='flex flex-col gap-2'>
				<h1 className='font-bold text-xl'>Next 14 [force-cache by default]</h1>
				<h1 className='font-bold text-xl'>Next 15 [no-store by default]</h1>
			</div>

			<Section title='انواع القيم ضمن الكاش' items={cacheTypes} />
			<Section title='سلوك جلب البيانات' items={behaviorTypes} />
		</section>
	);
};

export default CacheInFetchMethod;
