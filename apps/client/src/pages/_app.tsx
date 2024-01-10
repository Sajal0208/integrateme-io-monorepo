import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ClerkProvider } from "@clerk/nextjs";
import { Button } from '@repo/ui/button';
import {Navbar} from '@repo/ui/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return <ClerkProvider {...pageProps} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <Navbar />
    <Component {...pageProps} />
  </ClerkProvider>

}
