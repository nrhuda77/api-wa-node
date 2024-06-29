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


const api = async (noHP, textWA, gambar,file) => {

    // console.log(params.text);
    let nohp = noHP;
    const text = textWA;
    // const img = gambar;
    // const files = file;
    try {

        if (nohp.startsWith("0")) {

            nohp = "62" + nohp.slice(1) + "@c.us"
            
        } else if (nohp.startsWith("62")) {

            nohp = nohp + "@c.us" 

        }

        const user = await client.isRegisteredUser(nohp);
        if (user) {

            client.sendMessage(nohp,text);

        //     const pic = new MessageMedia("image/png", img, "image");
        //     await client.sendMessage(nohp, pic, {caption: "My image"});
 
        //     const doc = new MessageMedia("application/pdf", files, "file");
        //  client.sendMessage(nohp, doc, {caption: "My document"});
            
            // send pdf
            // const file = new MessageMedia("application/pdf", u, "image.jpg");
            // client.sendMessage(nohp, file, {caption: "My image JPG!"});

            // const img = "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg";
            // const media = await MessageMedia.fromUrl(img);

            // send image
            // const image = new MessageMedia("application/pdf", img, "gambar");
            // await client.sendMessage(nohp, image, {caption: "My image"});
          
            client.sendMessage(nohp,text);
           
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





const apipic = async (caption,noHP, gambar) => {
 
    let nohp = noHP;
    const img = gambar;
    let note = caption;

    try {

        if (nohp.startsWith("0")) {

            nohp = "62" + nohp.slice(1) + "@c.us"
            
        } else if (nohp.startsWith("62")) {

            nohp = nohp + "@c.us" 

        }

        const user = await client.isRegisteredUser(nohp);
        if (user) {
          
            const gambar = new MessageMedia("application/jpeg", img, "file");
            client.sendMessage(nohp, gambar, {caption: note});
           
           
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






const apidoc = async (caption,noHP, file) => {
 
    let nohp = noHP;
    const dox = file;
    let note = caption;

    try {

        if (nohp.startsWith("0")) {

            nohp = "62" + nohp.slice(1) + "@c.us"
            
        } else if (nohp.startsWith("62")) {

            nohp = nohp + "@c.us" 

        }

        const user = await client.isRegisteredUser(nohp);
        if (user) {
          
            const doc = new MessageMedia("application/pdf", dox, "file");
            client.sendMessage(nohp, doc, {caption: note});
          
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


module.exports = {apipic,api,apidoc}