// * Choose a naming convention and stick to it

// In TypeScript, you can use any of the following naming conventions:
// - Use PascalCase for classes, types, and interfaces
// - Use UPPER_CASE for constants
// - Use camelCase for all other types

const EmployeeName = "John Doe"; // ! PascalCase is for classes
const created_at = new Date(); // ! snake_case is not a convention in TypeScript
const workingDays = 5; // ! CONSTANTS SHOULD SCREAM

function Calculate_payroll() {
	// ! oh lord... Hell_case
}
class employee {
	// ! type definition should be PascalCase
}
interface IPayable {
	// ! an interface is not a class; find a good name
	pay(): void;
}
