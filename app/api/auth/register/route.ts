import client from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
		const { email, password }: any = request.json();
		console.log('email', email, password);
		const bcrypt = require('bcrypt');

		const hashPassword = await bcrypt.hash(password, 10);

		const db = client.db();

		const createAccount = await db.collection('users').insertOne({ email: email, password: hashPassword });

		return NextResponse.json({ success: 'Account created' }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: 'error,message' }, { status: 500 });
	}
}

export async function GET() {
  try {
    const db = client.db();
    const count = await db.collection('users').countDocuments();
    return NextResponse.json({ count }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Error fetching user count' }, { status: 500 });
  }
}
