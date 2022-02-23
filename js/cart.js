const cart = function() {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const close = cart.querySelector('.modal-close');

    cartBtn.addEventListener('click', function() {
        cart.style.display = "flex";
    })

    close.addEventListener('click', function() {
        cart.style.display = "";
    })
}

cart();