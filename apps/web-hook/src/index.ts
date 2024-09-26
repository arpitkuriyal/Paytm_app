import express, { Request, Response } from "express"
import {prisma} from "@repo/db/client"
import {balanceSchema} from "@repo/schema/Schema"
const app=express()
app.use(express.json())
interface paymentTypeBody{
    token:string,
    user_id:string,
    amount:number
}
interface paymentType extends Request{
    body:paymentTypeBody
}
app.post("/hdfcWebhook",async (req: paymentType,res:Response)=>{
    
    const {token,user_id,amount}=req.body;
    const {success}=balanceSchema.safeParse(req.body)
    if(!success){
        res.json({
            msg:"input invaild at webhhok"
        })
    }
    else{
        try{
            await prisma.$transaction([
                prisma.balance.update({
                    where: {
                        userId: Number(user_id)
                    },
                    data:{
                        amount:{
                            increment:amount
                        }
                    }
                }),
                prisma.onRampTransaction.update({
                    where:{
                        token:token
                    },
                    data:{
                        status:"Success"
                    }
                })
            ])
            res.json({
               msg: "captured"
            })
        }
        catch(e){
            res.status(411).json({
                msg:"payment failed"
            })
        }
    }
    

})

app.listen(3003,()=>{
    console.log("port is listening in the 3000")
})