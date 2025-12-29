const temp = {
    baseTemperature : 20,
    toFahrenheit: function (){
        return this.baseTemperature * 1.8 + 32
    },

    toReamur(){
        return this.baseTemperature * 0.8
    },

    toKelvin(){
        return this.baseTemperature + 273.15
    }
}

console.log("ubah ke Fahrenheit: " + temp.toFahrenheit());
console.log("ubah ke Reamur: " + temp.toReamur());
console.log("ubah ke Kelvin: " + temp.toKelvin());