function expressao(parametro){

   // document.getElementById('display-calculadora').value +=parametro;

    let valor = document.getElementById('display-calculadora').value;
    valor = valor+parametro;
    document.getElementById('display-calculadora').value=valor;

}

function calcular(){

    try{
        let resultado=eval(document.getElementById('display-calculadora').value);
        document.getElementById('display-calculadora').value=resultado;
    }catch(error){
        document.getElementById('display-calculadora').value= "Expressão incorreta"
    }

}

function zerar(){
    document.getElementById('display-calculadora').value=null;
}
