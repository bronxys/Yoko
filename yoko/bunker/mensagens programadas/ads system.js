const fs = require("fs")

const { isJsonIncludes, saveJSON, sendHours, contarMin, converterMin } = require(`../../configs/imports/consts.js`)

const adsSytemPath = `./yoko/bunker/mensagens programadas/ads.json`

if(!fs.existsSync(adsSytemPath)) {fs.writeFileSync(adsSytemPath, JSON.stringify([]))}

const ads = JSON.parse(fs.readFileSync(adsSytemPath))

function saveADS() {saveJSON(ads, adsSytemPath)}

function addGroupInAds(from) {
  if(!isJsonIncludes(ads, from)) {
    ads.push({groupId: from, acctive: true, data: [], horarios: []})
    saveADS()
  }
}

const getGroupAds = (from) => {
  AB = ads.map(i => i.groupId).indexOf(from)
  return ads[AB]
}

const existAdminAds = (from, sender) => {
  data = getGroupAds(from)
  AB = data.data.map(i => i.id).indexOf(sender)
  return AB >= 0 ? true : false
}

const getAdminAds = (from, sender) => {
  data = getGroupAds(from)
  AB = data.data.map(i => i.id).indexOf(sender)
  return data.data[AB]
}

function rmAdminAds(from, sender) {
  data = getGroupAds(from)
  if(isJsonIncludes(data.data, sender)) {
    AB = data.data.map(i => i.id).indexOf(sender)
    data.data.splice(AB, 1)
    saveADS()
  }
}

function addAdminAds(from, sender, imagem = false, link = ``) {
  rmAdminAds(from, sender)
  data = getGroupAds(from)
  data.data.push({id: sender, true_false: imagem, url: link})
  saveADS()
}

function addAds(from, mensagem, tempo, sender, imagem = false, link = ``) {
  data = getGroupAds(from)
  letra = tempo.toLowerCase().slice(tempo.length - 1, tempo.length)
  numeral = Number(tempo.toLowerCase().slice(0, tempo.length - 1))
  if(letra == `h`) numeral *= 60
  soma = contarMin(sendHours("HH:mm")) + numeral
  if(soma >= 1440) {
    dias = (soma - (soma % 1440)) / 1440
    sobra = soma % 1440
  } else {
    dias = 0
    sobra = soma
  }
  data.horarios.push({id: sendHours("DDMMYYHHmmss"), text: mensagem, tempo: converterMin(sobra), type: {hm: letra, valor_numerico: numeral / (letra == `h` ? 60 : 1)}, dias: dias, save: sendHours("DD"), imagem: {true_false: imagem, url: link}})
  saveADS()
  rmAdminAds(from, sender)
}

const isIDads = (from, id) => {
  data = getGroupAds(from)
  AB = data.horarios.map(i => i.id).indexOf(id)
  return AB >= 0 ? true : false
}

function rmAds(from, id) {
  data = getGroupAds(from)
  AB = data.horarios.map(i => i.id).indexOf(id)
  data.horarios.splice(AB, 1)
  saveADS()
}

function adsFunc(blackmd) {
  if(ads.length > 0) {
    for(a of ads) {
      if(a.horarios.length > 0) {
        for(b of a.horarios) {
          if(b.dias <= 0) {
            minutos = b.type.valor_numerico
            if(b.type.hm == `h`) minutos *= 60
            if(contarMin(sendHours("HH:mm")) >= contarMin(b.tempo)) {
              if(a.acctive) {
                if(b.imagem.true_false) {
                  blackmd.sendMessage(a.groupId, {image: {url: b.imagem.url}, caption: b.text, contextInfo: {forwardingScore: 999, isForwarded: true}})
                } else blackmd.sendMessage(a.groupId, {text: b.text, contextInfo: {forwardingScore: 999, isForwarded: true}})
              }
              soma = contarMin(sendHours("HH:mm")) + minutos
              if(soma >= 1440) {
                b.dias += (soma - (soma % 1440)) / 1440
                saveADS()
                b.tempo = converterMin(soma % 1440)
                saveADS()
              } else {
                b.tempo = converterMin(soma)
                saveADS()
              }
            }
          } else {
            if(Number(sendHours("DD")) !== Number(b.save)) {
              b.dias -= 1
              saveADS()
              b.save = sendHours("DD")
              saveADS()
            }
          }
        }
      }
    }
  }
}

setday = `🔎 𝗦𝗘𝗧 𝗔𝗗𝗦 𝗔𝗤𝗨𝗜 🔍`

const adsStartList = (text) => {
  return [
    {title: setday, body: `Intervalo de 5 minutos`, command: text+`|5m`},
    {title: setday, body: `Intervalo de 10 minutos`, command: text+`|10m`},
    {title: setday, body: `Intervalo de 30 minutos`, command: text+`|30m`},
    {title: setday, body: `Intervalo de 1 hora`, command: text+`|1h`},
    {title: setday, body: `Intervalo de 1 hora e 30 minutos`, command: text+`|${60 + 30}m`},
    {title: setday, body: `Intervalo de 2 horas`, command: text+`|2h`},
    {title: setday, body: `Intervalo de 2 hora e 30 minutos`, command: text+`|${60 * 2}m`},
    {title: setday, body: `Intervalo de 3 horas`, command: text+`|3h`},
    {title: setday, body: `Intervalo de 4 horas`, command: text+`|4h`},
    {title: setday, body: `Intervalo de 5 horas`, command: text+`|5h`},
    {title: setday, body: `Intervalo de 10 horas`, command: text+`|10h`},
    {title: setday, body: `Intervalo de 12 horas`, command: text+`|3h`},
    {title: setday, body: `Intervalo de 1 dia`, command: text+`|24h`},
  ]
}

module.exports = { ads, saveADS, addGroupInAds, getGroupAds, addAds, isIDads, rmAds, adsFunc, adsStartList, existAdminAds, getAdminAds, rmAdminAds, addAdminAds }