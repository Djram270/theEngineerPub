var buttonMagnitude = document.getElementById("magnitudebutton");
var inputVector1 = document.getElementById("text_vector1");
var inputVector2 = document.getElementById("text_vector2");

buttonMagnitude.addEventListener("click", vectorCalculateMagnitude);

function separateComponents(prmComponets){ //This function converts the 'inputVector1' array(String) into an array(Int) called 'arrayIntV1'
    varComponets = prmComponets.value;
    
    var arrayIntV1 = varComponets.split(',').map(function(item){
        return parseInt(item,10);
    });

    console.log(arrayIntV1);
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
            console.log(magni);
        }
        magni = Math.sqrt(magni);
        return magni;
    }

    get magnitude(){
        return this.calculateMagnitude();
    }
}

function vectorCalculateMagnitude(){
    var vector1 = new Vector(separateComponents(inputVector1));
    document.querySelector('#imprimir').innerHTML = vector1.magnitude;
}


/*
var button = document.getElementById("littlebutton");
var inputVector1 = document.getElementById("text_vector1");
var inputVector2 = document.getElementById("text_vector2");

button.addEventListener("click", doAll);

function convertComponentsToInt(){ //This function converts the 'inputVector1' array(String) into an array(Int) called 'arrayIntV1'
    inputVector1 = inputVector1.value;
    
    var arrayIntV1 = inputVector1.split(',').map(function(item){
        return parseInt(item,10);
    });

    console.log(arrayIntV1);
    return arrayIntV1;
}

function separateComponents(){ //This function saves each vector's component in a new variable
    var array = convertComponentsToInt();
    var iComponent = array[0];
    var jComponent = array[1];
    console.log(iComponent,jComponent);
    return iComponent,jComponent;
}

class Vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    calculateMagnitude(){
        var i = this.x;
        var iComp = (i)^2;
        var j = this.y;
        var jComp = (j)^2;
        var magni = Math.sqrt(i + j);
        return magni;
    }

    get magnitude(){
        return this.calculateMagnitude();
    }
    
    calculateDirection(){
        var iComp = this.x;
        var jComp = this.y;
        var dire = Math.atan(jComp/iComp);
        return dire;
    }

    get direction(){
        return this.calculateDirection();
    }

    calculateUnitVector(){
        var iUnit = (this.x/this.magnitude);
        var jUnit = (this.y/this.magnitude);
        let unitVec = [Number(iUnit.value),Number(jUnit.value)];
        return unitVec;    
    }
    
    get unitVector(){
        return this.calculateUnitVector();
    }
    
}
//Funciones para cuando existan los 2 vectores
function calculateScalarProduct(){
    var scalarProduct = (vector1[x] * vector2[x]) + (vector1[y] * vector2[y]);
    return scalarProduct;
}

function calculateCrossProduct(){
    
}
//

function doAll(){
    let vector1 = new Vector(separateComponents());
    //let vector2 = new Vector(2,3);
    console.log(vector1);
    //console.log(Object.values(vector1));
    console.log(vector1.magnitude);
    console.log(vector1.direction);
    console.log(vector1.unitVector);
}
*/