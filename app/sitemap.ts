import fs from 'fs';
import { MetadataRoute } from 'next';
import path from 'path';

const baseUrl = 'http:localhost:3000';
const baseDir = 'app';
const excludeDirs = ['(auth)', 'api', 'comments', 'dashboard'];

export const revaidate = 3600;

async function getRoutes(): Promise<MetadataRoute.Sitemap> {
	const fullPath = path.join(process.cwd(), baseDir);
	const entries = fs.readdirSync(fullPath, { withFileTypes: true });
	let routes: string[] = ['/'];

	entries.forEach((entry) => {
		if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
			routes.push(`/${entry.name}`);
		}
	});

	//to create dnamic routes
	// async function getBlogs() {
	// 	const res = await fetch('API');
	// 	const data = res.json();
	// 	let todoRoutes: string[] = data.map((blog: any) => `/blog/${blog.id}`);

	// 	return [...routes, todoRoutes];
	// }

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 1.0,
	}));
}

export default function siteMap() {
	return getRoutes();
}
