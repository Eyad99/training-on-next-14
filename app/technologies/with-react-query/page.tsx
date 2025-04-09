import React from 'react';
import { QueryClient } from '@tanstack/react-query';
import { getUsers } from '@/core/services/page';
import ListUsersWithReactQuery from '@/components/CComponents/FetchData/listUserWithReactQuery';

export default async function WithReactQuery() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['hydrate-users'],
		queryFn: getUsers,
	});

	return (
		<React.Fragment>
			<div className='fex flex-col'>
				<span className='text-lg font-bold flex justify-center'>With React Query</span>
				<ListUsersWithReactQuery />
			</div>
		</React.Fragment>
	);
}
