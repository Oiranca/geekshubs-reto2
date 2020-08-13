let backet = document.getElementById("cesta");

let producto= document.getElementsByTagName('article');

for (let a=0; a<producto.length; a++){

  if (producto[a].id!=='cesta'){
    let attr=document.createAttribute ('draggable');
    attr.value='true';
    document.getElementById(producto[a].id).setAttributeNode(attr);
    document.getElementById(producto[a].id).addEventListener('click',
    ()=>{
      console.log (producto[a].id);
    });
  }
}
