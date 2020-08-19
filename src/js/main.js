
let priceElement = 0;
let count = 0;
let total = 0;
let imagen = new Map();
const basket = document.getElementById("cesta");
let imagenes = document.getElementsByTagName('img');
let sidebar = document.getElementById('basketSummary');
let buttonSidebar = document.getElementById('buttonSidebar');



for (let img of imagenes) {

  if (img.id != 'basketShop') {

    document.getElementById(img.id).setAttribute('draggable', 'true')

    document.getElementById(img.id).addEventListener('dragstart', (e) => {
      count = 0;
      e.dataTransfer.setData('text', e.target.id);

    });

  } else {
    document.getElementById(img.id).setAttribute('draggable', 'false');
  };

};


basket.addEventListener('dragover', (e) => {
  e.preventDefault();
});

basket.addEventListener('drop', (e) => {
  const idElement = e.dataTransfer.getData('text');
  let countItemsShops;
  let price;
  let parent = document.getElementById(idElement).parentNode.id;
  let image = document.getElementById(idElement).src;
  e.preventDefault();
  count++;

  if (imagen.has(idElement)) {
    countItemsShops = imagen.get(idElement);
    count += countItemsShops;
    imagen.set(idElement, count);

  } else {
    imagen.set(idElement, count);
    countItemsShops = imagen.get(idElement);

  };

  let newArticle = document.createElement('article');
  newArticle.setAttribute('class', 'articleBasket');
  buttonSidebar.parentNode.insertBefore(newArticle, buttonSidebar);

  let findArticle = document.getElementsByClassName('articleBasket');

  for (let articleItems of findArticle) {
    console.log(articleItems.getElementsByTagName('img'));
  };


  let newElementImg = document.createElement('img');
  newElementImg.setAttribute('src', image);
  newElementImg.style.width = '4rem';
  newArticle.appendChild(newElementImg);

  let newDiv = document.createElement('div');
  newArticle.appendChild(newDiv);


  let newButtonPlus = document.createElement('button');
  newButtonPlus.setAttribute('type', 'button');
  newButtonPlus.setAttribute('id', 'plus');
  newButtonPlus.innerText = '+';
  newDiv.appendChild(newButtonPlus);

  let newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('class', 'inputBasket');
  newInput.setAttribute('value', count)
  newDiv.appendChild(newInput);

  let newButtonMinus = document.createElement('button');
  newButtonMinus.setAttribute('type', 'button');
  newButtonMinus.setAttribute('id', 'minus');
  newButtonMinus.innerText = '-';
  newDiv.appendChild(newButtonMinus);



  price = document.getElementById(parent).querySelector("p.price").textContent;
  total = Number(price.replace("€", "")) + total;
  document.getElementById("total").innerText = (total + '€');


});

basket.addEventListener('click', () => {
  sidebar.style.display = 'block';

});
buttonSidebar.addEventListener('click', () => {
  sidebar.style.display = 'none';

});




