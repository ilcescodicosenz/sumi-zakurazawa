
import { promises as fs } from 'fs';

const charactersFilePath = './src/JSON/characters.json';

const cooldowns = {};

async function loadCharacters() {
    try {
        const data = await fs.readFile(charactersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('❀ No se pudo cargar el archivo characters.json.');
    }
}

async function saveCharacters(characters) {
    try {
        await fs.writeFile(charactersFilePath, JSON.stringify(characters, null, 2), 'utf-8');
    } catch (error) {
        throw new Error('❀ No se pudo guardar el archivo characters.json.');
    }
}

let handler = async (m, { conn }) => {
    const userId = m.sender;
    const now = Date.now();

    // Verificar cooldown
    if (cooldowns[userId] && now < cooldowns[userId]) {
        const remainingTime = Math.ceil((cooldowns[userId] - now) / 1000);
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return await conn.reply(m.chat, `《✧》Debes esperar *${minutes} minutos y ${seconds} segundos* para usar *#ver* de nuevo.`, m);
    }

    try {
        const characters = await loadCharacters();
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        const randomImage = randomCharacter.url; // Cambié a 'url' según tu estructura

        const statusMessage = randomCharacter.user 
            ? `Reclamado por @${randomCharacter.user.split('@')[0]}` 
            : 'Libre';

        const message = `❀ Nombre » *${randomCharacter.nombre}*
⚥ Valor » *${randomCharacter.valor}* 
♡ Estado » ${statusMessage}
ID: *${randomCharacter.id || 'No disponible'}*`;  // Manejo de ID

        await conn.sendFile(m.chat, randomImage, `${randomCharacter.nombre}.jpg`, message, m);

        // Asignar usuario si está libre
        if (!randomCharacter.user) {
            randomCharacter.user = userId;
            await saveCharacters(characters);
        }

        cooldowns[userId] = now + 15 * 60 * 1000; // 15 minutos de cooldown

    } catch (error) {
        await conn.reply(m.chat, `✘ Error al cargar el personaje: ${error.message}`, m);
    }
};

handler.help = ['ver', 'rw', 'rollwaifu'];
handler.tags = ['gacha'];
handler.command = ['ver', 'rw', 'rollwaifu'];

export default handler;
