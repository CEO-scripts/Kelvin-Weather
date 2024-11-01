//Creating a kelvin variable with value 293
const kelvin = 0

//Converting from Kelvin to Celsius
const celsius = kelvin - 273

//Converting from Celcius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32

//Rounding Up the Value in Fahrenheit
fahrenheit = Math.floor(fahrenheit)

//Output of the temperature in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

//Converting from Celsius to Newton
let newton = celsius * (33/100)

//Rounding up the temperature in Newton
newton = Math.floor(newton)

//Output of the temperature in Newton
console.log(`The temperature is ${newton} deggrees in Newton`)