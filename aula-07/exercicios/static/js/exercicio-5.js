$(document).ready(function(){

    // String.prototype.extenso = function(c){
    //     var ex = [
    //         ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
    //         ["dez", "vinte", "trinta", "quarenta", "cinq?enta", "sessenta", "setenta", "oitenta", "noventa"],
    //         ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
    //         ["mil",]
    //     ];

    //     var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    //     for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
    //         j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
    //         if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
    //         for(a = -1, l = v.length; ++a < l; t = ""){
    //             if(!(i = v[a] * 1)){
    //                 continue;
    //             }
    //             i % 100 < 20 && (t += ex[0][i % 100]) ||
    //             i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
    //             s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
    //             ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("?o", "?es") : ex[3][t]) : ""));
    //         }
    //         a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
    //         a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    //     }
    //     return r.join(e);
    // }

    var dezenas = {
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
        "20" :"Vinte",
        "30" :"Trinta",
        "40" :"Quarenta",
        "50" :"Cinquenta",
        "60" :"Sessenta",
        "70" :"Setenta",
        "80" :"Oitenta",
        "90" :"Noventa",
        "100" :"Cem"
    };

    var centenas = {
        "100": "Cento",
        "200": "Duzentos",
        "300": "Trezentos",
        "400": "Quatrocentos",
        "500": "Quinhetos",
        "600": "Seiscentos",
        "700": "Setecentos",
        "800": "Oitocentos",
        "900": "Novecentos"
    };

    extenso = function(numero){
        var milhar = Math.floor(numero/1000);
        numero = numero - milhar * 1000;

        var centena = Math.floor(numero/100);
        numero = numero - centena * 100;

        var dezena = Math.floor(numero/10);
        numero = numero - dezena * 10;

        if(milhar === 0 && centena === 0 && dezena === 0){
            return dezenas[numero];
        }else if(milhar === 0 && centena === 0 && dezena !== 0){
            if(String(dezena) + String(numero) <= 20){
                return dezenas[String(dezena) + String(numero)];
            }else if(numero === 0){
                return dezenas[dezena*10];
            }else{
                return dezenas[dezena*10] + " e " + dezenas[numero];
            }
        }else if(milhar === 0 && centena !== 0 && dezena === 0 && numero === 0){
            if(centena === 1){
                return dezenas["100"];
            }
            return centenas[centena*100];
        }else if(milhar === 0 && centena !== 0 && dezena === 0 && numero !== 0){
            return centenas[centena*100] + " e " + dezenas[numero];
        }else if(milhar === 0 && centena !== 0 && dezena !== 0 && numero === 0){
            return centenas[centena*100] + " e " + dezenas[dezena*10];
        }else if(milhar === 0 && centena !== 0 && dezena !== 0 && numero !== 0){
            if(String(dezena) + String(numero) <= 20){
                return centenas[centena*100] + " e " + dezenas[String(dezena) + String(numero)]
            }else if(numero === 0){
                return centenas[centena*100] + " e " + dezenas[dezena*10];
            }else{
                return centenas[centena*100] + " e " + dezenas[dezena*10] + " e " + dezenas[numero];
            }
        }else if(milhar !== 0 && centena === 0 && dezena === 0 && numero === 0){
            return dezenas[milhar] + " Mil"
        }else if(milhar !== 0 && centena === 0 && dezena === 0 && numero !== 0){
            return dezenas[milhar] + " Mil e " + dezenas[numero];
        }else if(milhar !== 0 && centena === 0 && dezena !== 0 && numero !== 0){
            if(String(dezena) + String(numero) <= 20){
                return dezenas[milhar] + " Mil e " + dezenas[String(dezena) + String(numero)]
            }else if(numero === 0){
                return dezenas[milhar] + " Mil e " + dezenas[dezena*10];
            }else{
                return dezenas[milhar] + " Mil e " + dezenas[dezena*10] + " e " + dezenas[numero];
            }
        }else if(milhar !== 0 && centena === 0 && dezena !== 0 && numero === 0){
            if(String(dezena) + String(numero) <= 20){
                return dezenas[milhar] + " Mil e " + dezenas[String(dezena) + String(numero)]
            }else if(numero === 0){
                return dezenas[milhar] + " Mil e " + dezenas[dezena*10];
            }else{
                return dezenas[milhar] + " Mil e " + dezenas[dezena*10] + " e " + dezenas[numero];
            }
        }else if(milhar !== 0 && centena !== 0 && dezena === 0 && numero === 0){
            if(centena === 1){
                return dezenas[milhar] + " Mil e " + dezenas["100"];
            }
            return dezenas[milhar] + " Mil e " + centenas[centena*100]
        }else if(milhar !== 0 && centena !== 0 && dezena === 0 && numero !== 0){
            return dezenas[milhar] + " Mil e " + centenas[centena*100] + " e " + dezenas[numero];
        }else if(milhar !== 0 && centena !== 0 && dezena !== 0 && numero === 0){
            if(String(dezena) + String(numero) <= 20){
                return dezenas[milhar] + " Mil e " + dezenas[String(dezena) + String(numero)]
            }else if(numero === 0){
                return dezenas[milhar] + " Mil e " + dezenas[dezena*10];
            }else{
                return dezenas[milhar] + " Mil e " + dezenas[dezena*10] + " e " + dezenas[numero];
            }
        }else if(milhar !== 0 && centena !== 0 && dezena !== 0 && numero !== 0){
            if(String(dezena) + String(numero) <= 20){
                return dezenas[milhar] + " Mil e " + centenas[centena*100] + " e " + dezenas[String(dezena) + String(numero)]
            }else if(numero === 0){
                return dezenas[milhar] + " Mil e " + centenas[centena*100] + " e " + dezenas[dezena*10];
            }else{
                return dezenas[milhar] + " Mil e " + centenas[centena*100] + " e " + dezenas[dezena*10] + " e " + dezenas[numero];
            }
        }

    }

    console.log(extenso(0));
    console.log(extenso(1));
    console.log(extenso(2));
    console.log(extenso(3));
    console.log(extenso(4));
    console.log(extenso(5));
    console.log(extenso(6));
    console.log(extenso(7));
    console.log(extenso(8));
    console.log(extenso(9));
    console.log(extenso(10));
    console.log(extenso(11));
    console.log(extenso(12));
    console.log(extenso(13));
    console.log(extenso(14));
    console.log(extenso(15));
    console.log(extenso(16));
    console.log(extenso(17));
    console.log(extenso(18));
    console.log(extenso(19));
    console.log(extenso(20));
    console.log(extenso(21));
    console.log(extenso(22));
    console.log(extenso(23));
    console.log(extenso(24));
    console.log(extenso(25));
    console.log(extenso(26));
    console.log(extenso(27));
    console.log(extenso(28));
    console.log(extenso(29));
    console.log(extenso(30));
    console.log(extenso(40));
    console.log(extenso(50));
    console.log(extenso(60));
    console.log(extenso(70));
    console.log(extenso(80));
    console.log(extenso(90));
    console.log(extenso(100));
    console.log(extenso(101));
    console.log(extenso(110));
    console.log(extenso(120));
    console.log(extenso(121));
    console.log(extenso(200));
    console.log(extenso(300));
    console.log(extenso(400));
    console.log(extenso(500));
    console.log(extenso(600));
    console.log(extenso(700));
    console.log(extenso(800));
    console.log(extenso(900));
    console.log(extenso(1000));
    console.log(extenso(2000));
    console.log(extenso(3000));
    console.log(extenso(4000));
    console.log(extenso(5000));
    console.log(extenso(6000));
    console.log(extenso(7000));
    console.log(extenso(8000));
    console.log(extenso(9000));
    console.log(extenso(9001));
    console.log(extenso(9011));
    console.log(extenso(9019));
    console.log(extenso(9020));
    console.log(extenso(9021));
    console.log(extenso(9100));
    console.log(extenso(9200));
    console.log(extenso(9300));
    console.log(extenso(9400));
    console.log(extenso(9500));
    console.log(extenso(9600));
    console.log(extenso(9700));
    console.log(extenso(9800));
    console.log(extenso(9900));
    console.log(extenso(9901));
    console.log(extenso(9910));
    console.log(extenso(9920));
    console.log(extenso(9919));
    console.log(extenso(9921));
    console.log(extenso(9999));

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