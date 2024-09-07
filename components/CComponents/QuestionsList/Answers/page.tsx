import React from 'react';
import { TabsContent } from '@radix-ui/react-tabs';
import { qsList } from '../questions';

const QuestionsAnswers = () => {
	return (
		<div>
			{qsList?.map((list) => {
				return (
					<TabsContent key={list?.id} value={`${list?.id}`}>
						{typeof list.description === 'string' ? (
							<div className='text-muted-foreground' dangerouslySetInnerHTML={{ __html: list.description }} />
						) : (
							React.createElement(list.description)
						)}{' '}
					</TabsContent>
				);
			})}
		</div>
	);
};

export default QuestionsAnswers;
