// Question Components
import {
	AsyncAndSync,
	CherryPick,
	ClosuresFunction,
	Constructor,
	DomAndVirtualDom,
	ElementAndComponent,
	ForEach,
	FunctionTypes,
	GeneratorFunction,
	GraphQl,
	ImageMiddleware,
	IndexedDb,
	Jsx,
	Memo,
	OocssAndBem,
	OptimizationTools,
	Promises,
	MeaningReact,
	ReactAndReactDom,
	RemAndEm,
	ServerComponentAndServerAction,
	SiteMap,
	Solid,
	RenderingPatterns,
	State,
	TreeShaking,
	Typescript,
	UseCallBack,
	WebSafty,
	CacheInFetchMethod,
	HooksInReact,
	RealTimeApps,
	TestWays,
	CiCd,
	Hydration,
	AsyncAndPromise,
	LazyLoading,
	ControllerAndUncontroller,
	Suspense,
	ReactLazyAndDynamic,
	DesignPatterns,
	ServiceWorkerCom,
	EventLoop,
	Docker,
	AutomationUi,
	CookieAndHttpOnlyCookie,
  Fragment,
  JavaScript,
  JsInWeb,
  JsKeywords,
  LocalStorageAndSession
} from './Answers';

interface Question {
	id: number;
	title: string;
	param: string;
	description: any;
}

