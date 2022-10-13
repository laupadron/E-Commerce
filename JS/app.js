const shopItems = document.querySelector('.shop-items');
const buttonAdd = document.querySelectorAll(' .btn-one');
const cartsItems =document.querySelectorAll('.section');
const allItemShop = document.querySelectorAll('.shop-items')
//arreglo de items del carrito
let arrayItems =[]; 
//local storage para que persista
//¿¿¡¡¡¡ PROBLEMAS CON LAS IMAGENES!!!
arrayItems = JSON.parse(localStorage.getItem("items"));


//evento click de los botones del carrito
buttonAdd.forEach(addItemShop =>{
 addItemShop .addEventListener('click', addToCart );
 console.log();
});

//funcion para agregar item con click
function addToCart(event){
 const boton =event.target;
 //variable donde guardo la seccion mas cercana al click
 const itemComplete = boton.closest ('.section');
 //captura de elementos de los items
 const itemTitle= itemComplete.querySelector('.h3').textContent;
 const itemPrice =itemComplete.querySelector('.price').textContent;
 const itemImage = itemComplete.querySelector('.item-img').src
 
 // llamada de funcion de agregar al carrito
addItemToCart(itemTitle, itemPrice,itemImage);
}


//funcion para agregaral carrito
function addItemToCart(itemTitle, itemPrice,itemImage){
 
 //local storage para captura de datos
localStorage.setItem("items", JSON.stringify(arrayItems))

//crear elemento div
 const itemCartRow = document.createElement('div');
 
 const cartContent = 
 `<div class="item">
   <img class="img"src=${itemImage} alt="">
   <h4 class="title">${itemTitle}</h4>
   <p class="price-item">${itemPrice}</p>
   <form class="cant">
    <label for="input">Cant</label>
    <input class="input" type="number" value="1" >
   </form>
   <button class="aside-btn">X</button>
  </div>`;
 //push de items al array 
 arrayItems.push({itemTitle,itemPrice });
  
 //pintar en html
 itemCartRow.innerHTML = cartContent;
 shopItems.append(itemCartRow);
 
 //click de boton para delete
 itemCartRow.querySelector('.aside-btn').addEventListener('click', deleteItem);
 //llamada de funcion de suma de items
 totalCart();
}



function totalCart(){
 let total=0;
 const totalCart =document.querySelector('.total-cart');
 const itemsShop = document.querySelectorAll('.item');
 
 itemsShop.forEach((element)=>{
  const cartPrice = element.querySelector('.price-item');
  //convierto a numero para sumar
  const itemPrice = Number(cartPrice.textContent.replace('$',''));
  
  const cantItems = element.querySelector('.input');
  
  const itemCant = Number(cantItems.value);
  
  //¡¿¿¿por que no me multiplica?? ver luego
  total+= itemPrice*itemCant;
 
 });
 //pintar total 
 totalCart.innerHTML= `$ ${total}`
}

//función para delete item
function deleteItem(element){
 const clicked = element.target
 clicked.closest('.item').remove();
 //¡¿¿como pongo en 000 el total??
 totalCart();
}