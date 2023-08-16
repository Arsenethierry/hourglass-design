import AppLayout from '@/main-app'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <AppLayout Component={Component} pageProps={pageProps} />
}
