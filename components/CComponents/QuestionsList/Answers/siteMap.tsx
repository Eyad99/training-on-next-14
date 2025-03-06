import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const SiteMap = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'>SiteMap</h4>
				<span className='text-muted-foreground'>
					هو عبارة عن ملف بيجمع كل الروابط المهمة للموقع مشان يساعد محرك البحث يفهم بنية الموقع بسهولة.
				</span>
				<span className='text-muted-foreground'>
					ممكن يضم معلومات اضافية متل اخر تحديث للصفحات , تكرار التحديثات , اهمية الصفحة مقارنة بباقي الصفحات في الموقع .
				</span>
				<span className='text-muted-foreground'>
					وقت بينعمل جينيريت للسايتماب بشكل ديناميكي بيضمن هاد الشي انو بيحدث نفسو تلقائيا مع كل المحتويات الجديدة يلي بتصير
				</span>
			</div>
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'>📈 فوائد SiteMap (ليش مهم؟)</h4>

				<h6 className='font-bold text-lg'>1️⃣ تحسين الأرشفة (SEO)</h6>
				<span className='text-muted-foreground'>محركات البحث مثل Google و Bing تستخدم الـ SiteMap لفهم هيكل الموقع.</span>
				<span className='text-muted-foreground'>تساعد عناكب البحث (Crawlers) في اكتشاف الصفحات الجديدة أسرع.</span>
				<span className='text-muted-foreground'>تضمن أن جميع الصفحات المهمة تتم أرشفتها.</span>

				<h6 className='font-bold text-lg'>2️⃣ إدارة المواقع الكبيرة</h6>
				<span className='text-muted-foreground'>
					إذا كان عندك موقع ضخم (آلاف الصفحات)، فمن الصعب على عناكب البحث اكتشاف كل صفحة بسهولة.
				</span>
				<span className='text-muted-foreground'>
					الـ SiteMap يساعد محركات البحث في التنقل بين الصفحات حتى لو كانت عميقة أو لا يوجد روابط مباشرة إليها.
				</span>

				<h6 className='font-bold text-lg'>3️⃣ دعم أنواع المحتوى المختلفة</h6>
				<span className='text-muted-foreground'>يمكن تضمين: الصور - افيديوهات - المقالات - المنتجات</span>

				<h6 className='font-bold text-lg'>4️⃣ تحسين فحص Google Search Console</h6>
				<span className='text-muted-foreground'>في Google Search Console يمكنك إضافة رابط SiteMap، ومن خلاله:</span>
				<span className='text-muted-foreground'>تشوف عدد الصفحات المؤرشفة.</span>
				<span className='text-muted-foreground'>تعرف لو في أخطاء زحف (Crawl Errors).</span>
				<span className='text-muted-foreground'>تتأكد أن الموقع بالكامل ظاهر لمحركات البحث.</span>

				<h6 className='font-bold text-lg'>5️⃣ تسهيل التعامل مع المواقع الديناميكية</h6>
				<span className='text-muted-foreground'>
					لو عندك موقع مثل مدونة أو متجر إلكتروني فيه تحديثات مستمرة (منتجات جديدة - مقالات جديدة)، فإن تحديث SiteMap تلقائيًا يضمن أن
					محركات البحث تعرف على التحديثات.
				</span>
			</div>
			<div className='flex flex-col text-rtl'>
				<table>
					<thead className='text-rtl'>
						<tr>
							<th>الوصف</th>
							<th>الفائدة</th>
						</tr>
					</thead>
					<tbody className='text-rtl'>
						<tr>
							<td>تسهل اكتشاف وأرشفة الصفحات</td>
							<td>تحسين SEO </td>
						</tr>
						<tr>
							<td>تعرف جوجل بصفحاتك الجديدة بشكل أسرع</td>
							<td>تسريع الأرشفة </td>
						</tr>
						<tr>
							<td>تساعد في تنظيم وفهرسة المواقع الضخمة</td>
							<td>إدارة المحتوى الكبير </td>
						</tr>
						<tr>
							<td>تسهل معرفة الصفحات التي واجهت مشاكل زحف</td>
							<td>متابعة في Google Console </td>
						</tr>
					</tbody>
				</table>
			</div>
			<CodeMirrorEditor
				value={`
import fs from 'fs';
import { MetadataRoute } from 'next';
import path from 'path';

const baseUrl = 'http:localhost:3000';
const baseDir = 'app';
const excludeDirs = ['(auth)', 'api'];

export const revaidate = 3600;
async function getRoutes(): Promise<MetadataRoute.Sitemap> {
    const fullPath = path.join(process.cwd(), baseDir);
    const entries = fs.readdirSync(fullPath, { withFileTypes: true });
    let routes: string[] = ['/'];
        entries.forEach((entry) => {
    if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
        routes.push(/entry.name);
    }
    });
    return routes.map((route) => ({
    url: "baseUrl route",
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
}));
}
                `}
			/>
		</section>
	);
};

export default SiteMap;
