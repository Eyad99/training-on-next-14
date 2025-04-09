import React from 'react';

interface SectionItemProps {
	title: string;
	description: string;
}

const SectionItem = ({ title, description }: SectionItemProps) => (
	<div className='flex flex-col gap-2'>
		<h3 className='font-bold text-2xl'>{title}</h3>
		<p className='text-muted-foreground'>{description}</p>
	</div>
);

const Promises = () => {
	return (
		<section className='flex flex-col gap-6'>
			<SectionItem
				title='Promises'
				description='A promise can be in one of three states: pending, fulfilled, or rejected. Promises are important because they provide a cleaner and more manageable way to handle asynchronous operations compared to callbacks.'
			/>
		</section>
	);
};

export default Promises;
