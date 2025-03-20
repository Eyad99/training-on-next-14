import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const PatternItem = ({ title, description }: { title: string; description: string }) => (
	<li>
		<span className='font-bold'>{title}: </span>
		{description}
	</li>
);

const PatternCategory = ({ title, description, patterns }: { title: string; description: string; patterns: any[] }) => (
	<div className='flex flex-col'>
		<li className='font-bold'>{title}</li>
		<span>{description}</span>
		<ul className='px-2'>
			{patterns.map((pattern, index) => (
				<PatternItem key={index} title={pattern.title} description={pattern.description} />
			))}
		</ul>
	</div>
);

const PatternItemInFrontEnd = ({
	title,
	description,
	benefits,
	example,
}: {
	title: string;
	description: string;
	benefits: any[];
	example: string;
}) => (
	<li className='mb-4'>
		<h3 className='font-bold text-xl'>{title}</h3>
		<p className='text-muted-foreground'>{description}</p>
		<ul className='list-disc pl-6 mt-2'>
			{benefits.map((benefit, index) => (
				<li key={index}>{benefit}</li>
			))}
		</ul>
		<CodeMirrorEditor value={example} />
	</li>
);

const DesignPatterns = () => {
	const categories = [
		{
			title: '1. أنماط التصميم الإنشائية (Creational Patterns)',
			description: 'تهتم هذه الأنماط بطرق إنشاء الكائنات (Objects) بشكل مرن وفعّال، مما يسمح بإعادة استخدام الكود وتجنب التكرار.',
			patterns: [
				{ title: 'Singleton', description: 'يضمن وجود نسخة واحدة فقط من الفئة ويوفر نقطة وصول عالمية لها' },
				{ title: 'Factory Method', description: 'يُعرِّف واجهة لإنشاء كائن، لكن يسمح للفئات الفرعية بتحديد الفئة التي سيتم إنشاؤها' },
				{ title: 'Abstract Factory', description: 'يوفر واجهة لإنشاء عائلات من الكائنات ذات الصلة دون تحديد فئاتها المحددة.' },
				{ title: 'Builder', description: 'يفصل بين بناء كائن معقد وتمثيله، مما يسمح بإنشاء كائنات مختلفة باستخدام نفس عملية البناء' },
				{ title: 'Prototype', description: 'يسمح بإنشاء كائنات جديدة عن طريق نسخ كائنات موجودة (استنساخ).' },
			],
		},
		{
			title: '2. أنماط التصميم الهيكلية (Structural Patterns)',
			description: 'تركز هذه الأنماط على كيفية تجميع الكائنات والطبقات لتشكيل هياكل أكبر وأكثر تعقيدًا.',
			patterns: [
				{ title: 'Adapter', description: 'يسمح للفئات غير المتوافقة بالعمل معًا عن طريق تحويل واجهة فئة إلى واجهة أخرى متوقعة.' },
				{ title: 'Bridge', description: 'يفصل بين التجريد والتنفيذ، مما يسمح لكليهما بالتغير بشكل مستقل.' },
				{ title: 'Composite', description: 'ينظم الكائنات في هياكل شجرية لتمثيل تسلسلات هرمية جزئية وكاملة.' },
				{ title: 'Decorator', description: 'يضيف سلوكًا إضافيًا إلى الكائنات ديناميكيًا.' },
				{ title: 'Facade', description: 'يوفر واجهة مبسطة لمجموعة من الواجهات في نظام معقد.' },
				{ title: 'Flyweight', description: 'يقلل من استخدام الذاكرة عن طريق مشاركة البيانات بين الكائنات المتشابهة.' },
				{ title: 'Proxy', description: 'يوضع كبديل أو عنصر نائب لكائن آخر للتحكم في الوصول إليه' },
			],
		},
		{
			title: '3. أنماط التصميم السلوكية (Behavioral Patterns)',
			description: 'تركز هذه الأنماط على كيفية تفاعل الكائنات وتوزيع المسؤوليات بينها.',
			patterns: [
				{
					title: 'Chain of Responsibility',
					description: 'يمرر الطلبات عبر سلسلة من المعالجات، حيث يمكن لكل معالج معالجة الطلب أو تمريره.',
				},
				{ title: 'Command', description: 'يحول الطلبات إلى كائنات مستقلة، مما يسمح بتأجيل تنفيذها أو تسجيلها.' },
				{ title: 'Iterator', description: 'يوفر طريقة للوصول إلى عناصر مجموعة كائنات بشكل تسلسلي دون الكشف عن تمثيلها الداخلي.' },
				{ title: 'Mediator', description: 'يحد من الاتصال المباشر بين الكائنات عن طريق تقديم وسيط.' },
				{ title: 'Memento', description: 'يسمح بحفظ واستعادة حالة كائن دون كشف تفاصيل تنفيذه.' },
				{ title: 'Observer', description: 'يسمح لكائن (Subject) بإخطار مجموعة من الكائنات (Observers) بالتغييرات التي تطرأ عليه.' },
				{ title: 'State', description: 'يسمح للكائن بتغيير سلوكه عندما تتغير حالته الداخلية.' },
				{ title: 'Strategy', description: 'يسمح بتحديد مجموعة من الخوارزميات وتغييرها ديناميكيًا.' },
				{ title: 'Template Method', description: 'يحدد هيكل خوارزمية ويسمح للفئات الفرعية بتنفيذ خطوات معينة.' },
				{ title: 'Visitor', description: 'يسمح بإضافة عمليات جديدة إلى مجموعة من الكائنات دون تغيير بنيتها.' },
			],
		},
	];

	const patterns = [
		{
			title: '1. Component Pattern',
			description:
				'هذا النمط هو أساس تطوير الواجهات الأمامية في مكتبات مثل React, Vue.js, و Angular. يتم تقسيم الواجهة إلى مكونات (Components) مستقلة وقابلة لإعادة الاستخدام.',
			benefits: ['يعزز إعادة استخدام الكود.', 'يجعل الكود أكثر تنظيماً وسهولة في الصيانة.'],
			example: `// Button.js
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;

// App.js
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;`,
		},
		{
			title: '2. Singleton Pattern',
			description: 'يُستخدم لضمان وجود نسخة واحدة فقط من كائن معين، مثل إدارة الحالة (State Management) أو خدمات التطبيق.',
			benefits: ['يمنع تكرار إنشاء الكائنات غير الضرورية.', 'يوفر نقطة وصول مركزية للموارد المشتركة.'],
			example: `// Store.js (مثال باستخدام Zustand)
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;

// App.js
import useStore from './Store';

const App = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;`,
		},
		{
			title: '3. Observer Pattern',
			description: 'يُستخدم لإنشاء علاقة بين الكائنات بحيث عندما يتغير كائن (Subject)، يتم إخطار الكائنات الأخرى (Observers) تلقائيًا.',
			benefits: ['يفصل بين الكائنات ويجعلها أكثر استقلالية.', 'يسهل إدارة التحديثات الديناميكية في الواجهة.'],
			example: `// Subject.js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export const subject = new Subject();

// App.js
import { useEffect, useState } from 'react';
import { subject } from './Subject';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    subject.subscribe(setMessage);
    return () => subject.unsubscribe(setMessage);
  }, []);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => subject.notify('Hello from Observer!')}>
        Notify
      </button>
    </div>
  );
};

export default App;`,
		},
		{
			title: '4. Factory Pattern',
			description: 'يُستخدم لإنشاء كائنات دون تحديد الفئة المحددة مسبقًا. يمكن استخدامه لإنشاء مكونات ديناميكية بناءً على المدخلات.',
			benefits: ['يجعل الكود أكثر مرونة وقابلية للتوسع.', 'يخفف من الاقتران (Coupling) بين الكائنات.'],
			example: `// ComponentFactory.js
const ComponentFactory = (type) => {
  if (type === 'A') {
    return () => <div>Component A</div>;
  } else if (type === 'B') {
    return () => <div>Component B</div>;
  }
  return () => <div>Unknown Component</div>;
};

export default ComponentFactory;

// App.js
import ComponentFactory from './ComponentFactory';

const App = () => {
  const Component = ComponentFactory('A');

  return (
    <div>
      <Component />
    </div>
  );
};

export default App;`,
		},
		{
			title: '5. Decorator Pattern',
			description: 'يُستخدم لإضافة سلوك إضافي إلى الكائنات دون تغيير بنيتها الأساسية. غالبًا ما يُستخدم في تحسين أو توسيع وظائف المكونات.',
			benefits: ['يسمح بإضافة سلوك ديناميكي دون تعديل الكود الأصلي.', 'يعزز إعادة استخدام الكود.'],
			example: `// withLogger.js (Higher-Order Component)
const withLogger = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;

// Button.js
const Button = ({ label }) => {
  return <button>{label}</button>;
};

export default withLogger(Button);

// App.js
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button label="Click Me" />
    </div>
  );
};

export default App;`,
		},
		{
			title: '6. State Pattern',
			description: 'يُستخدم لإدارة الحالة (State) في المكونات أو التطبيقات. يتم تغيير سلوك المكون بناءً على حالته الحالية.',
			benefits: ['يجعل إدارة الحالة أكثر تنظيماً.', 'يقلل من التعقيد في المكونات الكبيرة.'],
			example: `// App.js
import { useState } from 'react';

const App = () => {
  const [state, setState] = useState('idle');

  const handleClick = () => {
    setState(state === 'idle' ? 'active' : 'idle');
  };

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={handleClick}>Toggle State</button>
    </div>
  );
};

export default App;`,
		},
		{
			title: '7. Proxy Pattern',
			description: 'يُستخدم للتحكم في الوصول إلى كائن معين، مثل إضافة تحقق من الصلاحيات أو التخزين المؤقت (Caching).',
			benefits: ['يوفر طبقة أمان إضافية.', 'يسمح بإضافة وظائف إضافية دون تعديل الكود الأصلي.'],
			example: `// Proxy.js
const createProxy = (target, handler) => {
  return new Proxy(target, handler);
};

const handler = {
  get: (target, prop) => {
     return target[prop];
  },
};

const user = { name: 'John', age: 30 };
const userProxy = createProxy(user, handler);

// App.js
const App = () => {
  return (
    <div>
      <p>Name: {userProxy.name}</p>
      <p>Age: {userProxy.age}</p>
    </div>
  );
};

export default App;`,
		},
		{
			title: '8. Module Pattern',
			description:
				'يُستخدم لتغليف الكود في وحدات (Modules) مستقلة، مما يمنع التلوث العالمي (Global Scope Pollution) ويعزز إعادة الاستخدام.',
			benefits: ['يجعل الكود أكثر تنظيماً وقابلية للاختبار.', 'يقلل من التعارض بين الأجزاء المختلفة للتطبيق.'],
			example: `// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// App.js
import { add, subtract } from './utils';

const App = () => {
  return (
    <div>
      <p>Add: {add(5, 3)}</p>
      <p>Subtract: {subtract(5, 3)}</p>
    </div>
  );
};

export default App;`,
		},
		{
			title: '9. MVC (Model-View-Controller)',
			description: 'يُستخدم لفصل منطق التطبيق (Model) عن واجهة المستخدم (View) والتحكم (Controller).',
			benefits: ['يفصل بين المهام ويجعل الكود أكثر تنظيماً.', 'يسهل صيانة التطبيقات الكبيرة.'],
			example: `// Model (useStore.js)
import create from 'zustand';

const useStore = create((set) => ({
  data: [],
  fetchData: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    set({ data });
  },
}));

export default useStore;

// View (App.js)
import useStore from './useStore';

const App = () => {
  const { data, fetchData } = useStore();

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;`,
		},
		{
			title: '10. Flux/Redux Pattern',
			description:
				'يُستخدم لإدارة الحالة العالمية (Global State) في التطبيقات الكبيرة. يعتمد على تدفق بيانات أحادي الاتجاه (Unidirectional Data Flow).',
			benefits: ['يجعل إدارة الحالة أكثر قابلية للتنبؤ.', 'يسهل تتبع التغييرات في الحالة.'],
			example: `// store.js (Redux Toolkit)
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

// App.js
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store';

const App = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default App;`,
		},
	];

	return (
		<section className='flex flex-col gap-4'>
			<h1 className='text-3xl font-bold'>Design Patterns</h1>
			<span className='text-muted-foreground text-rtl'>
				تصميمات الأنماط (Design Patterns) هي حلول عامة لمشاكل متكررة في تصميم البرمجيات. تُصنف عادة إلى ثلاث فئات رئيسية:
			</span>

			<ul className='flex flex-col gap-2 text-rtl px-4'>
				{categories.map((category, index) => (
					<PatternCategory key={index} title={category.title} description={category.description} patterns={category.patterns} />
				))}
			</ul>

			<div className='flex flex-col gap-4 p-4'>
				<h1 className='text-3xl font-bold text-rtl'>أنماط التصميم الشائعة في تطوير الواجهات الأمامية</h1>

				<ul className='flex flex-col gap-4 text-rtl'>
					{patterns.map((pattern, index) => (
						<PatternItemInFrontEnd
							key={index}
							title={pattern.title}
							description={pattern.description}
							benefits={pattern.benefits}
							example={pattern.example}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default DesignPatterns;
