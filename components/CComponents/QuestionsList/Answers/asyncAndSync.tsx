import React from 'react';

interface SectionItemProps {
	title: string;
	description: string;
}

const SectionItem = ({ title, description }: SectionItemProps) => (
	<div className='flex flex-col gap-2'>
		<h4 className='font-bold text-2xl'>{title}</h4>
		<p className='text-muted-foreground'>{description}</p>
	</div>
);

const AsyncAndSync = () => {
	return (
		<section className='flex flex-col gap-6'>
			<SectionItem
				title='Asynchronous'
				description='Programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete'
			/>
			<SectionItem
				title='Synchronous'
				description='Programming approach where tasks of a program are executed sequentially one at a time.'
			/>
		</section>
	);
};

export default AsyncAndSync;
