// * Prefer business names over technical names

// ! too much technique
function getEmployeeArray(paramCompanyNameString: string) {
	return findInMongo(paramCompanyNameString);
}
// ! too little business
function findInMongo(searchTerm: string) {
	console.log("findInMongo", searchTerm);
}
