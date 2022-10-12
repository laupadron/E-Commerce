const shopItems = document.querySelector('.shop-items');
const buttonAdd = document.querySelectorAll(' .btn-one');
const cartsItems =document.querySelectorAll('.section');







buttonAdd.forEach(addItemShop =>{
 addItemShop .addEventListener('click', addToCart );
 console.log();
});

function addToCart(event){
 const boton =event.target;
 const itemComplete = boton.closest ('.section');
 
 const itemTitle= itemComplete.querySelector('.h3').textContent;
 const itemPrice =itemComplete.querySelector('.price').textContent;
 const itemImage = itemComplete.querySelector('.item-img').src;
 const itemCant = itemComplete.querySelector('.input').value
 
 addItemToCart(itemTitle, itemPrice,itemImage,itemCant);
}

function addItemToCart(itemTitle, itemPrice,itemImage){
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
 itemCartRow.innerHTML = cartContent;
 shopItems.append(itemCartRow);
 totalCart();
  ;
}

function totalCart(){
 let total=0;
 const totalCart =document.querySelector('.total-cart');
 const itemsShop = document.querySelectorAll('.item');
 
 itemsShop.forEach((element)=>{
  const cartPrice = element.querySelector('.price-item');
  const itemPrice = Number(cartPrice.textContent.replace('$',''));
  
  const cantItems = element.querySelector('.input');
  console.log(cantItems)
  const itemCant = Number(cantItems.value);
  console.log(itemCant)

  total+= itemPrice*itemCant;
 
 });
 totalCart.innerHTML= `$ ${total}`
}
