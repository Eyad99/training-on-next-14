'use client';

import { User_Res } from '@/core/models/page';
import React from 'react';

const ListUsersWithoutReactQuery = ({ data }: any) => {
	return (
		<div className='flex flex-col'>
			{data?.map((user: User_Res) => (
				<span key={user?.id}>{user?.name}</span>
			))}
		</div>
	);
};

export default ListUsersWithoutReactQuery;
