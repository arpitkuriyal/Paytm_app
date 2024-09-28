"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/db/client"
export async function createOnRammptransactions(provider:string,amount:number ){
    const session=await getServerSession(authOptions)
    if(!session.user.id||!session.user){
        return {
            msg:"authenticated issue"
        }
    }
    const token=Math.random().toString()
    await prisma.onRampTransaction.create({
        data:{
            provider,
            amount:amount*100,
            token:token,
            status:"Processing",
            startTime:new Date(),
            userId:Number(session?.user?.id)

        }
    })
    return{
        msg:"done"
    }
}