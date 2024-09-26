import { Card } from "@repo/ui/card";

export function Transactions(){
    return (
        <Card title={"Total Balance"} >
            <Balance balanceType={"unlocked Balance"} amountType={0} />
            <Balance balanceType={"locked Balance"} amountType={0} />
            <Balance balanceType={"totalBalance"} amountType={0} />
        </Card>
    )
}
function Balance({balanceType,amountType}:{balanceType:string,amountType:number}){
    return (
        <div className="flex justify-between border-b pb-2 mt-3">
            <div>{balanceType}</div>
            <div>{amountType}</div>
        </div>
    )
}