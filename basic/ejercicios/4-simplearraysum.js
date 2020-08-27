function sumarArrayDeEnteros (arr) {
    let suma = 0;
    if (typeof arr != "undefined" && arr.length){
        for (let num of arr) {
            if (!isNaN(num)){
                suma += num;
            }
        }
    } 
    return suma;
}

let arr;
console.log(sumarArrayDeEnteros(arr));
arr = 10;
console.log(sumarArrayDeEnteros(arr));
arr = [1,2,3,4];
console.log(sumarArrayDeEnteros(arr));
arr = [1,2,3,"4"];
console.log(sumarArrayDeEnteros(arr)); //¿por qué devuelve 64?