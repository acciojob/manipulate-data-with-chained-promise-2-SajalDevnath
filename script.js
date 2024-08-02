function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function manipulateAndDisplayData() {
  getArray()
    .then((array) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = array.filter(num => num % 2 === 0);
          document.getElementById('output').textContent = `Even numbers: ${evenNumbers.join(', ')}`;
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {

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

manipulateAndDisplayData();
