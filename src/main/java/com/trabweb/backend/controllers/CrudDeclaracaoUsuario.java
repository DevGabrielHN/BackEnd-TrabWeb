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


    private DeclaracaoUsuarioRepository dur;

    @Autowired
    public CrudDeclaracaoUsuario(DeclaracaoUsuarioRepository dur) {
        this.dur = dur;
    }



    @GetMapping(path = "/GET/{cpf}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Optional<DeclaracaoUsuario> getDeclaracao(@PathVariable Long cpf){
        return dur.findById(cpf);
    }
//
    @PostMapping(path = "/POST")
    @ResponseStatus(HttpStatus.CREATED)
    public DeclaracaoUsuario postDeclaracao(@RequestBody DeclaracaoUsuario body) {
        return dur.save(body);
    }
//
    @PutMapping(path = "/PUT")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public DeclaracaoUsuario putDeclaracao(@RequestBody DeclaracaoUsuario body) {
        return dur.save(body);
    }
//
    @DeleteMapping(path = "/DELETE/{cpf}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String deleteDeclaracao(@PathVariable Long cpf){
        dur.deleteById(cpf);
        return "Declaracao do CPF: " + cpf + " deletado com sucesso.";
    }


    @GetMapping(path = "/GET")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<DeclaracaoUsuario> getAll(){
        return dur.findAll();
    }

    


}
