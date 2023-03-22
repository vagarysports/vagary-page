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
          to: "jorgezerpacoder@gmail.com,diazgarciad@vagarysports.com,mhornsby@vagarysports.com",
          // to: "jorgezerpacoder@gmail.com",
          subject: "NEW VAGARY CLIENT (from web page contact form)",
          html:`
            <h1 style="font-size:22px; color: #000000">A New Client is Interested on Vagary's Services</h2>
            <h3 style="font-size:20px; color: #000000">Client Info:</h3>
            ${ req.body.isFromFooter ? (
              `
                <ul style="font-size:14px; color: #000000">
                  <li>Name: ${req.body.name}</li>
                  <li>lastName: ${req.body.email}</li>
                  <li>phone: ${req.body.phone}</li>
                </ul>
              `
              ) : (
              `
                <ul style="font-size:14px; color: #000000">
                  <li>firstName: ${req.body.firstName}</li>
                  <li>lastName: ${req.body.lastName}</li>
                  <li>email: ${req.body.email}</li>
                  <li>team: ${req.body.team}</li>
                  <li>level: ${req.body.level}</li>
                  <li>phone: ${req.body.phone}</li>
                  <li>start Date: ${req.body.startDate && req.body.startDate.startDate}</li>
                  <li>end Data: ${req.body.endDate && req.body.endDate.startDate}</li>
                </ul>
              `
            ) }
          `

        };
  
        const result = await transport.sendMail(mailOptions);
        res.send(result);
    } catch (error) {
      throw error
    }
  }