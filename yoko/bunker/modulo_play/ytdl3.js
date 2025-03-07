// FEITA POR 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
// NÃO TIRE MEUS CRÉDITOS SEU RANDOM BAGULHO DEU TRABALHO PRA FAZER
const fs = require('fs')
const path = require('path')
const { YtdlCore, toPipeableStream } = require('@ybd-project/ytdl-core')

console.log("Inicializando o YtdlCore com configurações padrão...")
const ytdl = new YtdlCore({})
console.log("YtdlCore inicializado com sucesso.")

const audioDir = path.join(__dirname, 'ytdl3_audio', 'audio')
const videoDir = path.join(__dirname, 'ytdl3_video', 'video')

if (!fs.existsSync(audioDir)) {
fs.mkdirSync(audioDir, { recursive: true })
}
if (!fs.existsSync(videoDir)) {
fs.mkdirSync(videoDir, { recursive: true })
}

function generateRandomFileName(extension) {
const randomNum = Math.floor(Math.random() * 1000000)
return `TempMusic.${extension}`
}

async function downloadAudio(url) {
const audioPath = path.join(audioDir, generateRandomFileName('mp3'))
console.log(`Iniciando download do áudio: ${url}`)
try {
console.log("Solicitando stream do áudio...")
const stream = await ytdl.download(url, { quality: 'highestaudio', filter: 'audioonly' })
console.log("Stream do áudio obtido com sucesso.")
const fileStream = fs.createWriteStream(audioPath)
toPipeableStream(stream).pipe(fileStream)
return new Promise((resolve, reject) => {
fileStream.on('finish', () => {
console.log(`Download do áudio concluído e salvo em ${audioPath}`)
resolve(audioPath)
})
fileStream.on('error', (error) => {
console.error("Erro ao salvar o áudio:", error)
})
})
} catch (error) {
console.error("Erro ao baixar o áudio:", error)
throw error
}
}

async function downloadVideo(url) {
const videoPath = path.join(videoDir, generateRandomFileName('mp4'))
console.log(`Iniciando download do vídeo: ${url}`)
try {
console.log("Solicitando stream do vídeo...")
const stream = await ytdl.download(url)
console.log("Stream do vídeo obtido com sucesso.")
const fileStream = fs.createWriteStream(videoPath)
toPipeableStream(stream).pipe(fileStream)
return new Promise((resolve, reject) => {
fileStream.on('finish', () => {
console.log(`Download do vídeo concluído e salvo em ${videoPath}`)
resolve(videoPath)
})
fileStream.on('error', (error) => {
console.error("Erro ao salvar o vídeo:", error)
})
})
} catch (error) {
console.error("Erro ao baixar o vídeo:", error)
throw error
}
}

async function getVideoInfo(url) {
console.log(`Solicitando informações do vídeo: ${url}`)
try {
const info = await ytdl.getBasicInfo(url)
console.log("Informações do vídeo obtidas com sucesso.")
console.log("Título do vídeo:", info.videoDetails.title)
console.log("Descrição do vídeo:", info.videoDetails.description)
console.log("Canal do vídeo:", info.videoDetails.ownerChannelName)
console.log("Duração do vídeo:", info.videoDetails.lengthSeconds, "segundos")
console.log("URL da miniatura do vídeo:", info.videoDetails.thumbnails[0]?.url)
return info.videoDetails
} catch (error) {
console.error("Erro ao obter informações do vídeo:", error)
throw error
}
}

module.exports = { downloadVideo, downloadAudio, getVideoInfo, audioDir, videoDir }