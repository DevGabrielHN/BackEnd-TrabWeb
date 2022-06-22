package com.trabweb.backend.controllers;

import com.trabweb.backend.entities.DeclaracaoUsuario;
import com.trabweb.backend.repository.DeclaracaoUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path ="/API")
@CrossOrigin(origins = "*")
public class CrudDeclaracaoUsuario {


    private DeclaracaoUsuarioRepository repository;

    @Autowired
    public CrudDeclaracaoUsuario(DeclaracaoUsuarioRepository dur) {
        this.repository = dur;
    }


    @GetMapping("/GET")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<DeclaracaoUsuario> getAll(){
        return repository.findAll();
    }

//
    @GetMapping("/GET/{cpf}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Optional<DeclaracaoUsuario> getDeclaracao(@PathVariable Long cpf){
        return repository.findById(cpf);
    }
//
    @PostMapping("/POST")
    @ResponseStatus(HttpStatus.CREATED)
    public DeclaracaoUsuario postDeclaracao(@RequestBody DeclaracaoUsuario body) {
        return repository.save(body);
    }
//
    @PutMapping("/PUT")
    @ResponseStatus(HttpStatus.CREATED)
    public DeclaracaoUsuario putDeclaracao(@RequestBody DeclaracaoUsuario body) {
        return repository.save(body);
    }
//
    @DeleteMapping("/DELETE/{cpf}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String deleteDeclaracao(@PathVariable Long cpf){
        repository.deleteById(cpf);
        return "Declaracao do CPF: " + cpf + " deletado com sucesso.";
    }
}
