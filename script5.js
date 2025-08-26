let findOdd = () => {
let num1 = Number(document.getElementById("1").value)
let num2 = Number(document.getElementById("2").value)
let num3 = Number(document.getElementById("3").value)
let num4 = Number(document.getElementById("4").value)
let num5 = Number(document.getElementById("5").value)
let num6 = Number(document.getElementById("6").value)
let num7 = Number(document.getElementById("7").value)
let num8 = Number(document.getElementById("8").value)
let num9 = Number(document.getElementById("9").value)
let num10 = Number(document.getElementById("10").value)

arr = [num1,num2,num3,num4,num5,num6,num7,num8,num9,num10]

console.log(arr.sort((a) => a % 2))


document.getElementById("impares").innerHTML = impar
}