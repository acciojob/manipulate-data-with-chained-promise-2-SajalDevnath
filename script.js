// Function that returns a promise resolving with an array after 3 seconds
function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to handle the promise chaining and update the DOM
function manipulateAndDisplayData() {
  getArray()
    .then((array) => {
      // Filter out odd numbers and display them
      return new Promise((resolve) => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        setTimeout(() => {
          document.getElementById('output').textContent = `Even numbers: ${evenNumbers.join(', ')}`;
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Multiply even numbers by 2 and display them
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = evenNumbers.map(num => num * 2);
          document.getElementById('output').textContent = `Multiplied even numbers: ${multiplied.join(', ')}`;
          resolve();
        }, 2000);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Call the function to start the process
manipulateAndDisplayData();
