/**
Version modificada de rainbow.js para poner otros colores, creditos a el/los creadores de rainbow.js
 */

 exports.commands = {
        
	pinkhelp: 'raincolors',
        pinkiehelp: 'raincolors',
        rainhelp: 'raincolors',
        rainbowhelp: 'raincolors',
        colors: 'raincolors',
        	raincolors: function () {
		if (!this.canBroadcast()) return false;
		this.sendReplyBox(
			"<big><b>Rain Colors</b></big><br /><br />" +
			"/pinkie, /pink o /p (mensaje) para cambiar el color de tu usuario a rosa en un mensaje<br />" +
			"/rainbow, /rain o /r (mensaje) para cambiar el color de tu usuario a arcoiris en un mensaje<br />" +
			"Creditos a <b>CelestiaPrincess</b> por reinventar el plugin<br />"
		);
	},
        
  r: 'rainbow',      
  rain: 'rainbow',
  rainbow: function(target, room, user){
          if (user.can('broadcast', null, room)) {
                var colors = ['#ED1C24', '#F26522', '#F7941D', '#F0D200', '#8DC73F', '#39B54A', '#00A651', '#00A99D', '#00AEEF', '#0072BC', '#0054A6', '#2E3192', '#662D91', '#92278F', '#EC008C', '#ED145B'];
                if(!target) return this.sendReply('/rainbow message');
                       var userColor = '',
                        currentDate = new Date(),
                        randomNumber = '';
                        for(var x = 0; x < user.name.length; x++){
                                randomNumber = Math.floor(Math.random() * colors.length);
                                if(user.name.substring(x, x + 1) !== undefined){
                                        userColor += '<font color="' + colors[randomNumber] + '">' + user.name.substring(x, x + 1) + '</font>';
                                } else {
                                        userColor += '<font color="' + colors[randomNumber] + '">:</font>';
                                }
                        }
                        if(target.indexOf('/me') > -1) {
                                room.add('|raw|<small><i>' + user.group + '</small><b>' + userColor + '</b>' + Tools.escapeHTML(target.substring(3, target.length)) + '</i>');
                        } else {
                                room.add('|raw|<small>' + user.group + '</small><b>' + userColor + '</b>: ' + target);
                        }
          }
          else return this.errorReply('Necesitas ser minimo voiced para usar este comando.');
  },
  p: 'pinkie',      
  pink: 'pinkie',
  pinkie: function(target, room, user){
          if (user.can('broadcast', null, room)) {
                var colors = ['#EDACEC', '#DEAAEC', '#DAAEEA', '#eebaea'];
                if(!target) return this.sendReply('/pinkie mensaje');
                       var userColor = '',
                        currentDate = new Date(),
                        randomNumber = '';
                        for(var x = 0; x < user.name.length; x++){
                                randomNumber = Math.floor(Math.random() * colors.length);
                                if(user.name.substring(x, x + 1) !== undefined){
                                        userColor += '<font color="' + colors[randomNumber] + '">' + user.name.substring(x, x + 1) + '</font>';
                                } else {
                                        userColor += '<font color="' + colors[randomNumber] + '">:</font>';
                                }
                        }
                        if(target.indexOf('/me') > -1) {
                                room.add('|raw|<small><i>' + user.group + '</small><b>' + userColor + '</b>' + Tools.escapeHTML(target.substring(3, target.length)) + '</i>');
                        } else {
                                room.add('|raw|<small>' + user.group + '</small><b>' + userColor + '</b>: ' + target);
                        }
          }
          else return this.errorReply('Necesitas ser minimo voiced para usar este comando.');
  },
        };
