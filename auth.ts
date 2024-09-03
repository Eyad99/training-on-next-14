import NextAuth, { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import client from './lib/db';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

export const { auth, handlers, signIn, signOut } = NextAuth({
//   adapter: MongoDBAdapter(client),
	providers: [
		GitHub,
		Google,
		// Credentials({
		// 	name: 'Credentials',
		// 	credentials: {
		// 		email: {},
		// 		password: {},
		// 	},

		// 	async authorize(credentials, req) {
		// 		return null;
		// 	},
		// }),
	],
} satisfies NextAuthConfig);
