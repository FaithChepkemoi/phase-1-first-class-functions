// Function that takes a callback and calls it
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Example callback function
function sayHello() {
    console.log("Hello, world!");
}

// Function that returns a named function
function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
        console.log("This is a named function!");
    }
    
    return namedFunction; // Return the named function
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is an anonymous function!");
    };
}

