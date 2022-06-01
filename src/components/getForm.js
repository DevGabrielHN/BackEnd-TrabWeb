import React, { useRef, useState,useEffect } from "react";


import {useForm} from 'react-hook-form'
import axios from "axios";

function GetForm(){


    const [data, setData] = useState([]);



    const baseURL = "http://localhost:8080/API/GET";
    const get_cpf = useRef(null);
    const [getResult, setGetResult] = useState([]);
    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 3);
    }



    async function getDataById() {
        const id = get_cpf.current.value;
        if (id) {
          try {     
            const res = await fetch(`${baseURL}/${id}`);
            const data = await res.json();
            const result = {
               data
            };            
            setGetResult(fortmatResponse(result.data));
          } catch (err) {
            setGetResult(err.message);
          }
        }
      } 

      
    
      const {register,handleSubmit,formState:{erros} } = useForm()
      const api = axios.create({
        baseURL: "http://localhost:8080/API",
    });



        return (
            <div >
                <br/>
                <div >
                    <div className="barraConsulta">
                        <input type="number" ref={get_cpf} placeholder="CPF" />
                        <button className="btConsulta" onClick={getDataById}>Consultar</button>  
                    </div>


            <form>
            <fieldset>
                     <div role="alert"><h3><pre>{getResult}</pre></h3></div>                 
                </fieldset>
            </form>

              </div>

            </div>
          );



}
export default GetForm;