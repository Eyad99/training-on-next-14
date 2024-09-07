'use client';

import React from 'react';
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { qsList } from './questions';

const QuestionsList = () => {
	return (
		<TabsList className='flex flex-col gap-2 items-start'>
			{qsList?.map((list) => {
				return (
					<TabsTrigger key={list?.id} value={`${list?.id}`} className='text-muted-foreground data-[state=active]:text-foreground'>
						<span className='hover:underline flex text-start cursor-pointer'>{list?.title}</span>
					</TabsTrigger>
				);
			})}
		</TabsList>

		// {/* <ul className="list-disc capitalize">
		//   <li className="font-bold">SSR && SSG && CSR && ISR</li>
		//   <section>
		//     <section>
		//       <h4>Client Side rendering</h4>
		//       <span>
		//         When client send request to the server , the server return html
		//         file [simple file],with refrence tag [js] bundle file.
		//       </span>
		//       <span>
		//         This method of rendering , where the component code is transformed
		//         into a user interface directly within the browser (the client) ,
		//         is known as [CSR].
		//       </span>
		//       <span>Drawbacks:</span>
		//       <span>Not optimal for SEO</span>
		//       <span>Increases the size of the javascript bundle.</span>
		//       <span>
		//         The user experience can suffer from slow load times, as the
		//         browser has to download, parse , and execute javascript before the
		//         user sees any meaningfuk content on the page
		//       </span>
		//     </section>

		//     <section className="border-b-4 border-indigo-500 ">
		//       <section>
		//         <h4>Server Side Rendering</h4>
		//         <span>
		//           When client send request to the server , the server generate
		//           full html file , then send directly to the browser [full html +
		//           js reference]
		//         </span>
		//         <span>
		//           Improves SEO because search enines can easily index the
		//           server-rendered content.
		//         </span>
		//         <span>
		//           Usres can immediately see the page HTML content, instead of a
		//           blank screen or loading spinner.
		//         </span>
		//         <span>
		//           NOTES:
		//           <span>
		//             The full interactivity of the page on hold until the
		//             javascript bundle comprising react itself along with your
		//             application specific code has been completely downloaded and
		//             executed by the browser this important phase known as
		//             hydration is where the static HTML page initially served by
		//             the server is brought to life.
		//           </span>
		//           <span>
		//             during hydration , React takes control in the browser ,
		//             reconstructing the component tree in memory based on the
		//             static HTML that was served.
		//           </span>
		//           <span>
		//             It carefully plans the placement of interactive eements within
		//             this tree, then react proceeds to bind the necessary
		//             javascript logic to these elements .
		//           </span>
		//           <span>
		//             This involves initializing the application state, attaching
		//             event handlers for actions such as cicks and mouseovers, and
		//             setting up an other dynamic functionalities required for a
		//             fully interactive user experience
		//           </span>
		//           <span>
		//             SSR, on the other hand , renders paged on-demand in response
		//             to user requests it is suitable for personalized content like
		//             social media feeds , where that HTML depends on the logged-in
		//             user
		//           </span>
		//           <span>
		//             SSR was a significant improvement over CSR , providing faster
		//             initial page loads and better SEO
		//           </span>
		//           <div>
		//             <div>Drawbacks</div>
		//             <ul>
		//               <li>
		//                 Data fetching must be completed before the server can
		//                 begin rendering HTML.
		//               </li>
		//               <li>
		//                 The js required for the components needs to be fully
		//                 loaded on the client side before the hydration process can
		//                 start.
		//               </li>
		//               <li>
		//                 All components have to be hydrated before they become
		//                 interactive.
		//               </li>
		//               <li>
		//                 These issues contribute to an allow-bothing waterfall
		//                 scenario , resulting in inefficiencies, especiallywh if
		//                 certain parts of your application are slower than others.
		//               </li>
		//             </ul>
		//           </div>
		//           <div>
		//             Use the Suspense
		//             <ul>
		//               <li>HTML streaming on the server Selective</li>
		//               <li>hydration on the client</li>
		//             </ul>
		//           </div>
		//         </span>
		//       </section>

		//       <section>
		//         <h4>Static Side Generation</h4>
		//         <span>
		//           SSG occurs at build time , when the application is deployed in
		//           the server . This result in paged that are already rendered and
		//           ready to server. It is ideal for content that does not changes
		//           often, like blog posts.
		//         </span>
		//       </section>

		//       <section>
		//         Drawbacks Server Side Rendering:
		//         <ul>
		//           <li className="font-bold">
		//             You have to fetch everything befor you can show anything
		//           </li>
		//           <span>
		//             Components can not start rendering and then pause or wait whie
		//             data is stil being loaded.
		//           </span>
		//           <span>
		//             If a component needs to fetch data from a database or another
		//             source (api) , this fetching musr be completed before the
		//             server can begin rendering the page.
		//           </span>
		//           <span>
		//             This can delay the server is response time to the browser , as
		//             the server must finish collecting all necessary data before
		//             any part of the page can be sent to the client
		//           </span>
		//           <li className="font-bold">
		//             You have to load everything before you can hydrate anything
		//           </li>
		//           <span>
		//             For successful hydration, where react adds interactivity to
		//             the server-rendered HTML , the component tree in the browser
		//             must exactly match the server-generated component tree.
		//           </span>
		//           <span>
		//             This means that al the javascript for the components must be
		//             loaded on the client before you can start hydrating any of
		//             them
		//           </span>

		//           <li className="font-bold">
		//             You have to hydrate everything before you can interact with
		//             anything{" "}
		//           </li>
		//           <span>
		//             React hydrates the component tree in a single pass , meaning
		//             once it starts hydrating , it will not stop until it is
		//             finished with the entire tree
		//           </span>
		//           <span>
		//             As a consequence , all components must be hydrated before you
		//             can interact with any of them
		//           </span>
		//         </ul>
		//         <ul>
		//           <li className="font-bold">
		//             Having to load the data for the entire page.
		//           </li>
		//           <li className="font-bold">
		//             Load the javascript for the entire page.
		//           </li>
		//           <li className="font-bold">Hydrate the entire page</li>
		//         </ul>
		//       </section>

		//       <section>
		//         <h4>Html streaming on the server</h4>
		//         <span>
		//           You do not have to fetch everything before you can show
		//           anything.
		//         </span>
		//         <span>
		//           If a particular section delays the initial HTML , it can be
		//           seamlessly integrated into the stream later.
		//         </span>
		//       </section>
		//       <section>
		//         <h4>selective hydration</h4>
		//         <span>
		//           Selective hydration allows for the hydration of sections as they
		//           become available , before the rest of the HTML and the
		//           javascript code are fully downloaded
		//         </span>
		//         <span>
		//           Thanks to selective hydration , a heavy piece of javascript does
		//           not prevent the rest of the page from becoming interactive
		//         </span>
		//       </section>

		//       <section>
		//         <h4>Select Hydration on the client contd</h4>
		//         <span>
		//           Selective hydration offers a solution to the third issue: the
		//           necessity to hydrate everything to interact with anything.
		//         </span>
		//         <span>
		//           React begins hydrating as soon as possible , enabling
		//           interactions with elements like the header and side nav without
		//           waiting for the main content to be hydrated.
		//         </span>
		//         <span>This process is managed automatically b Reect.</span>
		//       </section>

		//       <section>
		//         <h4>Drawbacks of Suspense SSR</h4>
		//         <span>
		//           First even though javascript code is streamed to the browser
		//           asynchronously eventually, the entire code for a web page must
		//           be downloaded by the user.
		//         </span>
		//         <span>
		//           As applications add more feature , the amount of code users need
		//           to download also rows, this leads to an important questions:
		//         </span>
		//         <span>Shoud users reall have to downloaded so much data ?</span>
		//         <span>
		//           Second , the current approach required that all at react
		//           components undergo hydration on the clientside , irrespective of
		//           their actual need for interactivity.
		//         </span>
		//         <span>
		//           This process can inefficiently spend resources and extend the
		//           loading times and time to interactivity for users , as their
		//           devices need to process and render components that might not
		//           even require client- side interaction.
		//         </span>
		//         <span>This leads to another question:</span>
		//         <span>
		//           Should all components be hydrated , even those that do not need
		//           interactivity?
		//         </span>
		//         <span>
		//           Third, in spite of server's superior capacity for handing
		//           intensice processing tasks, the bulk of javascript execution
		//           still takes place on the user's device.
		//         </span>
		//         <span>
		//           This can slow down the performance , especially on devices that
		//           are not very powergul.
		//         </span>
		//         <span>
		//           This can slow down the performance , especially on devices that
		//           are not very powergul.
		//         </span>
		//         <span>
		//           Should so much of the work be done on the user's device{" "}
		//         </span>

		//         <h4>NOTES:</h4>
		//         <span>
		//           Suspence for ssr brought us closer to a seamless rendering
		//           experience
		//         </span>
		//         <span>CHALLENGES</span>
		//         <span>
		//           1- Increases bundle sizes leading to excessive downloads for
		//           users.
		//         </span>
		//         <span>2- Unnecessary hydration delaying interactivity.</span>
		//         <span>
		//           3- Extensive client-side processing that could result in poor
		//           performance.
		//         </span>
		//       </section>
		//     </section>

		//     <section className="border-b-4 border-indigo-500 ">
		//       <h4>React Server Component</h4>
		//     </section>
		//   </section>
		//   <ul className="list-disc capitalize ml-2">
		//     <li>
		//       <h4>SSR</h4>
		//       Data fetching must be completed before the server can begin
		//       rendering HTML. the js required for the components needs to be fully
		//       loaded on the client side before the hydration process can start.
		//       all the components have to be hydrated before they become
		//       interactive. use the Suspanse component to unlock tow major SSR
		//       features: 1- Html streaming on the server. 2- Seective hydration on
		//       the client.
		//     </li>
		//   </ul>
		// </ul> */}
	);
};

export default QuestionsList;
