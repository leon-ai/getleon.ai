import { useState, useEffect } from 'react'

const selectorPrefixes = ['.', '#']
const usePauseAnimation = (scrollPosition: number, arr: string[]) => {
  console.log('scrollpos', scrollPosition)
  if (process.browser) {
    arr.forEach((selector) => {
      if (!selectorPrefixes.includes(selector[0])) {
        selector = `.${selector}`
      }
      const elements = document.querySelectorAll(selector)

      elements.forEach((element) => {
        console.log('element', element)
      })
    })
  }
}

export default usePauseAnimation
