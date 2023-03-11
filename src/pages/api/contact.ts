// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import axios from 'axios'



const creds = {
    "service":"gmail",
    "auth": {
        type:process.env.GMAIL_API_TYPE,
        user:process.env.GMAIL_API_USER,
        clientId:process.env.GMAIL_API_CLIENT_ID,
        clientSecret:process.env.GMAIL_API_CLIENT_SECRET,
        refreshToken:process.env.GMAIL_API_REFRESH_TOKEN
    }
  }
  
 

//   ----------------------------------
  //CREATE NEW OAUTH CLIENT
const oAuth2Client = new google.auth.OAuth2(
    creds.auth.clientId, //client id
    creds.auth.clientSecret, //client secret
    process.env.GMAIL_API_REDIRECT_URI, //redirect uri
  );

oAuth2Client.setCredentials({ refresh_token: creds.auth.refreshToken });





export default async function handler(req: NextApiRequest,res: NextApiResponse<any>) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service:"gmail",
            auth: {
                "type":"OAuth2",
                "user": creds.auth.user,
                "clientId":creds.auth.clientId,
                "clientSecret":creds.auth.clientSecret,
                "refreshToken":creds.auth.refreshToken
            }
        })

        const mailOptions = {
          from: "Vagary Sports <sid.cd.varma@gmail.com>",
          to: "jorgezerpacoder@gmail.com",
          subject: "Gmail API NodeJS",
          html:`<div>${req.body.email}</div>`
        };
  
        const result = await transport.sendMail(mailOptions);
        res.send(result);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }