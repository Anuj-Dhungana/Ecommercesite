import nodemailer from 'nodemailer'



const sendMail = async(email,otp)=>{
   

const transporter = nodemailer.createTransport({
service: "gmail",
  auth: {
    user: "anujdhungana6@gmail.com",
    pass: 'nkxngtotehiathin',
  },
});



  const info = await transporter.sendMail({
    from: '"instagram Security" <metasecurity@gmail.com>',
    to: email,
    subject: "aska ",
    text: 'kina aunu bako raixa ta aska madam aja tapai ko ma', // plain‑text body
    html: `<b>${otp}</b>`, // HTML body
  });



}

export {sendMail}