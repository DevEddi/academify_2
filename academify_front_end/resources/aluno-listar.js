$(document).ready(function (){
    $.ajax({
        url:'http://localhost:8080/api/aluno/listar',
        type:'get',
        dataType: 'json',
        success: function(result){
            var html = '';
            $.each(result, function (i, data){
                html += '<tr><td>' + data.matricula +'</td>';
                html += '<td>' + data.nome +'</td>';
                html += '<td><a href="editarAluno.html?id='+ data.id +' "><i class="bi bi-pencil-fill"></i></a>';
                html += '<a href="visualizarAluno.html?id='+ data.id +' "><i class="bi bi-search"></i></a>';
                html += '<a href="#" onclick="removerAluno('+ data.id + ')"><i class="bi bi-archive-fill"></i></a></td></tr>';
                $("#tbListarAlunosBody").html(html);
            });
        }
    })
});
function removerAluno(id_aluno){
    var r = confirm("Cofirma a exclusão?");
    if(r == true){
        var formData = {
            "id" : id_aluno,

        };
        $.ajax({
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type:'POST',
            url: 'http://localhost:8080/api/aluno/remover',
            data:JSON.stringify(formData),
            dataType: 'json',
            enconde: true,
            success: function(result){
                location.reload();
            },
            erro: function(result){
                console.log(result);
            }
        })
    }
}