const mediar = function (){
let num1 = document.getElementById("1").value
let num2 = document.getElementById("2").value
let num3 = document.getElementById("3").value
let num4 = document.getElementById("4").value

    let resultado = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)) /4
    if(resultado >= 6){
            resultadoFinal1 = "Aprovadasso"
          document.getElementById("resultado").innerHTML = resultadoFinal1
    }else{
         resultadoFinal2 = "Reprovadasso"
      document.getElementById("resultado").innerHTML = resultadoFinal2
    }
}