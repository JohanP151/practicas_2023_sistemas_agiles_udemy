"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'clark kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
