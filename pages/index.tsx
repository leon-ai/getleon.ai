import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import styles from '@/styles/pages/HomePage.module.sass'
import Introduction from '@/components/Introduction'
import Newsletter from '@/components/Newsletter'
import Hero from '@/components/Hero'

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
      <div className={`${styles.pageContainer} container`}>
        <section>
          <Introduction />
          <Newsletter />
          <Hero />
        </section>
        <section>
          {/* Features */}
        </section>
        <section>
          {/* TTS/STT */}
        </section>
        <section>
          {/* Demo */}
        </section>
        <section>
          {/* Roadmap */}
        </section>
        <section>
          {/* Sponsor */}
        </section>
        <section>
          {/* Get started */}
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  /**
   * TODO
   * 1. Check quota
   * 2. If quota not enough, just return GitHub logo without stars number
   * 3. Otherwise req "https://api.github.com/repos/leon-ai/leon" and display with stars number via "stargazers_count" property
   */

  /*const res = await fetch('https://api.github.com/repos/leon-ai/leon')
  const data = await res.json()*/

  return {
    props: { }
  }
}

export default HomePage
