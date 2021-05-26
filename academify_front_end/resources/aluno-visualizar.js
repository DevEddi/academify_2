var id_aluno = GetURLParameter("id");
$(document).ready(function (){

    if ($.cookie('jwt_token') == null || $.cookie('jwt_token') == undefined) {
        alert("Usuário não autenticado");
        location.href = "/academify_front_end/login.html";
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Beaver ' + $.cookie('jwt_token'),
        },
        url: 'http://localhost:8080/api/aluno/get/' + id_aluno,
        type: 'GET',
        dataType :'json',
        success: function (data){
            $("#input-nome").val(data.nome);

        }
    })
});
$('#form-editar_usuario').submit(function(event){
    event.preventDefault();

    var formData = {
        'id': id_aluno,
        'nome': $('#input-nome').val()
    };

    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'PUT',
        url: 'http://localhost:8080/api/aluno/editar',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode:true,
        success: function(data){
            location.href = "listarAlunos.html";

        },
        error: function(data){
            alert("Ocorreu um erro ao editar aluno");
        }
    })
})
