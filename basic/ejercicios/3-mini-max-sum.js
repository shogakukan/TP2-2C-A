let arr = [10,3,5,7,9]
minMax (arr);
function minMax (numeros) {
    
    if (numeros.length == 5){
        numeros.sort((a,b)=>a-b);
        let min = numeros[0];
        let max = numeros[1];
        let minTxt = `La suma minima es ${numeros[0]}`;
        let maxTxt = `La suma máxima es ${numeros[1]}`;

        for (let i = 1; i < numeros.length - 1; i++){
            min += arr[i];
            minTxt += ` + ${numeros[i]}`;
        }
        for (let i = 2; i < numeros.length; i++){
            max += numeros[i];
            maxTxt += ` + ${numeros[i]}`;
        }
        console.log(`${minTxt} = ${min}`);
        console.log(`${maxTxt} = ${max}`);
    }
}
