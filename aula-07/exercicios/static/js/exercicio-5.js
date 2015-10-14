$(document).ready(function(){

    var UNIDADES = {
        "0" :"Zero",
        "1" :"Um",
        "2" :"Dois",
        "3" :"Três",
        "4" :"Quatro",
        "5" :"Cinco",
        "6" :"Seis",
        "7" :"Sete",
        "8" :"Oito",
        "9" :"Nove",
        "10" :"Dez",
        "11" :"Onze",
        "12" :"Doze",
        "13" :"Treze",
        "14" :"Quatorze",
        "15" :"Quinze",
        "16" :"Dezesseis",
        "17" :"Dezessete",
        "18" :"Dezoito",
        "19" :"Dezenove",
    }

    var DEZENAS = {
        "": "",
        "1" :"Cem",
        "2" :"Vinte",
        "3" :"Trinta",
        "4" :"Quarenta",
        "5" :"Cinquenta",
        "6" :"Sessenta",
        "7" :"Setenta",
        "8" :"Oitenta",
        "9" :"Noventa",
    };

    var CENTENAS = {
        "": "",
        "1": "Cento",
        "2": "Duzentos",
        "3": "Trezentos",
        "4": "Quatrocentos",
        "5": "Quinhetos",
        "6": "Seiscentos",
        "7": "Setecentos",
        "8": "Oitocentos",
        "9": "Novecentos"
    };

    var MILHAR = "Mil";

    incrementa_e = function(numeroStr){
        if(numeroStr === ""){
            return numeroStr;
        }
        return numeroStr + " e ";
    };

    unidades = function(numero, numeroStr){
        if(numero === 0 && numeroStr !== ""){
            return numeroStr;
        }else if(numero < 20){
            return incrementa_e(numeroStr) + UNIDADES[numero];
        }else{
            return numeroStr;
        }
    };

    dezenas = function(numero, numeroStr){
        if(numero === 0 && numeroStr !== ""){
            return [numero, numeroStr];
        }else if(numero < 20){
            return [numero, numeroStr];
        }else{
            var dezena = parseInt(numero / 10);
            var nr = numero - (dezena * 10);
            return [nr, incrementa_e(numeroStr) + DEZENAS[dezena]];
        }

    };

    centenas = function(numero, numeroStr){
        var centena = parseInt(numero / 100);
        var nr = numero - (centena * 100);

        if(centena === 0){
            return [nr, numeroStr];
        }else{
            if(nr === 0){
                if(centena === 1){
                    return [nr, incrementa_e(numeroStr) + DEZENAS[centena]];
                }else{
                    return [nr, incrementa_e(numeroStr) + CENTENAS[centena]];
                }
            }else{
                return [nr, incrementa_e(numeroStr) + CENTENAS[centena]];
            }
        }
    }

    milhares = function(numero, numeroStr){
        var milhar = parseInt(numero/1000);
        var nr = numero - (milhar * 1000);
        if(milhar === 0){
            return [numero, numeroStr];
        }else if(milhar === 1){
            return [nr, MILHAR];
        }else{
            return [nr, unidades(milhar, "") + " " + MILHAR];
        }
    };

    extenso = function(numero){
        var numeroStr = "";
        var dezenasAux;
        var centenasAux;
        var milharesAux;

        milharesAux = milhares(numero, numeroStr);
        centenasAux = centenas(milharesAux[0], milharesAux[1]);
        dezenasAux = dezenas(centenasAux[0], centenasAux[1]);
        numeroStr = unidades(dezenasAux[0], dezenasAux[1]);

        return numeroStr;
    };

    // console.log(extenso(0));
    // console.log(extenso(1));
    // console.log(extenso(2));
    // console.log(extenso(3));
    // console.log(extenso(4));
    // console.log(extenso(5));
    // console.log(extenso(6));
    // console.log(extenso(7));
    // console.log(extenso(8));
    // console.log(extenso(9));
    // console.log(extenso(10));
    // console.log(extenso(11));
    // console.log(extenso(12));
    // console.log(extenso(13));
    // console.log(extenso(14));
    // console.log(extenso(15));
    // console.log(extenso(16));
    // console.log(extenso(17));
    // console.log(extenso(18));
    // console.log(extenso(19));
    // console.log(extenso(20));
    // console.log(extenso(21));
    // console.log(extenso(22));
    // console.log(extenso(23));
    // console.log(extenso(24));
    // console.log(extenso(25));
    // console.log(extenso(26));
    // console.log(extenso(27));
    // console.log(extenso(28));
    // console.log(extenso(29));
    // console.log(extenso(30));
    // console.log(extenso(40));
    // console.log(extenso(50));
    // console.log(extenso(60));
    // console.log(extenso(70));
    // console.log(extenso(80));
    // console.log(extenso(90));
    // console.log(extenso(100));
    // console.log(extenso(101));
    // console.log(extenso(110));
    // console.log(extenso(120));
    // console.log(extenso(121));
    // console.log(extenso(200));
    // console.log(extenso(300));
    // console.log(extenso(400));
    // console.log(extenso(500));
    // console.log(extenso(600));
    // console.log(extenso(700));
    // console.log(extenso(800));
    // console.log(extenso(900));
    // console.log(extenso(1000));
    // console.log(extenso(2000));
    // console.log(extenso(3000));
    // console.log(extenso(4000));
    // console.log(extenso(5000));
    // console.log(extenso(6000));
    // console.log(extenso(7000));
    // console.log(extenso(8000));
    // console.log(extenso(9000));
    // console.log(extenso(9001));
    // console.log(extenso(9011));
    // console.log(extenso(9019));
    // console.log(extenso(9020));
    // console.log(extenso(9021));
    // console.log(extenso(9100));
    // console.log(extenso(9200));
    // console.log(extenso(9300));
    // console.log(extenso(9400));
    // console.log(extenso(9500));
    // console.log(extenso(9600));
    // console.log(extenso(9700));
    // console.log(extenso(9800));
    // console.log(extenso(9900));
    // console.log(extenso(9901));
    // console.log(extenso(9910));
    // console.log(extenso(9920));
    // console.log(extenso(9919));
    // console.log(extenso(9921));
    // console.log(extenso(9999));
    // console.log(extenso(19999));

    $("input[type='submit']").click(function(){
        var valor_informado = $("#id_valor_informado").val();

        if(valor_informado){
            if(valor_informado > 9999){
                $("div#exibir-erro").html("Informe um valor menor que 9999.");
                $("div#exibir-mensagem").addClass("hidden");
                $("div#exibir-erro").removeClass("hidden");
            }else{
                numero_extenso = extenso(valor_informado);
                $("div#exibir-erro").addClass("hidden");
                $("div#exibir-mensagem").removeClass("hidden");
                $("div#exibir-mensagem").html(numero_extenso);
            }
        }else{
            $("div#exibir-mensagem").addClass("hidden");
            $("div#exibir-erro").removeClass("hidden");
        }
    });
});