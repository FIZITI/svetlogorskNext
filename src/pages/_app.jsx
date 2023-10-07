import Layout from '../components/layout';
import Script from 'next/script';
import { useRouter } from 'next/router';
import '../app/globals.css';
import 'public/js/menu-burger';

export default function MyApp( {Component, pageProps} ) {
    const router = useRouter();

    return (
        <Layout currentPage={router.pathname}>
          <Component {...pageProps} />
        </Layout>
    )
}