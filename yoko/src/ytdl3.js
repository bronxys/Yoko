const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath('/data/data/com.termux/files/usr/bin/ffmpeg');

const { YtdlCore, toPipeableStream } = require('@ybd-project/ytdl-core');
const ytdl = new YtdlCore({});


const audioDir = path.join(__dirname, 'ytdl3_audio', 'audio')
const videoDir = path.join(__dirname, 'ytdl3_video', 'video')
const finalOutputPath = path.join(__dirname, `video`) 

if (!fs.existsSync(audioDir)) {
fs.mkdirSync(audioDir, { recursive: true })
}
if (!fs.existsSync(videoDir)) {
fs.mkdirSync(videoDir, { recursive: true })
}
if (!fs.existsSync(finalOutputPath)) {
fs.mkdirSync(finalOutputPath, { recursive: true })
}

function generateRandomFileName(extension) {
const randomNum = Math.floor(Math.random() * 1000000)
return `${randomNum}.${extension}`
}

async function downloadAudio2(url) {
try {
const audioPath = path.join(audioDir, generateRandomFileName('mp3'))
console.log(`Iniciando download do áudio: ${url}`)
try {
console.log("Solicitando stream do áudio...")
const stream = await ytdl.download(url, {quality: 'highestaudio', filter: 'audioonly' })
console.log("Stream do áudio obtido com sucesso.")
const fileStream = fs.createWriteStream(audioPath)
toPipeableStream(stream).pipe(fileStream)
return new Promise((resolve, reject) => {
fileStream.on('finish', () => {
console.log(`Download do áudio concluído e salvo em ${audioPath}`)
resolve(audioPath)
})
fileStream.on('error', (error) => {
console.error("Erro ao salvar ou áudio:", error)
})
})
} catch (error) {
console.error("Erro ao baixar o áudio:", error)
throw error
}
} catch {

}
}


async function downloadAudio1(url) {
const audioPath = path.join(audioDir, generateRandomFileName('mp3'))
console.log(`Iniciando download do áudio: ${url}`)
try {
console.log("Solicitando stream do áudio...")
const stream = await ytdl.download(url, { quality: 'lowestaudio', filter: 'audioonly' })
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

async function downloadVideo2(url) {
const videoPath = path.join(videoDir, generateRandomFileName('mp4'))
const audioPath = path.join(audioDir, generateRandomFileName('mp3'))
const resultado = path.join(finalOutputPath, generateRandomFileName('mp4'))
console.log(`Iniciando download do vídeo: ${url}`)
try {
console.log("Solicitando stream do vídeo na melhor qualidade...")
const videoStream = await ytdl.download(url, { quality: 'highestvideo', filter: 'videoonly' })
console.log("Stream do vídeo obtido com sucesso.")
console.log("Solicitando stream do áudio na melhor qualidade...")
const audioStream = await ytdl.download(url, { quality: 'lowestaudio', filter: 'audioonly' })
console.log("Stream do áudio obtido com sucesso.")
await new Promise((resolve, reject) => {
toPipeableStream(videoStream)
.pipe(fs.createWriteStream(videoPath))
.on('finish', resolve)
.on('error', reject)
})
await new Promise((resolve, reject) => {
toPipeableStream(audioStream)
.pipe(fs.createWriteStream(audioPath))
.on('finish', resolve)
.on('error', reject)
})
console.log(`Vídeo salvo em ${videoPath}`)
console.log(`Áudio salvo em ${audioPath}`)
await new Promise((resolve, reject) => {
ffmpeg()
.input(videoPath)
.input(audioPath)
.videoCodec('libx264')
.audioCodec('aac')
.toFormat('mp4')
.save(resultado)
.on('end', () => {
console.log(`Download do vídeo concluído e salvo em ${resultado}`)
resolve(resultado)
})
.on('error', (err) => {
console.error("Erro ao processar o vídeo:", err)
reject(err)
})
})
return resultado
} catch (error) {
console.error("Erro ao baixar o vídeo:", error)
throw error
} finally {
if (fs.existsSync(videoPath)) {
fs.unlinkSync(videoPath)
}
if (fs.existsSync(audioPath)) {
fs.unlinkSync(audioPath)
}
}
}

async function getVideoInfo(url) {
console.log(`Solicitando informações do vídeo: ${url}`)
try {
const info = await ytdl.getInfo(url, {
lang: 'id',
requestOptions: {
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
'Accept-Language': 'id'
}
}
})
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

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
module.exports = { downloadVideo2, downloadAudio1, downloadAudio2, getVideoInfo, audioDir, videoDir, finalOutputPath }
