import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import 'dotenv/config'

export const options = {
    adapter : PrismaAdapter(prisma),
    providers:
    [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "hello@gmail.com"},
                password: {  label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const { email , password } = credentials
                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })
                const hashedPassword = user.password;
                const passwordMatch = await bcrypt.compare(password, hashedPassword);
                if (passwordMatch) {
                    return user
                } else {
                    return null
                }
               
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy : "jwt",
    },
    pages:{
        signIn : "/login"
    }
 }

