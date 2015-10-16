$(document).ready(function(){

    total_produto = function(preco, quantidade){
        return parseFloat(preco * quantidade);
    }

    soma_total = function(){
        var trs = $("#id_carrinho_com_itens table tbody tr");
        var preco;
        var quantidade;
        var total = 0;

        for(var index = 0; index < trs.length; index++){ 
            preco = parseFloat(trs[index].getElementsByClassName("preco")[0].textContent).toFixed(2);
            quantidade = parseInt(trs[index].getElementsByClassName("quantidade")[0].textContent);
            total += total_produto(preco, quantidade);
        }
        $("td#id_total").html("<strong>" + total.toFixed(2).replace(".", ",") + "</strong>");
    }

    $(".produto").click(function(){
        var produto = $("." + this.id);
        var nome_produto = produto[0].getElementsByTagName("h3")[0].textContent;
        var preco_produto = produto[0].getElementsByTagName("span")[0].textContent;
        var quantidade = produto[0].getElementsByTagName("input")[0].value;

        if(quantidade === "" || quantidade <= "0"){
            $("." + this.id + "_hidden").removeClass("hidden");
        }else{
            $("#id_carrinho_vazio").addClass("hidden");
            $("." + this.id + "_hidden").addClass("hidden");
            $("#id_carrinho_com_itens").removeClass("hidden");

            if($("#produto_" + this.id).length === 0){
                var tr = "<tr id='produto_" + this.id + "'>";
                tr += "<td>" + nome_produto + "</td>";
                tr += "<td class='preco'>" + preco_produto + "</td>";
                tr += "<td class='quantidade'>" + quantidade + "</td>";
                tr += "<td class='total_produto'>" + parseFloat(total_produto(parseFloat(preco_produto).toFixed(2), parseInt(quantidade))).toFixed(2).replace(".", ",") + "</td>";
                tr += "<td>";
                tr += "<button class='btn btn-danger btn-sm remover' id='remover_produto_" + this.id + "'>";
                tr += "<span class='glyphicon glyphicon-remove'>";
                tr += "</button></span></td></tr>";
                $("#id_carrinho_com_itens table tbody").append(tr);

                $(".remover").on("click", function(){
                    $("tr#" + this.id.split("remover_")[1]).remove();
                    soma_total();
                    if($("#id_carrinho_com_itens table tbody tr").length === 0){
                        $("#id_carrinho_com_itens").addClass("hidden");
                        $("#id_carrinho_vazio").removeClass("hidden");
                    }                    
                });
            }else{
                var quantidade_existente = $("tr#produto_" + this.id + " td.quantidade").text();
                var soma = parseInt(quantidade) + parseInt(quantidade_existente);
                var tot_produto = parseFloat(total_produto(parseFloat(preco_produto).toFixed(2), parseInt(soma))).toFixed(2).replace(".", ",");
                $("tr#produto_" + this.id + " td.total_produto").text(tot_produto);
                $("tr#produto_" + this.id + " td.quantidade").text(soma);
            }
            produto[0].getElementsByTagName("input")[0].value = "";
            soma_total();
        }
    });

});