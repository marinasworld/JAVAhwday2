class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 
    // Method to print person's info to the console
    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
 
    // Method to increment person's age
    addAge() {
        this.age++;
    }
}
 
// Create two people using the 'new' keyword
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
 
// Print both of their infos
person1.printInfo();
person2.printInfo();
 
// Increment one person's age by 3 years
person1.addAge();
person1.addAge();
person1.addAge();
 
// Print updated info for person1
person1.printInfo();


// ex: 2

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
};
 
// Function to display favorite food dishes
function displayFavoriteFoodDishes(person) {
    let output = ""; // Initialize an empty string to store the text output
    // Loop through each property of the person object
    for (let key in person) {
        output += `${key}:\n`; // Add a heading for the property
        // If the property value is an array, iterate through its elements
        if (Array.isArray(person[key])) {
            person[key].forEach(item => {
                output += `- ${item}\n`; // Add each element of the array as a list item
            });
        }
        // If the property value is a string, display it
        else if (typeof person[key] === 'string') {
            output += `${person[key]}\n`;
        }
        // If the property value is an array of objects, iterate through each object
        else if (Array.isArray(person[key])) {
            person[key].forEach(obj => {
                // Iterate through each property of the object and display its key-value pair
                for (let subKey in obj) {
                    output += `- ${subKey}: ${obj[subKey]}\n`;
                }
            });
        }
    }
    // Return the generated output string
    return output;
}
 
// Call the displayFavoriteFoodDishes function with the person3 object as an argument and log the result
console.log(displayFavoriteFoodDishes(person3));
 

// ex 3



async function fetchData() {
    try {
      // Make a GET request to the specified URL
      const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
     
      // Check if the response is successful
      if (!response.ok) {
        // If not, throw an error
        throw new Error('Network response was not ok');
      }
     
      // Parse the response body as JSON
      const data = await response.json();
     
      // Log the retrieved data to the console
      console.log(data);
    } catch (error) {
      // If any error occurs during the fetch operation, catch it here
      console.error('There was a problem with the fetch operation:', error);
    }
  }
   
  // Call the fetchData function to initiate the API request
  fetchData();


