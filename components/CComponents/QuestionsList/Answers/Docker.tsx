import React from 'react';
import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';

const Docker = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>ما هو Docker؟</h4>
				<span className='text-muted-foreground text-rtl'>
					دوكر هو منصة مفتوحة المصدر تستخدم لتطوير وتشغيل ونشر التطبيقات داخل حاويات (Containers). الحاويات هي بيئات معزولة خفيفة الوزن
					تحتوي على كل ما يحتاجه التطبيق للعمل، مما يضمن أن التطبيق سيعمل بنفس الطريقة في أي مكان يتم تشغيله فيه.
				</span>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl'>المفاهيم الأساسية في Docker</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>الحاويات (Containers):</strong>
						بيئات معزولة تحتوي على التطبيق وجميع متطلباته للتشغيل
					</li>
					<li>
						<strong>الصور (Images):</strong>
						قوالب جاهزة تستخدم لإنشاء الحاويات
					</li>
					<li>
						<strong>ملف Dockerfile:</strong>
						ملف نصي يحتوي على التعليمات اللازمة لبناء صورة Docker
					</li>
					<li>
						<strong>Docker Compose:</strong>
						أداة لتعريف وتشغيل تطبيقات متعددة الحاويات
					</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl'>مثال على ملف Dockerfile</h4>
				<span className='text-muted-foreground text-rtl'>هذا مثال لملف Dockerfile لتطبيق Node.js:</span>
				<CodeMirrorEditor
					value={`# استخدام صورة Node.js كأساس
FROM node:18-alpine

# تحديد مجلد العمل
WORKDIR /app

# نسخ ملفات package.json
COPY package*.json ./

# تثبيت المتطلبات
RUN npm install

# نسخ كود التطبيق
COPY . .

# بناء التطبيق
RUN npm run build

# تحديد المنفذ
EXPOSE 3000

# أمر تشغيل التطبيق
CMD ["npm", "start"]`}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl'>مثال على Docker Compose</h4>
				<span className='text-muted-foreground text-rtl'>يستخدم Docker Compose لتشغيل تطبيقات متعددة الحاويات:</span>
				<CodeMirrorEditor
					value={`version: '3.8'
services:
  # تعريف خدمة الويب
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  # تعريف خدمة قاعدة البيانات
  db:
    image: mongodb
    volumes:
      - db-data:/data/db

volumes:
  db-data:`}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl'>فوائد استخدام Docker</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>توحيد بيئة التطوير لجميع أعضاء الفريق</li>
					<li>سهولة النشر والتوسع</li>
					<li>عزل التطبيقات عن بعضها البعض</li>
					<li>التحكم في الإصدارات وإعادة استخدام المكونات</li>
					<li>تقليل المشاكل المتعلقة بتعارض الإعتماديات</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl'>الأوامر الشائعة في Docker</h4>
				<span className='text-muted-foreground text-rtl'>هذه بعض الأوامر الأساسية التي تستخدم مع Docker:</span>
				<CodeMirrorEditor
					value={`# بناء صورة
docker build -t myapp .

# تشغيل حاوية
docker run -p 3000:3000 myapp

# عرض الحاويات النشطة
docker ps

# إيقاف حاوية
docker stop container_id

# حذف حاوية
docker rm container_id

# عرض الصور المتوفرة
docker images

# حذف صورة
docker rmi image_id

# تشغيل docker compose
docker-compose up`}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl'>مميزات استخدام Docker في التطوير</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>التناسق:</strong>
						يضمن عمل التطبيق بنفس الطريقة في جميع البيئات (التطوير، الاختبار، الإنتاج)
					</li>
					<li>
						<strong>العزل:</strong>
						كل تطبيق يعمل في بيئة معزولة مع متطلباته الخاصة
					</li>
					<li>
						<strong>سرعة التطوير:</strong>
						سهولة إعداد بيئة التطوير وتجربة التغييرات
					</li>
					<li>
						<strong>قابلية التوسع:</strong>
						سهولة تشغيل نسخ متعددة من التطبيق للتعامل مع الأحمال المتزايدة
					</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl'>أفضل الممارسات</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>استخدام صور رسمية وموثوقة كأساس</li>
					<li>تقليل حجم الصور باستخدام multi-stage builds</li>
					<li>عدم تخزين البيانات الحساسة في الصور</li>
					<li>استخدام .dockerignore لتجاهل الملفات غير الضرورية</li>
					<li>تحديث الصور بشكل دوري للحصول على إصلاحات الأمان</li>
				</ul>
			</div>
		</section>
	);
};

export default Docker;
