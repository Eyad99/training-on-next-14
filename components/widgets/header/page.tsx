'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Aperture, MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { signOut, useSession } from 'next-auth/react';

export default function Header() {
	const pathname = usePathname();

	const { data: session } = useSession();

	return (
		<header className={`flex items-center justify-between h-16 px-4 md:px-6 `}>
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
