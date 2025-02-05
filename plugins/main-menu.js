import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
const { levelling } = '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, cookies, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let delirius = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}`)
let paisdata = delirius.data.result
let mundo = paisdata ? `${paisdata.name} ${paisdata.emoji}` : 'Desconocido'
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/vVyRP.png')
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const img = ['https://qu.ax/vVyRP.png', 'https://qu.ax/vVyRP.png', 'https://qu.ax/vVyRP.png']
let menu = `ρσ𝘄ҽɾҽ𝗱 Ⴆყ Ricardo 🚩 

ㅤㅤㅤㅤ❀꯭ᩬ.  ꯭ \`FN-𝗕ꪮᡶ\`   ɱҽиυ︩︪ρɾɳ𝘀ỉᩏꪖʅ
ㅤㅤㅤ¡ вιєивєиι∂σ  αℓ  \`мє𝗻ꪊ\` !    ֵ  ՙ🍁ຼ
> ㅤㅤ${taguser}*ㅤㅤ   ۟ ۟ ۟    ⁽  😊+ ⁾
ㅤㅤㅤㅤㅤ  ⁀⏝ܸ֘ ͝ ⏝ܸ֘ ͝ ⏝⁀

 ㅤ   𐍔𐍔 ㅤ   ͡ 𝗜ɳϝσ в𝗼т \`☆\`       ͗ ͗ ۪     花
 
   ๑👑᳕ᷓ┊Author » \`@ricardo\`
   ๑🍟᳕ᷓ┊Bot » \`${(conn.user.jid == global.conn.user.jid ? 'Oficial' : 'SubBot')}\`
   ๑☁️᳕ᷓ┊Librería » \`Baileys\`
   ๑📆᳕┊Fecha » \`${moment.tz('America/Asuncion').format('DD/MM/YY')}\`
   ๑🕑᳕┊Activa » \`${uptime}\`
   ๑👥️᳕ᷓ️┊Usuarios » \`${totalreg}\`
   ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗠𝗮𝗶𝗻    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
              
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}afk 
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}grupos
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}skyplus
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}instalarYagamiBot
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}menu
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}menu2
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}hornymenu
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}runtime
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}script
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}solicitud
    ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}blocklist
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗕𝘂𝘀𝗾𝘂𝗲𝗱𝗮𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
              
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}githubsearch
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}google 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}mercadolibre
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}npmjs
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tiktoksearch <txt>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tweetposts
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ytsearch
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}imagen <query>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pinterest
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗝𝘂𝗲𝗴𝗼𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
              
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}abrazar <@usuario>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}acertijo
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}sonrojarse 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}gay 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}lesbiana 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pajero 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pajera 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}puto 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}puta 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}manco 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}manca 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}rata 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}prostituta 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}prostituto 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}apostar 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}cf
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}consejo
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}dance
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}doxear
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}formarpareja
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}violar 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}enamorada 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}math
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}meme
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}acariciar 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}personalidad
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}piropo
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pokedex 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pucheros 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ppt
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pregunta
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}dormir 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}reto
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ruleta 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}triste 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ship
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}love
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}simi
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}bot
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}top
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}zodiac
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}slot
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗝α∂ιвσтѕ    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
              
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}serbot
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}serbot --code
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pausarai
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}sockets
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}deletebot
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗿ρg    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}bank
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}cookies
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}crimen
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}daily
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}claim
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}depositar
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}lb
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}levelup
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}minar
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}retirar
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}rob2
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}rob
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}addprem 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}slut
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}trabajar
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}transfer
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗥ɾҽɠιʂƚɾσ    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}perfil
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}unreg
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}reg
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗲xρ    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}daily
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}Buy
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}Buyall
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}qc
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}stiker
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}wm
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
           *\`៑᳘     ׄ   𝗔𝗻𝗶𝗺𝗲𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}animelink
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}akira
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}akiyama
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}anna
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}asuna
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ayuzawa
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}boruto
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}chiho
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}chitoge
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}deidara
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}erza
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}elaina
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}eba
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}emilia
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}hestia
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}hinata
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}inori
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}isuzu
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}itachi
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}itori
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}kaga
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}kagura
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}kaori
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}keneki
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}kotori
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}kurumi
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}madara
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}mikasa
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}miku
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}minato
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}naruto
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nezuko
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}sagiri
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}sasuke
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}sakura
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}cosplay
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}infoanime
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}lolice
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}waifu
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗚𝗿𝘂𝗽𝗼𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}add
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}banchat 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}grupo abrir / cerrar
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}delete
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}demote
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}encuesta 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}hidetag
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}infogrupo
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}invite 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}kick
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}link
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}listadv
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}promote
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}revoke
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tagall 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}invocar 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}unbanchat
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗢𝗻/𝗢𝗳𝗳    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}enable
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}disable
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗗𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}fb
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}gitclone 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}imagen 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ig
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tw
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}mediafire
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}apkmod
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}play
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}play2
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}play3
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}play4
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}spotify
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tiktok
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ytmp4 
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗛𝗲𝗿𝗿𝗮𝗺𝗶𝗲𝗻𝘁𝗮𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}toanime
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tts
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}imagen
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}spamwa 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}fake
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}remini
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}hd
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}enhance
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ssweb
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}trad
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nuevafotochannel
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nosilenciarcanal
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}silenciarcanal
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}noseguircanal
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}seguircanal
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}avisoschannel
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}resiviravisos
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}inspect
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}eliminarfotochannel
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}reactioneschannel
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}reaccioneschannel
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nuevonombrecanal
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nuevadescchannel
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶ó𝗻    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}creador
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}editautoresponder
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ds
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}dsowner
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}fixmsgespera
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}status
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}info
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ping
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}sistema
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}speed
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}speedtest
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}reportar
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗡𝘀𝗳𝘄    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwloli
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwfoot
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwass
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwbdsm
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwcum
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwero
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwfemdom
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwfoot
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfwglass
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nsfworgy
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}yuri
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}yuri2
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}yaoi
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}yaoi2
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}panties
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tetas
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}booty
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ecchi
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}furro
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}hentai
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}trapito
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}imagenlesbians
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pene
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}porno
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}randomxxx
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}pechos 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}rule34 
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗲𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}enable
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}disable
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}addcookies 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}addprem 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}autoadmin
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}copia
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}banuser 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}bc
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}bcgc
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}bcgc2
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌$
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌=>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}cheat
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}cleartmp
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}delprem 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}dsowner
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}fetch
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}get
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ip <alamat ip>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}join <link>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}grupocrear <nombre>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nuevabiobot <teks>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nuevafotobot *<imagen>*
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nuevonombrebot <teks>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}resetpersonajes
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}restart
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}unbanuser
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}update
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗔𝘂𝗱𝗶𝗼𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}bass
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}blown
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}deep
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}earrape
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}fast
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}fat
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}nightcore
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}reverse
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}robot 
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}slow
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}smooth
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tupai
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗜𝗔    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}gemini
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}chatgpt <texto>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}ia <texto>
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}remini
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}hd
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}enhance
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒


    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

                *\`🌩️ ֮   ִ  𝗰αтє𝗴σɾια   ׄ   ഹ\`*
              *\`៑᳘     ׄ   𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗱𝗼𝗿𝗲𝘀    ִ   ✿꯭͡❀ׂ\`*
              
    ─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒
    
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}togifaud
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}toimg
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tourl
   ㅤׂ◌☆⃘͜𓏸⃘ᷭᰰ͜☆ׂ◌${usedPrefix}tovideo
    ╰─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

> ${global.dev}`.trim()

await conn.sendMessage(m.chat, { image: { url: img.getRandom() }, caption: menu, contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1, }, forwardingScore: 999, externalAdReply: { title: 'FN BOT', body: dev, thumbnailUrl: perfil, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false,
}, }, gifPlayback: true, gifAttribution: 0 }, { quoted: null })
await m.react(emojis)    
    
} catch (e) {
await m.reply(`✘ Ocurrió un error al enviar el menú\n\n${e}`)
await m.react(error)
}}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
