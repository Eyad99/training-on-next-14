import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const codeExample = `// مكون الطفل
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current && inputRef.current.focus();
    },
    clear: () => {
      if (inputRef.current) inputRef.current.value = '';
    },
  }));

  return <input ref={inputRef} {...props} />;
});

// استخدامه في مكون الأب
function Parent() {
  const inputRef = useRef(null);

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="اكتب هنا..." />
      <button onClick={() => inputRef.current?.focus()}>تركيز على الحقل</button>
      <button onClick={() => inputRef.current?.clear()}>مسح الحقل</button>
    </div>
  );
}`;

const ImperativeHandler: React.FC = () => {
	return (
		<div>
			<h2 className='text-xl font-bold mb-2 text-rtl'>شرح Imperative Handler في React</h2>
			<section className='mb-4 text-rtl'>
				<h3 className='font-semibold'>ما هو Imperative Handler؟</h3>
				<p>
					<b> Imperative Handler</b> هو نمط في React يسمح لمكون الأب باستدعاء دوال أو إجراءات مباشرة من مكون الطفل باستخدام <b>ref</b>. يتم
					ذلك عبر استخدام هوك <code>useImperativeHandle</code> مع <code>forwardRef</code>.
				</p>
				<p>كود أو دالة (function) تقوم بالتعامل مباشرًا مع عناصر DOM أو وظائف المكون، وتنفذ إجراءات محددة بشكل يدوي.</p>
			</section>
			<section className='mb-4 text-rtl'>
				<h3 className='font-semibold'>متى نستخدمه؟</h3>
				<ul className='list-disc ml-6'>
					<li>
						عندما تحتاج أن تعرض دوال إمبراطيفية من الطفل للأب (مثل: <code>focus</code>، <code>clear</code>، <code>scroll</code>...إلخ).
					</li>
					<li>مفيد في بناء حقول إدخال مخصصة، أو مودال، أو تحكم في الرسوم المتحركة، أو أي مكون يحتاج أن يوفر API تحكم مباشر للأب.</li>
				</ul>
			</section>
			<section className='mb-4'>
				<h3 className='font-semibold'>Example In React</h3>
				<CodeMirrorEditor value={codeExample} />
				<h3 className='font-semibold'>Example In VanilaJs</h3>
				<CodeMirrorEditor
					value={`const input = document.getElementById("myInput");

// هذا مثال على "imperative handler"
function focusInput() {
  input.focus(); // تفاعل مباشر مع DOM
}`}
				/>
			</section>
			<section className='text-rtl'>
				<h3 className='font-semibold'>ملخص</h3>
				<ul className='list-disc ml-6'>
					<li>
						<code>useImperativeHandle(ref, createHandle)</code> يخصص القيم أو الدوال التي تظهر للأب عند استخدام ref.
					</li>
					<li>هذا النمط مفيد عندما تريد أن توفر تحكم إمبراطيفي من الأب للطفل مع الحفاظ على تغليف منطق الطفل.</li>
				</ul>
			</section>
		</div>
	);
};

export default ImperativeHandler;