export const qsList: Question[] = [
	{
		id: 1,
		title: 'Async vs Sync',
		param: 'async-sync',
		description: AsyncAndSync,
	},
	{
		id: 2,
		title: 'Async/Await And Promise',
		param: 'asyncawite-and-promise',
		description: AsyncAndPromise,
	},
	{
		id: 3,
		title: 'Automation ui',
		param: 'automation-ui',
		description: AutomationUi,
	},
	{
		id: 4,
		title: 'Cache in fetch method',
		param: 'cache-in-fetch-method',
		description: CacheInFetchMethod,
	},
	{
		id: 5,
		title: 'Cherry-Pick',
		param: 'cherry-pick',
		description: CherryPick,
	},
	{
		id: 6,
		title: 'CI & CD',
		param: 'ci-and-cd',
		description: CiCd,
	},
	{
		id: 7,
		title: 'Can you explain what closures are in JavaScript and why they are useful?',
		param: 'closures-function',
		description: ClosuresFunction,
	},
	{
		id: 8,
		title: 'Constructor',
		param: 'constructor',
		description: Constructor,
	},
	{
		id: 9,
		title: 'Controller And Uncontroller',
		param: 'controller-and-uncontroller',
		description: ControllerAndUncontroller,
	},
	{
		id: 10,
		title: 'Cookie and httpOnlyCookie',
		param: 'cookie-and-httponlycookie',
		description: CookieAndHttpOnlyCookie,
	},
	{
		id: 11,
		title: 'cypress | Jest',
		param: 'cypress-jest',
		description: TestWays,
	},
	{
		id: 12,
		title: 'Design Patterns',
		param: 'design-patterns',
		description: DesignPatterns,
	},
	{
		id: 13,
		title: 'Docker and Containerization',
		param: 'docker',
		description: Docker,
	},
	{
		id: 14,
		title: 'Dom && Virtual Dom',
		param: 'dom-and-virtuadom',
		description: DomAndVirtualDom,
	},
	{
		id: 15,
		title: 'Element And Component',
		param: 'element-and-component',
		description: ElementAndComponent,
	},
	{
		id: 16,
		title: 'Event Loop',
		param: 'event-loop',
		description: EventLoop,
	},
	{
		id: 17,
		title: 'How do you use the `forEach()` method in JavaScript, and how does it differ from a standard `for` loop?',
		param: 'forloop',
		description: ForEach,
	},
	{
		id: 18,
		title: 'Fragment',
		param: 'fragment',
		description: Fragment,
	},
	{
		id: 19,
		title: 'Function types',
		param: 'function-types',
		description: FunctionTypes,
	},
	{
		id: 20,
		title: 'What is a JavaScript generator function?',
		param: 'generator-function',
		description: GeneratorFunction,
	},
	{
		id: 21,
		title: 'GraphQl',
		param: 'graphql',
		description: GraphQl,
	},
	{
		id: 22,
		title: 'How does JavaScript handle asynchronous operations?',
		param: 'handle-asynchronous-operations',
		description: 'callbacks, promises, and async/await',
	},
	{
		id: 23,
		title: 'Can you explain the concept of hoisting in JavaScript?',
		param: 'hoisting',
		description:
			'Hoisting allows variables and function declarations to be processed before the actual code runs, but the way in which they are hoisted (fully or partially) depends on the type of declaration (var, let, const, or function).',
	},
	{
		id: 24,
		title: 'Hydration',
		param: 'hydration',
		description: Hydration,
	},
	{
		id: 25,
		title: 'Image Middleware',
		param: 'image-middleware',
		description: ImageMiddleware,
	},
	{
		id: 26,
		title: 'Differentiate between imperative and declarative programming. And what kind is used in React?',
		param: 'imperative-and-declarative',
		description:
			'في البرمجة الحتمية ، يتعين علينا تحديد كل خطوة لبناء أي شيء ، مثل واجهة المستخدم. بينما في البرمجة التقريرية ، نحتاج فقط إلى وصف المنتج النهائي ، وسيقوم البرنامج بإنشائه لنا. يستغرق جهدا ووقتا أقل نسبيا.',
	},
	{
		id: 27,
		title: 'IndexedDB',
		param: 'indexeddb',
		description: IndexedDb,
	},
	{
		id: 28,
		title: 'What js',
		param: 'js',
		description: JavaScript,
	},
	{
		id: 29,
		title: 'Why using js in web',
		param: 'js-in-web',
		description: JsInWeb,
	},
	{
		id: 30,
		title: 'JSX',
		param: 'jsx',
		description: Jsx,
	},
	{
		id: 31,
		title: 'Key words in js',
		param: 'key-words',
		description: JsKeywords,
	},
	{
		id: 32,
		title: 'Lazy Loading',
		param: 'lazy-loading',
		description: LazyLoading,
	},
	{
		id: 33,
		title: 'Local storage and session',
		param: 'localstorage-and-session',
		description: LocalStorageAndSession,
	},
	{
		id: 34,
		title: 'Memo & UseMemo',
		param: 'memo-usememo',
		description: Memo,
	},
	{
		id: 35,
		title: 'New Hooks In React',
		param: 'new-hooks-in-react',
		description: HooksInReact,
	},
	{
		id: 36,
		title: 'Explain null and undefined in javascript',
		param: 'null-and-undefined',
		description:
			'undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null',
	},
	{
		id: 37,
		title: 'oocss vs bem',
		param: 'oocss-and-bem',
		description: OocssAndBem,
	},
	{
		id: 38,
		title: 'Optimization Tools',
		param: 'optimization-tools',
		description: OptimizationTools,
	},
	{
		id: 39,
		title: 'What are JavaScript promises, and why are they important?',
		param: 'promises',
		description: Promises,
	},
	{
		id: 40,
		title: 'What is the meaning React?',
		param: 'react',
		description: MeaningReact,
	},
	{
		id: 41,
		title: 'React vs ReactDOM',
		param: 'react-dom',
		description: ReactAndReactDom,
	},
	{
		id: 42,
		title: 'React Lazy And Dynamic',
		param: 'react-lazy-and-dynamic',
		description: ReactLazyAndDynamic,
	},
	{
		id: 43,
		title: 'Web socket & Pusher',
		param: 'web-socket-and-pusher',
		description: RealTimeApps,
	},
	{
		id: 44,
		title: 'rem and em',
		param: 'rem-and-em',
		description: RemAndEm,
	},
	{
		id: 45,
		title: 'Rendering Patterns',
		param: 'rendering-patterns',
		description: RenderingPatterns,
	},
	{
		id: 46,
		title: 'Server Component And Server Action',
		param: 'servercomponent-and-serveraction',
		description: ServerComponentAndServerAction,
	},
	{
		id: 47,
		title: 'Service Worker',
		param: 'service-worker',
		description: ServiceWorkerCom,
	},
	{
		id: 48,
		title: 'Sitemap',
		param: 'sitemap',
		description: SiteMap,
	},
	{
		id: 49,
		title: 'Solid',
		param: 'solid',
		description: Solid,
	},
	{
		id: 50,
		title: 'What the Mean state',
		param: 'state',
		description: State,
	},
	{
		id: 51,
		title: 'Suspense',
		param: 'suspense',
		description: Suspense,
	},
	{
		id: 52,
		title: 'Tree Shaking',
		param: 'tree-shaking',
		description: TreeShaking,
	},
	{
		id: 53,
		title: 'Typescript',
		param: 'typescript',
		description: Typescript,
	},
	{
		id: 54,
		title: 'useCallBack',
		param: 'usecallback',
		description: UseCallBack,
	},
	{
		id: 55,
		title: 'Web Safety',
		param: 'web-safty',
		description: WebSafty,
	},
];
