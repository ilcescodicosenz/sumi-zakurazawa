import yts from 'yt-search';
const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `\`\`\`[ 🌴 ] Por favor ingresa un texto. Ejemplo:\n${usedPrefix + command} Did i tell u that i miss you\`\`\``;

  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];
  const body = `\`\`\`⊜─⌈ 📻 ◜YouTube Play◞ 📻 ⌋─⊜

    ≡ Título : » ${videoInfo.title}
    ≡ Views : » ${videoInfo.views}
    ≡ Duration : » ${videoInfo.timestamp}
    ≡ Uploaded : » ${videoInfo.ago}
    ≡ URL : » ${videoInfo.url}

# 🌴 Su ${isVideo ? 'Video' : 'Audio'} se está enviando, espere un momento...\`\`\``;

  conn.sendMessage(m.chat, {
    image: { url: videoInfo.thumbnail },
    caption: body,
  }, { quoted: fkontak });

  let result;
  try {
    if (command === 'play' || command === 'yta' || command === 'ytmp3') {
      let hh = await fetch(`https://api.siputzx.my.id/api/dl/youtube/mp3?url=${videoInfo.url}`);
      result = await hh.json()
    } else if (command === 'playvid' || command === 'ytv' || command === 'play2' || command === 'ytmp4') {
    let rr = await fetch(`https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${videoInfo.url}`);
      result = await rr.json()
    } else {
      throw "Comando no reconocido.";
    }
let url_dl = isVideo ? result.data.download.url : result.data
    conn.sendMessage(m.chat, {
      [isVideo ? 'video' : 'audio']: { url: url_dl },
      mimetype: isVideo ? "video/mp4" : "audio/mpeg",
      caption: isVideo ? `URL: ${videoInfo.url}` : '',
    }, { quoted: m });

  } catch (error) {
    throw "Ocurrió un error al procesar tu solicitud.";
  }
};

handler.command = handler.help = ['play', 'playvid', 'ytv', 'ytmp4', 'yta', 'play2', 'ytmp3'];
handler.tags = ['dl'];
handler.diamond = 4;

export default handler;

const getVideoId = (url) => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("Invalid YouTube URL");
};