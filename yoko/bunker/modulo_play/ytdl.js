//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
const ytdl = require('@distube/ytdl-core')
const yts = require('youtube-yts')
const readline = require('readline')
const ffmpeg = require('fluent-ffmpeg')
const NodeID3 = require('node-id3')
const fs = require('fs')
const fetchBuffer = require("./myfunc2.js")
const ytM = require('node-youtube-music')
const { randomBytes } = require('crypto')
const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/

class YT {
constructor() {}

static isYTUrl(url) {
return ytIdRegex.test(url)
}

static getVideoID(url) {
if (!this.isYTUrl(url)) throw new Error('Not a YouTube URL')
return ytIdRegex.exec(url)[1]
}

static async WriteTags(filePath, Metadata) {
NodeID3.write(
{
title: Metadata.Title,
artist: Metadata.Artist,
originalArtist: Metadata.Artist,
image: {
mime: 'jpeg',
type: {
id: 3,
name: 'front cover',
},
imageBuffer: (await fetchBuffer(Metadata.Image)).buffer,
description: `Cover of ${Metadata.Title}`,
},
album: Metadata.Album,
year: Metadata.Year || ''
},
filePath
)
}
static async search(query, options = {}) {
const search = await yts.search({ query, hl: 'id', gl: 'ID', ...options })
return search.videos
}

static searchTrack(query) {
return new Promise(async (resolve, reject) => {
try {
let ytMusic = await ytM.searchMusics(query)
let result = []
for (let i = 0; i < ytMusic.length; i++) {
result.push({
isYtMusic: true,
title: `${ytMusic[i].title} - ${ytMusic[i].artists.map(x => x.name).join(' ')}`,
artist: ytMusic[i].artists.map(x => x.name).join(' '),
id: ytMusic[i].youtubeId,
url: 'https://youtu.be/' + ytMusic[i].youtubeId,
album: ytMusic[i].album,
duration: {
seconds: ytMusic[i].duration.totalSeconds,
label: ytMusic[i].duration.label
},
image: ytMusic[i].thumbnailUrl.replace('w120-h120', 'w600-h600')
})
}
resolve(result)
} catch (error) {
reject(error)
}
})
}

static async downloadMusic(query) {
try {
const getTrack = Array.isArray(query) ? query : await this.searchTrack(query)
const search = getTrack[0]
const videoInfo = await ytdl.getInfo('https://www.youtube.com/watch?v=' + search.id)
let stream = ytdl(search.id, { filter: 'audioonly', quality: 140 })
let songPath = `./bunker/modulo_play/video/${randomBytes(3).toString('hex')}.mp4`
stream.on('error', (err) => console.log(err))
const file = await new Promise((resolve) => {
ffmpeg(stream)
.videoCodec('libx264')
.audioCodec('aac')
.format('mp4')
.save(songPath)
.on('end', () => resolve(songPath))
})
return {
meta: search,
path: file,
size: fs.statSync(songPath).size
}
} catch (error) {
throw new Error(error)
}
}

static async mp4(query, quality = 134) {
try {
if (!query) throw new Error('Video ID or YouTube URL is required')
const videoId = this.isYTUrl(query) ? this.getVideoID(query) : query
const videoInfo = await ytdl.getInfo('https://www.youtube.com/watch?v=' + videoId)
const format = ytdl.chooseFormat(videoInfo.formats, { format: quality, filter: 'videoandaudio' })
return {
title: videoInfo.videoDetails.title,
thumb: videoInfo.videoDetails.thumbnails.slice(-1)[0],
date: videoInfo.videoDetails.publishDate,
duration: videoInfo.videoDetails.lengthSeconds,
channel: videoInfo.videoDetails.ownerChannelName,
quality: format.qualityLabel,
contentLength: format.contentLength,
description: videoInfo.videoDetails.description,
videoUrl: format.url
}
} catch (error) {
throw error
}
}

static async video(url) {
try {
if (!url) throw new Error('YouTube URL is required')
const videoId = this.isYTUrl(url) ? this.getVideoID(url) : url
const videoInfo = await ytdl.getInfo('https://www.youtube.com/watch?v=' + videoId, { lang: 'id' })
const formats = videoInfo.formats
.filter(f => f.hasVideo && f.hasAudio)
.sort((a, b) => {
const qualityA = parseInt(a.qualityLabel.replace('p', ''), 10) || 0
const qualityB = parseInt(b.qualityLabel.replace('p', ''), 10) || 0
return qualityB - qualityA
})
if (formats.length === 0) throw new Error('No suitable format found')
const bestFormat = formats[0]
const videoPath = `./bunker/modulo_play/video/${randomBytes(3).toString('hex')}.mp4`
const fileStream = fs.createWriteStream(videoPath)
const downloadPromise = new Promise((resolve, reject) => {
let starttime
ytdl(videoId, { quality: bestFormat.itag })
.on('response', () => {
starttime = Date.now()
})
.on('progress', (chunkLength, downloaded, total) => {
const percent = (downloaded / total) * 100
const downloadedMB = (downloaded / 1024 / 1024).toFixed(2)
const totalMB = (total / 1024 / 1024).toFixed(2)
const downloadedMinutes = (Date.now() - starttime) / 1000 / 60
const estimatedDownloadTime = (downloadedMinutes / (downloaded / total)) - downloadedMinutes
process.stdout.clearLine()
process.stdout.cursorTo(0)
process.stdout.write(`Downloading: ${percent.toFixed(2)}% (${downloadedMB}MB of ${totalMB}MB)`)
process.stdout.write(`, running for: ${downloadedMinutes.toFixed(2)} minutes`)
process.stdout.write(`, estimated time left: ${estimatedDownloadTime.toFixed(2)} minutes`)
})
.pipe(fileStream)
.on('finish', () => resolve({
path: videoPath,
meta: {
title: videoInfo.videoDetails.title,
thumb: videoInfo.videoDetails.thumbnails.slice(-1)[0].url,
date: videoInfo.videoDetails.publishDate,
duration: videoInfo.videoDetails.lengthSeconds,
channel: videoInfo.videoDetails.ownerChannelName,
quality: bestFormat.qualityLabel,
contentLength: bestFormat.contentLength,
description: videoInfo.videoDetails.description,
videoUrl: bestFormat.url
}
}))
.on('error', (err) => reject(err))
})
const result = await downloadPromise
return result
} catch (error) {
throw new Error(error)
}
}
}

module.exports = YT