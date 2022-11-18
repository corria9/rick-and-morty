import React from 'react'

function Filter({setStatus, setGender, setSpecies, SetPageNumber, status, gender, species}) {

    let genders = ["Mujer", "Hombre", "Sin Genero", "Desconocido"];
      let status1 = ["Vivo", "Muerto", "Desconocido"];
      let species1 = [
        "Humano",
        "Alien",
        "Humanoide",
        "Poopybutthole",
        "Mythological",
        "Desconocido",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ]; 

      const handleChangeStatus=e=>{
        SetPageNumber(1);
        setStatus(e.target.value);
      }

      const handleChangeGender=e=>{
        SetPageNumber(1);
        setGender(e.target.value);
      }

      const handleChangeSpecies=e=>{
        SetPageNumber(1);
        setSpecies(e.target.value);
      }

      let clear = () => {
        setStatus("");
        setGender("");
        setSpecies("");
        SetPageNumber(1);
        window.location.reload(false);
      };

  return (
    <div >
        <div>Filtros</div>
        <div style={{cursor: "pointer"}} 
                onClick={clear} 
                >
            Limpiar Filtros
        </div>

    <div id="accordionExample">
        
        <div>
            <h2 id="panelStayOpne-headingOne">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Estatus
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" aria-labelledby="panelsStayOpen-headingOne" >
                <div>
                    {status1.map((g, index) => <div key={index}>
                        <input key={index} onChange={handleChangeStatus} type="radio" value={g} name={g} checked={status === g ? true : false}  /> {g}
                    </div>)}
                </div>
            </div>
        </div>

        <div> 
            <h2 id="panelsStayOpen-headingTwo">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Genero
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" aria-labelledby="panelsStayOpen-headingTwo">
                <div>
                    {genders.map((g, index) => <div key={index}>
                    <input key={index} onChange={handleChangeGender} type="radio" value={g} name={g} checked={gender === g ? true : false} />  {g}
                    </div>)}
                </div>
            </div>
        </div>

        <div> 
            <h2 id="panelsStayOpen-headingThree">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Especies
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" aria-labelledby="panelsStayOpen-headingThree">
                <div>
                    {species1.map((g, index) => <div key={index}>
                    <input key={index} onChange={handleChangeSpecies} type="radio" value={g} name={g} checked={species === g ? true : false} />  {g}
                    </div>)}
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Filter