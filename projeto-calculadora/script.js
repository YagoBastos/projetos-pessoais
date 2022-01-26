const resultado = window.document.getElementById('resultado')
const confirmar = window.document.querySelector('.igual')

function Insert(n){  
    resultado.innerHTML += n;
}
function Clear(){
    resultado.innerHTML = " "
}
function Backspace(){
    if(resultado.textContent){
        let resu = window.document.getElementById('resultado').innerHTML
        resultado.innerHTML = resu.substring(0,resu.length-1)
    }
}
function Confirmar(){
    if(resultado.textContent != 'Erro'){
        window.document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}