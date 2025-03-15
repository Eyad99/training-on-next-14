import React from 'react';
import QuestionsAnswers from '@/components/CComponents/QuestionsList/Answers/page';
import QuestionsList from '@/components/CComponents/QuestionsList/page';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PanelTopClose } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

function RenderSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<PanelTopClose className='cursor-pointer' />
			</SheetTrigger>
			<SheetContent side='bottom'>
				<ScrollArea className='h-[50vh] p-4'>
					<QuestionsList />
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}

const Questions = () => {
	return (
		<div className='grid auto-rows-min gap-4 grid-cols-12'>
			<div className='md:block hidden md:col-span-4 col-span-12 shadow-md border h-[100vh] md:sticky top-0 overflow-hidden'>
				<ScrollArea className='h-full p-4'>
					<QuestionsList />
				</ScrollArea>
			</div>

			<div className='md:hidden block'>
				<RenderSheet />
			</div>

			<div className='rounded-md md:col-span-8 col-span-12 shadow-md border p-4'>
				<QuestionsAnswers />
			</div>
		</div>
	);
};

export default Questions;
