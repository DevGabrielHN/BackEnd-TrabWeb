package com.trabweb.backend.repository;

import com.trabweb.backend.entities.DeclaracaoUsuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeclaracaoUsuarioRepository extends JpaRepository<DeclaracaoUsuario,Long> {




}
