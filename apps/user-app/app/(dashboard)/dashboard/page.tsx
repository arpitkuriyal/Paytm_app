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
            userId:Number(session?.user)
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

export default async  function Page(){
    const transactions=await getOnRampTransactions()
    return (
    <div className="w-full grid grid-cols-2" >
        <AddMoney></AddMoney>
        <div >
        <Transactions/>
        <OnRampTransactions transactions={transactions}/>
        </div>
        </div>
    )
}