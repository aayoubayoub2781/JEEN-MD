import fetch from 'node-fetch';
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    m.react('📥');
    const buttonParamsJson = JSON.stringify({
      title: "Show options",
      description: "Get information through official means about mee5",
      sections: [
        { title: "Mee5 more ", highlight_label: "Popular",
          rows: [
            { header: "Account Commands", title: "", description: "all account commands", id: usedPrefix + "accmenu" }
        ]},
        { title: "Mee5 downloads", highlight_label: "Popular",
          rows: [
            { header: "Download Commands", title: "", description: "All download commands", id: usedPrefix + "downmenu" }
        ]},
        { title: "Mee5 Ai ", highlight_label: "Popular",
          rows: [
            { header: "Ai Commands", title: "", description: "all ai commands", id: usedPrefix + "aimenu" },
            { header: "Islam Commands", title: "", description: "all islamic commands", id: usedPrefix + "islammenu" }
        ]},
        { title: "Mee5 Other ", highlight_label: "Popular",
          rows: [
            { header: "Other Commands", title: "", description: "all Other commands", id: usedPrefix + "menuother" },
            { header: "info", title: "", description: "Info user", id: usedPrefix + "info" }
        ]},           
        { title: "Ⓜ️ Menu", highlight_label: "Popular",
          rows: [
            { header: "⭐ Full Menu", title: "", description: "Visit all the commands", id: usedPrefix + "allmenu" }
        ]}
      ]
    })
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `▢ *Hello 👋,* ${taguser}
    
_*< downloade Commnds />*_

▢ _/apk_
▢ _/apk2_
▢ _/apk3_
▢ _/imganime2_
▢ _/imagine2_
▢ _/fb_
▢ _/2ytmp4_
▢ _/2ytmp4_
▢ _/play_
▢ _/ytmp3_
▢ _/ytmp4_
▢ _/yts_
▢ _/ig_
▢ _/img_
▢ _/tiktok_`.trim().replace('%readMore', readMore);
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      // ... الجزء الذي بدأت في كتابته
      conn.sendMessage(m.chat, {image: await genProfile(conn, m), caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: await genProfile(conn, m), caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});

    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(downmenu)$/i;

export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}
