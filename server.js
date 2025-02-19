require("dotenv").config()
const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"bidhanchandra.biswas369@gmail.com",
        pass:"ihyk gxfj gbuq loyk"
    },
})

const recipients=[
     "sabirasultana2004@gmail.com",
      "contactabujabed@gmail.com",
      "ishaghosh5.6a@gmail,com" ,
]

async function sendmailtoall(){
    for(const r of recipients){
        const mailformat={
            from:"dranish2004@gmail.com",
            to:r,
            subject:"greeding",
            text:`HELLOW${r},\n\n i am from ardent computech`

        }
        try{
            const info=await transporter.sendMail(mailformat);
            console.log(`email sending to${r} and the mail is ${info}`)
        }catch(error){
            console.log(error)
        }
    }
}
sendmailtoall()