// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    firstName: 'test',
    lastName: 'fks',
    email: 'jorgezerpaº',
    team: 'rffgº',
    level: 'jhiigug',
    phone: '+584126436269',
    startDate: { startDate: '2023-03-22', endDate: '2023-03-22' },
    endDate: { startDate: '2023-03-13', endDate: '2023-03-13' }
  }

export default function handler( req: NextApiRequest, res: NextApiResponse<any>) {
    console.log(req.body)

  res.status(200).json({ status: 'success' })
}
