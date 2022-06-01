import React, { useRef, useState } from "react";


function deleteForm(){



const UseRef = useRef;
const UseState = useState;

const baseURL = "http://localhost:8080/API/DELETE";
  const delete_cpf = UseRef(null);
  const [deleteResult, setDeleteResult] = UseState(null);

  

  async function deleteDataById() {
    const id = delete_cpf.current.value;
    if (id){
      try {
        const res = await fetch(`${baseURL}/${id}`, { method: "delete" });
        const data = await res.json();
        setDeleteResult("CPF inválido!");
      } catch (err) {
        setDeleteResult("Declaração deletada com sucesso!");
      }
    }
  }
  
  
  
  return (
      <div >
          <br/>
        <div className="areaDeletar"  >
            <div className="barraDedeletar">
                 <input type="number" ref={delete_cpf}  placeholder="CPF" />
                 <button  className='deletar' onClick={deleteDataById}>Apagar declaração</button>
            </div>
          <h3> { deleteResult && <div role="alert"><pre>{deleteResult}</pre></div> } </h3>    
        </div>  
        <br/>
        <br/>
        <br/> 
        <br/>
      </div>
  );


}

export default deleteForm;