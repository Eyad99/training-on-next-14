import CodeMirrorEditor from '@/components/RComponents/CodeMirrorEditor';
import React from 'react';

const ServiceWorkerCom = () => {
	return (
		<div className='flex flex-col'>
			<h4 className='font-bold text-3xl'>Service Worker</h4>
			<span className='text-muted-foreground'>
				Service worker is a script that works on the background of Javascript apps on a different thread
			</span>
			<span className='text-muted-foreground'>It essentially acts as a proxy between the web browsers and web servers</span>
			<h4 className='text-xl'>Used in performance improvement Javascript by</h4>
			<ul className='list-disc pl-6'>
				<li className='text-muted-foreground'>Cashing</li>
				<li className='text-muted-foreground'>Offline mode</li>
				<li className='text-muted-foreground'>Push notification</li>
			</ul>
			<h4 className='text-xl'>Lifecycle of a service worker</h4>
			<ul className='list-disc pl-6'>
				<li className='text-muted-foreground'>Registration</li>
				<li className='text-muted-foreground'>Installation</li>
				<li>Activation</li>
				<ul className='list-disc pl-6'>
					<li className='text-muted-foreground'>usually check if the browser supports service workers</li>
					<li className='text-muted-foreground'>hen call the navigator.serviceWorker.register()</li>
					<li className='text-muted-foreground'>
						The Service worker script is downloaded and after that, the browser will try to install the service worker.
					</li>
					<li>
						The service worker will only be activated in any of these cases:
						<ul className='list-disc pl-6'>
							<li className='text-muted-foreground'>If there are no service workers that are currently active</li>
							<li className='text-muted-foreground'>If the self.skipWaiting() is called in the install event handler</li>
							<li className='text-muted-foreground'>If the page is refreshed by the user</li>
						</ul>
					</li>
				</ul>
			</ul>
			<h4 className='text-xl'>Service workers will work only on HTTPS </h4>
			<h4 className='text-xl'>Checking the status of service worker (Developer tools / Application) </h4>

			<CodeMirrorEditor
				value={`
// inside service-worker.js 
  importScripts('https://cdn.engagespot.co/serviceWorkerv2.js'); 
`}
			/>

			<CodeMirrorEditor
				value={`
// inside head Tag
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
  })
}`}
			/>
		</div>
	);
};

export default ServiceWorkerCom;
