import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const SiteMap = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>SiteMap</h4>
				<span className='text-muted-foreground'>
					هو عبارة عن ملف بيجمغ مل الروابط المهمة للموقع مشان يساعد محرك البحث يفهم بنية الموقع بسهولة.
				</span>
				<span className='text-muted-foreground'>
					مكن يضم معلومات اضافية متل اخر تهديث للصفحات , تكرار التحديثات , اهمية الصفحة مقانة بباقي الصفحات في الموقع .
				</span>
				<span className='text-muted-foreground'>
					وقت بينعل جينيريت للسايتماب بشكل ديناميكي بيضمن هاد الشي انو بيحدث نفسو تلقائيا مع كل المحتويات الجديدة يلي بتصير
				</span>
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
