"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";


export default function AppbarClient(): JSX.Element {
  const session = useSession();
  const router=useRouter()
  return (
      <Appbar onSignin={signIn} onSignout={async ()=>{
        await signOut();
        router.push("/")
      }} user={session.data?.user} />

  );
}