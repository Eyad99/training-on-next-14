'use client';
import React from 'react';
import { qsList } from '../questions';
import { useSearchParams } from 'next/navigation';

const QuestionsAnswers = () => {
	const searchParams = useSearchParams();
	const qs = searchParams.get('qs');

	const matchedItem = qsList.find((list) => list?.param === qs);

	if (!matchedItem) {
		return <div>not-found</div>;
	}

	return (
		<div key={matchedItem?.id}>
			{typeof matchedItem.description === 'string' ? (
				<div className='text-muted-foreground' dangerouslySetInnerHTML={{ __html: matchedItem.description }} />
			) : (
				React.createElement(matchedItem.description!)
			)}
		</div>
	);
};

export default QuestionsAnswers;
