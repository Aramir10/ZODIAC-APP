
var eroor = "FATAL ERROR"

var signs = [
	'capricorn',
  'aquarious',
	'pisces',
	'aries',
	'taurus',
	'gemini',
	'cancer',
	'leo',
	'virgo',
	'libra',
	'scorpio',
	'saggittarius'

];

var enterBday = document.getElementById("date");



enterBday = new Date(enterBday);
var month = enterBday.getMonth();
var day = enterBday.getDate();


if ((month == 0 && day <=20) || (month == 11 && day <= 22)){

	alert(signs[0])

}else if ((month == 0 && day >= 21) || (month == 1 && day <= 18 )) {
	alert(signs[1])

}else if ((month == 1 && day >= 19) || (month == 2 && day <= 20 )) {
	alert(signs[2])

}else if ((month == 2 && day >= 21) || (month == 3 && day<= 20 )) {
	alert(signs[3])

}else if ((month == 3 && day >= 21) || (month == 4 && day <= 20 )) {
	alert(signs[4])

}else if ((month == 4 && day >= 22) || (month == 5 && day<= 20 )) {
	alert(signs[5])

}else if ((month == 5 && day >= 23) || (month == 6 && day<= 20 )) {
	alert(signs[6])

}else if ((month == 6 && day >= 24) || (month == 7 && day<= 22 )) {
	alert(signs[7])

}else if ((month == 7 && day >= 24) || (month == 8 && day <= 23 )) {
	alert(signs[8])
}else if ((month == 8 && day >= 24) || (month == 9 && day <= 23 )) {
	alert(signs[9])

}else if ((month == 9 && day >= 23) || (month == 10 && day <= 22 )) {
	alert(signs[10])

}else if ((month == 10 && day >= 21) || (month == 11 && day <= 21 )) {
	alert(signs[11])
}
else{
	alert (eroor);
}
