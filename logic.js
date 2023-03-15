let customers=document.getElementById("customers");

let notification=document.getElementById("notification")
let cart;
if(localStorage.getItem('cart')==null){
    cart=[]

}
else{
    cart=JSON.parse(localStorage.getItem('cart'))
}

function notify(event){
    
    let target=event.target;
    if(target.classList.contains("notify")){
        let food =target.parentNode.parentNode.getElementsByTagName("td")[0].textContent;
let price=target.parentNode.parentNode.getElementsByTagName("td")[1].textContent;
        notification.textContent = food + " Added to Cart";
    // adding item to cart
    cart.push([food,price])
    localStorage.setItem('cart', JSON.stringify(cart));
}

}
customers.addEventListener("click",notify);
