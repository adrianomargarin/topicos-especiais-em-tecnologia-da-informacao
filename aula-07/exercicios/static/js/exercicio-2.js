$(document).ready(function(){

    // $(".money").maskMoney({
    //     allowNegative: true,
    //     thousands: '.',
    //     decimal: ',',
    //     affixesStay: false,
    //     allowZero: true,
    //     treatEmptyAsZero: false
    // });

    // parseValueToFloat = function(valor){
    //         try{
    //             return parseFloat(valor.replace(/\./g, "").replace(/,/g, "."));
    //         }catch (e){}
    //     };

    // sacar = function(saldo, valor){
    //     return saldo - parseValueToFloat(valor);
    // }

    // atualizar_saldo = function(saldo, juro){
    //     return parseValueToFloat(juro)/100 * parseValueToFloat(saldo) + parseValueToFloat(saldo);
    // }

    sacar = function(saldo, valor){
        return saldo - valor;
    }

    atualizar_saldo = function(saldo, juro){
        return juro/100 * saldo + parseFloat(saldo);
    }

    $("input[type='submit']").click(function(){
        var saldo = $("#id_saldo").val();
        var juro = $("#id_juro").val();
        var saque = $("#id_saque").val();

        if(saldo && juro && saque){
            var saldo_atualizado = atualizar_saldo(saldo, juro);
            var mes = 1;

            // console.log(saldo_atualizado);
            // debugger

            // while(saldo_atualizado >= parseValueToFloat(saque)){
            //     table_html += "<tr><td>" + mes + "</td>";
            //     table_html += "<td>" + saldo_atualizado + "</td>";
            //     table_html += "<td>" + saque + "</td>";
            //     saldo_atualizado = sacar(saldo_atualizado, saque);
            //     table_html += "<td>" + saldo_atualizado + "</td></tr>";
            //     saldo_atualizado = atualizar_saldo(saldo_atualizado.toString(), juro;
            //     console.log(mes);
            //     console.log(saldo_atualizado);
            //     mes++;
            //     debugger;
            // }

            if(saque < saldo_atualizado){
                var table_html = "<table class='table table-striped table-bordered'><thead><tr><th>Mês</th><th>Saldo + %</th><th>Saque</th><th>Saldo</th></tr></thead><tbody>";
                while(saldo_atualizado >= saque){
                    table_html += "<tr><td>" + mes + "</td>";
                    table_html += "<td>" + saldo_atualizado + "</td>";
                    table_html += "<td>" + saque + "</td>";
                    saldo_atualizado = sacar(saldo_atualizado, saque);
                    table_html += "<td>" + saldo_atualizado + "</td></tr>";
                    saldo_atualizado = atualizar_saldo(saldo_atualizado.toString(), juro);
                    console.log(mes);
                    console.log(saldo_atualizado);
                    mes++;
                }
                table_html += "</tbody></table>";
                $("div#exibir-erro").addClass("hidden");
                $("div#exibir-mensagem").removeClass("hidden");
                $("div#exibir-mensagem").html(table_html);
            }else{
                $("div#exibir-mensagem").addClass("hidden");
                $("div#exibir-erro").removeClass("hidden");
                $("div#exibir-erro").html("Você não pode realizar o saque!");
            }
        }else{
            $("div#exibir-erro").removeClass("hidden");
        }

    });
});