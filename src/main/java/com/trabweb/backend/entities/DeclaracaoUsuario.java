package com.trabweb.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Declaracao")
public class DeclaracaoUsuario {

/*
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID",unique = true)
    private Long id;
*/

    @Column(name="NOME" ,length = 35)
    private String nome;
    @Column(name="SOBRENOME",length = 50)
    private String sobrenome;
    @Id
    @Column(name="CPF",unique = true)
    private Long cpf;
    @Column(name="NASCIONALIDADE",length = 30)
    private String nascionalidade;
    @Column(name="ESTADO_CIVIL",length = 30)
    private String estadoCivil;
    @Column(name="CIDADE",length = 45)
    private String cidade;
    @Column(name="ESTADO",length = 35)
    private String estado;
    @Column(name="CARGA_HORARIA",length = 50)
    private String cargaHoraria;
    @Column(name="bens",length = 20)
    private String bens;
    @Column(name="EMPRESA",length = 20)
    private String empresa;
    @Column(name="ISENCAO")
    private Long isencao;
    @Column(name="NASCIMENTO")
    private Date nascimento;
    @Column(name="RENDIMENTO_ANUAL")
    private Long redimentoAnual;
    @Column(name="SALARIO")
    private Long salario;
    @Column(name="SETOR",length = 50)
    private String setor;
    @Column(name="VALOR_DO_IMOVEL")
    private Long valorDoImovel;
    @Column(name="NUMERO_DA_CASA")
    private Long numeroDaCasa;
    @Column(name="SEXO",length = 15)
    private String sexo;
    @Column(name="LOGRADOURO",length = 50)
    private String logradouro;
    @Column(name="POSSUI_IMOVEL",length = 50)
    private String possuiImovel;
    @Column(name="VALOR_DO_BEM")
    private Long valorDobem;


}
