import '/styles/globals.css'
import Header from '/components/layout/Header'
import {Head} from "next/document";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
