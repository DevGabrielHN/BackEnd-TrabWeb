import React, { Component, useState } from "react";

import axios from "axios";
import {useForm} from 'react-hook-form'


//npm install react-hook-form
function PostForm(){

const {register,handleSubmit,formState:{erros} } = useForm()
const cidadee = document.querySelector("#cidadeId");

const addPost = data => axios.post("http://localhost:8080/API/POST",data)
.then(()=>{
  alert("Declaração feita com sucesso!");
})
.catch(() =>{
  alert("Erro ao declarar!");
})


const addPut = data => axios.put("http://localhost:8080/API/PUT",data)
.then(()=>{
  console.log("Declaração atualizada com sucesso!")
})
.catch(() =>{
  console.log("Erro ao atualizar declaração!")
})



const getCpf = async function buscaFilme(){
  const numeroCpf = document.querySelector("#CpfId");
  const resposta = await fetch(`http://localhost:8080/API/GET/${numeroCpf.value}`)
  .then((resposta) => resposta.json())
  .then((dados) => {
    document.getElementById("nomeId").value = dados.nome;
    document.getElementById("sobrenomeId").value = dados.sobrenome;
    document.getElementById("sexoId").value = dados.sexo;
    //
    if(document.getElementById("brasileiroId").value == dados.nascionalidade){
      document.getElementById("brasileiroId").checked = true; 
    }else if(document.getElementById("estrangeiroId").value == dados.nascionalidade){
      document.getElementById("estrangeiroId").checked = true; 
    }
    //
    if(document.getElementById("solteiroId").value == dados.estadoCivil){
      document.getElementById("solteiroId").checked = true;
    }else if(document.getElementById("casadoId").value == dados.estadoCivil){
      document.getElementById("casadoId").checked = true;
    }else if(document.getElementById("divorciadoId").value == dados.estadoCivil){
      document.getElementById("divorciadoId").checked = true;
    }else if (document.getElementById("viuvoId").value == dados.estadoCivil){
      document.getElementById("viuvoId").checked = true;
    }
    // 
    document.getElementById("nascimentoId").value = dados.nascimento.substr(0, 10);
    document.getElementById("cidadeId").value = dados.cidade; 
    document.getElementById("estadoId").value = dados.estado;
    document.getElementById("numeroDaCasaId").value = dados.numeroDaCasa;
    document.getElementById("logradouroId").value = dados.logradouro;
    document.getElementById("empresaId").value = dados.empresa;
    document.getElementById("setorId").value = dados.setor;
    document.getElementById("salarioId").value = dados.salario;
    document.getElementById("redimentoAnualId").value = dados.redimentoAnual;
    document.getElementById("isencaoId").value = dados.isencao;
    document.getElementById("cargaHorariaId").value = dados.cargaHoraria;
    document.getElementById("possuiImovelId").value = dados.possuiImovel; 
    document.getElementById("bensId").value = dados.bens;
    document.getElementById("valorDoImovelId").value = dados.valorDoImovel;
    document.getElementById("valorDobemId").value = dados.valorDobem;

/////
    document.getElementById("sobrenomeId").focus();
    document.getElementById("sexoId").focus();
    //
    if(document.getElementById("brasileiroId").value == dados.nascionalidade){
      document.getElementById("brasileiroId").focus(); 
    }else if(document.getElementById("estrangeiroId").value == dados.nascionalidade){
      document.getElementById("estrangeiroId").focus(); 
    }
    //
    if(document.getElementById("solteiroId").value == dados.estadoCivil){
      document.getElementById("solteiroId").focus();
    }else if(document.getElementById("casadoId").value == dados.estadoCivil){
      document.getElementById("casadoId").focus();
    }else if(document.getElementById("divorciadoId").value == dados.estadoCivil){
      document.getElementById("divorciadoId").focus();
    }else if (document.getElementById("viuvoId").value == dados.estadoCivil){
      document.getElementById("viuvoId").focus();
    }
    // 
    document.getElementById("nascimentoId").focus();
    document.getElementById("cidadeId").focus(); 
    document.getElementById("estadoId").focus();
    document.getElementById("numeroDaCasaId").focus();
    document.getElementById("logradouroId").focus();
    document.getElementById("empresaId").focus();
    document.getElementById("setorId").focus();
    document.getElementById("salarioId").focus();
    document.getElementById("redimentoAnualId").focus();
    document.getElementById("isencaoId").focus();
    document.getElementById("cargaHorariaId").focus();
    document.getElementById("possuiImovelId").focus();
    document.getElementById("valorDoImovelId").focus();
    document.getElementById("bensId").focus();
    document.getElementById("valorDobemId").focus();
    document.getElementById("nomeId").focus();








  })
}





const getCep = async function buscaFilme(){
  const numeroCep = document.querySelector("#CEP");
  const resposta = await fetch(`http://viacep.com.br/ws/${numeroCep.value}/json/`)
  .then((resposta) => resposta.json())
  .then((cep) => {
    document.getElementById("cidadeId").value = cep.localidade;
    document.getElementById("estadoId").value = cep.uf;
    document.getElementById("logradouroId").value = cep.logradouro + ", " + cep.bairro;
///
    document.getElementById('cidadeId').focus();
    document.getElementById('estadoId').focus();
    document.getElementById('logradouroId').focus();
    document.getElementById('logradouroId').focus();
    document.getElementById('numeroDaCasaId').focus();
//


  });
}






    return(
        <form onSubmit={handleSubmit(addPost,addPut)} >

      

        <fieldset id="Usuario">
        <legend class="legend">Identificação do Usuário</legend>
        <br/>
 
      <input {...register("nome")} id="nomeId" type="text" name="nome" placeholder="Nome" />
      <input {...register("sobrenome")} id="sobrenomeId" type="text" name="sobrenome" placeholder="Sobrenome" />
      
      <input {...register("cpf")} onBlur={handleSubmit(getCpf)} id="CpfId"  type="number" name="cpf" placeholder="CPF" />

      <select  {...register("sexo")} id="sexoId" name="sexo">
        <option value="">--SELECIONE--</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
        <option value="O">Outro</option>  
      </select>

      <div className="radios"  >                                         
        <label>
          <input {...register("nascionalidade")} type="radio" id="brasileiroId" name="nascionalidade" value="Brasileiro" />Brasileiro
        </label>
        <label>
          <input  {...register("nascionalidade")} type="radio" id="estrangeiroId"  name="nascionalidade" value="Estrangeiro" />Estrangeiro
        </label>
      </div>

      <div className="radios">
        <label>
          <input  {...register("estadoCivil")} type="radio"  name="estadoCivil" id="solteiroId" value="Solteiro" />Solteiro
        </label>
        <label>
          <input {...register("estadoCivil")} type="radio"  name="estadoCivil" id="casadoId" value="Casado" />Casado
        </label>
        <label>
          <input {...register("estadoCivil")} type="radio"  name="estadoCivil" id="divorciadoId" value="Divorciado"/>Divorciado
        </label>
        <label>
          <input {...register("estadoCivil")} type="radio"  name="estadoCivil" id="viuvoId" value="Viúvo (a)" />Viúvo (a)
        </label>
      </div>

      <h4>nascimento:</h4>
      <input {...register("nascimento")} id="nascimentoId" type="date" name="nascimento"/>

      </fieldset>

      <fieldset id="Endereço">
        <legend class="legend">Endereço do Usuário</legend>

        <input onBlur={handleSubmit(getCep)} id="CEP" type="number" name="CEP" placeholder="CEP" />
    

        <input {...register("cidade")} id="cidadeId"  type="text" name="cidade" placeholder="Sua cidade..." />
      
        <select  {...register("estado") } id="estadoId" name="estado" >
         <option value="">--SELECIONE--</option>
          <option value="AC">Acre</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
          <option value="EX">Estrangeiro</option>
      </select>


      <input  {...register("numeroDaCasa")} id="numeroDaCasaId" type="number" name="numeroDaCasa" placeholder="Número da casa / apt" />
        
      <input {...register("logradouro")} value="" id="logradouroId" type="text" name="logradouro"  placeholder="Rua  e Bairro"/>


        </fieldset>




        <fieldset id="Atuacao">
        <legend class="legend">Ramo de Atuação</legend>

        <h5>Números de vinculos:</h5>
        <select {...register("empresa")}  id="empresaId" name="empresa">
          <option value="">--SELECIONE--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3 ou mais</option>
          <option value="Autonomo">Autonomo</option>
        </select>  

        <input {...register("setor")} id="setorId" type="text" name="setor" size="30" placeholder="Razão Social" />
      
        <h5>Carga Horária:</h5>
        <select  {...register("cargaHoraria")} id="cargaHorariaId" name="cargaHoraria" >
          <option value="">--SELECIONE--</option>
          <option value="36h">36 horas semanais</option>
          <option value="20h">20 horas semanais</option>
          <option value="40h">40 horas semanais</option>  
          <option value="30h">30 horas semanais</option>
      </select>  


      <input  {...register("salario")} id="salarioId" type="number" name="salario" placeholder="Salário Bruto (R$)"/>
        

        </fieldset>



        <fieldset id="Declaracao">
        <legend class="legend">Declaração Anual</legend>

        <input {...register("redimentoAnual")} id="redimentoAnualId" type="number" name="redimentoAnual" placeholder="Rendimento Anual (R$)"  />
     
        <input {...register("isencao")} id="isencaoId"  type="number" name="isencao" placeholder="Isenção" />

       <h5>Possui Imovel?</h5>
        <select  {...register("possuiImovel")} id="possuiImovelId"  name="possuiImovel">
        <option value="">--SELECIONE--</option>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>

        <input {...register("valorDoImovel")} id="valorDoImovelId" type="number" min="5000" name="valorDoImovel" size="30" maxlength="40" placeholder="Valor do Imovel (R$)" />
  
        <select {...register("bens")} id="bensId" name="bens">
        <option value="">--SELECIONE--</option>
          <option value="Carro">Carro</option>
          <option value="Moto">Moto</option>
          <option value="Terreno">Terreno</option>
        </select>

        <input {...register("valorDobem")} id="valorDobemId" type="number" min="5000" name="valorDobem" size="35" maxlength="45" placeholder="Valor do Bem (R$)" />

        </fieldset>


      <br/>

    <button  id="btnDeclaracao" type="submit" className='EnviarAtualizar'>Enviar / Atualizar</button>
    </form>



    );
}

export default PostForm;