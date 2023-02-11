import type { AppProps } from 'next/app'
import Script from 'next/script'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import '@/styles/main.sass'
import Layout from '@/components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-K40ZKDM3R3" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy="afterInteractive"
        src="https://unpkg.com/feather-icons@4.28.0/dist/feather.min.js"
        onLoad={() => {
          window.feather.replace()
        }}
      />
    </>
  )
}

export default MyApp
