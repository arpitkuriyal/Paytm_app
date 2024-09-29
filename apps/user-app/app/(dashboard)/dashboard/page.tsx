import { getServerSession } from "next-auth";
import { AddMoney } from "../../../components/addmoney";
import { OnRampTransactions } from "../../../components/onRamptransactions";

import { Transactions } from "../../../components/transactions";
import { authOptions } from "../../../lib/auth";
import { prisma } from "@repo/db/client";


async function  getOnRampTransactions(){
    const session = await getServerSession(authOptions);
    const txns=await prisma.onRampTransaction.findMany({
        where:{
            userId:Number(session?.user?.id)
        }
    });
    return txns.map((t)=>{
        return {
            amount:t.amount,
            provider:t.provider,
            startTime:t.startTime,
            status:t.status
        }
    })
}


async function getBalance(){
    
    const session = await getServerSession(authOptions);
    console.log(session.user.id)
    const balance=await prisma.balance.findFirst({
        where:{
            userId:Number(session?.user?.id)
        }
    })
    return {
        amount: balance?.amount || 0,
        locked:balance?.locked||0
    }
}


export default async  function Page(){
    const transactions=await getOnRampTransactions()
    const balance=await getBalance()
    return (
    <div className="w-full grid grid-cols-2" >
        <AddMoney></AddMoney>
        <div >
        <Transactions locked={balance.locked} unlocked={balance.amount}/>
        <OnRampTransactions transactions={transactions}/>
        </div>
        </div>
    )
}