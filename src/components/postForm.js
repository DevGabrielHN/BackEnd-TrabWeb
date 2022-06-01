import React, { Component, useState } from "react";

import axios from "axios";
import {useForm} from 'react-hook-form'


//npm install react-hook-form
function PostForm(){

const {register,handleSubmit,formState:{erros} } = useForm()

const addPost = data => axios.post("http://localhost:8080/API/POST",data)
.then(()=>{
  console.log("DEU CERTO!")
})
.catch(() =>{
  console.log("DEU ERRADO!")
})



const addPut = data => axios.put("http://localhost:8080/API/PUT",data)
.then(()=>{
  console.log("DEU CERTO!")
})
.catch(() =>{
  console.log("DEU ERRADO!")
})



    return(
        <form onSubmit={handleSubmit(addPost,addPut)} >

      

        <fieldset id="Usuario">
        <legend class="legend">Identificação do Usuário</legend>
        <br/>
 
      <input {...register("nome")} type="text" name="nome" placeholder="Nome" />
      <input {...register("sobrenome")} type="text" name="sobrenome" placeholder="Sobrenome" />

      
      <input {...register("cpf")}  type="number" name="cpf" placeholder="CPF" />

      <select  {...register("sexo")} name="sexo">
        <option value="">--SELECIONE--</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
        <option value="O">Outro</option>  
      </select>

      <div className="radios">
        <label>
          <input {...register("nascionalidade")} type="radio"  name="nascionalidade" value="Brasileiro" />Brasileiro
        </label>
        <label>
          <input  {...register("nascionalidade")} type="radio"  name="nascionalidade" value="Estrangeiro" />Estrangeiro
        </label>
      </div>

      <div className="radios">
        <label>
          <input  {...register("estadoCivil")} type="radio"  name="estadoCivil" value="Solteiro" />Solteiro
        </label>
        <label>
          <input {...register("estadoCivil")} type="radio"  name="estadoCivil" value="Casado" />Casado
        </label>
        <label>
          <input {...register("estadoCivil")} type="radio"  name="estadoCivil" value="Divorciado"/>Divorciado
        </label>
        <label>
          <input {...register("estadoCivil")} type="radio"  name="estadoCivil" value="Viúvo (a)" />Viúvo (a)
        </label>
      </div>
      <h4>nascimento:</h4>
      <input {...register("nascimento")} type="date" name="nascimento"/>


      </fieldset>

      <fieldset id="Endereço">
        <legend class="legend">Endereço do Usuário</legend>

        <input {...register("cidade")}   type="text" name="cidade" placeholder="Sua cidade..." />
      
        <select  {...register("estado") }name="estado" >
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

      <input  {...register("numeroDaCasa")} type="number" name="numeroDaCasa" placeholder="Número da casa / apt" />
        
      <input {...register("logradouro")}  type="text" name="logradouro"  placeholder="Rua  e Bairro"/>


        </fieldset>


        <fieldset id="Atuacao">
        <legend class="legend">Ramo de Atuação</legend>

        <h5>Números de vinculos:</h5>
        <select {...register("empresa")}   name="empresa">
          <option value="">--SELECIONE--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3 ou mais</option>
          <option value="Autonomo">Autonomo</option>
        </select>  

        <input {...register("setor")} type="text" name="setor" size="30" placeholder="Razão Social" />
      
        <h5>Carga Horária:</h5>
        <select  {...register("cargaHoraria")} name="cargaHoraria" >
          <option value="">--SELECIONE--</option>
          <option value="36h">36 horas semanais</option>
          <option value="20h">20 horas semanais</option>
          <option value="40h">40 horas semanais</option>  
          <option value="30h">30 horas semanais</option>
      </select>  

      <input  {...register("salario")} type="number" name="salario" placeholder="Salário Bruto (R$)"/>
        

        </fieldset>

        <fieldset id="Declaracao">
        <legend class="legend">Declaração Anual</legend>

        <input {...register("redimentoAnual")} type="number" name="redimentoAnual" placeholder="Rendimento Anual (R$)"  />
     
        <input {...register("isencao")}  type="number" name="isencao" placeholder="Isenção" />

       <h5>Possui Imovel?</h5>
        <select  {...register("possuiImovel")}   name="possuiImovel">
        <option value="">--SELECIONE--</option>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>

        <input {...register("valorDoImovel")} type="number" min="5000" name="valorDoImovel" size="30" maxlength="40" placeholder="Valor do Imovel (R$)" />
  
        <select {...register("bens")} name="bens">
        <option value="">--SELECIONE--</option>
          <option value="Carro">Carro</option>
          <option value="Moto">Moto</option>
          <option value="Terreno">Terreno</option>
        </select>

        <input {...register("valorDobem")} type="number" min="5000" name="valorDobem" id="bens" size="35" maxlength="45" placeholder="Valor do Bem (R$)" />

        </fieldset>


      <br/>

    <button  id="btnDeclaracao" type="submit" className='EnviarAtualizar'>Enviar / Atualizar</button>
    </form>



    );
}

export default PostForm;