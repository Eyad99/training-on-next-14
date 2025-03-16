import React from 'react';

export default async function Home() {
	return (
		<div className='grid auto-rows-min gap-4 grid-cols-12'>
			<div className='rounded-md md:col-span-4 col-span-12 bg-fuchsia-300'>Personal info</div>
			<div className='rounded-md md:col-span-8 col-span-12 bg-slate-300'>
				<h1 className='text-2xl text-center font-bold'>Home Page</h1>
			</div>
		</div>
	);
}
