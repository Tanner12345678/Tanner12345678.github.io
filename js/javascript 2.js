var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening, ';
} else if (hourNow > 12) {
	greeting = 'Good afternoon, ';
} else if (hourNow > 5) {
	greeting = 'Good morning, ';
} else if (hourNow > 0) {
	greeting = 'Hello, ';
}

var name = "user, ";
var message = "and welcome to my extremely basic website about Reticulated Pythons."; 

document.write('<p>' + greeting + name + message + '</p>');