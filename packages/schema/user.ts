import z from "zod"
export const userSchema=z.object({
    phone:z.string().min(10),
    password:z.string().min(5,"mininum 5 words required")
})
export type userInputSchema=z.infer<typeof userSchema>