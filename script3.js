let tabuada = () => {
    let num1 = document.getElementById("1").value
    
    for(let i = 0; i <= 10; i++){
        let resultado = parseFloat(num1) * i
        document.getElementById("container").append(i+"X"+num1+"="+ resultado+ "\n")
    }
}
