(function() {
		var web = {
			message: 'MORE PYTHON FACTS AVAIABLE FOR ',
			cost: 9.99,
			discount: 1,
			offerPrice: function() {
				var offerRate = this.siteRate * ((100 - this.discount) / 100);
				return offerRate;
				}
			}
		
		var siteRate, specialRate;
		
		siteMessage = document.getElementById('siteMessage');
		siteRate = document.getElementById('siteRate');
		specialRate = document.getElementById('specialRate');
		
		siteMessage.textContent = web.message;
		siteRate.textContent = '$' + web.cost.toFixed(2);
		specialRate.textContent = '$' + web.offerPrice();
		
		var expiryMsg;
		var today;
		var elEnds;
		
		function offerExpires(today) {
			var weekFromToday, day, date, month, year, dayNames, monthNames;
			
			weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
			
			dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			
			monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			
			day = dayNames[weekFromToday.getDay()];
			date = weekFromToday.getDate();
			month = monthNames[weekFromToday.getMonth()];
			year = weekFromToday.getFullYear();
			
			expiryMsg = "(LIMITED TIME OFFER EXPIRES ";
			expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
			return expiryMsg;
		}
		
		today = new Date();
		elEnds = document.getElementById('offerEnds');
		function updateMessage() {
			elEnds = document.getElementById('offerEnds');
		elEnds.textContent = web.message;
		}
		updateMessage();
}());

//function updateMessage() {
	//var el = document.getElementById('message');
	//el.textContent = msg;
//}
//updateMessage(); 




