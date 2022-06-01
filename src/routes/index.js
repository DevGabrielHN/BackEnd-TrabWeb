import { useState,Component, useEffect } from 'react';
import api from "../services/api";

import DeleteForm from '../components/deleteForm';
import GetForm from '../components/getForm';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import PostForm from '../components/postForm';

export default function AppRoutes(){

  const [formValues, setFormValues] = useState({nascionalidade: 'Brasileiro',estadoCivil: 'Solteiro'});
  
  const [data, setData] = useState([]);




  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  }



useEffect(() => {
  api.get("/GET").then((response) => { console.log(response);
  setData(response.data)
  })
  .catch((err) => {
  console.error("ops! ocorreu um erro : " + err);
  });
  }, []);


///////

  console.log('*** formValues', formValues);

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/declarar" element= 
        { 
          <PostForm/>

        }/>
        <Route path="/" element= {
        <div >
            <br/>
            <br/>
            <h2 className='tituloHome'>IMPOSTO DE RENDA 2022</h2>
<div className='home'>


<br/>
<div className='TextoHeader'>
<p className='Esquerda'> Meu Imposto de Renda
Em 2022 o imposto de renda completa 100 anos de existência.
O imposto foi instituído com apenas um artigo e oito  incisos na Lei Orçamentária 
de 31 de dezembro de 1922, publicada curiosamente em um domingo.
Desde então, os valores arrecadados têm contribuído para o desenvolvimento do Brasil,
financiando a saúde, educação, segurança e inúmeros serviços públicos prestados  ao cidadão 
brasileiro.
</p>
</div>

<div className='alinharvideo'>
<iframe className='video' width="515" height="300" 
src="https://www.youtube.com/embed/ThGcnGkx4gw" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen></iframe>
</div>

</div>
        </div>
            }/>
        <Route path="/tabela" element= {
            <div>
                <br/>
            <table border="1">

                <tr className='coluna'>
                    <th scope="col">NOME</th>
                    <th scope="col">CPF</th>
                    <th scope="col">CIDADE</th>
                    <th scope="col">POSSUI IMOVEL</th>
                    <th scope="col">VALOR DO IMOVEL</th>
                    <th scope="col">SETOR</th>
                    <th scope="col">SALARIO</th>
                </tr>

                {data.map(data => (
                    
                         <tr>
                             <td>{data.nome} {data.sobrenome}</td>
                             <td>{data.cpf}</td>
                             <td>{data.cidade} - {data.estado}</td>
                             <td>{data.possuiImovel}</td>
                             <td>R${data.valorDoImovel}</td>
                             <td>{data.setor}</td>
                             <td>R${data.salario}</td>
                         </tr>
                           ))}

            </table>
        </div>



        }/>
        <Route path="/deletar" element= { 

                <DeleteForm/>
             
              

         }/>
        <Route path="/sobre" element= {
            <div>
                <center>
            <div id="position">
            <div className='caixa2'>
            <div className='titulo' ><p>RECEITA FEDERAL</p></div>

            <br/>

            <div className="caixa">O órgão foi criado a partir da publicação do 
                <b>Decreto nº 63.659, de 20 de novembro de 1968</b>.
                A nova secretaria substituiu a Direção-Geral da Fazenda Nacional e transformou
                diversos departamentos existentes em coordenações (arrecadação, tributação,
                fiscalização e informações econômico-fiscais).
                A <u>Lei nº 11.457, de 16 de março de 2007</u>,
                mudou a denominação para Secretaria da Receita Federal do Brasil, na época chamada
                 de Super Receita, já que passara a englobar as estruturas de arrecadação
                e fiscalização dos ministérios da Fazenda e da Previdência Social. O intuito
                foi reorganizar a administração tributária federal objetivando a redução dos
                custos de manutenção de duas instituições distintas <s>(Secretaria da Receita 
                Federal e Secretaria da Receita Previdenciária, do Ministério da Previdência Social)
            </s>, melhorando as condições de fiscalização e arrecadação dos tributos controlados 
            pela União. Com a fusão, o governo mirava em aumentar a eficiência quanto ao combate à
            sonegação, diminuindo, dessa forma, a concorrência desleal, proporcionando o aumento da
            competitividade entre as empresas. 
            A Receita Federal, no modelo organizacional atual, <b>surgiu da Lei nº 13.844, de 18 de
                 junho de 2019</b>, conversão da Medida Provisória nº 870 de 1º de janeiro de 2019,
                 que agrupou quatro ministérios (Ministério da Fazenda, Ministério do Planejamento,
                 Desenvolvimento e Gestão, Ministério do Desenvolvimento, Indústria, 
                 Comércio Exterior e Serviços e Ministério do Trabalho) sob o grande guarda-chuva
                 do Ministério da Economia. E assim chegamos a denominação atual:
                 <u>Secretaria Especial da Receita Federal do Brasil.</u>
           
            
            
            <p>
                <i>O que faz a Receita Federal?</i>
                Relacionamos abaixo as competências da Receita Federal.
                <li>Administração dos tributos internos e do comércio exterior;</li>
                <li>Gestão e execução das atividades de arrecadação, lançamento, cobrança
                    administrativa, fiscalização, pesquisa e investigação fiscal e controle
                    da arrecadação administrada;</li>
                <li>Gestão e execução dos serviços de administração, fiscalização e controle
                    aduaneiro;</li>
                <li>Repressão ao contrabando e descaminho, no limite da sua alçada;</li>
                <li>Preparo e julgamento, em primeira instância, dos processos administrativos
                    de determinação e exigência de créditos tributários da União;</li>
                <li>Interpretação, aplicação e elaboração de propostas para o aperfeiçoamento
                    da legislação tributária e aduaneira federal;</li>
                <li>Subsídio à formulação da política tributária e aduaneira;</li>
                <li>Subsídio à elaboração do orçamento de receitas e benefícios tributários
                    da União;</li>
                <li>Interação com o cidadão por meio dos diversos canais de atendimento,
                    presencial ou a distância;</li>
                <li>Educação fiscal para o exercício da cidadania;</li>
                <li>Formulação e gestão da política de informações econômico-fiscais;</li>
                <li>Promoção da integração com órgãos públicos e privados afins, mediante
                    convênios para troca de informações, métodos e técnicas de ação fiscal e
                    para a racionalização de atividades, inclusive com a delegação de competência; e
                atuação na cooperação internacional e na negociação e implementação de acordos
                internacionais em matéria tributária e aduaneira.</li>
                Regra geral, a declaração do imposto de renda deve ser enviada à Receita Federal
                até o último dia útil de abril do ano seguinte ao que ocorreram os fatos geradores,
                ou seja, você entrega sua declaração no ano seguinte (exercício) ao ano que você 
                recebeu seus rendimentos (ano-calendário).
                As datas e horários para entrega da declaração são publicados, ano a ano, por
                meio de Instruções Normativas RFB, que tratam especificamente da forma de
                apresentação da declaração para cada ano.
                </p>
                <b>Confira a seguir os prazos de entrega para cada ano:</b>
                <br/>
                <li><s>2022: de 7 de março a 31 de maio de 2022 (ampliado em razão da pandemia da Covid-19);</s></li>
                <li>2021: de 1 de março a 31 de maio de 2021 (ampliado em razão da pandemia da Covid-19);</li>
                <li>2020: de 2 de março a 30 de junho de 2020 (ampliado em razão da pandemia da Covid-19);</li>
                <li>2019: de 7 de março a 30 de abril de 2019;</li>
                <li>2018: de 1º de março a 30 de abril de 2018;</li>
                </div>
                </div>
                </div>
                </center>
            </div>
        }/> <Route path="/consultar" element= { 

           <GetForm/>

        }/>
        <Route path="/quem-somos" element= {
        <div>

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FQ9z6L-XEAY_wy-?format=png&name=small'/>

                    <h4 className='infoIntegrantes'>nome: André Luis Ferreira de Lima Júnior </h4>
                    <h4 className='infoIntegrantes'>RA: 202102668905</h4>              

            </div>   

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FQ9yxvwXsAAYfML?format=png&name=small'/>

                    <h4 className='infoIntegrantes'>nome: Bruna Somera dos Santos</h4>
                    <h4 className='infoIntegrantes'>RA: 202103671608</h4>              

            </div>   

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FUGNwOqXoAA-PT9?format=jpg&name=small'/>

                    <h4 className='infoIntegrantes'>nome: Gabriel Henrique Nascimento</h4>
                    <h4 className='infoIntegrantes'>RA: 201951532368</h4>              

            </div> 

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FQ9yofYXsAEbL4t?format=png&name=small'/>

                    <h4 className='infoIntegrantes'>nome: Leandro Lemos Ferreira da Silva</h4>
                    <h4 className='infoIntegrantes'>RA: 202103343091</h4>              

            </div>   

           
        </div>
        }/>
        </Routes>
           
        </BrowserRouter>
    );
    
}