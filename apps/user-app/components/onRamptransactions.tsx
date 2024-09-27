import { Card } from "@repo/ui/card";

export function OnRampTransactions({transactions}:{transactions:{
        amount:number,
        provider:string,
        status:string,
        startTime:Date

}[]}){
    return(
        <Card title="Recent transactions">
            {transactions.map((x)=><div key={x.startTime.getDate()} className="flex justify-center pt-2">
                <div>{x.amount}</div>
                <div>{x.provider}</div>
                <div>{x.startTime.getDate()}</div>
                <div>{x.status}</div>
            </div>)}
        </Card>
    )
}
