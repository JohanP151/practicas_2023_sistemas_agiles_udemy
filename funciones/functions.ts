(() => {
    const hero: string = 'flash';
    function returnName(): string {
        return hero;
    }
    const activateBatisignal = (): string => {
        return 'batisenal activada'
    }           
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})()