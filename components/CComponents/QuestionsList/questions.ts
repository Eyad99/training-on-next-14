import AsyncAndSync from './Answers/asyncAndSync';
import ClosuresFunction from './Answers/closuresFunction';
import DomAndVirtualDom from './Answers/domAndVirtualDom';
import ElementAndComponent from './Answers/elementAndComponent';
import FunctionTypes from './Answers/functionTypes';
import Jsx from './Answers/jsx';
import MeaningReact from './Answers/react';
import ReactAndReactDom from './Answers/reactAndReactDom';
import Solid from './Answers/solid';
import State from './Answers/state';
import UseCallBack from './Answers/useCallBack';

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
];
