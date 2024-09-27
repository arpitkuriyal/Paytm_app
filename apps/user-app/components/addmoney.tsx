"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import {InputBox} from "@repo/ui/inputbox"
import { Select } from "@repo/ui/select"
import { useRouter } from "next/navigation"
import { useState } from "react"


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

    return (
        <Card title={"Add Money"}>
            <InputBox title={"Amount"} placeholder={"Amount"} type={"number"}  />
            <div className="mt-5 font-semibold">
                Bank
            </div>
            <Select onSelect={(value)=> (setRedirectUrl(SUPPORTED_BANKS.find(x=>x.name===value)?.redirectUrl||""))} options={SUPPORTED_BANKS.map(x=> {return({key:x.name,value:x.name} )})}></Select>
            <div className="flex flex-col justify-center  items-center"><Button  onClick={()=>router.push(redirectUrl||"")}> Add Money</Button></div>
            
            
        </Card>
    )
    
}