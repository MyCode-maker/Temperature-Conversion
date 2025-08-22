const tempValue = document.getElementById('tempValue');
const celciusToFarenhite = document.getElementById('celciusToFarenhite');
const farenhiteToCelcius = document.getElementById('farenhiteToCelcius');
const result = document.getElementById('result');
let temp;

function convert(){

    if (tempValue.value.trim() === "") {
        result.textContent = "❌NO Value?";
        return; // stop the function
    }

    else if(celciusToFarenhite.checked){
        temp = Number(tempValue.value);
        temp = temp * 9/5 +32;
        result.textContent = temp.toFixed(1) +"°F";
    }
    else if(farenhiteToCelcius.checked){
        temp = Number(tempValue.value);
        temp = (temp - 32)*(5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select Unit first";
    }

}