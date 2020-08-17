
let priceElement = 0;
let count = 0;
let total = 0;
let imagen = new Map();

const backet = document.getElementById("cesta");
let imagenes = document.getElementsByTagName('img');

for (let img of imagenes) {

  if (img.id != 'backetShop') {

    document.getElementById(img.id).setAttribute('draggable', 'true')

    document.getElementById(img.id).addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text', e.target.id);


    });

  } else {
    document.getElementById(img.id).setAttribute('draggable', 'false');
  };



};


backet.addEventListener('dragover', (e) => {
  e.preventDefault();
});

backet.addEventListener('drop', (e) => {
  let price;
  e.preventDefault();
  let parent = document.getElementById(e.dataTransfer.getData('text')).parentNode.id;
  price = document.getElementById(parent).querySelector("p.price").textContent;
  total = Number(price.replace("€", "")) + total;
  document.getElementById("total").innerText = (total+'€');

})





