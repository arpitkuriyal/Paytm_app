"use client"
import { usePathname, useRouter } from "next/navigation"
import { ReactNode } from "react"


export const Sidebar=({title,href,logo}:{title:string,href:string,logo:ReactNode})=>{

    const router=useRouter()
    const pathname = usePathname()
    return (
        <div className={`flex font-bold gap-2 ${pathname===href ? "text-[#834fff]" : "text-slate-500"} `} onClick={()=>{router.push(href)}}>
            <div>{logo}</div>
            <div >{title}</div>
        </div>
    )
}