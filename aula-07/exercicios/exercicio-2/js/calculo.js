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

    $("form").submit(function(){
        var saldo = $("#id_saldo");
        var juro = $("#id_juro");
        var saque = $("#id_saque");
        var saldo_atualizado = atualizar_saldo(saldo.val(), juro.val());
        var mes = 1;

        // console.log(saldo_atualizado);
        // debugger

        var table_html = "<table><thead><tr><th>Mês</th><th>Saldo + %</th><th>Saque</th><th>Saldo</th></tr></thead><tbody>";

        // while(saldo_atualizado >= parseValueToFloat(saque.val())){
        //     table_html += "<tr><td>" + mes + "</td>";
        //     table_html += "<td>" + saldo_atualizado + "</td>";
        //     table_html += "<td>" + saque.val() + "</td>";
        //     saldo_atualizado = sacar(saldo_atualizado, saque.val());
        //     table_html += "<td>" + saldo_atualizado + "</td></tr>";
        //     saldo_atualizado = atualizar_saldo(saldo_atualizado.toString(), juro.val());
        //     console.log(mes);
        //     console.log(saldo_atualizado);
        //     mes++;
        //     debugger;
        // }

        while(saldo_atualizado >= saque.val()){
            table_html += "<tr><td>" + mes + "</td>";
            table_html += "<td>" + saldo_atualizado + "</td>";
            table_html += "<td>" + saque.val() + "</td>";
            saldo_atualizado = sacar(saldo_atualizado, saque.val());
            table_html += "<td>" + saldo_atualizado + "</td></tr>";
            saldo_atualizado = atualizar_saldo(saldo_atualizado.toString(), juro.val());
            console.log(mes);
            console.log(saldo_atualizado);
            mes++;
        }

        table_html += "</tbody></table>";


    });
});