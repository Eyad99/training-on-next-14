'use client';

import { User_Res } from '@/core/models/page';
import { getUsers } from '@/core/services/page';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ListUsersWithReactQuery = () => {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ['hydrate-users'],
		queryFn: () => getUsers(),
		refetchOnWindowFocus: false,
		retry: 1,
	});

	if (isLoading) return <>Loading....</>;
	return (
		<div className='flex flex-col'>
			{data?.map((user: User_Res) => (
				<span key={user?.id}>{user?.name}</span>
			))}
		</div>
	);
};

export default ListUsersWithReactQuery;
