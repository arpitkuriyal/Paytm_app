"use client"
import { AddMoney } from "../../../components/addmoney";
import { OnRampTransactions } from "../../../components/onRamptransactions";

import { Transactions } from "../../../components/transactions";

export default function Page(){
    return (
    <div className="w-full grid grid-cols-2" >
        <AddMoney></AddMoney>
        <div >
        <Transactions/>
        <OnRampTransactions/>
        </div>
        </div>
    )
}