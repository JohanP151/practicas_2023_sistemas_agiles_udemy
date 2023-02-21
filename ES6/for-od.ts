(()=>{
    type Avenger = {
        name:string,
        weapon:string;
    }
    const ironman: Avenger ={
        name:'ironman',
        weapon:'armorsuit'
    }
    const capitanAmerica: Avenger ={
        name:'capitan america',
        weapon:'escrudo'
    }
    const thor: Avenger ={
        name:'thor',
        weapon:'mjolnir'
    }
    const avengers= [ironman, thor, capitanAmerica]
    for(const avenger of avengers){
        console.log(avenger.name, avenger.weapon)
    }
})()