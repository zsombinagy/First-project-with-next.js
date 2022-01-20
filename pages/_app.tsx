import "../styles/globals.sass"
import Head from "next/head"
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import { AppProps } from "next/app";








function myApp ({ Component, pageProps}: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps}/>
      <Footer />

      </>

  )


}

export default myApp;
