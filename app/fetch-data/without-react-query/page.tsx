import React from 'react';
import ListUsersWithoutReactQuery from '@/components/CComponents/FetchData/listUserWithoutReactQuery';
import { getUsers } from '@/core/services/page';

export default async function WithoutReactQuery() {
	const data = await getUsers();

	return (
		<React.Fragment>
			<div className='fex flex-col'>
				<span className='text-lg font-bold flex justify-center'>Without React Query</span>
				<ListUsersWithoutReactQuery data={data} />
			</div>
		</React.Fragment>
	);
}
