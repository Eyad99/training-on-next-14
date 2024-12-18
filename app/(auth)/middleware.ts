import { auth } from '@/auth';
import { NextRequest } from 'next/server';

export default auth(async function middleware(req: NextRequest) {
	// Your custom middleware logic goes here
	console.log('reqreqreqreq', req);
});
