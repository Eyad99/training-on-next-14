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
import OptimizationTools from './Answers/optimizationTools';
import Promises from './Answers/promises';
import MeaningReact from './Answers/react';
import ReactAndReactDom from './Answers/reactAndReactDom';
import RemAndEm from './Answers/remAndEm';
import ServerComponentAndServerAction from './Answers/serverComponentAndServerAction';
import SiteMap from './Answers/siteMap';
import Solid from './Answers/solid';
import RenderingPatterns from './Answers/renderingPatterns';
import State from './Answers/state';
import TreeShaking from './Answers/treeShaking';
import Typescript from './Answers/typescript';
import UseCallBack from './Answers/useCallBack';
import WebSafty from './Answers/webSafty';
import CacheInFetchMethod from './Answers/cacheInFetchMethod';
import HooksInReact from './Answers/hooksInReact';
import RealTimeApps from './Answers/realTimeApps';
import TestWays from './Answers/testWays';
import CiCd from './Answers/ciCd';
// import ServiceWorkerCom from './Answers/serviceWorkerCom';
import Hydration from './Answers/hydration';

export const qsList = [
	{
		id: 1,
		title: 'What is the meaning React?',
		param: 'react',
		description: MeaningReact,
	},
	{
		id: 2,
		title: 'React vs ReactDOM',
		param: 'react-dom',
		description: ReactAndReactDom,
	},
	{
		id: 3,
		title: 'Element And Component',
		param: 'element-and-component',
		description: ElementAndComponent,
	},
	{
		id: 4,
		title: 'JSX',
		param: 'jsx',
		description: Jsx,
	},
	{
		id: 5,
		title: 'What the Mean state',
		param: 'state',
		description: State,
	},
	{
		id: 6,
		title: 'Dom && Virtua Dom',
		param: 'dom-and-virtuadom',
		description: DomAndVirtualDom,
	},

	{
		id: 7,
		title: 'Async vs Sync',
		param: 'async-sync',
		description: AsyncAndSync,
	},

	{
		id: 8,
		title: 'Function types',
		param: 'function-types',
		description: FunctionTypes,
	},
	{
		id: 9,
		title: 'useCallBack',
		param: 'usecallback',
		description: UseCallBack,
	},

	{
		id: 10,
		title: 'Diffrent between local storage and session',
		param: 'localstorage-and-session',
		description: 'comming soon ...',
	},
	{
		id: 11,
		title: 'What the diffrent between cookie and httpOnlyCookie',
		param: 'cookie-and-httponlycookie',
		description: 'comming soon ...',
	},
	{
		id: 12,
		title: 'Key words in js',
		param: 'key-words',
		description: 'comming soon ...',
	},
	{
		id: 13,
		title: 'Why using js in web',
		param: 'js-in-web',
		description: 'comming soon ...',
	},
	{
		id: 14,
		title: 'What js',
		param: 'js',
		description: 'comming soon ...',
	},

	{
		id: 15,
		title: 'Automation ui',
		param: 'automation-ui',
		description: 'comming soon ...',
	},
	{
		id: 16,
		title: 'Fragment',
		param: 'fragment',
		description: 'comming soon ...',
	},
	{
		id: 17,
		title: 'cypress | Jest',
		param: 'cypress-jest',
		description: TestWays,
	},
	{
		id: 18,
		title: 'Solid',
		param: 'solid',
		description: Solid,
	},
	{
		id: 19,
		title: 'Can you explain what closures are in JavaScript and why they are useful?',
		param: 'closures-function',
		description: ClosuresFunction,
	},
	{
		id: 20,
		title: 'How does JavaScript handle asynchronous operations?',
		param: 'handle-asynchronous-operations',
		description: 'callbacks, promises, and async/await',
	},
	{
		id: 21,
		title: 'What are JavaScript promises, and why are they important?',
		param: 'promises',
		description: Promises,
	},
	{
		id: 22,
		title: 'Can you explain the concept of hoisting in JavaScript?',
		param: 'hoisting',
		description:
			'Hoisting allows variables and function declarations to be processed before the actual code runs, but the way in which they are hoisted (fully or partially) depends on the type of declaration (var, let, const, or function).',
	},
	{
		id: 23,
		title: 'What is a JavaScript generator function?',
		param: 'generator-function',
		description: GeneratorFunction,
	},
	{
		id: 24,
		title: 'How do you use the `forEach()` method in JavaScript, and how does it differ from a standard `for` loop?',
		param: 'forloop',
		description: ForEach,
	},
	{
		id: 25,
		title: 'Explain null and undefined in javascript',
		param: 'null-and-undefined',
		description:
			'undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null ',
	},
	{
		id: 26,
		title: ' Differentiate between imperative and declarative programming. And what kind is used in React?',
		param: 'imperative-and-declarative',
		description:
			'في البرمجة الحتمية ، يتعين علينا تحديد كل خطوة لبناء أي شيء ، مثل واجهة المستخدم. بينما في البرمجة التقريرية ، نحتاج فقط إلى وصف المنتج النهائي ، وسيقوم البرنامج بإنشائه لنا. يستغرق جهدا ووقتا أقل نسبيا.',
	},
	{
		id: 27,
		title: 'Sitemap',
		param: 'sitemap',
		description: SiteMap,
	},
	{
		id: 28,
		title: 'Constructor',
		param: 'constructor',
		description: Constructor,
	},
	{
		id: 29,
		title: 'rem and em',
		param: 'rem-and-em',
		description: RemAndEm,
	},
	{
		id: 30,
		title: 'Typescript',
		param: 'typescript',
		description: Typescript,
	},
	{
		id: 31,
		title: 'Service Worker',
		param: 'service-worker',
		// description: ServiceWorkerCom,
	},
	{
		id: 32,
		title: 'Image Middleware',
		param: 'image-middleware',
		description: ImageMiddleware,
	},
	{
		id: 33,
		title: 'IndexedDB',
		param: 'indexeddb',
		description: IndexedDb,
	},
	{
		id: 34,
		title: 'Memo & UseMemo',
		param: 'memo-usememo',
		description: Memo,
	},
	{
		id: 35,
		title: 'oocss vs bem',
		param: 'oocss-and-bem',
		description: OocssAndBem,
	},
	{
		id: 36,
		title: 'Cherry-Pick',
		param: 'cherry-pick',
		description: CherryPick,
	},
	{
		id: 37,
		title: 'Web Safty',
		param: 'web-safty',
		description: WebSafty,
	},
	{
		id: 38,
		title: 'Optimization Tools',
		param: 'optimization-tools',
		description: OptimizationTools,
	},
	{
		id: 39,
		title: 'GraphQl',
		param: 'graphql',
		description: GraphQl,
	},
	{
		id: 40,
		title: 'ServerComponentAndServerAction',
		param: 'servercomponent-and-serveraction',
		description: ServerComponentAndServerAction,
	},
	{
		id: 41,
		title: 'Tree Shaking',
		param: 'tree-shaking',
		description: TreeShaking,
	},
	{
		id: 42,
		title: 'Rendering Patterns',
		param: 'rendering-patterns',
		description: RenderingPatterns,
	},
	{
		id: 43,
		title: 'Cache in fetch method',
		param: 'cache-in-fetch-method',
		description: CacheInFetchMethod,
	},
	{
		id: 44,
		title: 'New Hooks In React',
		param: 'new-hooks-in-react',
		description: HooksInReact,
	},
	{
		id: 45,
		title: 'Web socket & Pusher',
		param: 'web-socket-and-pusher',
		description: RealTimeApps,
	},
	{
		id: 46,
		title: 'CI & CD',
		param: 'ci-and-cd',
		description: CiCd,
	},
	{
		id: 47,
		title: 'Hydration',
		param: 'hydration',
		description: Hydration,
	},
];
