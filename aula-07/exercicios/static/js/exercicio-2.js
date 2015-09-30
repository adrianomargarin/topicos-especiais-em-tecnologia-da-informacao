$(document).ready(function(){

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

            if(saque < saldo_atualizado){
                var table_html = "<table class='table table-striped table-bordered'>"
                table_html += "<thead><tr>"
                table_html += "<th>Mês</th>"
                table_html += "<th>Saldo + %</th>"
                table_html += "<th>Saque</th>"
                table_html += "<th>Saldo</th>"
                table_html += "</tr></thead><tbody>";
                while(saldo_atualizado >= saque){
                    table_html += "<tr><td>" + mes + "</td>";
                    table_html += "<td>" + parseFloat(saldo_atualizado).toFixed(2).replace(".", ",") + "</td>";
                    table_html += "<td>" + saque + "</td>";
                    saldo_atualizado = sacar(saldo_atualizado, saque);
                    table_html += "<td>" + parseFloat(saldo_atualizado).toFixed(2).replace(".", ",") + "</td></tr>";
                    saldo_atualizado = atualizar_saldo(parseFloat(saldo_atualizado).toFixed(2).toString(), juro);
                    console.log(parseFloat(saldo_atualizado).toFixed(2));
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
            $("div#exibir-mensagem").addClass("hidden");
        }

    });
});