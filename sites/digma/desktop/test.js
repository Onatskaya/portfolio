/*function returnMin (num1, num2) {
	if (num1 > num2) {
		return num2;
	}
	else {
		return num1;
	}
}
console.log(returnMin(9, 3));
*/


function countChar (string, ch) {
	var counter = 0;
	for (var i = 0; i <= string.length; i++) {
		if (string.charAt(i) == ch) {
			counter +=1;
			return counter;
		}
	};
}

function countBs (string) {
	return countChar(string, "B");

}

countChar("Brandenburg", "B");
countChar("BrandenBurg", "B");

