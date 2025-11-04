import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const CompoundPattern = () => {
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-3xl'> Compound Pattern</h4>
				<span className='text-muted-foreground text-rtl'>هو طريقة لبناء مكونات React تكون مرنة وسهلة الاستخدام،</span>
				<span className='text-muted-foreground text-rtl'>
					بحيث المكونات تتعاون مع بعضها داخليًا بدون أن يحتاج المستخدم يمرّر آلاف الـprops.
				</span>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-lg'>🧩 الفكرة بالمختصر:</h4>
				<span className='text-muted-foreground'>
					بدل ما تمرر كل شيء في مكون واحد كبير ومعقد، بتقسمه إلى عدة مكونات صغيرة تعمل معًا من خلال Context.
				</span>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-lg'> 📦 مثال بدون Compound Pattern (الطريقة العادية)</h4>
				<CodeMirrorEditor
					value={` <Select
  options={["Apple", "Orange", "Banana"]}
  value={value}
  onChange={setValue}
/>
`}
				/>
				<span className='text-muted-foreground'>
					لو أردت أن تتحكم في شكل الزر، أو مكان القائمة، أو تضيف أي تصميم خاص، ستحتاج إلى تمرير props كثيرة جدًا.{' '}
				</span>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-lg'> 💡 الحل: Compound Components Pattern</h4>
				<span>نقسم المكون الكبير إلى عدة أجزاء تعمل معًا:</span>
				<CodeMirrorEditor
					value={`<Select value={value} onChange={setValue}>
  <Select.Trigger />         {/* الزر الذي يفتح القائمة */}
  <Select.Options>           {/* القائمة نفسها */}
    <Select.Option value="apple">🍎 Apple</Select.Option>
    <Select.Option value="orange">🍊 Orange</Select.Option>
    <Select.Option value="banana">🍌 Banana</Select.Option>
  </Select.Options>
</Select>

`}
				/>
				<span className='text-muted-foreground'>هنا Select هو الأب</span>
				<span className='text-muted-foreground'>
					و Trigger, Options, Option هم الأبناء الذين يتواصلون مع الأب من خلال Context وليس props.
				</span>
			</div>

			{/* كيف يعمل */}
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-lg'>⚙️ كيف يعمل خلف الكواليس؟</h4>
				<ul className='list-disc list-inside text-gray-700 space-y-2'>
					<li>المكون الأب Select ينشئ Context لتخزين الحالة (مثل isOpen, value).</li>
					<li>الأب يمرّر هذه الحالة لجميع الأبناء عبر SelectContext.Provider.</li>
					<li>كل مكون فرعي (مثل Option) يحصل على الحالة من الـ context باستخدام useContext.</li>
				</ul>
			</div>

			{/* مثال */}
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-lg'> 🧠 مثال عملي :</h4>
				<CodeMirrorEditor
					value={` const SelectContext = React.createContext();

export function Select({ value, onChange, children }) {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value, open, toggle, handleSelect }}>
      <div className="select">{children}</div>
    </SelectContext.Provider>
  );
}

Select.Trigger = function Trigger() {
  const { toggle, value } = React.useContext(SelectContext);
  return <button onClick={toggle}>{value || "Select..."}</button>;
};

Select.Options = function Options({ children }) {
  const { open } = React.useContext(SelectContext);
  if (!open) return null;
  return <div className="options">{children}</div>;
};

Select.Option = function Option({ value, children }) {
  const { handleSelect } = React.useContext(SelectContext);
  return (
    <div onClick={() => handleSelect(value)} className="option">
      {children}
    </div>
  );
};

`}
				/>
			</div>

			{/* استخدامه */}
			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-lg'> 🔍 استخدام المكون:</h4>
				<CodeMirrorEditor
					value={`<Select value={fruit} onChange={setFruit}>
  <Select.Trigger />
  <Select.Options>
    <Select.Option value="apple">Apple</Select.Option>
    <Select.Option value="orange">Orange</Select.Option>
  </Select.Options>
</Select>
`}
				/>
			</div>

			<div className='flex flex-col text-rtl'>
				<h4 className='font-bold text-lg'>💬 لماذا نستخدم هذا النمط؟</h4>
				<ul className='list-disc list-inside text-gray-700 space-y-2'>
					<li>✅ يجعل المكون قابل للتخصيص بالكامل من قبل المطورين الآخرين.</li>
					<li>✅ يسهل بناء مكتبات UI مثل Radix UI, ShadCN, Material UI.</li>
					<li>✅ يقلل الـprops ويزيد المرونة والتركيب (composition).</li>
					<li>✅ يسهل إعادة الاستخدام في أكثر من مكان في المشروع.</li>
				</ul>

				<div className='overflow-x-auto'>
					<table className='w-full border-collapse border border-gray-300'>
						<thead>
							<tr className='bg-gray-100'>
								<th className='border border-gray-300 p-2'> المصطلح</th>
								<th className='border border-gray-300 p-2'>المعنى </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border border-gray-300 p-2'>Parent Component</td>
								<td className='border border-gray-300 p-2'>المكون الرئيسي الذي يحوي الـ state والـ Context</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>Child Components</td>
								<td className='border border-gray-300 p-2'>مكونات فرعية تستخدم الـ Context من الأب</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>التواصل</td>
								<td className='border border-gray-300 p-2'>يتم عبر React Context وليس props</td>
							</tr>
							<tr>
								<td className='border border-gray-300 p-2'>النتيجة</td>
								<td className='border border-gray-300 p-2'>مكون مرن جدًا وقابل للتركيب والاستخدام في أي تصميم</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default CompoundPattern;
