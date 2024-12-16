import React from 'react';
import QuestionsAnswers from '@/components/CComponents/QuestionsList/Answers/page';
import QuestionsList from '@/components/CComponents/QuestionsList/page';
import { Tabs } from '@radix-ui/react-tabs';

const Questions = () => {
	return (
		<Tabs className='flex' defaultValue='1'>
			<aside className='fixed hidden max-h-[calc(100vh-4rem)] w-[20%] shrink-0 border-r md:block overflow-auto p-2'>
				<QuestionsList />
			</aside>

			<section className='md:w-[80%] md:ml-[20%] w-full px-2'>
				<QuestionsAnswers />
			</section>
		</Tabs>
	);
};

export default Questions;
