import "../styles/globals.css"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mo Islayh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-QZQ23Z8EC6"
      />

      <Script id="GoogleAnalytics" strategy="lazyOnload">
        {`
				var host = window.location.hostname;
				if (host !== "aa") {
		
			  window.dataLayer = window.dataLayer || [];
			  function gtag() { dataLayer.push(arguments); }
			  gtag('js', new Date());
		
			  gtag('config', 'G-QZQ23Z8EC6');
			}
			`}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
