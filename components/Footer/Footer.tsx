import React from 'react'
import Image from 'next/image'

import styles from '@/components/Footer/Footer.module.sass'

interface IFooterProps { }

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div id="thanks" className={styles.thanksContainer}>
          <h4>
            Thanks
          </h4>
          <div className={styles.thanks}>
            <div>
              <a href="https://github.com/FluxIndustries" target="_blank" rel="noreferrer">
                <Image
                  src="https://github.com/FluxIndustries.png?size=128"
                  width={46}
                  height={46}
                  alt="Flux Industries"
                  className={styles.radius}
                />
              </a>
              <a href="https://www.aoz.studio/" target="_blank" rel="noreferrer">
                <Image
                  src="/img/thanks/aoz-studio.png"
                  width={172}
                  height={46}
                  alt="AOZ Studio"
                />
              </a>
              <a href="https://vercel.com/?utm_source=leon-ai&utm_campaign=oss" target="_blank" rel="noreferrer">
                <Image
                  src="/img/thanks/vercel.svg"
                  width={132}
                  height={30}
                  alt="Vercel"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/GregoireAMATO" target="_blank" rel="noreferrer">
                <Image
                  src="https://github.com/GregoireAMATO.png?size=128"
                  width={36}
                  height={36}
                  alt="GregoireAMATO"
                />
              </a>
              <a href="https://github.com/phareal" target="_blank" rel="noreferrer">
                <Image
                  src="https://github.com/phareal.png?size=128"
                  width={36}
                  height={36}
                  alt="phareal"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletter}>
            <span className={styles.title}>
              Get the latest news from Leon
            </span>
            <form
              action="https://www.getrevue.co/profile/leon/add_subscriber"
              method="post"
              target="_blank"
            >
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  name="member[email]"
                  required
                />
                <button type="submit">Stay updated</button>
              </div>
            </form>
            <i>No spam. Unsubscribe at any time.</i>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.licenseContainer}>
            <div className={styles.license}>
              <Image
                src="/img/logo-stroke.svg"
                width={58}
                height={60}
                alt="Leon logo"
              />
              <p>
                Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT License</a><br />
                Copyright © 2019 - present<br />
                <strong><a href="https://twitter.com/louistiti_fr" target="_blank" rel="noreferrer">Louis Grenard</a></strong>
              </p>
            </div>
            <p className={styles.credits}>
              Credits: space assets designed by <a href="https://www.flaticon.com/authors/monkik" target="_blank" rel="noreferrer">monkik</a>,<br />
              <a href="https://www.flaticon.com/authors/smashicons" target="_blank" rel="noreferrer">Smashicons</a>, <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">Flaticon</a>.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.col}>
              <span>
                Stay Tuned
              </span>
              <ul>
                <li><a href="https://twitter.com/louistiti_fr" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://blog.getleon.ai" target="_blank" rel="noreferrer">Blog</a></li>
                <li><a href="http://roadmap.getleon.ai" target="_blank" rel="noreferrer">Roadmap</a></li>
                <li><a href="http://changelog.getleon.ai" target="_blank" rel="noreferrer">Changelog</a></li>
                <li><a href="https://twitter.com/search?f=live&q=%23LeonAI%20(from%3Alouistiti_fr)&src=typed_query" target="_blank" rel="noreferrer">#LeonAI</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <span>
                Community
              </span>
              <ul>
                <li><a href="https://discord.gg/MNQqqKg" target="_blank" rel="noreferrer">Discord</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <span>
                More
              </span>
              <ul>
                <li><a href="https://github.com/leon-ai/leon" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.youtube.com/channel/UCW6mk6j6nQUzFYY97r47emQ" target="_blank" rel="noreferrer">YouTube</a></li>
                <li><a href="https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md" target="_blank" rel="noreferrer">Contribute</a></li>
                <li><a href="https://github.com/leon-ai/leon/issues" target="_blank" rel="noreferrer">Help</a></li>
                <li><a href="http://sponsor.getleon.ai" target="_blank" rel="noreferrer">Become a sponsor</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.poweredByContainer}>
          <a href="https://vercel.com?utm_source=leon-ai&utm_campaign=oss" target="_blank" rel="noreferrer">
            <Image
              src="/img/powered-by-vercel.svg"
              width={172}
              height={36}
              alt="Powered by Vercel"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
