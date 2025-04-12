'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';

const TECHNOLOGIES = [
	{ id: 1, name: 'Indexed Db', link: 'indexed-db' },
	{ id: 2, name: 'React Form Hook', link: 'react-hook-form' },
	{ id: 3, name: 'Fetch Data With ReactQuery', link: 'with-react-query' },
	{ id: 4, name: 'Fetch Data Without ReactQuery', link: 'without-react-query' },
	{ id: 5, name: 'Server Component', link: 'users-server' },
	{ id: 6, name: 'Server Action', link: 'server-action' },
	{ id: 7, name: 'Jest', link: 'jest' },
] as const;

export default function Technologies() {
	return (
		<div className='sm:h-[calc(100vh-84px)] flex items-center'>
			<div className='container mx-auto px-10'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{TECHNOLOGIES.map(({ id, name, link }) => (
						<Link key={id} href={`/technologies/${link}`}>
							<Card className='h-24 flex items-center justify-center hover:shadow-lg hover:text-gray-600 transition-shadow'>
								<h2 className='text-lg font-semibold text-center'>{name}</h2>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
