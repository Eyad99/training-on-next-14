'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Aperture, MenuIcon, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/questions?qs=react', label: 'Questions' },
	{ href: '/technologies', label: 'Technologies' },
	{ href: '/english', label: 'English' },
];

const fetchDataLinks = [
	{ href: '/fetch-data/without-react-query', label: 'Without React Query' },
	{ href: '/fetch-data/with-react-query', label: 'With React Query' },
	{ href: '/fetch-data/users-server', label: 'Server Component' },
	{ href: '/fetch-data/server-action', label: 'Server Action' },
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

function FetchDataMenu() {
	const router = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='link' className='p-0 h-fit text-[16px] text-foreground/60'>
					Fetch Data
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				{fetchDataLinks.map((link, index) => (
					<>
						<DropdownMenuItem key={link.href + index} onClick={() => router.push(link.href)}>
							<LifeBuoy className='mr-2 h-4 w-4' />
							<Link href={link.href} prefetch={false}>
								{link.label}
							</Link>
						</DropdownMenuItem>
						{index < fetchDataLinks.length - 1 && <DropdownMenuSeparator />}
					</>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
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
						<FetchDataMenu />
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
				<FetchDataMenu />
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
