import React from 'react';
import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';

const OptimizationTools = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='mt-8 text-rtl'>
				<h3 className='text-2xl font-bold mb-4'>مقاييس تحسين الأداء الرئيسية</h3>

				<div className='mb-8'>
					<h4 className='text-xl font-semibold mb-2'>1. FCP: First Contentful Paint (الرسم الأول للمحتوى)</h4>
					<h5 className='text-lg font-medium mb-2'>التعريف:</h5>
					<p className='mb-2'>
						FCP هو مقياس يقيس الوقت الذي يستغرقه المتصفح لعرض أول جزء من المحتوى المرئي على الشاشة بعد بدء تحميل الصفحة.
					</p>
					<ul className='list-inside pl-6 mb-2'>
						<li>المحتوى المرئي يشمل النصوص، الصور، عناصر &lt;canvas&gt;، أو أي عنصر مرئي آخر يظهر للمستخدم.</li>
						<li>يُعتبر مؤشرًا مبكرًا لسرعة تحميل الصفحة من وجهة نظر المستخدم.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>الأهمية:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>يعكس FCP الانطباع الأول للمستخدم عن سرعة الموقع. إذا كان الـ FCP سريعًا، يشعر المستخدم أن الصفحة تتفاعل بسرعة.</li>
						<li>يؤثر على تجربة المستخدم ورضا العملاء، وقد يؤثر على معدل الارتداد (Bounce Rate) إذا كان بطيئًا.</li>
						<li>يُستخدم من قِبل محركات البحث مثل Google كجزء من تقييم تجربة المستخدم.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيف يتم القياس؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>يُقاس بالثواني، ويبدأ من لحظة بدء تحميل الصفحة (Navigation Start) حتى ظهور أول عنصر محتوى.</li>
						<li>الأدوات المستخدمة: Lighthouse، PageSpeed Insights، Chrome DevTools، أو مكتبات مثل web-vitals.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>النطاق الموصى به:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>جيد: أقل من 1.8 ثانية.</li>
						<li>يحتاج إلى تحسين: بين 1.8 و3 ثوانٍ.</li>
						<li>ضعيف: أكثر من 3 ثوانٍ.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيفية التحسين؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>تقليل وقت استجابة الخادم: استخدام شبكات توصيل المحتوى (CDN) أو تحسين أداء الخادم.</li>
						<li>تقليل وقت تحميل الموارد: ضغط الملفات (CSS، JavaScript)، وتقليل حجم الصور.</li>
						<li>التحميل المسبق للموارد الهامة: استخدام &lt;link rel="preload"&gt; لتحميل الموارد الأساسية مبكرًا.</li>
						<li>تقليل وقت التنفيذ البرمجي: تحسين أداء JavaScript وتقليل العمليات الحسابية في الخيط الرئيسي.</li>
					</ul>
				</div>

				<div className='mb-8'>
					<h4 className='text-xl font-semibold mb-2'>2. LCP: Largest Contentful Paint (أكبر رسم للمحتوى)</h4>
					<h5 className='text-lg font-medium mb-2'>التعريف:</h5>
					<p className='mb-2'>
						LCP يقيس الوقت الذي يستغرقه المتصفح لعرض أكبر عنصر محتوى مرئي في نافذة العرض (Viewport) بعد بدء تحميل الصفحة.
					</p>
					<ul className='list-inside pl-6 mb-2'>
						<li>
							العناصر التي يتم أخذها بعين الاعتبار تشمل: &lt;img&gt;، &lt;video&gt;، خلفيات الصور المحددة في CSS، النصوص داخل &lt;p&gt; أو
							&lt;h1&gt;، وعناصر &lt;div&gt; التي تحتوي على محتوى مرئي كبير.
						</li>
						<li>يُعتبر مؤشرًا لسرعة تحميل المحتوى الرئيسي الذي يهم المستخدم.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>الأهمية:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>يركز على تجربة المستخدم من حيث إدراك اكتمال تحميل الصفحة الرئيسية.</li>
						<li>إذا كان الـ LCP بطيئًا، قد يشعر المستخدم أن الصفحة غير مكتملة أو غير قابلة للاستخدام.</li>
						<li>يؤثر بشكل مباشر على تصنيفات محركات البحث، حيث تُعطي Google أولوية للصفحات ذات الـ LCP السريع.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيف يتم القياس؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>يُقاس بالثواني، ويُحدد العنصر الأكبر بناءً على حجمه المرئي في نافذة العرض.</li>
						<li>الأدوات: Lighthouse، PageSpeed Insights، Chrome DevTools، أو مكتبة web-vitals.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>النطاق الموصى به:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>جيد: أقل من 2.5 ثانية.</li>
						<li>يحتاج إلى تحسين: بين 2.5 و4 ثوانٍ.</li>
						<li>ضعيف: أكثر من 4 ثوانٍ.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيفية التحسين؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>تحسين تحميل الصور الكبيرة: استخدام تنسيقات حديثة مثل WebP، التحميل التدريجي (Lazy Loading)، وضغط الصور.</li>
						<li>تقليل وقت استجابة الخادم: تحسين TTFB (Time to First Byte) باستخدام خوادم أسرع أو CDN.</li>
						<li>تقليل تأخير JavaScript: تأجيل تحميل الجافا سكريبت غير الضروري باستخدام defer أو async.</li>
						<li>تحسين عرض النصوص: استخدام خطوط محسّنة أو تحميل الخطوط مسبقًا لتجنب تأخير عرض النصوص.</li>
					</ul>
				</div>

				<div className='mb-8'>
					<h4 className='text-xl font-semibold mb-2'>3. TBT: Total Blocking Time (إجمالي وقت الحظر)</h4>
					<h5 className='text-lg font-medium mb-2'>التعريف:</h5>
					<p className='mb-2'>
						TBT يقيس إجمالي الوقت الذي تكون فيه الصفحة غير تفاعلية بسبب تنفيذ مهام طويلة (Long Tasks) في الخيط الرئيسي (Main Thread).
					</p>
					<ul className='list-inside pl-6 mb-2'>
						<li>المهمة الطويلة هي أي مهمة تستغرق أكثر من 50 ميلي ثانية، والوقت الزائد عن 50 ميلي ثانية يُحسب كجزء من TBT.</li>
						<li>يُعتبر مؤشرًا لمدى استجابة الصفحة لتفاعلات المستخدم (مثل النقر أو الكتابة).</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>الأهمية:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>يعكس مدى سلاسة التفاعل مع الصفحة. إذا كان الـ TBT مرتفعًا، قد تبدو الصفحة متوقفة أو بطيئة الاستجابة.</li>
						<li>يرتبط ارتباطًا وثيقًا بمقياس Time to Interactive (TTI) ويُستخدم لتقييم الأداء في بيئات المختبر.</li>
						<li>يساعد في تحديد المشكلات المتعلقة بتنفيذ JavaScript الثقيل.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيف يتم القياس؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>يُقاس بالمللي ثانية، ويُحسب بجمع الوقت الزائد لكل مهمة طويلة.</li>
						<li>الأدوات: Lighthouse (في بيئة المختبر)، Chrome DevTools (Performance Panel).</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>النطاق الموصى به:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>جيد: أقل من 200 ميلي ثانية.</li>
						<li>يحتاج إلى تحسين: بين 200 و600 ميلي ثانية.</li>
						<li>ضعيف: أكثر من 600 ميلي ثانية.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيفية التحسين؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>تقسيم المهام الطويلة: تقسيم الجافا سكريبت إلى مهام أصغر باستخدام تقنيات مثل setTimeout أو Web Workers.</li>
						<li>تقليل تنفيذ JavaScript: تحسين الكود، تقليل استخدام المكتبات الثقيلة، أو استخدام تحميل تدريجي.</li>
						<li>تقليل وقت معالجة DOM: تقليل التغييرات في DOM والاستعلامات المعقدة.</li>
						<li>استخدام تحميل غير متزامن: تحميل الموارد غير الضرورية بشكل غير متزامن لتجنب حظر الخيط الرئيسي.</li>
					</ul>
				</div>

				<div className='mb-8'>
					<h4 className='text-xl font-semibold mb-2'>4. CLS: Cumulative Layout Shift (الإزاحة التراكمية للتخطيط)</h4>
					<h5 className='text-lg font-medium mb-2'>التعريف:</h5>
					<p className='mb-2'>CLS يقيس الإزاحة غير المتوقعة في تخطيط العناصر المرئية على الصفحة أثناء تحميلها أو التفاعل معها.</p>
					<ul className='list-inside pl-6 mb-2'>
						<li>يحدث الإزاحة عندما تتحرك العناصر (مثل الصور، الإعلانات، أو النصوص) بشكل مفاجئ بسبب تحميل متأخر أو تغييرات ديناميكية.</li>
						<li>يتم حسابه بضرب نسبة المسافة التي تحركتها العناصر في نسبة المنطقة المتأثرة في نافذة العرض.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>الأهمية:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>الإزاحات غير المتوقعة تُسبب إزعاجًا للمستخدم، مثل النقر على زر خاطئ بسبب تحرك العناصر.</li>
						<li>تؤثر على سهولة الاستخدام وتجربة المستخدم، خاصة على الأجهزة المحمولة.</li>
						<li>تُعتبر عاملاً مهماً في تحسين محركات البحث، حيث تُفضل Google الصفحات ذات الـ CLS المنخفض.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيف يتم القياس؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>يُقاس كنسبة مئوية (رقم بدون وحدة)، حيث تُحسب كل إزاحة ويتم جمعها للحصول على النتيجة النهائية.</li>
						<li>الأدوات: Lighthouse، PageSpeed Insights، Chrome DevTools، أو مكتبة web-vitals.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>النطاق الموصى به:</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>جيد: أقل من 0.1.</li>
						<li>يحتاج إلى تحسين: بين 0.1 و0.25.</li>
						<li>ضعيف: أكثر من 0.25.</li>
					</ul>

					<h5 className='text-lg font-medium mb-2'>كيفية التحسين؟</h5>
					<ul className='list-inside pl-6 mb-2'>
						<li>تحديد أبعاد الصور والفيديوهات: إضافة سمات width وheight للصور لتجنب تغيير المساحة أثناء التحميل.</li>
						<li>تجنب إضافة محتوى ديناميكي: عدم إدراج إعلانات أو عناصر فوق المحتوى الموجود دون تخصيص مساحة مسبقة.</li>
						<li>تحميل الخطوط بشكل صحيح: استخدام font-display: swap لتجنب إزاحة النصوص أثناء تحميل الخطوط.</li>
						<li>اختبار التخطيط على أجهزة مختلفة: التأكد من استقرار التخطيط عبر الأجهزة المحمولة والمكتبية.</li>
					</ul>
				</div>

				<div className='mb-8'>
					<h4 className='text-xl font-semibold mb-2'>مقارنة سريعة:</h4>
					<table className='w-full border-collapse border border-gray-300'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 p-2'>المقياس</th>
								<th className='border border-gray-300 p-2'>ما يقيسه</th>
								<th className='border border-gray-300 p-2'>الوحدة</th>
								<th className='border border-gray-300 p-2'>الهدف الأمثل</th>
								<th className='border border-gray-300 p-2'>الأهمية</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border border-gray-300 p-2'>FCP</td>
								<td className='border border-gray-300 p-2'>وقت ظهور أول محتوى</td>
								<td className='border border-gray-300 p-2'>ثوانٍ</td>
								<td className='border border-gray-300 p-2'>&lt; 1.8 ثانية</td>
								<td className='border border-gray-300 p-2'>الانطباع الأول للسرعة</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>LCP</td>
								<td className='border border-gray-300 p-2'>وقت ظهور أكبر محتوى</td>
								<td className='border border-gray-300 p-2'>ثوانٍ</td>
								<td className='border border-gray-300 p-2'>&lt; 2.5 ثانية</td>
								<td className='border border-gray-300 p-2'>تحميل المحتوى الرئيسي</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>TBT</td>
								<td className='border border-gray-300 p-2'>وقت عدم التفاعلية</td>
								<td className='border border-gray-300 p-2'>ميلي ثانية</td>
								<td className='border border-gray-300 p-2'>&lt; 200 ميلي ثانية</td>
								<td className='border border-gray-300 p-2'>استجابة الصفحة</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>CLS</td>
								<td className='border border-gray-300 p-2'>إزاحة التخطيط</td>
								<td className='border border-gray-300 p-2'>بدون وحدة</td>
								<td className='border border-gray-300 p-2'>&lt; 0.1</td>
								<td className='border border-gray-300 p-2'>استقرار التخطيط</td>
							</tr>

							<tr>
								<td className='border border-gray-300 p-2'>ٍSpeed Index</td>
								<td className='border border-gray-300 p-2'>تجربة المستخدم البصرية</td>
								<td className='border border-gray-300 p-2'>ثانية</td>
								<td className='border border-gray-300 p-2'>-</td>
								<td className='border border-gray-300 p-2'>سرعة تحميل المحتوى المرئي</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='mb-8'>
					<h4 className='text-xl font-semibold mb-2'>ملاحظات إضافية:</h4>
					<ul className='list-inside pl-6 mb-2'>
						<li>هذه المقاييس مترابطة، فتحسين أحدها قد يؤثر إيجابيًا على الآخرين (مثل تقليل JavaScript يحسن TBT وLCP).</li>
						<li>
							تختلف النتائج بناءً على بيئة الاختبار (مختبر أو ميدان)، لذا يُفضل استخدام بيانات الميدان (Real User Monitoring) لفهم تجربة
							المستخدم الفعلية.
						</li>
						<li>للحصول على تحسين شامل، ركز على تحسين أداء الخادم، تقليل الموارد الثقيلة، واختبار الموقع على أجهزة مختلفة.</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default OptimizationTools;
