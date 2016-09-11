/*
* emoticons.js 
*
* Creditos: CreaturePhil (Creador)
*/

var color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

var emotes = {
        ':fluttershy:': 'http://i.imgur.com/Q56mz3L.gif',
	':rainbowdash:': 'http://i.imgur.com/V6rpD1f.gif',
	':rarity:': 'http://i.imgur.com/p8DP65c.gif',
	'oshet': 'http://i.imgur.com/973LjcS.gif',
	':jejeje:': 'http://i.imgur.com/gWtOs04.gif',
	':spoopy:': 'http://i.imgur.com/yuDSicN.gif',
	':hug:': 'http://i.imgur.com/JpgwVRL.gif',
	':defeated:': 'http://i.imgur.com/wVRUyli.gif',
	'whathe': 'http://i.imgur.com/J62J2EC.gif',
	'celenny': 'http://i.imgur.com/QGeRmLk.gif',
	':yes:': 'http://i.imgur.com/NmzYjfE.gif',
	'dontlietome': 'http://i.imgur.com/afl2ZrU.gif',
	':mmm:': 'http://i.imgur.com/TzSz840.gif',
	':okay:': 'http://i.imgur.com/cLdAFmE.gif',
	'comfo': 'http://i.imgur.com/mXcuPJF.gif',
	':moar:': 'http://i.imgur.com/4ehFLbd.gif',
	':ah:': 'http://i.imgur.com/ZEvYXQW.jpg',
	':lalala:': 'http://i.imgur.com/Ahygo5c.gif',
	':nomnom:': 'http://i.imgur.com/qiiw0rg.gif',
	'huzaa': 'http://i.imgur.com/QM9gOIw.gif',
	'filososweetie': 'http://i.imgur.com/4yYfCnR.png',
	':terr:': 'http://i.imgur.com/OsshTAF.gif',
	':placer:': 'http://i.imgur.com/sAsPZli.png',
	'pmbusy': 'http://i.imgur.com/XaBNyJy.gif',
	'noentiendo': 'http://i.imgur.com/na3ILqb.gif',
	'kicknorris': 'http://i.imgur.com/aiQ4qsC.gif',
	':amsi:': 'http://i.imgur.com/xkS1mBe.gif',
	':oh:': 'http://i.imgur.com/sTB9d8Y.gif',
	':tension:': 'http://i.imgur.com/kGSbTdh.gif',
	':sorry:': 'http://i.imgur.com/NmTVQOE.gif',
	'ravechu': 'http://i.imgur.com/evQ7ig6.gif',
	'nekokawaii':'http://i.imgur.com/SIcdaoY.gif',
	':byebye:':'http://i.imgur.com/FV5H4ES.gif',
	'ponyflip':'http://i.imgur.com/n0gzkPT.png',
	':7u7:': 'http://i.imgur.com/gPpWWVO.jpg',
	'yonofui':'http://i.imgur.com/Cm3XSLE.png',
	':umad?:': 'http://i.imgur.com/tHON8LQ.jpg',
	'banishmoon': 'http://i.imgur.com/R9BCKjK.jpg',
	'banishsun': 'http://i.imgur.com/PsiroeP.jpg',
	'facepalm': 'http://i.imgur.com/S69PFuc.png',
	':pew:': 'http://i.imgur.com/Gcx2QTn.gif',
	'baneverypony': 'http://i.imgur.com/I6y8T0E.png',
	':why:': 'http://i.imgur.com/xz1WLKS.png',
	':ditto:': 'http://i.imgur.com/puHrixp.gif',
	'raptordance': 'http://i.imgur.com/ckDGK5c.gif',
	'celestialdance': 'http://i.imgur.com/SqRzBps.gif',
	'moondance': 'http://i.imgur.com/jwF7pDv.gif',
	':20:': 'http://i.imgur.com/Jv6zyee.gif',
	'derpdance': 'http://i.imgur.com/zYI7jzd.gif',
	'discordance': 'http://i.imgur.com/2CKkVTI.gif',
	':ouch:': 'http://i.imgur.com/myMRma5.gif',
	':nuzzle:': 'http://i.imgur.com/Wjaxv8K.gif',
	':wtf:': 'http://i.imgur.com/xT2jEw8.gif',
	':lick:': 'http://i.imgur.com/jqBaMxi.gif',
	'twisheen': 'http://i.imgur.com/z0H7Cnh.gif',
        ':twilightsparkle:': 'http://i.imgur.com/UizjLrs.gif',
	':applejack:': 'http://i.imgur.com/JslmewM.gif',
	':pinkiepie:': 'http://i.imgur.com/ukc8qTS.gif',
        ':jajaja:': 'http://i.imgur.com/eLn5vnQ.gif',
        'slowdance': 'http://i.imgur.com/rOPqRE6.gif',
	'durpdash': 'http://i.imgur.com/oMKzjv0.jpg',
	':lenguita:': 'http://i.imgur.com/2Y507Ab.gif',
	'Seriously?': 'http://i.imgur.com/8JbXlhM.gif',
	'idontknow': 'http://i.imgur.com/uoRd7k2.gif',
	':claps:': 'http://i.imgur.com/S0CyMEJ.gif',
	':bipolar:': 'http://i.imgur.com/uUX021u.gif',
	':psyco:': 'http://i.imgur.com/3LiDbBH.gif',
	'flutterage': 'http://i.imgur.com/zDYiQx0.png',
	':frustracion:': 'http://i.imgur.com/SzTunU4.png',
	':triggered:': 'http://i.imgur.com/HfCU7GR.gif',
	':wave:':'http://i.imgur.com/DkmWq76.gif',
	'omgno': 'http://i.imgur.com/0inJnh4.gif',
	'fuckno': 'http://i.imgur.com/G3NlYWR.gif',
	'justasplaned': 'http://i.imgur.com/zqmIVVn.png',
	':oo:': 'http://i.imgur.com/kibTBO0.png',
	':ponys:': 'http://i.imgur.com/M2dxaE2.gif',
	':scot:': 'http://i.imgur.com/vJr4DKN.gif',
	'motherof': 'http://i.imgur.com/7TqW6HY.gif',
	':hehehe:': 'http://i.imgur.com/a6aCt5w.gif',
	':flow:': 'http://i.imgur.com/BaqR70d.jpg',
	':swag:': 'http://i.imgur.com/E8fu47s.png',
	':cool:': 'http://i.imgur.com/qw7wrnd.png',
	'applebed': 'http://i.imgur.com/R9mWJv1.jpg',
	':tired:': 'http://i.imgur.com/nq5UdK3.png',
	':khe:': 'http://i.imgur.com/X1XbSHr.png',
	':nn:': 'http://i.imgur.com/CZznjoa.jpg',
	'goodmorning': 'http://i.imgur.com/pFa8Sdc.png',
	':eww:': 'http://i.imgur.com/TSQQHqA.png',
	'cadenceap': 'http://i.imgur.com/y63ADoF.png',
	'celestiaap': 'http://i.imgur.com/7qp05oS.png',
	'lunaap': 'http://i.imgur.com/E67iI9M.png',
	'molestiaap': 'http://i.imgur.com/wAf2FeY.png',
	'rainbowap': 'http://i.imgur.com/DvDY4ZV.png',
	':scared:': 'http://i.imgur.com/OlbECNd.gif',
	':hum:': 'http://i.imgur.com/cRdF1JJ.gif',
	'oiezy': 'http://i.imgur.com/Kah3twU.png',
	':yandere:': 'http://i.imgur.com/L1l4ToA.jpg',
	':beso:': 'http://i.imgur.com/accZgJ9.gif',
	':nwn:': 'http://i.imgur.com/TTyFDwj.gif',
	':a.e:': 'http://i.imgur.com/bJHFpKt.gif',
	':n3n:': 'http://i.imgur.com/wfvgBfp.png',
	':ovo:': 'http://i.imgur.com/1YazKtK.gif',
	':wot:': 'http://i.imgur.com/szKVmbh.png',
	':waaa:': 'http://i.imgur.com/LNDSvBD.gif',
	'applecry': 'http://i.imgur.com/xEkczlv.gif',
	'anadieleimporta': 'http://i.imgur.com/sDO85s4.jpg',
	':celebrate:': 'http://i.imgur.com/j5Ob4T1.gif',
	':smile:': 'http://i.imgur.com/1Zvzdd0.gif',
	':aiuda:': 'http://i.imgur.com/K3QlLDH.gif',
	':nonono:': 'http://i.imgur.com/T4MfQeu.gif',
	':jumps:': 'http://i.imgur.com/c5cQEEA.gif',
	':nope:': 'http://i.imgur.com/fdrKgty.gif',
	':sleep:': 'http://i.imgur.com/itEG4qR.gif',
	':etto:': 'http://i.imgur.com/xDWW0Z6.gif',
	':jijiji:': 'http://i.imgur.com/qQKWlgL.gif',
	':plis:': 'http://i.imgur.com/xJB9aBE.gif',
	':buuu:': 'http://i.imgur.com/QZqmFlP.gif',
	':crazy:': 'http://i.imgur.com/aEm9OSb.gif',
	'quierepelea?': 'http://i.imgur.com/MJPZjtB.gif',
	'feelsangry': 'http://i.imgur.com/SdVeXXB.gif',
	'feelssick': 'http://i.imgur.com/vNMGLTu.gif',
	'feelssad': 'http://i.imgur.com/SPXdiXc.gif',
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'kappa': 'http://i.imgur.com/SIGOFd9.png',
	':pacman:': 'http://i.imgur.com/fmEOv9b.png',
	'Sanic': 'http://i.imgur.com/Y6etmna.png'
};

