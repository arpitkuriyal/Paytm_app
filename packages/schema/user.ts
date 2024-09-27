import z from "zod"
export const userSchema=z.object({
    phone:z.string().min(10),
    password:z.string().min(1,"mininum 5 words required")
})
export type userInputSchema=z.infer<typeof userSchema>

export const balanceSchema=z.object({
    token:z.string(),
    amount:z.number(),
}) 
export type balanceInputSchema=z.infer<typeof balanceSchema>