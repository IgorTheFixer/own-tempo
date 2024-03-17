'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const LandingPage = () =>{
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter()

  if (isLoaded || isSignedIn) {
    router.push("/dashboard")
  }

  return(
    //TODO: If user is signed in, render a loading state instead of the beloww
    <div>
      Landing Page (first page seen)
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage