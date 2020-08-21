## **Índice**

1.[Descripción reto 2](#reto)

2.[Market Drag and Drop](#market)

<div id="reto"/>

# Reto 2. Dynamic Showcase 

○ Te presentamos este reto con el que pondrás practicar HTML5, CSS3 y JS ES6

Recrea un mostrador de alimentos dinámico con carrito de compra.

**Tecnologías :**

- HTML5
- CSS3
- JavaScript - ES6
- Git

**Extra:**

- Git - flow

**Funcionamiento:**

Se muestran una serie de elementos entendidos como productos. Con su precio individual correspondiente.

**Uso de Drag & Drop**

Debemos ser capaces de arrastrar (drag) y soltar la imagen del producto (drop) a la altura de un carrito de
compra. Esto sumará el valor del producto al total de la compra, que se mostrará en todo momento al usuario.

El diseño del mostrador y de sus productos corre libremente a tu cargo.

**Extra:**

Además de añadir productos, ¿podrías implementar funcionalidad para poder quitarlos del carrito?

**El proyecto se evaluará por:**

- Uso de Drag & Drop
- Calidad de código JS
- Código ES6
- Readme completo en Github

**Extra:**

- Uso de Git-Flow

<div id="market" />  

# Market Drag and Drop

Para poder realizar este reto, he usado display grid con una configuración de 6 colunas y 4 filas más un slidebar para poder ver el contenido de la cesta de la compra. Cuando arrastramos el producto a la cesta, lo podemos encontrar en el sidebar junto a la cantidad y a dos botones con los cuales podemos poner más cantidad o menos. Todo esto se refleja en la pantalla principal con la operación necesaria para saber el total de la cuenta generada.

### Arbol de directorio

```bash
.
├── README.md
└── src
    ├── img
    │   ├── cesta.png
    │   ├── logo.png
    │   └── stock
    │       ├── aguacate.png
    │       ├── cajero.png
    │       ├── cereza.png
    │       ├── cesta-de-la-compra.png
    │       ├── detergente.png
    │       ├── fresa.png
    │       ├── lechuga.png
    │       ├── lejia.png
    │       ├── limpiador-de-ventanas.png
    │       ├── manzana.png
    │       ├── pasta-dentifrica.png
    │       ├── platanos.png
    │       ├── tomate.png
    │       └── uvas.png
    ├── index.html
    ├── js
    │   └── main.js
    └── style
        └── styleIndex.css
 ```

