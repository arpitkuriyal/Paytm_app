"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import {InputBox} from "@repo/ui/inputbox"
import { Select } from "@repo/ui/select"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createOnRammptransactions } from "../lib/actions/createOnRampTransactions"


const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];


export function AddMoney(){
    const router=useRouter()
    const [redirectUrl,setRedirectUrl]=useState(SUPPORTED_BANKS[0]?.redirectUrl)
    const [provider,setProvider]=useState(SUPPORTED_BANKS[0]?.name ||"" )
    const [amount,setAmount]=useState(0)

    return (
        
        <Card title={"Add Money"}>
            <InputBox label="Amount" placeholder={"Amount"}  onChange={ (val)=>{
                setAmount(Number(val))
            }}  />
            <div className="mt-5 font-semibold">
                Bank
            </div>
            <Select onSelect={(value)=> {
                setRedirectUrl(SUPPORTED_BANKS.find(x=>x.name===value)?.redirectUrl||"");
                setProvider(SUPPORTED_BANKS.find(x=>x.name===value)?.name||"")
            }} options={SUPPORTED_BANKS.map(x=> {return({key:x.name,value:x.name} )})}></Select>
            <div className="flex flex-col justify-center  items-center"> <Button onClick={async () => {
                await createOnRammptransactions(provider,amount); 
                router.push(redirectUrl||"")
            }}> Add Money</Button></div>
            
            
        </Card>
    )
    
}