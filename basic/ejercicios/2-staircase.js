function escalera (pisos) {
    if (pisos > 0) {
        for (let i = 0; i < pisos; i++){
            let piso = "#";
            for (let j=0; j < i; j++){
                piso += "#";
            }
            console.log(piso);
        }
    } else if (pisos < 0) {
        for (let i = pisos; i < 0; i++){
            let piso = "";
            for (let j = i; j < 0; j++){
                piso += "#";
            }
            console.log("Subsuelo " + piso);
        }
    }
}
escalera (-2);