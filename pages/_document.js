import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;600;900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
         
        </body>
      </Html>
    );
  }
}

export default MyDocument;
