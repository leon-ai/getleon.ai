import React from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ILayoutProps { }

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
