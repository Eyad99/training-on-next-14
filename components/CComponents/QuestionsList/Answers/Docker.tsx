import React from 'react';
import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import { Separator } from '@/components/ui/separator';

const Docker = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>ما هو Docker؟</h4>
				<span className='text-muted-foreground text-rtl'>
					دوكر هو منصة مفتوحة المصدر تستخدم لتطوير وتشغيل ونشر التطبيقات داخل حاويات (Containers). الحاويات هي بيئات معزولة خفيفة الوزن
					تحتوي على كل ما يحتاجه التطبيق للعمل، مما يضمن أن التطبيق سيعمل بنفس الطريقة في أي مكان يتم تشغيله فيه.
				</span>
			</div>
			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>لماذا نستخدم Docker؟</h4>
				<span className='text-muted-foreground text-rtl'>
					قبل Docker، كان المطورون يواجهون مشكلة شائعة تُعرف بـ "It works on my machine" (يعمل على جهازي ولكن لا يعمل على جهاز آخر). السبب
					هو اختلاف الإعدادات بين البيئات (مثل إصدارات البرامج أو أنظمة التشغيل). Docker يحل هذه المشكلة عن طريق:
				</span>
				<ul className='list-disc pr-6 text-rtl mt-2'>
					<li>
						<strong>التوحيد:</strong> يضمن أن التطبيق يعمل بنفس الطريقة في كل مكان
					</li>
					<li>
						<strong>الخفة:</strong> الحاويات أخف بكثير من الآلات الافتراضية (Virtual Machines) لأنها تشترك في نواة نظام التشغيل مع الجهاز
						المضيف
					</li>
					<li>
						<strong>السرعة:</strong> بدء تشغيل الحاويات يكون فوريًا تقريبًا مقارنةً بالآلات الافتراضية
					</li>
					<li>
						<strong>إدارة الموارد:</strong> يمكن تشغيل عدة حاويات على نفس الجهاز بكفاءة عالية
					</li>
					<li>
						<strong>سهولة النشر:</strong> يمكنك نقل الحاوية بسهولة بين بيئات مختلفة (مثل التطوير، الاختبار، الإنتاج)
					</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>المفاهيم الأساسية في Docker</h4>
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
				<h4 className='font-bold text-2xl text-rtl'>مثال على ملف Dockerfile</h4>
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
				<h4 className='font-bold text-2xl text-rtl'>مثال على Docker Compose</h4>
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
				<h4 className='font-bold text-2xl text-rtl'>فوائد استخدام Docker</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>توحيد بيئة التطوير لجميع أعضاء الفريق</li>
					<li>سهولة النشر والتوسع</li>
					<li>عزل التطبيقات عن بعضها البعض</li>
					<li>التحكم في الإصدارات وإعادة استخدام المكونات</li>
					<li>تقليل المشاكل المتعلقة بتعارض الإعتماديات</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>الأوامر الشائعة في Docker</h4>
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
				<h4 className='font-bold text-2xl text-rtl'>مميزات استخدام Docker في التطوير</h4>
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
				<h4 className='font-bold text-2xl text-rtl'>أفضل الممارسات</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>استخدام صور رسمية وموثوقة كأساس</li>
					<li>تقليل حجم الصور باستخدام multi-stage builds</li>
					<li>عدم تخزين البيانات الحساسة في الصور</li>
					<li>استخدام .dockerignore لتجاهل الملفات غير الضرورية</li>
					<li>تحديث الصور بشكل دوري للحصول على إصلاحات الأمان</li>
				</ul>
			</div>
			<Separator />

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>لماذا نستخدم Kubernetes؟</h4>
				<span className='text-muted-foreground text-rtl'>
					Kubernetes يُستخدم عندما تحتاج إلى إدارة تطبيقات معقدة تعمل على العديد من الحاويات عبر خوادم متعددة. أهم ميزاته:
				</span>
				<ul className='list-disc pr-6 text-rtl mt-2'>
					<li>
						<strong>التوسع التلقائي (Auto-scaling):</strong> زيادة أو تقليل عدد الحاويات بناءً على الحمل
					</li>
					<li>
						<strong>الإصلاح الذاتي (Self-healing):</strong> إعادة تشغيل الحاويات التي تتعطل أو استبدالها تلقائيًا
					</li>
					<li>
						<strong>توزيع الحمل (Load Balancing):</strong> توزيع الطلبات على الحاويات المتاحة
					</li>
					<li>
						<strong>إدارة الموارد:</strong> تخصيص المعالج والذاكرة لكل حاوية
					</li>
					<li>
						<strong>التحديثات بدون توقف (Rolling Updates):</strong> تحديث التطبيق دون انقطاع الخدمة
					</li>
				</ul>
			</div>

			<Separator />

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>الفرق بين Docker و Kubernetes</h4>
				<span className='text-muted-foreground text-rtl'>
					Docker وKubernetes ليسا بديلين لبعضهما، بل يكملان بعضهما. إليك الفرق الأساسي:
				</span>

				<div className='mt-4 overflow-x-auto'>
					<table className='min-w-full border-collapse border border-gray-300 text-rtl'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 p-2'>الجانب</th>
								<th className='border border-gray-300 p-2'>Docker</th>
								<th className='border border-gray-300 p-2'>Kubernetes</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>الوظيفة</td>
								<td className='border border-gray-300 p-2'>أداة لإنشاء وتشغيل الحاويات الفردية</td>
								<td className='border border-gray-300 p-2'>نظام لإدارة وتنسيق العديد من الحاويات</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>المستوى</td>
								<td className='border border-gray-300 p-2'>مستوى منخفض (Low-level) - يركز على الحاوية الواحدة</td>
								<td className='border border-gray-300 p-2'>مستوى عالٍ (High-level) - يدير مجموعات الحاويات</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>الاستخدام</td>
								<td className='border border-gray-300 p-2'>تطوير وتشغيل تطبيق واحد في حاوية</td>
								<td className='border border-gray-300 p-2'>نشر وإدارة تطبيقات معقدة على نطاق واسع</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>الحجم</td>
								<td className='border border-gray-300 p-2'>مناسب لتطبيقات صغيرة أو بيئة تطوير محلية</td>
								<td className='border border-gray-300 p-2'>مناسب لتطبيقات كبيرة تعمل على خوادم متعددة</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>التشغيل</td>
								<td className='border border-gray-300 p-2'>يحتاج إلى أوامر يدوية لتشغيل الحاويات</td>
								<td className='border border-gray-300 p-2'>يوفر أتمتة كاملة للتشغيل والإدارة</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>المكونات</td>
								<td className='border border-gray-300 p-2'>Docker Engine (CLI + Daemon)</td>
								<td className='border border-gray-300 p-2'>Cluster مع Master و Worker Nodes</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>مثال عملي</td>
								<td className='border border-gray-300 p-2 font-mono'>docker run my-app</td>
								<td className='border border-gray-300 p-2 font-mono'>kubectl apply -f deployment.yaml</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>تشبيه بسيط</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>Docker:</strong> مثل سيارة واحدة تقودها بنفسك
					</li>
					<li>
						<strong>Kubernetes:</strong> مثل شركة نقل تمتلك أسطولًا من السيارات وتديرها تلقائيًا (جدولة، صيانة، توزيع)
					</li>
				</ul>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-2xl'>كيف يعملان معًا؟</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>Docker</strong> يُستخدم لإنشاء الحاويات (مثل بناء الصور باستخدام Dockerfile وتشغيلها)
					</li>
					<li>
						<strong>Kubernetes</strong> يأخذ هذه الحاويات ويديرها على نطاق واسع (توزيعها على الخوادم، مراقبتها، توسيعها)
					</li>
				</ul>
			</div>

			<Separator />

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl text-rtl'>الفرق بين CI/CD (Pipeline) و Docker</h4>
				<div className='mt-4 overflow-x-auto'>
					<table className='min-w-full border-collapse border border-gray-300 text-rtl'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 p-2'>الجانب</th>
								<th className='border border-gray-300 p-2'>CI/CD (Pipeline)</th>
								<th className='border border-gray-300 p-2'>Docker</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>الوظيفة</td>
								<td className='border border-gray-300 p-2'>عملية أتمتة لبناء واختبار ونشر التطبيقات</td>
								<td className='border border-gray-300 p-2'>أداة لإنشاء وتشغيل الحاويات</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>المستوى</td>
								<td className='border border-gray-300 p-2'>مستوى العملية (Process)</td>
								<td className='border border-gray-300 p-2'>مستوى التكنولوجيا (Tool)</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>الهدف</td>
								<td className='border border-gray-300 p-2'>تسريع دورة التطوير والنشر</td>
								<td className='border border-gray-300 p-2'>ضمان التوافق والعزل لبيئة التطبيق</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>الاستخدام</td>
								<td className='border border-gray-300 p-2'>تنظيم سير العمل (Workflow)</td>
								<td className='border border-gray-300 p-2'>حزم التطبيق في حاوية قابلة للنقل</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>مثال</td>
								<td className='border border-gray-300 p-2'>تشغيل اختبارات ثم نشر التطبيق</td>
								<td className='border border-gray-300 p-2'>بناء صورة تحتوي على تطبيق Node.js</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2 font-bold'>العلاقة مع بعضهما</td>
								<td className='border border-gray-300 p-2'>يمكن أن يستخدم Docker كجزء منه</td>
								<td className='border border-gray-300 p-2'>يمكن أن يُدمج في CI/CD Pipeline</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>تشبيه بسيط</h4>
				<ul className='list-disc pr-6 text-rtl'>
					<li>
						<strong>CI/CD Pipeline:</strong> مثل خط إنتاج في مصنع يأخذ المواد الخام (الكود) ويحولها إلى منتج نهائي (تطبيق منشور)
					</li>
					<li>
						<strong>Docker:</strong> مثل العلبة التي تُوضع فيها المنتجات لنقلها بأمان
					</li>
				</ul>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-2xl text-rtl'>مثال عملي للتكامل</h4>
				<span className='text-muted-foreground text-rtl'>كيف يمكن استخدام Docker في CI/CD Pipeline:</span>
				<CodeMirrorEditor
					value={`name: Docker CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    # بناء صورة Docker
    - name: Build Docker Image
      run: docker build -t myapp .
    
    # تشغيل الاختبارات داخل الحاوية
    - name: Run Tests in Container
      run: docker run myapp npm test
    
    # نشر الصورة إلى Docker Hub
    - name: Push to Docker Hub
      run: |
        docker login -u {{ secrets.DOCKER_USERNAME }} -p {{ secrets.DOCKER_PASSWORD }}
        docker push myapp`}
				/>
			</div>
		</section>
	);
};

export default Docker;
