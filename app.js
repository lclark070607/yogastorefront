  window.addEventListener('load', function () {

      
    //******************************************************************
    //Shopping Cart Functions

    let cart = [];
    //display name, price, count
    let Item = function(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    };

    function addItemToCart(name, price, count) {
        for (let i in cart) { 
            if (cart[i].name === name) {          
                cart[i].count += count; 
                return; 
            }
        }
        
        let item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }

    function removeItemFromCart(name) {
       for ( let i in cart) {
           if (cart[i].name === name) { 
                 cart[i].count --; 
                 if (cart[i].count === 0) {
                    cart.splice(i, 1); 
                 }
                break;                      
           }
       }
       saveCart();
    }

    function removeItemFromCartAll(name) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    }

    function clearCart() {
        cart = [];
        saveCart();
    }

    function countCart() {
        let totalCount = 0;  //start with value of zero outside the loop
        for (let i in cart) {
            totalCount += cart[i].count;//take the count of a particular item and add it to the total count
        }
        return totalCount;
    }

    // console.log( countCart() );

    function totalCostCart() {
        let totalCost = 0;
        for (let i in cart) {
            totalCost += cart[i].price //get the price of every item in the cart and add them up
        }
        return totalCost;
    }
    // console.log( totalCostCart() );
    
    function listCart() {
        let cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (let i in cart) { 
            console.log(i);//loop through every item in the array
            let item = cart[i];
            let itemCopy = {};
            for (let p in item) {   //loop through every property in the object
                itemCopy[p] = item[p]; 
            }
            cartCopy.push(itemCopy); 
        }
        return cartCopy;
    };
    
    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart)); //convert to string describing the array&objects                                               
    }

    function loadCart() {
        //cart = localStorage.getItem("shoppingCart");//convert from JSON object to array/object
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if(cart === null) {
            cart = [];
        }
    }
    
    loadCart();    


