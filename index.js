const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.user,
        pass: process.env.pass,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken: process.env.refreshToken
    }
});

let mailOptions = {
    from: 'NODEMAILER 📧 <nodemailerProject899@gmail.com>',
    to: 'nodemailerProject899@gmail.com',
    subject: "Nodemailer Project",
    text: 'Hello from gmail using API',
    html: '<h1>Hello from gmail using API</h1>',
};

transporter.sendMail(mailOptions,function(err,data){
    if(err){
        console.log("Error: "+ err);
    }else{
        console.log("Email sent successfully....");
    }
});

const port =  process.env.PUBLIC || 3000;
app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}...`);
});