var emotesKeys = Object.keys(emotes);
var patterns = [];
var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (var i in emotes) {
	if (emotes.hasOwnProperty(i)) {
		patterns.push('(' + i.replace(metachars, '\\$&') + ')');
	}
}
var patternRegex = new RegExp(patterns.join('|'), 'g');

/**
 * Parse emoticons in message.
 *
 * @param {String} message
 * @param {Object} room
 * @param {Object} user
 * @param {Boolean} pm - returns a string if it is in private messages
 * @returns {Boolean|String}
 */
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	var match = false;
	var len = emotesKeys.length;


	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = message.replace(patternRegex, function (match) {
		var emote = emotes[match];
		return typeof emote === 'string' ? '<img src="' + emote + '" title="' + match + '"/>' : match;
	});

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	var group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	var style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
 * Create a two column table listing emoticons.
 *
 * @return {String} emotes table
 */
function create_table() {
	var emotes_name = Object.keys(emotes);
	var emotes_list = [];
	var emotes_group_list = [];
	var len = emotes_name.length;

	for (var i = 0; i < len; i++) {
		emotes_list.push("<td>" +
			"<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' />" +
			emotes_name[i] + "</td>");
	}

	var emotes_list_right = emotes_list.splice(len / 2, len / 2);

	for (var i = 0; i < len / 2; i++) {
		var emote1 = emotes_list[i],
			emote2 = emotes_list_right[i];
		if (emote2) {
			emotes_group_list.push("<tr>" + emote1 + emote2 + "</tr>");
		} else {
			emotes_group_list.push("<tr>" + emote1 + "</tr>");
		}
	}

	return "<div class='infobox'><div class = 'broadcast-blue'><center><b><u>Lista de Emoticons</u></b></center>" + "<div class='infobox-limited'><table cellspacing='0' cellpadding='5' width='100%'>" + "<tbody>" + emotes_group_list.join("") + "</tbody>" + "</table></div></div>";
}

var emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	onofcaritas: 'toggleemoticons',
	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>las caritas han sido desactivadas!</b><br />No se podran utilizar emoticones hasta nuevo aviso.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-green\"><b>Las caritas han sido activadas!</b><br />Ya se pueden usar emoticones.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.canBroadcast()) return;
		var rng = Math.floor(Math.random() * emotesKeys.length);
		var randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + " />");
	},
	randemotehelp: ["/randemote - Get a random emote."]
};
