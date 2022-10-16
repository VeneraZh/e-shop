'use strict';

class ProductList{
    constructor(container='.products'){
        this.container = container;        
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Dress', price: 2000, img: 'img\dress.jpg'},
            {id: 2, title: 'Neclace', price: 400, img: 'img\neclace.jpg'},
            {id: 3, title: 'Shoes', price: 1000, img: 'img\shoes.jpg'},
            {id: 4, title: 'Purse', price: 800, img: 'img\purse.jpg'},
        ];
    }
    getSum () {  
        let s = 0;
        this.goods.forEach(item  => {
            s += item.price;
        });
        console.log(s);

    }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}
class ProductItem{
    constructor(product,img ='https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class = "product">

           <h2 class="product_title">${this.title}</h2>
           <p class = "product_price">${this.price} $</p>
           <button class = "product_button">Купить</button>
           </div>`
    }
}
let list1 = new ProductList();
list1.getSum();

/*
* Класс Basket для всей корзины
* метод AddBasket добавляет товар в корзину
* метод CountBasketItem считает кол-во товаров
* метод TotalPriceBasketItem считает общую цену 
* метод DeleteBasketItem удаляет товар из корзины
* метод ChangeBasketItem изменяет кол-во товаров в корзине
* метод renderBasket выводит  верстку
*/

class Basket {
    constructor(container='.basket'){
        this.container = container;        
    }
    AddBasket() {

    }

    CountBasketItem (){

    }

    TotalPriceBasketItem (){
        
    }

    DeleteBasketItem (){

    }

    ChangeBasketItem() {

    }   

    renderBasket(){

    }

}

/*
* Класс BasketItem для элемента товара
* метод renderBasketItem выводит верстку
*/
class BasketItem {
    renderBasketItem() {

    }
}





    

   
        
    


