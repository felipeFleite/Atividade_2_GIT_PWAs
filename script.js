
const soma = function (){
let num1 = document.getElementById("1").value
let num2 = document.getElementById("2").value

    let resultado = parseFloat(num1) + parseFloat(num2)

  document.getElementById("resultado").innerHTML = resultado
}