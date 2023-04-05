
const requestURL = 'https://nelsnewton.github.io/wdd230/chamber/data.json';
const companies = document.querySelector('.fruits');

  function displayfruits(fruit) {
    // Creating elements to add to the document and display
    let section = document.createElement('section');
    let name = document.createElement('h1');
    let genus = document.createElement('h2');
    let logo = document.createElement('img');
    let id = document.createElement('h3');
    let family = document.createElement('h4');
    let order = document.createElement('a');
    let nutritions = document.createElement('h5');


    logo.setAttribute('src',fruit.imageurl);
    logo.setAttribute('alt', fruit.name);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('title', fruit.name);
                                                     
    //site.setAttribute('href', company.site);
    //site.setAttribute('target', 'blank');
  
    name.textContent = fruit.name;
    genus.textContent = fruit.genus;
    id.textContent = fruit.id;
    family.textContent = fruit.family;
    order.textContent = fruit.order;
    nutritions.textContent = fruit.nutritions;

    section.appendChild(name);
    section.appendChild(genus);
    section.appendChild(logo);
    section.appendChild(id);
    section.appendChild(family);
    section.appendChild(order);
    section.appendChild(nutritions)

    
    fruits.appendChild(section);
    
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const comp = jsonObject['fruits'];
    comp.forEach(displayfruits);
  });  


