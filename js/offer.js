(function() {
		var site = {
			name: 'MORE PYTHON FACTS AVAIABLE FOR',
			cost: 10,
			discount: 10,
			offerPrice: function() {
				var offerRate = this.siteRate * ((100 - this.discount) / 100);
				return offerRate;
				}
			}
		
		var siteName, siteRate, specialRate;
		
		siteName = document.getElementById('siteName');
		siteRate = document.getElementById('siteRate');
		specialRate = document.getElementById('specialRate');
		
		siteName.textContent = site.name;
		siteRate.textContent = '$' + site.cost.toFixed(2);
		specialRate.textContent = '$' + site.offerPrice();
		
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
		elEnds.innerHEMLS = offerExpires(today);
}());




