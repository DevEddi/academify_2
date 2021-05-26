$(document).ready(function() {
    if ($.cookie('jwt_token') == null || $.cookie('jwt_token') == undefined) {
        alert("Usuário não autenticado");
        location.href = "/academify_fron_tend/login.html";
    }
});

//Processar Formulario
$ ('#form-inserir-usuario').submit(function (event){
    event.preventDefault();
    //Criar formData
    var formData = {
        'nome': $('#input-nome').val(),
        'matricula': $('#input-matricula').val()
    };
    alert(JSON.stringify(formData));
    $.ajax({
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        type: 'POST',
        url: 'http://localhost:8080/api/aluno/incluir',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode: true,
        success: function(data){
            location.href = 'listarAlunos.html';

        },
        error:function (data){
            $('#div-alert-message').prepend(data.responseText);
            $('#div-alert-message').fadeIn();
        }

    });
});