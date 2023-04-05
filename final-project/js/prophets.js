const requestURL = 'final-project/product.js';


fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const fruits = jsonObject['fruits'];
    fruits.forEach(displayFruits);
  });

function displayFruits(fruit) {
  let card = document.createElement('section');
  let heading = document.createElement('h2');
  let name = document.createElement('p');
  let genus = document.createElement('p');

  let family = document.createElement('p');
  let nutritions = document.createElement('p');
  let id = document.createElement('p');
  let order = document.createElement('p');
  let image = document.createElement('img');

  heading.textContent = `${fruit.name} ${fruit.name}`;
  name.textContent = `Name: ${fruit.name}`;
  genus.textContent = `Genus: ${fruit.genus}`;

  family.textContent = `Family: ${fruit.family}`;
  nutritions.textContent = `Nutritions: ${fruit.nutritions}`;
  order.textContent = `Oreder: ${fruit.order}`;

  image.src = fruit.imageurl;
  image.alt = `${fruit.name} ${fruit.name} - ${fruit.order}`;

  card.appendChild(heading);
  card.appendChild(id);
  card.appendChild(image);
  card.appendChild(order);
  card.appendChild(genus);
  card.appendChild(family);
  card.appendChild(nutritions);

  
  card.appendChild(length);
 
  


  document.querySelector('.cards').appendChild(card);
}


//dates
const yearDisplay = document.querySelector('footer h2');
var today = new Date();
var todayYear = today.getFullYear();
//copyright
yearDisplay.innerHTML = `&copy; ${todayYear} - Tumwesige Nelson`;
//modDate
const modDateDisplay = document.getElementById('modDate');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);