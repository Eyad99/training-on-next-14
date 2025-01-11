import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const SequentialAndParallel = () => {
	return (
		<section className='flex flex-col gap-4'>
			<span className='text-muted-foreground'>Sequential And Parallel fata fetching</span>
			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Sequential Fetching</h4>
				<ul>
					<li>
						في هذا النمط، يتم تنفيذ طلبات البيانات واحدة تلو الأخرى، حيث يعتمد كل طلب على اكتمال الطلب السابق. يُستخدم هذا الأسلوب عندما
						تكون هناك تبعية بين البيانات المطلوبة.
					</li>
				</ul>
				<CodeMirrorEditor
					value={`
                    async function fetchDataSequential() {
  const res1 = await fetch('https://api.example.com/data1');
  const data1 = await res1.json();

  // يعتمد الطلب الثاني على نتيجة الطلب الأول
  const res2 = await fetch("https://api.example.com/data2?param=${'data1.id'}");
  const data2 = await res2.json();

  return { data1, data2 };
}`}
				/>
			</div>

			<div className='flex flex-col'>
				<h4 className='font-bold text-3xl'>Parallel Fetching</h4>
				<ul>
					<li>
						في هذا النمط، يتم تنفيذ طلبات البيانات في نفس الوقت دون انتظار اكتمال أي منها، مما يقلل من الزمن الكلي لجلب البيانات. يُستخدم
						هذا الأسلوب عندما لا تكون هناك تبعية بين البيانات المطلوبة.
					</li>
				</ul>
				<CodeMirrorEditor
					value={`
                    async function fetchDataParallel() {
  const res1Promise = fetch('https://api.example.com/data1');
  const res2Promise = fetch('https://api.example.com/data2');

  // انتظار اكتمال كلا الطلبين
  const [res1, res2] = await Promise.all([res1Promise, res2Promise]);

  const data1 = await res1.json();
  const data2 = await res2.json();

  return { data1, data2 };
}
`}
				/>
			</div>
			<div className='flex flex-col'>
				<ul>
					<li className='list-none font-bold'>متى تستخدم كل نمط:</li>
					<li>
						الجلب المتسلسل: استخدمه عندما تعتمد البيانات على بعضها البعض، مثل الحاجة إلى نتيجة الطلب الأول لتحديد معلمات الطلب الثاني.
					</li>
					<li>الجلب المتوازي: استخدمه عندما تكون الطلبات مستقلة عن بعضها، مما يقلل من الزمن الكلي لجلب البيانات ويحسن أداء التطبيق.</li>
					<li></li>
				</ul>
			</div>
		</section>
	);
};

export default SequentialAndParallel;

// fetch('https://api.example.com/data', {
//     cache: 'force-cache',
//     next: { revalidate: 3600, tags: ['example-tag'] },
//   });
