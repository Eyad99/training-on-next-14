'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { signOut, useSession } from 'next-auth/react';
import { Aperture, MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/questions?qs=react', label: 'Questions' },
	{ href: '/technologies', label: 'Technologies' },
	{ href: '/english', label: 'English' },
];

function NavLink({ href, label }: { href: string; label: string }) {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={`transition-colors hover:text-foreground/80 ${pathname === href ? 'text-foreground' : 'text-foreground/60'}`}
			prefetch={false}
		>
			{label}
		</Link>
	);
}

export default function Header() {
	const { data: session } = useSession();

	return (
		<header className='fixed top-0 left-0 w-full shadow-md z-50 bg-gray-50 dark:bg-secondary flex items-center justify-between h-16 px-4 md:px-6'>
			{/* // <header className='flex sticky top-0 shadow-md z-10 bg-gray-50 dark:bg-secondary  items-center justify-between h-16 px-4 md:px-6'> */}
			{/* Small Screen Navigation */}
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
						<span className='sr-only'>Es logo</span>
					</Link>

					<nav className='grid gap-2 py-6'>
						{navLinks.map((link) => (
							<NavLink key={link.href} href={link.href} label={link.label} />
						))}
					</nav>
				</SheetContent>
			</Sheet>

			{/* Large Screen Navigation */}
			<nav className='hidden lg:flex md:gap-6 items-center'>
				<Link href='/' prefetch={true}>
					<Image src='/logo.png' alt='logo' width={80} height={80} />
				</Link>
				{navLinks.map((link) => (
					<NavLink key={link.href} href={link.href} label={link.label} />
				))}
			</nav>

			{/* User Authentication & Mode Toggle */}
			<div className='flex items-center space-x-4'>
				{session?.user ? (
					<Button onClick={() => signOut()} variant='outline' className='px-4 py-2 rounded-md text-sm font-medium'>
						Logout
					</Button>
				) : (
					<Link href='/login'>
						<Button variant='outline' className='px-4 py-2 rounded-md text-sm font-medium'>
							Login
						</Button>
					</Link>
				)}
				<ModeToggle />
			</div>
		</header>
	);
}
