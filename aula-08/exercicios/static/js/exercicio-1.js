$(document).ready(function(){

    consumo_mes_aparelho = function(potencia, quantidade_hora){
        return parseFloat(((potencia * quantidade_hora) / 1000) * 30).toFixed(2);
    };

    consumo_total_mes = function(){
        var aparelhos = $(".consumo_aparelho");
        var total = 0;

        for(var index=0; index<aparelhos.length; index++){
            total += parseFloat(aparelhos[index].textContent);
        }

        return total.toFixed(2);
    };

    $("input[type='submit']").click(function(){

        var tr_table;
        var aparelho = $("#id_aparelho").val();
        var potencia = $("#id_potencia").val();
        var valor_hora = $("#id_valor_hora").val();
        var quantidade_hora = $("#id_quantidade_hora").val();

        if((aparelho && potencia && valor_hora && quantidade_hora) &&
            (potencia !== 0 && valor_hora !== 0 && quantidade_hora !== 0)){

            cs_mes_aparelho = consumo_mes_aparelho(potencia, quantidade_hora);

            tr_table = "<tr><td>" + aparelho + "</td>";
            tr_table += "<td>" + potencia + " Watts</td>";
            tr_table += "<td>" + quantidade_hora + "</td>";
            tr_table += "<td class='consumo_aparelho'>" + cs_mes_aparelho + "</td>";
            tr_table += "</tr>";

            $("#id_equipamentos").removeClass("hidden");
            $("#id_equipamentos table tbody").append(tr_table);
            $("#id_total").html("<strong>" + consumo_total_mes() + "</strong>");

            $("input[type='text'], input[type='number']").val("");

            $("#exibir-erro").addClass("hidden");
            $("#exibir-mensagem").removeClass("hidden");
            $("#exibir-mensagem").html("Aparelho inserido com sucesso.");
        }else{
            $("#exibir-erro").html("Informe todos os valores.");
            $("#exibir-erro").removeClass("hidden");
            $("#exibir-mensagem").addClass("hidden");
        }
    });
});