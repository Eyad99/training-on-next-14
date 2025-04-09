import React from 'react';

interface SectionItemProps {
	title: string;
	description: string;
}

const SectionItem = ({ title, description }: SectionItemProps) => (
	<div className='flex flex-col gap-2'>
		<h3 className='font-bold text-2xl text-rtl'>{title}</h3>
		<p className='text-muted-foreground text-rtl'>{description}</p>
	</div>
);

interface FeatureItemProps {
	title: string;
	description: string;
	features?: string[];
}

const FeatureItem = ({ title, description, features }: FeatureItemProps) => (
	<div className='flex flex-col gap-2'>
		<h4 className='font-bold text-lg text-rtl'>{title}</h4>
		<p className='text-muted-foreground text-rtl'>{description}</p>
		{features && features.length > 0 && (
			<ul className='flex flex-col gap-1 px-4'>
				{features.map((feature, index) => (
					<li key={index} className='text-muted-foreground text-rtl'>
						• {feature}
					</li>
				))}
			</ul>
		)}
	</div>
);

const ServerComponentAndServerAction = () => {
	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<SectionItem
				title='مكونات الخادم (Server Components)'
				description='مكونات React التي تُنفّذ بالكامل على الخادم، مما يقلل من حجم JavaScript المرسل إلى العميل ويحسّن الأداء.'
			/>

			<FeatureItem
				title='المميزات الرئيسية:'
				description='مكونات الخادم تتميز بعدة خصائص تجعلها مثالية لعرض المحتوى الثابت أو شبه الثابت.'
				features={[
					'التنفيذ الكامل على الخادم',
					'جلب البيانات مباشرةً من قواعد البيانات أو واجهات برمجة التطبيقات',
					'لا تحتاج إلى استخدام دوال مثل getServerSideProps',
					'مثالية لعرض المحتوى الثابت أو شبه الثابت',
				]}
			/>

			<SectionItem
				title='إجراءات الخادم (Server Actions)'
				description='دوال غير متزامنة (async) تُنفّذ على الخادم وتُستخدم لمعالجة التفاعلات وتحديث البيانات.'
			/>

			<FeatureItem
				title='المميزات الرئيسية:'
				description='إجراءات الخادم توفر طريقة آمنة وفعالة للتعامل مع التفاعلات على الخادم.'
				features={[
					'تُعرّف باستخدام التوجيه "use server"',
					'تُستخدم لمعالجة التفاعلات مثل إرسال النماذج',
					'يمكن استدعاؤها من مكونات العميل أو مكونات الخادم',
					'يمكن تعريفها داخل المكونات أو في ملفات منفصلة',
				]}
			/>

			<SectionItem title='الاختلافات الرئيسية' description='هناك فروق جوهرية بين مكونات الخادم وإجراءات الخادم من حيث الغرض والتنفيذ.' />

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<FeatureItem
					title='الغرض'
					description='الاستخدام الرئيسي لكل منهما'
					features={['مكونات الخادم: لعرض المحتوى', 'إجراءات الخادم: لمعالجة التفاعلات وتحديث البيانات']}
				/>

				<FeatureItem
					title='التنفيذ'
					description='كيفية تنفيذ كل منهما'
					features={['مكونات الخادم: مكونات React تُنفّذ على الخادم', 'إجراءات الخادم: دوال تُنفّذ على الخادم ويمكن استدعاؤها من المكونات']}
				/>

				<FeatureItem
					title='التفاعل مع العميل'
					description='كيفية التعامل مع مكونات العميل'
					features={['مكونات الخادم: تُنفّذ على الخادم فقط', 'إجراءات الخادم: يمكن استدعاؤها من مكونات العميل']}
				/>

				<FeatureItem
					title='الأداء'
					description='تأثير كل منهما على أداء التطبيق'
					features={['مكونات الخادم: تقلل حجم JavaScript على العميل', 'إجراءات الخادم: توفر أمانًا أكبر وإدارة أفضل للتفاعلات']}
				/>
			</div>
		</section>
	);
};

export default ServerComponentAndServerAction;
