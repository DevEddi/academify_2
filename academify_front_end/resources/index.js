$(document).ready(function () {
    if ($.cookie('jwt_token') == null || $.cookie('jwt_token') == undefined) {
        alert("Usuário não autenticado");
        location.href = "/academify_fron_tend/login.html";
    }

    $.ajax({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Beaver ' + $.cookie('jwt_token'),
        },
        url: 'http://localhost:8080/api/aluno/getTotal',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            $("#div-total-alunos").html(result);
        }
    })
});