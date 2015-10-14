$(document).ready(function(){

    validar_igualdade = function(senha_1, senha_2){
        if(senha_1 !== senha_2){
            $("#exibir-erro").html("As senhas não conferem.");
            $("#exibir-erro").removeClass("hidden");
            return false;
        }
        return true;
    };

    validar_senha = function(senha){
        var exp = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%&])[0-9A-Za-z!@#$%&]{6,10}$/

        if(exp.test(senha) === false){
            var html = "Mínimo de 6 caracteres e máximo de 10 caracteres. ";
            html += "Deve possuir, pelo menos, um dos seguintes caracteres especiais ( ! @ # $ % & ). ";
            html += "Deve possuir, pelo menos, uma letra maiúscula. ";
            html += "Deve possuir, pelo menos, um caractere numérico.";
            $("#exibir-erro").html(html);
            $("#exibir-erro").removeClass("hidden");
            return false;
        }
        return true;
    };

    $("input[type='submit']").click(function(){
        $("#exibir-mensagem").addClass("hidden");
        $("#exibir-erro").addClass("hidden");

        var nome = $("#id_nome").val();
        var senha_1 = $("#id_senha_1").val();
        var senha_2 = $("#id_senha_2").val();

        if(nome && senha_1 && senha_2){
            if(validar_igualdade(senha_1, senha_2) && validar_senha(senha_1)){
                $("#exibir-mensagem").html("Senha válida!");
                $("#exibir-mensagem").removeClass("hidden");
            }
        }else{
            $("#exibir-erro").removeClass("hidden");
            $("#exibir-erro").html("Informe todos os valores.");
        }
    });

    // console.log(validar_senha("12345"));
    // console.log(validar_senha("1234567890"));
    // console.log(validar_senha("123456"));
    // console.log(validar_senha("12345a"));
    // console.log(validar_senha("12345A"));
    // console.log(validar_senha("123#aa"));
    // console.log(validar_senha("1234aA"));
    // console.log(validar_senha("12345A"));
    // console.log(validar_senha("12345a"));
    // console.log(validar_senha("12345#"));
    // console.log(validar_senha("12345678Aa#"));

    // console.log(validar_senha("1234567Aa#"));
    // console.log(validar_senha("123#aA"));
    // console.log(validar_senha("123#5A"));
    // console.log(validar_senha("A23#5A"));
    // console.log(validar_senha("%23#5A"));
});