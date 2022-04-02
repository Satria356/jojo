const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}
exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `
✦══✿══╡${setting.botName}╞══✿══✦
${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
✦Library : *Baileys-MD*.
✦Prefix : ( ${prefix} )
✦Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
✦Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

✦Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
✦Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
✦Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
✦Balance : $${toCommas(getBalance(sender, balance))}
  
 Ada Bug? Ketik ${prefix}report Bug
 ${readmore}
┌──────────────
│▹ ${prefix}menu
│▹ ${prefix}owner
│▹ ${prefix}donasi
│▹ ${prefix}speed
│▹ ${prefix}runtime
│▹ ${prefix}cekprem
│▹ ${prefix}listprem
│▹ ${prefix}jo <Text>
│▹ ${prefix}simi <Text>
│─── ( ✏️ )  Converter/Tools
│▹ ${prefix}stiker <ReplyGambar/Caption>
│▹ ${prefix}toimg <ReplyStiker>
│▹ ${prefix}tovid <ReplyStiker>
│─── ( ⌛ )  Downloader
│▹ ${prefix}play <Querry>
│▹ ${prefix}tiktok <LinkTt>
│▹ ${prefix}tiktokaudio <LinkTt>
│▹ ${prefix}ytmp4 <LinkYt>
│▹ ${prefix}ytmp3 <LinkYt>
│▹ ${prefix}getvideo
│▹ ${prefix}getmusic
│▹ ${prefix}instagram <LinkIg>
│▹ ${prefix}facebook <LinkFb>
│─── ( ♻️ )  Random Menu
│▹ ${prefix}cecan
│▹ ${prefix}cogan
│▹ ${prefix}naruto
│▹ ${prefix}loli
│▹ ${prefix}waifu
│▹ ${prefix}husbu
│▹ ${prefix}yaoi
│─── ( 🔎 )  Search Menu
│▹ ${prefix}ytsearch <Pencarian>
│▹ ${prefix}pinterest <Querry>
│▹ ${prefix}jadwaltv <Querry>
│▹ ${prefix}brainly <Querry>
│▹ ${prefix}jadwaltv <Channel>
│─── ( 🎮 )Game & Fun Menu
│▹ ${prefix}tictactoe @tag
│▹ ${prefix}delttc
│▹ ${prefix}suit
│▹ ${prefix}slot
│▹ ${prefix}tebakgambar
│▹ ${prefix}apakah <Query>
│▹ ${prefix}kapankah <Query>
│▹ ${prefix}rate <Query>
│▹ ${prefix}gantecek <Nama>
│▹ ${prefix}cantikcek <Nama>
│▹ ${prefix}sangecek <Nama>
│▹ ${prefix}gaycek <Nama>
│▹ ${prefix}lesbicek <Nama>
│▹ ${prefix}gimana <Query>
│▹ ${prefix}bisakah <Query>
│▹ ${prefix}cekme
│▹ ${prefix}react <Emoji>
│───( 🛐 ) Islam Menu
│▹ ${prefix}listsurah
│▹ ${prefix}kisahnabi
│▹ ${prefix}jadwalsholat
│───( 🎨 ) TextPro
│▹ ${prefix}blackpink
│▹ ${prefix}greenneon
│▹ ${prefix}bokeh
│▹ ${prefix}advancedglow
│▹ ${prefix}futureneon
│▹ ${prefix}sandwriting
│▹ ${prefix}sandsummer
│▹ ${prefix}sandengraved
│▹ ${prefix}metaldark
│▹ ${prefix}neonlight
│▹ ${prefix}holographic
│▹ ${prefix}text1917
│▹ ${prefix}minion
│▹ ${prefix}deluxesilver
│▹ ${prefix}newyearcard
│▹ ${prefix}bloodfrosted
│▹ ${prefix}halloween
│▹ ${prefix}jokerlogo
│▹ ${prefix}fireworksparkle
│▹ ${prefix}natureleaves
│▹ ${prefix}toxic
│▹ ${prefix}strawberry
│▹ ${prefix}box3d
│▹ ${prefix}roadwarning
│▹ ${prefix}breakwall
│▹ ${prefix}icecold
│▹ ${prefix}luxury
│▹ ${prefix}cloud
│▹ ${prefix}summersand
│▹ ${prefix}horrorblood
│▹ ${prefix}thunder
│───( 📄 ) Random Text
│▹ ${prefix}pantun
│───( 🃏 ) Primbon Menu
│▹ ${prefix}nomorhoki
│▹ ${prefix}artimimpi
│▹ ${prefix}artinama
│▹ ${prefix}ramaljodoh
│▹ ${prefix}ramaljodohbali
│▹ ${prefix}suamiistri
│▹ ${prefix}ramalcinta
│▹ ${prefix}cocoknama
│▹ ${prefix}pasangan
│▹ ${prefix}jadiannikah
│▹ ${prefix}sifatusaha
│▹ ${prefix}rezeki
│▹ ${prefix}pekerjaan
│▹ ${prefix}nasib
│▹ ${prefix}penyakit
│▹ ${prefix}tarot
│▹ ${prefix}fengshui
│▹ ${prefix}haribaik
│▹ ${prefix}harisangar
│▹ ${prefix}harisial
│▹ ${prefix}nagahari
│▹ ${prefix}arahrezeki
│▹ ${prefix}peruntungan
│▹ ${prefix}weton
│▹ ${prefix}karakter
│▹ ${prefix}keberuntungan
│▹ ${prefix}memancing
│▹ ${prefix}masasubur
│▹ ${prefix}zodiak
│▹ ${prefix}shio
│───( 🏦 ) Payment & Bank
│▹ ${prefix}buylimit <Jumlah>
│▹ ${prefix}buyglimit <Jumlah>
│▹ ${prefix}transfer @tag <jumlah>
│▹ ${prefix}limit
│▹ ${prefix}balance
│▹ ${prefix}topbalance
│───( 👥 ) Group Menu*l
│▹ ${prefix}linkgrup
│▹ ${prefix}setppgrup
│▹ ${prefix}setnamegc
│▹ ${prefix}setdesc
│▹ ${prefix}group <Open/Close>
│▹ ${prefix}revoke
│▹ ${prefix}hidetag <Text>
│▹ ${prefix}kick <@tag>
│▹ ${prefix}add <@tag>  
│▹ ${prefix}antilink <on/off>
│───( 🧑🏻‍💻 ) Owner Menu
│> evalcode
│x evalcode-2
│$ executor
│▹ ${prefix}setppbot
│▹ ${prefix}exif
│▹ ${prefix}leave
│▹ ${prefix}addprem
│▹ ${prefix}delprem
│▹ ${prefix}broadcast
└───────「 DEFFBOTZ 」
𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼
∆Arasya
∆Febri
∆Dika Ardnt
  `
}