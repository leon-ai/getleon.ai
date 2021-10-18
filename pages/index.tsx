import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

import styles from '@/styles/pages/HomePage.module.sass'

const headTitle = 'Leon - Your Open-Source Personal Assistant'

const HomePage: NextPage = (props) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  /**
   * TODO
   * 1. Check quota
   * 2. If quote not enough, just return GitHub logo without stars number
   * 3. Otherwise req "https://api.github.com/repos/leon-ai/leon" and display with stars number via "stargazers_count" property
   */

  const res = await fetch('https://api.github.com/rate_limit', {
    headers: {
      Authorization: `token ${process.env.GITHUB_OAUTH_TOKEN}`
    }
  })
  const data = await res.json()

  return {
    props: { data }
  }
}

export default HomePage
