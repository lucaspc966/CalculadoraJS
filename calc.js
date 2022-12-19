function insert(num) {
    var numero = document.getElementById('display-resultado').innerHTML;
    document.getElementById("display-resultado").innerHTML = numero + num;
}

function clean() {
    document.getElementById('display-resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('display-resultado').innerHTML;
    document.getElementById('display-resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular () {
    var resultado = document.getElementById('display-resultado').innerHTML;
    if(resultado) {
        document.getElementById('display-resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('display-resultado').innerHTML = "Nada para ser calculado!";
    }
}