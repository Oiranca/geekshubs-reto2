
let total = 0;

const backet = document.getElementById("cesta");
const producto = document.getElementsByClassName('stock');

for (let items of producto) {
  let imagenes = items.getElementsByTagName('img');

  for (let img of imagenes) {
    document.getElementById(img.id).setAttribute('draggable', 'true');

    document.getElementById(img.id).addEventListener('dragstart', (e) => {
       
      
      let price = items.querySelector("p.price").textContent;
  
      total = Number(price.replace("€", "")) + total;
  
      document.getElementById("total").innerText = (total);
  
      let imagen = items.querySelector('img');
  
  
    })

  };

 

  



};



