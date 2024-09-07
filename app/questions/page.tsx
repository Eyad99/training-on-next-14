import QuestionsAnswers from '@/components/CComponents/QuestionsList/Answers/page';
import QuestionsList from '@/components/CComponents/QuestionsList/page';
import { Separator } from '@/components/ui/separator';
import { Tabs } from '@radix-ui/react-tabs';
import React from 'react';

const Questions = () => {
	return (
		<Tabs className='flex' defaultValue='1'>
			<aside className='w-[20%] fixed hidden h-[calc(100vh-4rem)] shrink-0 md:sticky md:block overflow-auto overscroll-y-auto '>
				<QuestionsList />
			</aside>
			<Separator orientation='vertical' className='h-auto' />

			<section className='w-[80%] px-2'>
				<QuestionsAnswers />
			</section>
		</Tabs>
	);
};

export default Questions;
