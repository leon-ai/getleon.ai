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

    report = JSON.stringify({ report }, null, 2)

    /**
     * Pastebin docs
     * @see https://pastebin.com/doc_api
     */
    const pasteName = '[Leon] Report - ' + new Date().toISOString()
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

    res.status(200).json({
      success: true,
      message: 'Report created successfully',
      data: {
        reportUrl: data
      }
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `Failed to create paste on Pastebin: ${JSON.stringify(e)}`,
      data: null
    })
  }
}
