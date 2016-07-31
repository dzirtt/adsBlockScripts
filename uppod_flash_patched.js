//	JavaScript API 2.0 for Uppod 1+
//  http://uppod.ru/js

// Events

function uppodEvent(playerID,event) {
	window.play = 0;
	switch(event){

		case 'init':

			break;

		case 'start':
			if (window.start && typeof interval_save_time != 'undefined') {
				clearInterval(interval_save_time);
			}
			window.start = true;
			break;

		case 'play':
			if (window.start){
				window.play++;
			}
			if (window.play == 1 && window.start){
				if (window.start){
					interval_save_time = setInterval(function(){
						saveTime();
					}, 120000);
				}
			}
			LocalStorage.setItem('accordion', true);

			var player = 'flash';
			if (uppodGet(player,'getpl') != ''){
				var serie = parseInt(uppodGet(player,'getpl'));
					season = parseInt(uppodGet(player,'get[folderId]'));
				$('.titles-file').html('Сезон: ' + season + ' - Серия: ' + serie);
			}
			break;

		case 'pause':
			window.play = 0;
			LocalStorage.removeItem('accordion');
			if (typeof interval_save_time != 'undefined')
				clearInterval(interval_save_time);
			break;

		case 'stop':
			if (typeof interval_save_time != 'undefined')
				clearInterval(interval_save_time);
			break;

		case 'seek':

			break;

		case 'loaded':

			break;

		case 'end':

			break;

		case 'download':

			break;

		case 'quality':
			break;

		case 'error':
			// $(".titles-file").html("");
			break;

		case 'ad_end':

			break;

		case 'pl':

			break;

		case 'volume':

			break;
	}

}

// Commands

function uppodSend(playerID,com,callback) {
	document.getElementById(playerID).sendToUppod(com);
}

// Requests

function uppodGet(playerID,com,callback) {
	return document.getElementById(playerID).getUppod(com);
}
