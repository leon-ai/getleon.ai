import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '@/styles/HomePage.module.sass'

const headTitle = 'Leon - Your Open-Source Personal Assistant'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={headTitle} />
        <meta name="twitter:title" content={headTitle} />
      </Head>
      Main content...
    </>
  )
}

export default HomePage
