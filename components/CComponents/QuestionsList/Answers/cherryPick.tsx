import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

interface ListItemProps {
	text: string;
	isBold?: boolean;
}

const ListItem = ({ text, isBold = false }: ListItemProps) => <li className={`${isBold ? 'font-bold' : ''} text-rtl`}>{text}</li>;

const CherryPick = () => {
	const practicalUses: ListItemProps[] = [
		{ text: 'الاستخدامات العملية:', isBold: true },
		{ text: 'إضافة تغييرات محددة دون دمج الفروع بالكامل' },
		{ text: 'عندما تحتاج إلى جلب تغيير صغير من فرع آخر دون جلب باقي العمل غير المكتمل.' },
		{ text: 'إصلاح الأخطاء (Bug Fixes):' },
		{ text: 'إذا تم إصلاح خطأ في فرع معين وتريد تطبيق نفس الإصلاح في فروع أخرى.' },
	];

	return (
		<section className='flex flex-col gap-6 text-rtl'>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<h3 className='font-bold text-2xl text-rtl'>Cherry-Pick</h3>
					<p className='text-muted-foreground text-rtl'>الفكرة هي فصل البنية عن التصميم بحيث تكون هناك مكونات قابلة لإعادة الاستخدام</p>
				</div>

				<ul className='flex flex-col gap-2 px-4'>
					{practicalUses.map((item, index) => (
						<ListItem key={index} {...item} />
					))}
				</ul>

				<div className='mt-2'>
					<CodeMirrorEditor value={`git cherry-pick commit1 commit2 commit3`} />
				</div>
			</div>
		</section>
	);
};

export default CherryPick;
