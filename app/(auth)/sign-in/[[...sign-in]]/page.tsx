import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-4">
          <h1 className="font-bold text-3xl text-[#2f3037]">Welcome back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or create account to get back to your dashboard
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 ">
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-black hidden lg:flex items-center justify-center">
        <Image src="/logo-240.svg" height={100} width={100} alt="logo" />
      </div>
    </div>
  );
}