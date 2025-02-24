import React from 'react';

const RenderingPatterns = () => {
	return (
		<section className='flex flex-col gap-4'>
			<section className='flex flex-col gap-4'>
				<h4 className='font-bold text-3xl'>Diffrent Between SSR And RSC </h4>
				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl text-2xl'>SSR (Server-Side Rendering)</h1>
					<span className='text-muted-foreground text-rtl'>
						تقنية يتم فيها توليد محتوى الصفحة بالكامل على الخادم عند كل طلب، ثم يتم إرسال HTML الجاهز إلى المتصفح.
					</span>
					<h1 className='font-bold text-rtl'>اّلية العمل</h1>

					<span className='text-muted-foreground text-rtl'>
						عند طلب المستخدم لصفحة ما، يقوم الخادم بتنفيذ الكود المطلوب لتجميع البيانات وتوليد HTML.
					</span>
					<span className='text-muted-foreground text-rtl'>يتم إرسال هذا الـHTML إلى المتصفح، مما يتيح للمستخدم رؤية المحتوى بسرعة.</span>
					<span className='text-muted-foreground text-rtl'>
						بعد ذلك، يتم تحميل وتشغيل ملفات JavaScript في المتصفح لجعل الصفحة تفاعلية (عملية تُعرف بـ "hydration").
					</span>
					<h1 className='font-bold text-rtl'>المزايا</h1>
					<span className='text-muted-foreground text-rtl'>تحسين أداء محركات البحث (SEO) بفضل توفر محتوى HTML كامل عند التحميل الأول.</span>
					<span className='text-muted-foreground text-rtl'>تسريع عرض المحتوى للمستخدم، خاصة في الصفحات ذات المحتوى الديناميكي.</span>
					<h1 className='font-bold text-rtl'>العيوب</h1>
					<span className='text-muted-foreground text-rtl'>قد تكون عملية الـhydration مكلفة من حيث الأداء، خاصة في التطبيقات الكبيرة.</span>
					<span className='text-muted-foreground text-rtl'>زيادة الحمل على الخادم نظرًا لتوليد الصفحات عند كل طلب.</span>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl text-2xl'>RSC (React Server Components)</h1>
					<span className='text-muted-foreground text-rtl'>
						ميزة حديثة في React تتيح تنفيذ بعض المكونات على الخادم وإرسالها كـHTML إلى المتصفح، مع الحفاظ على تفاعلية المكونات الأخرى على
						الجانب العميل.
					</span>

					<h1 className='font-bold text-rtl'>اّلية العمل</h1>
					<span className='text-muted-foreground text-rtl'>
						يتم تقسيم المكونات إلى نوعين: مكونات خادم (Server Components) ومكونات عميل (Client Components).
					</span>
					<span className='text-muted-foreground text-rtl'>
						المكونات التي لا تحتاج إلى تفاعلية أو تعتمد على بيانات من الخادم يمكن تنفيذها على الخادم وإرسال HTML الناتج إلى المتصفح.
					</span>
					<span className='text-muted-foreground text-rtl'>المكونات التفاعلية تُنفذ على المتصفح وتتعامل مع تفاعلات المستخدم مباشرة.</span>

					<h1 className='font-bold text-rtl'>المزايا</h1>
					<span className='text-muted-foreground text-rtl'>تقليل حجم JavaScript المرسل إلى المتصفح، مما يحسن من أداء التحميل.</span>
					<span className='text-muted-foreground text-rtl'>
						إمكانية الوصول المباشر إلى قواعد البيانات والموارد الآمنة من خلال مكونات الخادم.
					</span>
					<span className='text-muted-foreground text-rtl'>تحسين تجربة المستخدم من خلال تقليل زمن الانتظار لعرض المحتوى.</span>

					<h1 className='font-bold text-rtl'>العيوب</h1>
					<span className='text-muted-foreground text-rtl'>تعقيد في إدارة المشروع بسبب الحاجة إلى التفريق بين مكونات الخادم والعميل.</span>
					<span className='text-muted-foreground text-rtl'>قد يتطلب تكاملاً أعمق مع البنية التحتية للخادم وأدوات البناء.</span>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-rtl text-2xl'>Summary</h1>
					<h1 className='font-bold text-rtl'>التنفيذ</h1>
					<span className='text-muted-foreground text-rtl'>في SSR، يتم تنفيذ الصفحة بأكملها على الخادم عند كل طلب.</span>
					<span className='text-muted-foreground text-rtl'>
						في RSC، يتم تنفيذ بعض المكونات على الخادم والبعض الآخر على العميل، مما يتيح توزيعًا أفضل للمهام وتحسينًا للأداء.
					</span>
					<h1 className='font-bold text-rtl'>الاداء</h1>
					<span className='text-muted-foreground text-rtl'>
						SSR قد يؤدي إلى زيادة الحمل على الخادم وزمن استجابة أطول بسبب توليد الصفحات عند كل طلب.
					</span>
					<span className='text-muted-foreground text-rtl'>
						RSC يقلل من حجم JavaScript المرسل ويتيح تحميلًا أسرع للمحتوى غير التفاعلي، مما يحسن من تجربة المستخدم.
					</span>
				</div>
			</section>

			<section className='flex flex-col gap-4'>
				<h1 className='font-bold text-rtl text-2xl'>Server-Side Generation</h1>
				<span className='text-muted-foreground text-rtl'>
					يتم إنشاء صفحات HTML ثابتة مسبقًا أثناء عملية البناء (build time)، مما يعني أن المحتوى يُولد مرة واحدة ويُعاد استخدامه لكل طلب.
				</span>
				<h1 className='font-bold text-rtl'>المزايا</h1>
				<span className='text-muted-foreground text-rtl'>يُحسن من أداء الموقع وسرعة تحميل الصفحات</span>
				<span className='text-muted-foreground text-rtl'>
					يُعتبر مثاليًا للمحتوى الذي لا يتغير بشكل متكرر، مثل المدونات وصفحات التوثيق.
				</span>
				<span className='text-muted-foreground text-rtl'>حسين محركات البحث (SEO)</span>
				<span className='text-muted-foreground text-rtl'>
					تقليل الحمل على الخادم: بما أن الصفحات ثابتة، لا يحتاج الخادم إلى معالجة الطلبات بشكل متكرر، مما يقلل من استهلاك الموارد.
				</span>
				<h1 className='font-bold text-rtl'>العيوب</h1>
				<span className='text-muted-foreground text-rtl'>
					تحديث المحتوى: إذا كان المحتوى يتغير بشكل متكرر، فقد يتطلب إعادة بناء الموقع بأكمله لتحديث الصفحات، مما قد يكون غير عملي.
				</span>
				<span className='text-muted-foreground text-rtl'>
					عدم ملاءمة المحتوى الديناميكي: لا يُعتبر SSG مناسبًا للصفحات التي تعتمد على بيانات تتغير باستمرار أو تحتاج إلى تخصيص للمستخدم.
				</span>
			</section>

			<section className='flex flex-col gap-4'>
				<h1 className='font-bold text-rtl text-2xl'>Increament-Static Generation</h1>
				<span className='text-muted-foreground text-rtl'>
					تجمع هذه الطريقة بين مزايا التصيير الثابت (Static Site Generation - SSG) والتصيير من جانب الخادم (Server-Side Rendering - SSR).
					يتم إنشاء الصفحات كملفات HTML ثابتة أثناء عملية البناء، ولكن مع إمكانية إعادة توليد هذه الصفحات بشكل ديناميكي عند الطلب بعد فترة
					زمنية محددة
				</span>
				<h1 className='font-bold text-rtl'>المزايا</h1>
				<span className='text-muted-foreground text-rtl'>تحديث المحتوى بشكل منتظم دون الحاجة إلى إعادة بناء الموقع بالكامل</span>
				<span className='text-muted-foreground text-rtl'>أداءً عاليًا مع القدرة على التعامل مع البيانات الديناميكية</span>
			</section>

			<section className='flex flex-col gap-4'>
				<h1 className='font-bold text-rtl text-2xl'>Client-Side Generation</h1>
				<span className='text-muted-foreground text-rtl'>
					تم تحميل صفحة HTML أساسية فارغة نسبيًا، ثم يقوم المتصفح بتنفيذ ملفات JavaScript لجلب المحتوى المطلوب وعرضه. يتم تنفيذ جلب البيانات
					والتصيير بالكامل في المتصفح بعد تحميل الصفحة
				</span>
				<h1 className='font-bold text-rtl'>المزايا</h1>
				<span className='text-muted-foreground text-rtl'>
					تجربة مستخدم تفاعلية: يتم تنفيذ الشيفرة في متصفح المستخدم، مما يتيح تحديث المحتوى وتفاعلات المستخدم دون إعادة تحميل الصفحة.
				</span>
				<span className='text-muted-foreground text-rtl'>
					ملاءمة التطبيقات الديناميكية: يُفضل استخدام CSR في التطبيقات التي تتطلب تحديثات مستمرة وتفاعلات معقدة مع المستخدم.
				</span>
				<h1 className='font-bold text-rtl'>العيوب</h1>
				<span className='text-muted-foreground text-rtl'>تأثير على SEO:</span>
				<span className='text-muted-foreground text-rtl'>
					أداء أولي أبطأ: قد يكون وقت التحميل الأولي للصفحة أطول، حيث يتعين على المتصفح تحميل وتنفيذ ملفات JavaScript قبل عرض المحتوى.
				</span>
			</section>
		</section>
	);
};

export default RenderingPatterns;
