"use client"
export function Select({options,onSelect}:{
    onSelect:(value:string)=>void,
    options:{
        key:string,
        value:string
    }[],
}){
    return (
        <select  className=" appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 " style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='none' stroke='%23000' stroke-width='3' d='M2 18L12 6l10 12'/%3E%3C/svg%3E")`,
            backgroundPosition: "right 1rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.25rem 1.25rem",
            paddingRight: "2rem",
          }} onChange={(e)=>{
            onSelect(e.target.value)
          }}>
           {options.map((option)=>{
            return <option key={option.key} value={option.key}>{option.value}</option>
           })}

        </select>
    )
}