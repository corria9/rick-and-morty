import React from 'react'

function Filter({setStatus, setGender, setSpecies, SetPageNumber, status, gender, species}) {

    let genders = ["Mujer", "Hombre", "Sin Genero", "Desconocido"];
      let status1 = ["Alive", "Dead", "Unknown"];
      let species1 = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
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
        setStatus('');
        setGender('');
        setSpecies('');
        SetPageNumber(1);
        window.location.reload(false);
      };

  return (
    <div className='px-3'>
        <div className='text-center fw-bold fs-4 mb-2'>Filtros</div>
        <div style={{cursor: "pointer"}} 
                onClick={clear} 
                className="text-dark text-decoration-underline text-center mb-3">
            Limpiar Filtros
        </div>

    <div className="accordion" id="accordionExample"> 
        <div className='accordion-item'>
            <h2 className="accordion-header" id="panelStayOpne-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Estatus
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >
                <div className="accordion-body">
                    {status1.map((g, index) => <div key={index}>
                        <input key={index} onChange={handleChangeStatus} type="radio" value={g} name={g} checked={status === g ? true : false}  /> {g}
                    </div>)}
                </div>
            </div>
        </div>

        <div className='accordion-item'> 
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Genero
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                    {genders.map((g, index) => <div key={index}>
                    <input key={index} onChange={handleChangeGender} type="radio" value={g} name={g} checked={gender === g ? true : false} />  {g}
                    </div>)}
                </div>
            </div>
        </div>

        <div className='accordion-item'> 
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Especies
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body d-flex flex-wrap gap-3">
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