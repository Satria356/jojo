/**
  * Edit features in './message/msg.js'
  * Contact me on WhatsApp wa.me/6281319944917
  * Follow : https://github.com/rtwone
  * Follow : https://github.com/GetSya
*/

//"use strict"; default mode
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useSingleFileAuthState,
	delay
} = require("@adiwajshing/baileys")
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment')
const chalk = require('chalk')
const logg = require('pino')
const clui = require('clui')
const { Spinner } = clui
const { serialize } = require("./lib/myfunc");
const { color, mylog, infolog } = require("./lib/color");
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let setting = JSON.parse(fs.readFileSync('./config.json'));
let session = `./${setting.sessionName}.json`
const { state, saveState } = useSingleFileAuthState(session)
const { groupResponse } = require('./message/group.js')

function _0x2943(_0x12e420,_0x504a3f){var _0x39851f=_0x3985();return _0x2943=function(_0x2943ce,_0x135cb8){_0x2943ce=_0x2943ce-0x1e9;var _0xc6790=_0x39851f[_0x2943ce];return _0xc6790;},_0x2943(_0x12e420,_0x504a3f);}(function(_0x189a90,_0x1ec7f4){var _0x29f92c=_0x2943,_0x537ebb=_0x189a90();while(!![]){try{var _0x31ae9a=parseInt(_0x29f92c(0x1f8))/0x1*(parseInt(_0x29f92c(0x1fc))/0x2)+parseInt(_0x29f92c(0x1f2))/0x3+-parseInt(_0x29f92c(0x1fe))/0x4+-parseInt(_0x29f92c(0x1ea))/0x5+parseInt(_0x29f92c(0x1ee))/0x6*(-parseInt(_0x29f92c(0x1ed))/0x7)+-parseInt(_0x29f92c(0x1eb))/0x8+parseInt(_0x29f92c(0x1ef))/0x9;if(_0x31ae9a===_0x1ec7f4)break;else _0x537ebb['push'](_0x537ebb['shift']());}catch(_0x358ee0){_0x537ebb['push'](_0x537ebb['shift']());}}}(_0x3985,0x5b215));function _0x3985(){var _0x995888=['1660863fudiVN','textSync','Message\x20Me\x20On\x20WhatsApp','[BASE\x20BY\x20ARASYA]','088213292687\x20(\x20Gopay/Pulsa\x20)','green','229055PhmgfT','log','white','+62\x20813-1994-4917','2FTvpEM','WhatsApp\x20Bot\x20Multi\x20Device','1195760qoqfAN','bold','DEFF-MD','Standard','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20:\x20','yellow','red','2779140mEKwnL','783288OWhvSa','Donate','161UnLhwK','110118CiUqlC','8688519hClJhI','default','Follow\x20Insta\x20Dev'];_0x3985=function(){return _0x995888;};return _0x3985();}function title(){var _0x1cf7b1=_0x2943;console['clear'](),console[_0x1cf7b1(0x1f9)](chalk[_0x1cf7b1(0x1ff)][_0x1cf7b1(0x1f7)](figlet[_0x1cf7b1(0x1f3)](_0x1cf7b1(0x200),{'font':_0x1cf7b1(0x201),'horizontalLayout':_0x1cf7b1(0x1f0),'verticalLayout':'default','width':0x50,'whitespaceBreak':![]}))),console['log'](chalk[_0x1cf7b1(0x204)](_0x1cf7b1(0x202)+chalk['yellow'](_0x1cf7b1(0x1f5))+'\x0a\x0a'+chalk[_0x1cf7b1(0x1e9)](_0x1cf7b1(0x200))+_0x1cf7b1(0x203)+chalk[_0x1cf7b1(0x1fa)](_0x1cf7b1(0x1fd))+'\x0a'+chalk[_0x1cf7b1(0x1e9)](_0x1cf7b1(0x1f1))+_0x1cf7b1(0x203)+chalk['white']('@deff.xyz')+'\x0a'+chalk['red'](_0x1cf7b1(0x1f4))+'\x20:\x20'+chalk[_0x1cf7b1(0x1fa)](_0x1cf7b1(0x1fb))+'\x0a'+chalk[_0x1cf7b1(0x1e9)](_0x1cf7b1(0x1ec))+_0x1cf7b1(0x203)+chalk[_0x1cf7b1(0x1fa)](_0x1cf7b1(0x1f6))+'\x0a'));}

/**
* Uncache if there is file change;
* @param {string} module Module name or path;
* @param {function} cb <optional> ;
*/
function nocache(module, cb = () => { }) {
	console.log(`Module ${module} sedang diperhatikan terhadap perubahan`) 
	fs.watchFile(require.resolve(module), async () => {
		await uncache(require.resolve(module))
		cb(module)
	})
}
/**
* Uncache a module
* @param {string} module Module name or path;
*/
function uncache(module = '.') {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(module)]
			resolve()
		} catch (e) {
			reject(e)
		}
	})
}

const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`))
const starting = new Spinner(chalk.cyan(` Preparing After Connect`))
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`))

const store = makeInMemoryStore({ logger: logg().child({ level: 'warn', stream: 'store' }) })

const connectToWhatsApp = async () => {
	const conn = makeWASocket({
            printQRInTerminal: true,
            logger: logg({ level: 'warn' }),
            auth: state,
            browser: ["DEFF-MD", "Safari", "3.0"]
        })
	title()
        store.bind(conn.ev)
	
	/* Auto Update */
	require('./message/help')
	require('./lib/myfunc')
	require('./message/msg')
	nocache('./message/help', module => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))
	nocache('./lib/myfunc', module => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))
	nocache('./message/msg', module => console.log(chalk.greenBright('[ WHATSAPP BOT ]  ') + time + chalk.cyanBright(` "${module}" Telah diupdate!`)))
	
	conn.multi = true
	conn.nopref = false
	conn.prefa = 'anjing'
	conn.ev.on('messages.upsert', async m => {
		if (!m.messages) return;
		var msg = m.messages[0]
		msg = serialize(conn, msg)
		msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0')
		require('./message/msg')(conn, msg, m, setting, store, )
	})

conn.ev.on('group-participants.update', async (update) =>{
   groupResponse(conn, update)
   console.log(update)
   })         
	
conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }               
	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect } = update
		if (connection === 'close') {
			status.stop()
			reconnect.stop()
			starting.stop()
			console.log(mylog('Server Ready ✓'))
			lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut 
			? connectToWhatsApp()
			: console.log(mylog('Wa web terlogout...'))
		}
	})
	conn.ev.on('creds.update', () => saveState)
	
	conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg })

	return conn
}

connectToWhatsApp()
.catch(err => console.log(err))