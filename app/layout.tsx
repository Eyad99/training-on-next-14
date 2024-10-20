import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '@/utils/ReactQueryProvider';
import SessionWrapper from '@/components/session-wrapper';
import Header from '@/components/widgets/header/page';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next 14',
	description: 'Treaning on Next 14',
	keywords: 'next, starter, typescript, tailwind css, prettier, eslint, seo',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const queryClient = new QueryClient();

	return (
		<SessionWrapper>
			<html lang='en'>
				<head>
					<link rel='icon' href='/next.svg' sizes='any' />
				</head>
				<body className={inter.className + ' !overflow-hidden'}>
					<ReactQueryProvider>
						<HydrationBoundary state={dehydrate(queryClient)}>
							<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
								<Header />
								<section>{children}</section>
							</ThemeProvider>
						</HydrationBoundary>
					</ReactQueryProvider>
				</body>
			</html>
		</SessionWrapper>
	);
}
