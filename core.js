/**
 *  version 1.0
 *  https://github.com/brandao19/SPUC.git
 *  author Brandao
 */
 
 //TODO
$(".input-ator").change(function(){
    var trAtor = document.getElementsByClassName("ator");
    var total = [];
    var somaTotal = [];
    $(".input-ator").each(function(index,element){
        if ($(element).val()) {
            total.push(parseInt($(element).val()));
        }
    });

    for(var posicaoAtual = 0; posicaoAtual <= trAtor.length - 1; posicaoAtual++){
        var atorTr = trAtor[posicaoAtual];
        var tdPeso   = atorTr.getElementsByClassName("info-peso")[0];
        var atorAtual = {peso :   tdPeso.textContent};
        var imc = total[posicaoAtual] * atorAtual.peso;

        var tdIMC = atorTr.getElementsByClassName("show-total")[0];
    	tdIMC.textContent = imc;
        somaTotal[posicaoAtual] = imc;
    }
    $(".total-ator").val(calculo(somaTotal));
});


//TODO
// casos de uso
var somaTotalCasoUso = [];
$(".input-caso-uso").change(function(){
    var trCasoUso = document.getElementsByClassName("caso-uso");
    var totalCasoUso = [];
    var tdTotal = [];

    $(".input-caso-uso").each(function(index,element){
        if ($(element).val()) {
            totalCasoUso.push(parseInt($(element).val()));
        }
    });

    for(var x = 0; x <= trCasoUso.length - 1; x++){
        var casoUsoTr = trCasoUso[x];
        var tdPeso   = casoUsoTr.getElementsByClassName("peso-caso-uso")[0];
        var casoUsoAtual = {peso :   tdPeso.textContent};
        var imc = totalCasoUso[x] * casoUsoAtual.peso;

        var tdIMC = casoUsoTr.getElementsByClassName("show-total-caso-uso")[0];
    	tdIMC.textContent = imc;
        somaTotalCasoUso[x] = imc;
    }
    $(".total-caso-uso").val(calculo(somaTotalCasoUso));
});

//TODO
//Fator tecnico
$(".input-fator-tec").change(function(){
    var trFator =  document.getElementsByClassName("fator-tec");
    var fatorTotal = [];
    var somaFatorTotal = [];
    $(".input-fator-tec").each(function(index,element){
        if ($(element).val()) {
            fatorTotal.push(parseInt($(element).val()));
        }
    });

    for(var y = 0; y <= trFator.length - 1; y++){
        var fatorTr = trFator[y];
        var tdPeso   = fatorTr.getElementsByClassName("peso-fator")[0];
        var fatorAtual = {peso :   tdPeso.textContent};
        var imc = fatorTotal[y] * fatorAtual.peso;

        var tdIMC = fatorTr.getElementsByClassName("show-total-fator-tec")[0];
    	tdIMC.textContent = imc;
        somaFatorTotal[y] = imc;
    }
    $(".total-fator-tec").val(calculo(somaFatorTotal));
});

//TODO
// fator ambiente
$(".input-fator-amb").change(function(){
    var trFatorAmb =  document.getElementsByClassName("fator-Amb");
    var fatorAmbTotal = [];
    var somaFatorAmbTotal = [];
    $(".input-fator-amb").each(function(index,element){
        if ($(element).val()) {
            fatorAmbTotal.push(parseInt($(element).val()));
        }
    });

    for(var k = 0; k <= trFatorAmb.length - 1; k++){
        var fatorAmbTr = trFatorAmb[k];
        var tdPeso   = fatorAmbTr.getElementsByClassName("fator-peso-amb")[0];
        var fatorAmbAtual = {peso :   tdPeso.textContent};
        var imc = fatorAmbTotal[k] * fatorAmbAtual.peso;

        var tdIMC = fatorAmbTr.getElementsByClassName("show-total-fator-amb")[0];
    	tdIMC.textContent = imc;
        somaFatorAmbTotal[k] = imc;
    }
    $(".total-fator-amb").val(calculo(somaFatorAmbTotal));
});

//TODO
$("#calcular").click(function(){
    var valorAtor = 0;
    var valorcaso = 0;
    var resultado = 0;
    var valorFatorTec = 0;
    var valorFatorAmb = 0;
    $(".total-ator").each(function(index,element){
        if ($(element).val()) {
            valorAtor = parseInt($(element).val());
        }
    });
    $(".total-caso-uso").each(function(index,element){
        if ($(element).val()) {
            valorcaso = parseInt($(element).val());
        }
    });
    $(".total-fator-tec").each(function(index,element){
        if($(element).val()){
            valorFatorTec = parseInt($(element).val());
        }
    });
    $(".total-fator-amb").each(function(index,element){
        if($(element).val()){
            valorFatorAmb = parseInt($(element).val());
        }
    });

    //Calculo do fator tecnico
    var tcf = 0.6 + (0.01 * valorFatorTec);

    //Calculo do fator ambiente
    var ef = 1.4 + (-0.03 * valorFatorAmb);

    //calculo caso de uso
    var uucp = valorAtor + valorcaso;
    // calculando o valor total do sistema
    var ucp = uucp * tcf * ef;
	// HORA
    var hora = ucp * 20;

    $(".show-uucp").text(uucp.toFixed(3));
    $(".show-tcf").text(tcf.toFixed(3));
    $(".show-ef").text(ef.toFixed(3));
    $(".show-ucp").text(ucp.toFixed(3));
    $(".show-horas").text(hora.toFixed(3));
});

//TODO
function calculo(valor){
    var i = 0;
    for(var x= 0; x< valor.length; x++){
        i += valor[x];
    }
    return i;
}
