
const requestURL = 'https://nelsnewton.github.io/wdd230/chamber/data.json';
const companies = document.querySelector('.companies');
const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");

//displaying in a list and grid styles
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

function showGrid() {
	display.classList.add("grid");
	display.classList.remove("list");
}

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList); 

  function displayCompanies(company) {
    // Creating elements to add to the document
    let section = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('h3');
    let tel = document.createElement('h4');
    let site = document.createElement('a');


    logo.setAttribute('src',company.imageurl);
    logo.setAttribute('alt', company.name);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('title', company.name);
                                                     
    site.setAttribute('href', company.site);
    site.setAttribute('target', 'blank');
  
    name.textContent = company.name;
    address.textContent = company.address;
    tel.textContent = company.phone;
    site.textContent = company.site;

    section.appendChild(name);
    section.appendChild(logo);
    section.appendChild(address);
    section.appendChild(tel);
    section.appendChild(site);

    
    companies.appendChild(section);
    
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const comp = jsonObject['companies'];
    comp.forEach(displayCompanies);
  });  


