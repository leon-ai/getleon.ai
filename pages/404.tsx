import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import styles from '@/styles/pages/404Page.module.sass'
import Icon from '@/components/Icon'
import React from 'react'

interface ICustom404PageProps { }

const Custom404Page: NextPage<ICustom404PageProps> = ({ }) => {
  return (
    <>
      <Head>
        <title>Page not found - Leon</title>
      </Head>
      <div className={styles.pageContainer}>
        <p>
          Sorry, this page cannot be found.
        </p>
        <Link href="/">
          <a className="arrow-link">
            Go back home <Icon name="arrow-right" />
          </a>
        </Link>
      </div>
    </>
  )
}

export default Custom404Page
