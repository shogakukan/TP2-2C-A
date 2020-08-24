function contadorDePares(arr) {
    let pares = 0;
    if (typeof arr != "undefined" && arr.length > 1) {
        arr.sort()
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] == arr[i - 1]) {
                pares++;
                i++;
            }
        }
    }
    return pares;
}

let arr = [10, 20, 20, 20, 20, 30, 50, 10, 20, 12, 12];

console.log(contadorDePares(arr));
