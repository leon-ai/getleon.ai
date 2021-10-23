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
                width={86}
                height={44}
              />
            </a>
          </Link>
          <div className={styles.menu}>
            <nav>
              <ul>
                <li><a href="https://docs.getleon.ai" target="_blank" rel="noreferrer">Get started</a></li>
                <li><a href="https://roadmap.getleon.ai" target="_blank" rel="noreferrer">Roadmap</a></li>
                <li><a href="https://blog.getleon.ai" target="_blank" rel="noreferrer">Blog</a></li>
              </ul>
            </nav>
            <div className={styles.social}>
              <a href="https://discord.gg/MNQqqKg" aria-label="Leon Discord" target="_blank" rel="noreferrer" className={styles.discord}>
                <svg viewBox="0 0 35 40" xmlns="http://www.w3.org/2000/svg" className="toto">
                  <path d="M13.88 16.78C12.74 16.78 11.84 17.78 11.84 19C11.84 20.22 12.76 21.22 13.88 21.22C15.02 21.22 15.92 20.22 15.92 19C15.94 17.78 15.02 16.78 13.88 16.78ZM21.18 16.78C20.04 16.78 19.14 17.78 19.14 19C19.14 20.22 20.06 21.22 21.18 21.22C22.32 21.22 23.22 20.22 23.22 19C23.22 17.78 22.32 16.78 21.18 16.78Z" fill="#9EA7B0"/>
                  <path d="M30.9 0H4.1C1.84 0 0 1.84 0 4.12V31.16C0 33.44 1.84 35.28 4.1 35.28H26.78L25.72 31.58L28.28 33.96L30.7 36.2L35 40V4.12C35 1.84 33.16 0 30.9 0ZM23.18 26.12C23.18 26.12 22.46 25.26 21.86 24.5C24.48 23.76 25.48 22.12 25.48 22.12C24.66 22.66 23.88 23.04 23.18 23.3C22.18 23.72 21.22 24 20.28 24.16C18.36 24.52 16.6 24.42 15.1 24.14C13.96 23.92 12.98 23.6 12.16 23.28C11.7 23.1 11.2 22.88 10.7 22.6C10.64 22.56 10.58 22.54 10.52 22.5C10.48 22.48 10.46 22.46 10.44 22.44C10.08 22.24 9.88 22.1 9.88 22.1C9.88 22.1 10.84 23.7 13.38 24.46C12.78 25.22 12.04 26.12 12.04 26.12C7.62 25.98 5.94 23.08 5.94 23.08C5.94 16.64 8.82 11.42 8.82 11.42C11.7 9.26 14.44 9.32 14.44 9.32L14.64 9.56C11.04 10.6 9.38 12.18 9.38 12.18C9.38 12.18 9.82 11.94 10.56 11.6C12.7 10.66 14.4 10.4 15.1 10.34C15.22 10.32 15.32 10.3 15.44 10.3C16.66 10.14 18.04 10.1 19.48 10.26C21.38 10.48 23.42 11.04 25.5 12.18C25.5 12.18 23.92 10.68 20.52 9.64L20.8 9.32C20.8 9.32 23.54 9.26 26.42 11.42C26.42 11.42 29.3 16.64 29.3 23.08C29.3 23.08 27.6 25.98 23.18 26.12Z" fill="#9EA7B0"/>
                </svg>
              </a>
              <a href="https://github.com/leon-ai/leon" aria-label="Leon GitHub repository" target="_blank" rel="noreferrer" className={styles.github}>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C8.95 0 0 8.95 0 20C0 28.85 5.725 36.325 13.675 38.975C14.675 39.15 15.05 38.55 15.05 38.025C15.05 37.55 15.025 35.975 15.025 34.3C10 35.225 8.7 33.075 8.3 31.95C8.075 31.375 7.1 29.6 6.25 29.125C5.55 28.75 4.55 27.825 6.225 27.8C7.8 27.775 8.925 29.25 9.3 29.85C11.1 32.875 13.975 32.025 15.125 31.5C15.3 30.2 15.825 29.325 16.4 28.825C11.95 28.325 7.3 26.6 7.3 18.95C7.3 16.775 8.075 14.975 9.35 13.575C9.15 13.075 8.45 11.025 9.55 8.275C9.55 8.275 11.225 7.75 15.05 10.325C16.65 9.875 18.35 9.65 20.05 9.65C21.75 9.65 23.45 9.875 25.05 10.325C28.875 7.725 30.55 8.275 30.55 8.275C31.65 11.025 30.95 13.075 30.75 13.575C32.025 14.975 32.8 16.75 32.8 18.95C32.8 26.625 28.125 28.325 23.675 28.825C24.4 29.45 25.025 30.65 25.025 32.525C25.025 35.2 25 37.35 25 38.025C25 38.55 25.375 39.175 26.375 38.975C30.3454 37.6346 33.7954 35.0829 36.2396 31.6791C38.6838 28.2752 39.9989 24.1905 40 20C40 8.95 31.05 0 20 0Z" fill="#9EA7B0"/>
                </svg>
                <span>7.9k+</span>
              </a>
              <a href="https://sponsor.getleon.ai" aria-label="Sponsor Leon" target="_blank" rel="noreferrer" className="button">
                <Icon name="heart" stroke="none" fill="#FF0000" width={18} style={{ marginRight: '4px' }} />
                Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
