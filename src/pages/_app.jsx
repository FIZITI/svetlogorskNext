import Layout from "../components/layout";
import Script from "next/script";
import { useRouter } from "next/router";
import "../app/globals.css";

export default function MyApp( {Component, pageProps} ) {
    // const router = useRouter();

    return (
        <Layout>
          <Script src="/menu-burger.js" strategy="afterInteractive"></Script>
          <Script src="/color-theme.js" strategy="afterInteractive"></Script>
          <Component {...pageProps} />
        </Layout>
    )
}