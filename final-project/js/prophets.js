const requestURL = 'https://nelsnewton.github.io/wdd230/final-project/product.json';


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