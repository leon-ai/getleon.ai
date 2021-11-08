import React from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ILayoutProps {
  children: {
    props: {
      starsNb: string
    }
  }
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header starsNb={children.props.starsNb} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
