$(document).ready(function(){

    mdc = function(dividendo, divisor){
        var resto;

        do {
            resto = dividendo % divisor;

            dividendo = divisor;
            divisor = resto;

        } while (resto != 0);

        return dividendo;
    }

    $("input[type='submit']").click(function(){
        var dividendo;
        var divisor;
        var primeiro_numero = $("#id_primeiro_numero").val();
        var segundo_numero = $("#id_segundo_numero").val();

        if(primeiro_numero && segundo_numero){
            if(primeiro_numero > segundo_numero){
                dividendo = primeiro_numero;
                divisor = segundo_numero;
            }else{
                dividendo = segundo_numero;
                divisor = primeiro_numero;
            }
            $("div#exibir-erro").addClass("hidden");
            $("div#exibir-mensagem").removeClass("hidden");
            $("div#exibir-mensagem").html(mdc(dividendo,divisor));
        }else{
            $("div#exibir-erro").removeClass("hidden");
            $("div#exibir-mensagem").addClass("hidden");
        }
    });
});