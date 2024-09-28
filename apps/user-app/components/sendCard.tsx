"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { InputBox } from "@repo/ui/inputbox";
import { useState } from "react";
import { p2ptransfer } from "../lib/actions/p2ptransfer";

export function SendCard(){
    const [number,setNumber]=useState("")
    const [value,setValue]=useState("")

    return(
        <div className="w-full flex justify-center items-center">
            <Card title={"Send Money"} >
                <InputBox placeholder={"Enter the Number"} onChange={(value)=>{setNumber(value)}} label={"Phone No."}/>
                <InputBox placeholder={"Amount"} onChange={(value)=>{setValue(value)}}label={"Amount"}/>
                <div className="flex justify-center mt-4">
                    <Button onClick={async ()=>{
                        await p2ptransfer(number,Number(value))}
                        }>Send</Button>
                </div>
                
            </Card>
        </div>
    )
}