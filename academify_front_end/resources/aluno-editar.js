var id_aluno = GetURLParameter("id");




var id_aluno = GetURLParameter("id");
$(document).ready(function (){
    $.ajax({
        url: 'http://localhost:8080/api/aluno/get/' + id_aluno,
        type: 'GET',
        dataType :'json',
        success: function (data){
            $("#input-matricula").val(data.matricula);
            $("#input-nome").val(data.nome);

        }
    })
});
$('#form-editar-usuario').submit(function(event){
    event.preventDefault();

    var formData = {
        'id': id_aluno,
        'matricula': $('#input-matricula').val(),
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
