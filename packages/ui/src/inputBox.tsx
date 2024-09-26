"use client"
export function  InputBox({title,placeholder,type}:{title:string,placeholder:string,type:string,}){
    return (<div className="my-4 flex flex-col">
             <label className="font-semibold">{title}</label>
             <input className="appearance-none p-3 border rounded-md"  placeholder={placeholder} type={type}/>
            </div>
      


    )
}