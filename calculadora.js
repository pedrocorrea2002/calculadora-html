var valor;
var result;
function button(num){
    valor = document.calc.visor.value += num;
}
function reset(){
    document.calc.visor.value = '';
}
function calculo(){
    result = eval(valor);
    document.calc.visor.value = result.toLocaleString("pt-br");
}