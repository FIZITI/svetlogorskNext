import Layout from "../components/layout";
import '../app/globals.css';
import '../js/color-theme';
import '../js/menu-burger';
import '../js/nav';

export default function MyApp( {Component, pageProps} ) {
    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    )
}