var buttonMagnitude = document.getElementById("magnitudebutton");
var buttonDirection = document.getElementById("directionbutton");
var inputVector1 = document.getElementById("text_vector1");
var inputVector2 = document.getElementById("text_vector2");

buttonMagnitude.addEventListener("click", vectorCalculateMagnitude);
buttonDirection.addEventListener("click", vectorCalculateDirection);

function separateComponents(prmComponets){ //This function converts the 'inputVector1' array(String) into an array(Int) called 'arrayIntV1'
    varComponets = prmComponets.value;
    
    var arrayIntV1 = varComponets.split(',').map(function(item){
        return parseInt(item,10);
    });
    return arrayIntV1;
}

class Vector {
    constructor(prmEntradas){
        this.entradas=prmEntradas;
    }
    calculateMagnitude(){
        var magni = 0;
        for(var i=0; i<this.entradas.length;i++){
            magni = Math.pow(this.entradas[i],2) + magni;
        }
        magni = Math.sqrt(magni);
        return magni;
    }

    get magnitude(){
        return this.calculateMagnitude();
    }

    calculateDirection(){
        var dire = 0;
        dire = Math.atan(this.entradas[1]/this.entradas[0])*(180/Math.PI);
        return dire;
    }

    get direction(){
        return this.calculateDirection();
    }
}

function vectorCalculateMagnitude(){
    var vector1 = new Vector(separateComponents(inputVector1));
    document.querySelector('#imprimir').innerHTML = vector1.magnitude;
}

function vectorCalculateDirection(){
    var vector2 = new Vector(separateComponents(inputVector2));
    document.querySelector('#imprimir2').innerHTML = vector2.direction;

}