import QuestionsAnswers from '@/components/CComponents/QuestionsList/Answers/page';
import QuestionsList from '@/components/CComponents/QuestionsList/page';
import { Tabs } from '@radix-ui/react-tabs';
import React from 'react';

const Questions = () => {
	return (
		// <Tabs className='flex' defaultValue='1'>
		// 	<aside className='fixed hidden h-[calc(100vh-4rem)] w-[20%] shrink-0 border-r md:sticky md:block overflow-auto'>
		// 		<QuestionsList />
		// 	</aside>

		// 	<section className=' md:w-[80%] w-full px-2 bg-green-400'>
		// 		<QuestionsAnswers />
		// 	</section>
		// </Tabs>

		<Tabs className='flex h-[100vh]'>
			{/* Fixed Aside */}
			<aside className='fixed hidden h-[calc(100vh-4rem)] w-[20%] shrink-0 border-r md:block overflow-auto'>
				<QuestionsList />
			</aside>

			{/* Content Section */}
			<section className='md:w-[80%] w-full px-2 bg-green-400'>
				<QuestionsAnswers />
			</section>
		</Tabs>
	);
};

export default Questions;
