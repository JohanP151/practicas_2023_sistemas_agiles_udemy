(() => {
    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta a salvo!`;

    let myFuction: ()=>string;

    //*myFuction = 10;
    //*console.log(myFuction)

    //myFuction = addNumber
    //console.log(myFuction(1, 2))

    //?myFuction = greet
    //?console.log(myFuction('Johan'))

    myFuction = saveTheWorld
    console.log(myFuction())

    
})()