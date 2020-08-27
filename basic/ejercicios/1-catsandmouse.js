function catAndMouse (catA, catB, mouseC) {

    let msg;
    if (!isNaN(catA) && !isNaN(catB) && !isNaN(mouseC)){
        let distanceA = distance(catA, mouseC);
        let distanceB = distance(catB, mouseC);
        
        if (distanceA == distanceB) {
            msg = "Mouse C";
        } else if (distanceA < distanceB) {
            msg = "Cat A";
        } else {
            msg = "Cat B";
        }
    } else { 
        msg = "Error";
    }
    console.log(msg);
}

function distance (cat, mouse) {
    let distance = mouse - cat;
    return distanceFrom0(distance);
}

function distanceFrom0(num) {
    if (num < 0) {
        num = num * -1;
    }
    return num;
}

catAndMouse ("1","2","3");
catAndMouse (1,3,2);
catAndMouse (1,-2,3);