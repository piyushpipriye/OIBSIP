const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');



const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "yellow"
        if (document.getElementById("celsius").checked){
         
             let value = (converter.value * 1.8) + 32;
             let value1 = converter.value + 273.15;
             result.innerHTML = `${converter.value}°C to ${value.toFixed(2)}°F `;
        } else if  (document.getElementById("fahrenheit").checked){
            let value = (converter.value - 32) / 1.8;
            let value1 = (((converter.value - 32) * 5) / 9) + 273.15;
            result.innerHTML = `${converter.value}°F to ${value.toFixed(2)}°C and ${value1.toFixed(2)}°K`;
        }else if  (document.getElementById("kelvin").checked){
            let value = converter.value - 273.15;
            let value1 = 1.8*(converter.value-273) + 32.2;
            result.innerHTML = `${converter.value}°K to ${value.toFixed(2)}°C and ${value1.toFixed(2)}°F`;
        }else{
            result.style.color = "#993300"
            result.innerHTML = 'Please select the Unit!';
        }
    } else if (converter.value == '') {
        result.style.color = "#993300"
        result.innerHTML = 'Write correct value!';
    } else {
        result.style.color = "#993300"
        result.innerHTML = 'Wrong value!';
    }
}

resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert); 