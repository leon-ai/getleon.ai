import { useEffect } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { abbreviateNumber } from 'js-abbreviation-number'

import styles from '@/styles/pages/HomePage.module.sass'
import Introduction from '@/components/Introduction'
import Newsletter from '@/components/Newsletter'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TtsStt from '@/components/TtsStt'
import Demo from '@/components/Demo'
import Roadmap from '@/components/Roadmap'
import Sponsor from '@/components/Sponsor'
import GetStarted from '@/components/GetStarted'
import { IRoadmapCard } from '@/shared/interfaces/roadmap-card.interface'

const headTitle = 'Leon - Your Open-Source Personal Assistant'

interface IHomePageProps {
  cards: IRoadmapCard[]
}
interface ITrelloCard {
  id: string
  name: string
  idList: string
  url: string
  shortUrl: string
  closed: boolean
  labels: [{
    name: string
  }]
}

const HomePage: NextPage<IHomePageProps> = ({ cards }) => {
  const animationRunningClassName = 'animation-running'
  // If visible in viewport, then run the animations, otherwise stop them
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationRunningClassName)
      } else {
        entry.target.classList.remove(animationRunningClassName)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: [0, 1]
    })
    const body = document.querySelector('body')
    const elements = document.querySelectorAll('[data-pausable-animation]')

    // When tab is not visible, then stop the animations
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        body?.classList.add('page-hidden')
      } else {
        body?.classList.remove('page-hidden')
      }
    })

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

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
          <Features />
        </section>
        <section>
          <TtsStt />
        </section>
        <section>
          <Demo />
        </section>
        <section>
          <Roadmap cards={cards} />
        </section>
        <section>
          <Sponsor />
        </section>
        <section>
          <GetStarted />
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let starsNb = '8k'
  let cards: IRoadmapCard[] = []

  if (process.env.NODE_ENV !== 'development') {
    const [ghRes, trelloRes] = await Promise.all([
      fetch('https://api.github.com/repos/leon-ai/leon'),
      fetch('https://trello.com/b/7bdwhnLr/leon-your-open-source-personal-assistant-roadmap.json')
    ])
    const [ghData, trelloData] = await Promise.all([
      ghRes.json(),
      trelloRes.json()
    ])
    const positions = [
      { top: 0, left: 0 },
      { top: 100, left: 100 },
      { top: 200, left: 200 },
      { top: 300, left: 300 },
      { top: 0, left: 268 },
      { top: 100, left: 368 },
      { top: 200, left: 468 },
      { top: 300, left: 568 },
      { top: 0, left: 536 },
      { top: 100, left: 636 },
      { top: 200, left: 736 },
      { top: 300, left: 31 }
    ]
    const allowedListIds = ['5a5198721b384d74ec5af379', '5a5198a90e1368b6e4fbd5d5', '5a5198859807994804d5493b']
    const legitCards = trelloData.cards.filter((card: ITrelloCard) => card.name !== '.' && card.name.indexOf('🎉') === -1 && card.name.indexOf('📝') === -1 &&
      allowedListIds.includes(card.idList) && !card.closed)
    const cardIds: string[] = []
    const pickCard = (): ITrelloCard => {
      const pickUpNb = Math.floor(Math.random() * ((legitCards.length - 1) + 1))
      const trelloCard: ITrelloCard = legitCards[pickUpNb]

      if (!cardIds.includes(trelloCard.id)) {
        cardIds.push(trelloCard.id)

        return trelloCard
      }

      return pickCard()
    }

    cards = positions.map((pos) => {
      const trelloCard = pickCard()
      const matches = trelloCard.name.match(/\[(.+?)\]/)

      return {
        types: trelloCard.labels.map(label => label.name),
        version: matches ? matches[1] : '',
        title: trelloCard.name.replace(/\[(.+?)\]/, ''),
        url: trelloCard.shortUrl,
        ...pos
      }
    })

    starsNb = abbreviateNumber(ghData.stargazers_count, 1, { padding: false })
  }

  const SECONDS_IN_ONE_DAY = (60 * 60) * 24
  return {
    props: {
      starsNb,
      cards
    },
    revalidate: SECONDS_IN_ONE_DAY
  }
}

export default HomePage
