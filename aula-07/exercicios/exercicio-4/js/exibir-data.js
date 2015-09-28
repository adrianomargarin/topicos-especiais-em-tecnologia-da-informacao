$(document).ready(function(){

    verifica_mes = function(mes){
        var meses = {
            "01": " de Janeiro de ",
            "02": " de Fevereiro de ",
            "03": " de Março de ",
            "04": " de Abril de ",
            "05": " de Maio de ",
            "06": " de Junho de ",
            "07": " de Julho de ",
            "08": " de Agosto de ",
            "09": " de Setembro de ",
            "10": " de Outubro de ",
            "11": " de Novembro de ",
            "12": " de Dezembro de ",
        }
        return meses[mes];
    };

    $("form").submit(function(){
        var data_informada = $("#id_data_informada").val();
        var data_por_extenso = data_informada.split("-")[2];
        data_por_extenso += verifica_mes(data_informada.split("-")[1]);
        data_por_extenso += data_informada.split("-")[1];
        document.write(data_por_extenso);
    });
});