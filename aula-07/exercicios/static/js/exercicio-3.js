$(document).ready(function(){

    $("input[type='submit']").click(function(){
        var qnt_inicial_galinhas = $("#id_qnt_inicial_galinhas").val();
        var qnt_final_galinhas = $("#id_qnt_final_galinhas").val();
        var somatorio_galinhas = qnt_inicial_galinhas;
        var qnt_ovos = 0;
        var mes = 0;
        var meses = 0;

        if(qnt_inicial_galinhas && qnt_final_galinhas){
            while(somatorio_galinhas < qnt_final_galinhas){
                qnt_ovos = parseInt(somatorio_galinhas);
                mes += 1;
                somatorio_galinhas = parseInt(somatorio_galinhas - 0.1 * somatorio_galinhas);
                if(mes%2){
                    somatorio_galinhas += qnt_ovos;
                }
                meses += 1;
            }
            $("div#exibir-erro").addClass("hidden");
            $("div#exibir-mensagem").removeClass("hidden");
            $("div#exibir-mensagem").html("A partir de " + qnt_inicial_galinhas + " galinhas são necessários " + meses + " meses para chegar a " + qnt_final_galinhas + " galinhas.");
        }else{
            $("div#exibir-erro").removeClass("hidden");
        }
    });
});