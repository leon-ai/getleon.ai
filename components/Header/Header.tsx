import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '@/components/Header/Header.module.sass'
import Icon from '@/components/Icon'

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/">
            <a aria-label="Leon homepage">
              <Image
                src="/img/logo-t.svg"
                alt="Leon: open-source personal assistant"
                width={94}
                height={48}
              />
            </a>
          </Link>
          <nav>
            <ul className={styles.menu}>
              <li><a href="https://docs.getleon.ai" target="_blank" rel="noreferrer">Get started</a></li>
              <li><a href="https://roadmap.getleon.ai" target="_blank" rel="noreferrer">Roadmap</a></li>
              <li><a href="https://blog.getleon.ai" target="_blank" rel="noreferrer">Blog</a></li>
            </ul>
          </nav>
          <div className="social">
            <a href="https://discord.gg/MNQqqKg" aria-label="Leon Discord" target="_blank" rel="noreferrer" />
            <a href="https://github.com/leon-ai/leon" aria-label="Leon GitHub repository" target="_blank" rel="noreferrer" />
            <a href="https://sponsor.getleon.ai" aria-label="Sponsor Leon" target="_blank" rel="noreferrer" className="button">
              <Icon name="heart" stroke="none" fill="#FF0000" width={18} style={{ marginRight: '4px' }} />
              Sponsor
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
