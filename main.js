let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

const container = document.getElementById('number-container');

data.map(number => {
  const element = document.createElement('div');
  element.textContent = number;
  element.style.fontSize= '30px';
  element.style.display = 'flex';
  element.style.justifyContent = 'space-around';
  element.style.alignItems = 'center';
  element.style.margin = '30px';
  element.style.color = 'white';

  if (number > 50) {
    element.style.backgroundColor = 'green';
  } else {
    element.style.backgroundColor = 'red';
  }
  
  container.appendChild(element);
});
