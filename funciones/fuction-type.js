"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta a salvo!`;
    let myFuction;
    //*myFuction = 10;
    //*console.log(myFuction)
    //myFuction = addNumber
    //console.log(myFuction(1, 2))
    //?myFuction = greet
    //?console.log(myFuction('Johan'))
    myFuction = saveTheWorld;
    console.log(myFuction());
})();
