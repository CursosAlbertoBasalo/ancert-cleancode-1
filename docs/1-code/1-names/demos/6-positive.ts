// * Prefer positive names

const isNotEmpty = Math.random() > 0.5; // ! hasValue is more positive
// ! someone could do very bad things with this
if (!isNotEmpty) {
	console.log("do nothing");
} else {
	console.log("do something");
}
