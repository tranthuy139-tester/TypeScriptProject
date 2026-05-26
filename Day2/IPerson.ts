// Interface in TypeScript
interface IPerson {
    firstname: string;
    lastname: string;
    getFullName(): string;  
}

// Define an object that implements the IPerson interface
let person: IPerson = {
    firstname: "John",
    lastname: "Doe",    
    getFullName(): string {
        return this.firstname + " " + this.lastname;
    }           
};

// Call the getFullName method and log the result
console.log(person.getFullName()); // Output: John Doe         