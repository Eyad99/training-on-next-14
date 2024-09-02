import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions:NextAuthOptions={
    providers:[
        GithubProvider({
            clientId:process.env.AUTH_GITHUB_ID as string,
            clientSecret:process.env.AUTH_GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId:process.env.AUTH_GOOGLE_ID as string,
            clientSecret:process.env.AUTH_GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{},
                password:{},
            },

            async authorize(credentials,req) {
                return null
            }
        })
    ]
}