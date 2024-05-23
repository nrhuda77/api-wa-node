const { Client, LocalAuth,  MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: [ '--no-sandbox', '--disable-gpu', ],
    },
    webVersionCache: { type: 'remote', remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html', }
});
const qrcode = require('qrcode-terminal');



client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();


const api = async (noHP, textWA, gambar) => {


    

    // console.log(params.text);
    let nohp = noHP;
    const text = textWA;
    const img = gambar;
    try {

        // if (nohp.startsWith("0")) {

        //     nohp = "62" + nohp.slice(1) + "@c.us"
            
        // } else if (nohp.startsWith("62")) {

        //     nohp = nohp + "@c.us" 

        // }

        nohp = nohp + "@c.us" 

        const user = await client.isRegisteredUser(nohp);
        if (user) {
        
            client.sendMessage(nohp,text);
            
            // send pdf
            // const file = new MessageMedia("application/pdf", u, "image.jpg");
            // client.sendMessage(nohp, file, {caption: "My image JPG!"});
            
            // send image
            // const image =   new MessageMedia("image/jpeg", img, "gambar");
            // await client.sendMessage(nohp, image, {caption: "My image"});
          
            // client.sendMessage(nohp,text);
           
            console.log('success');
        } else{
            console.log('failed');
        }

        // respond.json({nohp,text});

    } catch (error) {
        console.log(error);
        // respond.status(500).json({status: 'error'})
    }



  
 
}

module.exports = {api}