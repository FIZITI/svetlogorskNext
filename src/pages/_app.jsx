import Layout from "../components/layout";
import { useRouter } from "next/router";
import "../app/globals.css";

export default function MyApp( {Component, pageProps} ) {
    const router = useRouter();

    return (
        <Layout currentPage={router.pathname}>
          <script src="/js/menu-burger.js" async></script>
          <script src="/js/color-theme.js" async></script>
          <Component {...pageProps} />
        </Layout>
    )
}