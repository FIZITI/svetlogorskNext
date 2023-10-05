import Layout from "../components/layout";
import Script from "next/script";
import { useRouter } from 'next/router';
import '../app/globals.css';

export default function MyApp( {Component, pageProps} ) {
    const router = useRouter();

    return (
        <Layout currentPage={router.pathname}>
          <Script src="/js/color-theme.js"></Script>
          <Script src="/js/menu-burger.js"></Script>
          <Component {...pageProps} />
        </Layout>
    )
}