import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const CherryPick = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Cherry-Pick</h4>
				<span className='text-muted-foreground'>الفكرة هي فصل البنية عن التصميم بحيث تكون هناك مكونات قابلة لإعادة الاستخدام</span>
				<ul className='px-6'>
					<li className='font-bold list-none'>الاستخدامات العملية:</li>
					<li>:إضافة تغييرات محددة دون دمج الفروع بالكامل</li>
					<li>عندما تحتاج إلى جلب تغيير صغير من فرع آخر دون جلب باقي العمل غير المكتمل.</li>
					<li>إصلاح الأخطاء (Bug Fixes):</li>
					<li>إذا تم إصلاح خطأ في فرع معين وتريد تطبيق نفس الإصلاح في فروع أخرى.</li>
				</ul>
				<CodeMirrorEditor value={`git cherry-pick commit1 commit2 commit3`} />
			</div>
		</section>
	);
};

export default CherryPick;
