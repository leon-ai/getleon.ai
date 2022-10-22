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
    let { report } = req.body

    if (!report) {
      return res.status(400).json({
        success: false,
        message: 'No report provided',
        data: null
      })
    }

    report = JSON.stringify({ report }, null, 2)

    /**
     * Pastebin docs
     * @see https://pastebin.com/doc_api
     */
    const { environment: { osDetails: { type, arch } } } = report
    const envTitle = `${type}-${arch}`
    const pasteName = `[Leon] Report - ${envTitle} - ${new Date().toISOString()}`
    const params = [
      `api_dev_key=${PASTEBIN_API_DEV_KEY}`,
      `api_paste_name=${pasteName}`,
      `api_paste_code=${report}`,
      `api_user_key=${PASTEBIN_API_USER_KEY}`,
      'api_paste_format=json',
      'api_option=paste',
      'api_paste_private=0' // Public
    ]
    const response = await fetch('https://pastebin.com/api/api_post.php', {
      method: 'POST',
      body: params.join('&'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    const data = await response.text()

    return res.status(200).json({
      success: true,
      message: 'Report created successfully',
      data: {
        reportUrl: data
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
