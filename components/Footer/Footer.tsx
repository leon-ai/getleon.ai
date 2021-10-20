import React from 'react'
import styles from '@/components/Footer/Footer.module.sass'

interface IFooterProps { }

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        Footer...
      </div>
    </footer>
  )
}

export default Footer
