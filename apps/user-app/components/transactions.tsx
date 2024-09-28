import { Card } from "@repo/ui/card";

export function Transactions({locked,unlocked}:{locked:number,unlocked:number}){
    return (
        <Card title={"Total Balance"} >
            <Balance balanceType={"unlocked Balance"} amountType={unlocked} />
            <Balance balanceType={"locked Balance"} amountType={locked} />
            <Balance balanceType={"totalBalance"} amountType={locked+unlocked} />
        </Card>
    )
}
function Balance({balanceType,amountType}:{balanceType:string,amountType:number|undefined}){
    return (
        <div className="flex justify-between border-b pb-2 mt-3">
            <div>{balanceType}</div>
            <div>{amountType}</div>
        </div>
    )
}