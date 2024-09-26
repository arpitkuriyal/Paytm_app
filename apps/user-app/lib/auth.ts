import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@repo/db/client"
import bcrypt from "bcrypt";
import {userSchema} from "@repo/schema/Schema"
import { JWT } from "next-auth/jwt";
import { AuthOptions } from "next-auth";

export const authOptions:AuthOptions = {
    providers: [
      CredentialsProvider({
          name: 'phone Number',
          credentials: {
            phone: { label: "Phone number", type: "number", placeholder: "1231231231" },
            password: { label: "Password", type: "password" }
          },
          // TODO: User credentials type from next-auth
          async authorize(credentials:any) {
            const {success}= userSchema.safeParse(credentials)
            if(!success){
                console.log("invalid user inputs")
            }
            else{
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    });
                
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    }
                } catch(e) {
                    console.error(e);
                }
            }
            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async session({ token, session }: { token: JWT; session: any }) {
            session.user.id = token.sub;
            return session;
          },
          async redirect() {
            return Promise.resolve('/dashboard');
          }
    }, 
    
  }
 