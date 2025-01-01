import AsyncAndSync from './Answers/asyncAndSync';
import CherryPick from './Answers/cherryPick';
import ClosuresFunction from './Answers/closuresFunction';
import Constructor from './Answers/constructor';
import DomAndVirtualDom from './Answers/domAndVirtualDom';
import ElementAndComponent from './Answers/elementAndComponent';
import ForEach from './Answers/forEach';
import FunctionTypes from './Answers/functionTypes';
import GeneratorFunction from './Answers/generatorFunction';
import GraphQl from './Answers/graphQl';
import ImageMiddleware from './Answers/ImageMiddleware';
import IndexedDb from './Answers/indexedDb';
import Jsx from './Answers/jsx';
import Memo from './Answers/memo';
import OocssAndBem from './Answers/oocssAndBem';
import OptimizationTools from './Answers/OptimizationTools';
import Promises from './Answers/promises';
import MeaningReact from './Answers/react';
import ReactAndReactDom from './Answers/reactAndReactDom';
import RemAndEm from './Answers/remAndEm';
import ServiceWorkerCom from './Answers/ServiceWorkerCom';
import SiteMap from './Answers/siteMap';
import Solid from './Answers/solid';
import State from './Answers/state';
import Typescript from './Answers/typescript';
import UseCallBack from './Answers/useCallBack';
import WebSafty from './Answers/webSafty';

export const qsList = [
	{
		id: 1,
		title: 'What is the meaning React?',
		description: MeaningReact,
	},
	{ id: 2, title: 'React vs ReactDOM', description: ReactAndReactDom },
	{ id: 3, title: 'Element And Component', description: ElementAndComponent },
	{ id: 4, title: 'JSX', description: Jsx },
	{ id: 5, title: 'What the Mean state', description: State },
	{ id: 6, title: 'Dom && Virtua Dom', description: DomAndVirtualDom },

	{
		id: 7,
		title: 'Async vs Sync',
		description: AsyncAndSync,
	},

	{ id: 8, title: 'Function types', description: FunctionTypes },
	{
		id: 9,
		title: 'useCallBack',
		description: UseCallBack,
	},

	{
		id: 10,
		title: 'Diffrent between local storage and session',
		description: 'comming soon ...',
	},
	{
		id: 11,
		title: 'What the diffrent between cookie and httpOnlyCookie',
		description: 'comming soon ...',
	},
	{ id: 12, title: 'Key words in js', description: 'comming soon ...' },
	{ id: 13, title: 'Why using js in web', description: 'comming soon ...' },
	{ id: 14, title: 'What js', description: 'comming soon ...' },

	{ id: 15, title: 'Automation ui', description: 'comming soon ...' },
	{ id: 16, title: 'Fragment', description: 'comming soon ...' },
	{
		id: 17,
		title: 'cypress | Jest',
		description: 'End To End Test [E2E test (cypress)] && Automation test (Jest)',
	},
	{
		id: 18,
		title: 'Solid',
		description: Solid,
	},
	{
		id: 19,
		title: 'Can you explain what closures are in JavaScript and why they are useful?',
		description: ClosuresFunction,
	},
	{
		id: 20,
		title: 'How does JavaScript handle asynchronous operations?',
		description: 'callbacks, promises, and async/await',
	},
	{
		id: 21,
		title: 'What are JavaScript promises, and why are they important?',
		description: Promises,
	},
	{
		id: 22,
		title: 'Can you explain the concept of hoisting in JavaScript?',
		description:
			'Hoisting allows variables and function declarations to be processed before the actual code runs, but the way in which they are hoisted (fully or partially) depends on the type of declaration (var, let, const, or function).',
	},
	{
		id: 23,
		title: 'What is a JavaScript generator function?',
		description: GeneratorFunction,
	},
	{
		id: 24,
		title: 'How do you use the `forEach()` method in JavaScript, and how does it differ from a standard `for` loop?',
		description: ForEach,
	},
	{
		id: 25,
		title: 'Explain null and undefined in javascript',
		description:
			'undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null ',
	},
	{
		id: 26,
		title: ' Differentiate between imperative and declarative programming. And what kind is used in React?',
		description:
			'في البرمجة الحتمية ، يتعين علينا تحديد كل خطوة لبناء أي شيء ، مثل واجهة المستخدم. بينما في البرمجة التقريرية ، نحتاج فقط إلى وصف المنتج النهائي ، وسيقوم البرنامج بإنشائه لنا. يستغرق جهدا ووقتا أقل نسبيا.',
	},
	{
		id: 27,
		title: 'Sitemap',
		description: SiteMap,
	},
	{
		id: 28,
		title: 'Constructor',
		description: Constructor,
	},
	{
		id: 29,
		title: 'rem and em',
		description: RemAndEm,
	},
	{
		id: 30,
		title: 'Typescript',
		description: Typescript,
	},
	{
		id: 31,
		title: 'Service Worker',
		description: ServiceWorkerCom,
	},
	{
		id: 32,
		title: 'Image Middleware',
		description: ImageMiddleware,
	},
	{
		id: 33,
		title: 'IndexedDB',
		description: IndexedDb,
	},
	{
		id: 34,
		title: 'Memo & UseMemo',
		description: Memo,
	},
	{
		id: 35,
		title: 'oocss vs bem',
		description: OocssAndBem,
	},
	{
		id: 36,
		title: 'Cherry-Pick',
		description: CherryPick,
	},
	{
		id: 37,
		title: 'Web Safty',
		description: WebSafty  ,
	},
	{
		id: 38,
		title: 'Optimization Tools',
		description: OptimizationTools,
	},
	{
		id: 39,
		title: 'GraphQl',
		description: GraphQl,
	},
	
];
