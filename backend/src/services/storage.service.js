const ImageKit = require('@imagekit/nodejs')


const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey:  process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadFile(file){
    const result = await ImageKitClient.files.upload({
        file:file,
        fileName: "music_" + Date.now(),
        folder: "part5Project2/music"
    })
    return result;
}

module.exports = {uploadFile}
