class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;   
    }   
}
let greeter = new Greeter("world"); // Create an instance of the Greeter class with the message "world"
console.log(greeter.greet()); // Output: Hello, world