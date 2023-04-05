const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  let card = document.createElement('section');
  let heading = document.createElement('h2');
  let birthDate = document.createElement('p');
  let birthPlace = document.createElement('p');

  let death = document.createElement('p');
  let length = document.createElement('p');
  let order = document.createElement('p');
  let numofchildren = document.createElement('p');

  let image = document.createElement('img');

  heading.textContent = `${prophet.name} ${prophet.lastname}`;
  birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
  birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

  death.textContent = `death Date: ${prophet.death}`;
  length.textContent = `length: ${prophet.length}`;
  order.textContent = `No. ${prophet.order}`;
  numofchildren.textContent = `number of children: ${prophet.numofchildren}`;

  image.src = prophet.imageurl;
  image.alt = `${prophet.name} ${prophet.lastname} - ${prophet.order}`;

  card.appendChild(heading);
  card.appendChild(order);
  card.appendChild(image);
  card.appendChild(birthDate);
  card.appendChild(death);
  card.appendChild(birthPlace);
  card.appendChild(numofchildren);

  
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