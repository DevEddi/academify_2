package br.com.academify.resource;

import br.com.academify.model.Aluno;
import br.com.academify.repository.AlunoReepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/aluno")
public class AlunoResource {

        @Autowired
        private AlunoReepository alunoRepository;

        private ResponseEntity<Aluno> responseEntity;

        @GetMapping( "/listar")
        public List<Aluno> listar(){
            return alunoRepository.findAll();
        }

        @GetMapping("get/{id}")
        public Aluno get(@PathVariable(value = "id") long id){
            return alunoRepository.findById(id);
        }
}
