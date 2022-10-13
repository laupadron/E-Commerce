const shopItems = document.querySelector('.shop-items');
const buttonAdd = document.querySelectorAll(' .btn-one');
const cartsItems =document.querySelectorAll('.section');
const allItemShop = document.querySelectorAll('.shop-items')

let arrayItems =[];
arrayItems = JSON.parse(localStorage.getItem("items"));
addItemToCart();












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
 
 
 
 addItemToCart(itemTitle, itemPrice,itemImage,);
 
 
}



function addItemToCart(itemTitle, itemPrice,itemImage){
 
 arrayItems.push({itemImage,itemTitle,itemPrice});

 localStorage.setItem("items", JSON.stringify(arrayItems));
 
//const titleItem= document.querySelector('.h3').textContent;
 //console.log(titleItem)
/*for(let i=0;i<byTitle.length;i++){
 if(byTitle[i].innerText=== itemTitle){
  console.log(byTitle[i].innerText)
 }
}*/


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
 
 itemCartRow.querySelector('.aside-btn').addEventListener('click', deleteItem);
  totalCart();
}

function totalCart(){
 let total=0;
 const totalCart =document.querySelector('.total-cart');
 const itemsShop = document.querySelectorAll('.item');
 
 itemsShop.forEach((element)=>{
  const cartPrice = element.querySelector('.price-item');
  const itemPrice = Number(cartPrice.textContent.replace('$',''));
  
  const cantItems = element.querySelector('.input');
  
  const itemCant = Number(cantItems.value);
  

  total+= itemPrice*itemCant;
 
 });
 totalCart.innerHTML= `$ ${total}`
}

function deleteItem(element){
 const clicked = element.target
 clicked.closest('.item').remove();
 totalCart();
}