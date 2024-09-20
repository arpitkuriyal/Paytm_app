"use client";
import { useBalance } from "@repo/store/useBalance";


export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance} hey there 2
  </div>
}