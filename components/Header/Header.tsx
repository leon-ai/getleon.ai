import React from 'react'
import Link from 'next/link'

import styles from '@/components/Header/Header.module.sass'

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/">
          <a className={styles.logo}>
            <h2>Leon</h2>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
