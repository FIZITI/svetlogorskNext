import {Html, Head, Main, NextScript} from 'next/document';
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
      </Head>
      {/*<Script id='color-theme-script' strategy="afterInteractive" src='../js/color-theme.js'>*/}
      {/*</Script>*/}
      <body>
      <Main></Main>
      <NextScript></NextScript>
      </body>
    </Html>
  )
}