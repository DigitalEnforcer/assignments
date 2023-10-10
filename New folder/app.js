const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const address = document.querySelector('#address').value;
  console.log(`Name: ${name}, Address: ${address}`);
});