"use strict";
// Define an object that implements the IPerson interface
let obj = {
    firstname: "John",
    lastname: "Doe",
    getFullName() {
        return this.firstname + " " + this.lastname;
    }
};
// Call the getFullName method and log the result
console.log(obj.getFullName()); // Output: John Doe         
