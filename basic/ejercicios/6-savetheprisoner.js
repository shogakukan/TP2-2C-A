
//n: entero, el numero de prisioneros 
//m: entero, el numero de golosinas
//s: entero, el numero de silla por donde se empieza a repartir.
function saveThePrisioner(n, m, s) {
    if (n > 0 && m > 0 && s <= n ) {
        let resto = m % n;
        let resp = resto + s;
        if (resto > 0){
            resp -= 1;
            if (resp > n){
                resp -= n;
            }
        }
        return resp; 
    } else {
        return -1;
    }
}

console.log(saveThePrisioner(1,1,1) === 1);
console.log(saveThePrisioner(5,2,1) === 2);
console.log(saveThePrisioner(5,2,2) === 3);
console.log(saveThePrisioner(3,7,3) === 3);
console.log(saveThePrisioner(7,19,2) === 6);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504) === 110226121);