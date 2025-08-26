let findBig = () => {
let num1 = Number(document.getElementById("1").value)
let num2 = Number(document.getElementById("2").value)
let num3 = Number(document.getElementById("3").value)

arr = [num1,num2,num3]

arr.sort((a,b) => a-b)

document.getElementById("maximo").innerHTML = arr[2]
}