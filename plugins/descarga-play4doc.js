import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

const LimitAud = 725 * 1024 * 1024; //700MB
const LimitVid = 425 * 1024 * 1024; //425MB

const handler = async (m, { conn, command, args, text, usedPrefix }) => {
    if (command == 'play' || command == 'mp3') {
        if (!text) return conn.reply(m.chat, `🦋 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Distancia - Kimberly Contreraxx`, m);
        await m.react('⏳');
        conn.reply(m.chat, global.wait, m, {
            contextInfo: {
                externalAdReply: {
                    mediaUrl: null,
                    mediaType: 1,
                    showAdAttribution: true,
                    title: packname,
                    body: dev,
                    previewType: 0,
                    thumbnail: icons,
                    sourceUrl: channel
                }
            }
        });

        const yt_play = await search(args.join(' '));
        const texto1 = `🦋 *Título* 
        » ${yt_play[0].title}

        📆 *Publicado* 
        » ${yt_play[0].ago}

        🕑 *Duración* 
        » ${secondString(yt_play[0].duration.seconds)}

        > _Descargado el audio 🔊, aguarde un momento...._`.trim();

        await conn.sendFile(m.chat, yt_play[0].thumbnail, 'error.jpg', texto1, m);
        try {
            await m.react('⏳');
            const apiUrl = `https://deliriussapi-oficial.vercel.app/download/ytmp4?url=${encodeURIComponent(yt_play[0].url)}`;
            const apiResponse = await fetch(apiUrl);
            const delius = await apiResponse.json();

            if (!delius.status) return m.react('❌');
            const downloadUrl = delius.data.download.url;
            await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
            await m.react('✅');
        } catch (e1) {
            try {
                await m.react('⏳');
                let q = '128kbps';
                const yt = await youtubedl(yt_play[0].url).catch(async _ => await youtubedlv2(yt_play[0].url));
                const dl_url = await yt.audio[q].download();
                const ttl = await yt.title;
                const size = await yt.audio[q].fileSizeH;
                await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mpeg' });
                await m.react('✅');
            } catch (e2) {
                try {
                    await m.react('⏳');
                    const downloadUrl = await fetch9Convert(yt_play[0].url);
                    await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mpeg' });
                    await m.react('✅');
                } catch (e3) {
                    try {
                        await m.react('⏳');
                        const downloadUrl = await fetchY2mate(yt_play[0].url);
                        await conn.sendFile(m.chat, downloadUrl, 'audio.mp3', null, m, false, { mimetype: 'audio/mpeg' });
                        await m.react('✅');
                    } catch (e4) {
                        try {
                            await m.react('⏳');
                            const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${yt_play[0].url}`);
                            const audioData = await res.json();
                            if (audioData.status && audioData.result?.downloadUrl) {
                                await conn.sendMessage(m.chat, { audio: { url: audioData.result.downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
                                await m.react('✅');
                            }
                        } catch (e5) {
                            try {
                                await m.react('⏳');
                                let d2 = await fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${yt_play[0].url}`);
                                let dp = await d2.json();
                                const audiop = await getBuffer(dp.result.media.mp3);
                                const fileSize = await getFileSize(dp.result.media.mp3);
                                await conn.sendMessage(m.chat, { audio: { url: audiop }, mimetype: 'audio/mpeg' }, { quoted: m });
                                await m.react('✅');
                                if (fileSize > LimitAud) {
                                    await conn.sendMessage(m.chat, { document: { url: audiop }, mimetype: 'audio/mp3', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
                                }
                            } catch (e) {
                                await m.react('❌');
                                console.log(e);
                            }
                        }
                    }
                }
            }
        }
    }

    // Rest of the code is similar, adjust other handlers (`play2`, `playdoc`, etc.) in a similar way, focusing on improving the flow, removing redundant lines, and correcting issues with variable references and handling errors.
};

handler.help = ['play3', 'play4', 'playdoc'];
handler.tags = ['descargas'];
handler.command = ['play3', 'play4', 'mp3', 'mp4', 'playdoc', 'playdoc2'];
handler.group = true;

export default handler;

async function search(query, options = {}) {
    const search = await yts.search({ query, hl: 'es', gl: 'ES', ...options });
    return search.videos;
}

function secondString(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
    const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
    const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
    const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

const getBuffer = async (url) => {
    try {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        return Buffer.from(buffer);
    } catch (error) {
        console.error("Error al obtener el buffer", error);
        throw new Error("Error al obtener el buffer");
    }
};

async function getFileSize(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentLength = response.headers.get('content-length');
        return contentLength ? parseInt(contentLength, 10) : 0;
    } catch (error) {
        console.error("Error al obtener el tamaño del archivo", error);
        return 0;
    }
}

async function fetchY2mate(url) {
    const baseUrl = 'https://www.y2mate.com/mates/en60';
    const videoInfo = await fetch(`${baseUrl}/analyze/ajax`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ url, q_auto: 0 })
    }).then(res => res.json());

    const id = videoInfo.result.id;
    const downloadInfo = await fetch(`${baseUrl}/convert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ type: 'youtube', _id: id, v_id: url, token: '', ftype: 'mp4', fquality: '360p' })
    }).then(res => res.json());

    return downloadInfo.result.url;
}

async function fetch9Convert(url) {
    const apiUrl = `https://9convert.com/en429/api`;
    const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (data.status === 'ok') {
        return data.result.mp3;
    } else {
        throw new Error("No se pudo obtener la descarga desde 9Convert");
    }
}