// (function() {
//     var message = "Hi!";
//
//     function showMessage() {
//         console.log( message );
//     }
//
//     showMessage();
// })();

let CartModule = (function() {
    let  sum = 0;
    const goods = [];

    return {
        addProduct: function( product ) {
            sum += product.price;
            goods.push( product );
        },
        printProduct: function() {
            for (let i = 0; i < goods.length; i++){
                console.log( goods[i].name, goods[i].price)
            }
        },
        printSum: () => console.log(`Total price: ${sum}$`)
    };

}());

const phonesSamsung = {
    name: "Samsung",
    price: 240
};

const phonesXiaomi = {
    name: "Xiaomi",
    price: 120
};

CartModule.addProduct(phonesSamsung);
CartModule.printProduct();
CartModule.printSum();

CartModule.addProduct(phonesXiaomi);
CartModule.printProduct();
CartModule.printSum();

CartModule.addProduct(phonesSamsung);
CartModule.printProduct();
CartModule.printSum();


// console.log(goods);






