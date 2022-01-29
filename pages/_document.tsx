import Document, { Html, Head, Main, NextScript } from 'next/document'

// @ts-ignore
class MyDocument extends Document {
  render () {
    const headDescription = 'Leon is an open-source personal assistant who can live on your server. He is built on the top of Node.js, Python and artificial intelligence concepts.'

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content={headDescription} />
          <meta name="og:type" content="website" />
          <meta name="og:description" content={headDescription} />
          <meta name="og:image" content="https://getleon.ai/img/facebook-preview.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={headDescription} />
          <meta name="twitter:image" content="https://getleon.ai/img/social-preview.png" />
          <meta name="twitter:dnt" content="on" />
          <meta name="twitter:creator" content="@louistiti_fr" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,400&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/img/favicon.png" type="image/png" />
          <link rel="icon" href="/img/favicon.svg" type="image/svg+xml" />
          <link rel="preconnect" href="https://unpkg.com" />
          <link rel="dns-prefetch" href="https://unpkg.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
