// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type APIResponse = {
  success: boolean
  message: string
  data: null | {
    reportUrl: string
  }
}

const { PASTEBIN_API_DEV_KEY, PASTEBIN_API_USER_KEY } = process.env

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  try {
    let { report: inputObject } = req.body

    if (!inputObject) {
      return res.status(400).json({
        success: false,
        message: 'No report provided',
        data: null
      })
    }

    const { environment: { osDetails: { type, arch } } } = inputObject
    const envTitle = `${type}-${arch}`
    const reportObject = {
      title: `[Leon] Report - ${envTitle} - ${new Date().toISOString()}`,
      ...inputObject
    }
    const report = JSON.stringify({ reportObject }, null, 2)
    const response = await fetch('https://report.getleon.ai/documents', {
      method: 'POST',
      body: report,
      headers: {
        'Content-Type': 'text/plain'
      }
    })

    const { key } = await response.json()

    return res.status(200).json({
      success: true,
      message: 'Report created successfully',
      data: {
        reportUrl: `https://report.getleon.ai/raw/${key}`
      }
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: `Failed to create paste on Pastebin: ${JSON.stringify(e)}`,
      data: null
    })
  }
}
