let somme = (a, b) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(a + b) }, 2000);
    });
};

let sommeCarre = (a, b) => {
    let s = await somme(a, b).then(result => result);
    let result = Math.pow(s, 2);
    return result;
};

sommeCarre(2, 3).then(result => console.log(result));