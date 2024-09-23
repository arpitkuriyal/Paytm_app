import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import {prisma} from "@repo/db/client"
import { AuthOptions } from "next-auth";

export const authOptions:AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID ||"",
          clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        })
    ],
    callbacks: {
      async signIn({ user, account }) {
        console.log("hi signin")
        if (!user || !user.email) {
          return false;
        }

        await prisma.merchant.upsert({
          select: {
            id: true
          },
          where: {
            email: user.email
          },
          create: {
            email: user.email,
            name: user.name,
            auth_type: account?.provider === "google" ? "Google" : "Github" // Use a prisma type here
          },
          update: {
            name: user.name,
            auth_type: account?.provider === "google" ? "Google" : "Github" // Use a prisma type here
          }
        });

        return true;
      }
    },
    secret: process.env.NEXTAUTH_SECRET 
  }