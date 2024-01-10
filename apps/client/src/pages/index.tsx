import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SignedOut, SignedIn } from "@clerk/nextjs";
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className = "">
      <div>
        Hello Home Page
      </div>
      <SignedOut>
          <Link href="/sign-up">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Sign in or sign up for an account
              </h3>
            </div>
          </Link>
        </SignedOut>
        <SignedIn>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">
              You are signed in!
            </h3>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
    </main>
  )
}
