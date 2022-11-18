import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, SetPageNumber}) => {

    let pageChange = (event) => {
        SetPageNumber(event.selected + 1);
    };
  return (
    <>
        <ReactPaginate 
            className="pagination justify-content-center my-4 gap-4"
            //para cambiar el nombre de los botones
            nextLabel="Siguiente"
            previousLabel="Anterior"
            onPageChange={pageChange}
            //aca recibo la info de cuentas paginas existen, debo pasarla para que funcione
            pageCount={info?.pages}
            //si estamos en la pgina 1 y pulsamos prev se mantendra en la pagina 1
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        />
    </>
  )
}

export default Pagination