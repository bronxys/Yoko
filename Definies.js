const API_KEY_BLACK = "LAYLA_BOT"

var blacksite = "https://blacksystemofc.com.br"

var downoff = 'Sistema apresenta instabilidades... Pfvr, volte mais tarde.'

var downon = 'Sistema cancelou a operação, devido a demora na resposta...'

const sendVideo = (id, link, desc, hehe) => {
    return diogo_oficial3k.sendMessage(id, {video: {url: link}, caption: desc, mimetype: 'video/mp4'}, {quoted: hehe})
}
  
const sendAudio = (id, link, tipo, hehe) => {
    return diogo_oficial3k.sendMessage(id, {audio: {url: link}, mimetype: tipo}, {quoted: hehe})
}
  
const sendImage = (id, ytb, cap) => {
    diogo_oficial3k.sendMessage(from, {image: {url: ytb}, caption: cap}, {quoted:info})
}

const sendSticker = (from, filename, info) => {
    diogo_oficial3k.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

async function sendUrlText(id, texto, title, desc, foto, link, hehe) {
    diogo_oficial3k.sendMessage(id, {text: texto, contextInfo: {externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(foto), mediaType: 1, showAdAttribution: true, sourceUrl: link}}}, {quoted: hehe})
}

const alerandom = (nmr) => {
    return Math.floor(Math.random()*nmr)
}

const rmLetras = (txt) => {
    return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

async function carregamento(id, txt, hehe) {
    var download = [
      `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
      `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
      `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
      `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
      `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
      `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
      `${txt.length > 0 ? "~_*© black system*_~\n" : ""}𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
      ]
    let { key } = await diogo_oficial3k.sendMessage(id, {text: `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`}, {quoted: hehe})
    await sleep(2000)
    for(let i = 0; i < download.length; i++) {
      await diogo_oficial3k.sendMessage(id, {text: download[i], edit: key }, {quoted: hehe})
    }
  }
    