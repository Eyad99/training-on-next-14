'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Aperture, MenuIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { signOut, useSession } from 'next-auth/react';

import { LifeBuoy } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// import { useRouter } from 'next/router';

export default function Header() {
	const pathname = usePathname();
	const router = useRouter();

	const { data: session } = useSession();

	return (
		<header className={`flex items-center justify-between h-16 px-4 md:px-6 `}>
			{/* Small Screen */}
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size='icon' className='lg:hidden'>
						<MenuIcon className='h-6 w-6' />
						<span className='sr-only'>Toggle navigation menu</span>
					</Button>
				</SheetTrigger>

				<SheetContent side='left'>
					<Link href='/' className='mr-6 flex items-center' prefetch={false}>
						<Aperture />
						<span className='sr-only'>Acme Inc</span>
					</Link>

					<nav className='grid gap-2 py-6'>
						<Link
							href='/'
							className={`transition-colors hover:text-foreground/80 ${pathname === '/' ? 'text-foreground' : 'text-foreground/60'}`}
							prefetch={false}
						>
							Home
						</Link>
						<Link
							href='/questions'
							className={`transition-colors hover:text-foreground/80 ${
								pathname === '/questions' ? 'text-foreground' : 'text-foreground/60'
							}`}
							prefetch={false}
						>
							Questions
						</Link>
					</nav>
				</SheetContent>
			</Sheet>

			{/* Large Screen */}
			<nav className='flex items-center'>
				<div className='hidden lg:flex md:gap-6 items-center'>
					<Link href='/' prefetch={false}>
						<Aperture />
					</Link>
					<Link
						href='/'
						className={`transition-colors hover:text-foreground/80 ${pathname === '/' ? 'text-foreground' : 'text-foreground/60'}`}
						prefetch={false}
					>
						Home
					</Link>
					<Link
						href='/questions'
						className={`transition-colors hover:text-foreground/80 ${pathname === '/questions' ? 'text-foreground' : 'text-foreground/60'}`}
						prefetch={false}
					>
						Questions
					</Link>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant={'link'} className='p-0 text-[16px]  text-foreground/60'>
								Fetch Data
							</Button>
						</DropdownMenuTrigger>

						<DropdownMenuContent className='w-56'>
							<DropdownMenuItem>
								<LifeBuoy className='mr-2 h-4 w-4' />
								<Link href='/fetch-data/without-react-query' prefetch={false}>
									Without React Query
								</Link>
							</DropdownMenuItem>{' '}
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={(e) => router.push('/fetch-data/with-react-query')}>
								<LifeBuoy className='mr-2 h-4 w-4' />
								<Link href='/fetch-data/with-react-query' prefetch={false}>
									With React Query
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={(e) => router.push('/fetch-data/users-server')}>
								<LifeBuoy className='mr-2 h-4 w-4' />
								<Link href='/fetch-data/users-server' prefetch={false}>
									Server Component
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={(e) => router.push('/fetch-data/server-action')}>
								<LifeBuoy className='mr-2 h-4 w-4' />
								<Link href='/fetch-data/server-action' prefetch={false}>
									Server Action
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>
			<div className='flex items-center space-x-4'>
				{session?.user ? (
					<Button onClick={() => signOut()} variant={'outline'} className=' px-4 py-2 rounded-md text-sm font-medium'>
						Logout
					</Button>
				) : (
					<Link href='/login'>
						<Button variant={'outline'} className=' px-4 py-2 rounded-md text-sm font-medium'>
							Login
						</Button>
					</Link>
				)}

				<ModeToggle />
			</div>
		</header>
	);
}
