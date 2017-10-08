var t = 0;
var out = "";

for (var i = 0; i < 1000; i++) {
	t = i;
	if ( i % 2 == 0 && i % 5 == 0 ) { t = "FB"; }
	else if ( i % 2 == 0 ) { t = "Fizz"; }
	else if ( i % 5 == 0 ) { t = "Buzz"; }

	out += t + "\t";
}

console.log(out);
