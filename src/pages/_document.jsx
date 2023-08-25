import {Html, Head, Main, NextScript} from 'next/document'
// import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        {/*<Script*/}
        {/*  src="../js/menu-burger.js"*/}
        {/*  strategy="beforeInteractive"*/}
        {/*/>*/}
        {/*<script defer src={colorTheme}></script>*/}
        {/*<script defer src={nav}></script>*/}
      </Head>
      <body>
      <Main></Main>
      <NextScript></NextScript>
      </body>
    </Html>
  )
}