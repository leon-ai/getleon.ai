import type { Handler } from '@netlify/functions'
import { builder } from '@netlify/functions'

const myHandler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Built on-demand! 🎉' })
  }
}

export const handler = builder(myHandler)
