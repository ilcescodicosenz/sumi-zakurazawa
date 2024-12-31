// *[ ❀ PLAY ]*
import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn, text, args }) => {
if (!text) {
return m.reply("❀ ingresa un texto de lo que quieres buscar")
}
    
let ytres = await search(args.join(" "))
let txt = `꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦
♥︎𓆩Título𓆪 : ${ytres[0].title}
♥︎𓆩Duración𓆪 : ${ytres[0].timestap} ♥︎𓆩Publicado𓆪 : ${ytres[0].ago}
♥︎𓆩Canal𓆪 : ${ytres[0].author.name || 'Desconocido'}
♥︎𓆩Url𓆪• : ${'https://youtu.be/' + ytres[0].videoId}
꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦`
await conn.sendFile(m.chat, ytres[0].image, 'thumbnail.jpg', txt, m)
    
try {
let api = await fetch(`https://api.giftedtech.my.id/api/download/dlmp3?apikey=gifted&url=${ytres[0].url}`)
let json = await api.json()
let { quality, title, download_url } = json.result
await conn.sendMessage(m.chat, { audio: { url: download_url }, fileName: `${title}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch (error) {
console.error(error)
}}

handler.command = /^(play)$/i

export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}