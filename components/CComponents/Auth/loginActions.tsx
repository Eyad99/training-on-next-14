'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import React from 'react';

const LoginActions = () => {
	return (
		<div className='flex flex-col gap-2 m-2 justify-center items-center '>
			<Button onClick={() => signIn('google', { callbackUrl: '/' })} className='w-[20%]'>
				Sign in with google
			</Button>
			<Button onClick={() => signIn('github', { callbackUrl: '/' })} className='w-[20%]'>
				Sign in with github
			</Button>
		</div>
	);
};

export default LoginActions;
