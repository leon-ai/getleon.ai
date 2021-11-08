import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { abbreviateNumber } from 'js-abbreviation-number'

import styles from '@/styles/pages/HomePage.module.sass'
import Introduction from '@/components/Introduction'
import Newsletter from '@/components/Newsletter'
import Hero from '@/components/Hero'
import Backbone from '@/components/Backbone'
import Features from '@/components/Features'
import TtsStt from '@/components/TtsStt'
import Demo from '@/components/Demo'
import Roadmap from '@/components/Roadmap'
import Sponsor from '@/components/Sponsor'
import GetStarted from '@/components/GetStarted'
import { IRoadmapCard } from '@/shared/interfaces/roadmap-card.interface'

const headTitle = 'Leon - Your Open-Source Personal Assistant'

interface IHomePageProps {
  cards: IRoadmapCard
}

const HomePage: NextPage<IHomePageProps> = ({ cards }) => {
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
      { top: 300, left: 0 }
    ]
    const allowedListIds = ['5a5198721b384d74ec5af379', '5a5198a90e1368b6e4fbd5d5', '5a5198859807994804d5493b']
    const legitCards = trelloData.cards.filter(card => card.name !== '.' && allowedListIds.includes(card.idList) && !card.labels.includes('Docs'))
    const cardIds: string[] = []
    const pickCard = () => {
      const pickUpNb = Math.floor(Math.random() * ((legitCards.length - 1) + 1))
      const trelloCard = legitCards[pickUpNb]

      if (!cardIds.includes(trelloCard.id)) {
        cardIds.push(trelloCard.id)

        return trelloCard
      } else {
        pickCard()
      }
    }

    cards = positions.map((pos) => {
      const trelloCard = pickCard()

      return {
        types: trelloCard.labels,
        version: '',
        title: trelloCard.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''),
        url: trelloCard.shortUrl,
        ...pos
      }
    })

    starsNb = abbreviateNumber(ghData.stargazers_count, 1, { padding: false })
  }

  return {
    props: {
      starsNb,
      cards
    }
  }
}

export default HomePage
