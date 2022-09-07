import React from 'react'

const TablasContactos = ({ contactos = [], dispatch }) => {

  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    }

    dispatch(deleteAction)
  }

  return (
    <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Número</th>
            <th>Acción</th>
          </tr>  
        </thead>
        <tbody>
          {contactos.map((contacto) => {

            const finalID = contacto.id.split("-")[0]

            return (
              <tr key={contacto.id}>
                <th>{finalID}</th>
                <td>{contacto.nombre}</td>
                <td>{contacto.numero}</td>
                <td>
                  <button onClick={() => handleDelete(contacto.id)} className='btn btn-danger'>Eliminar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}

export default TablasContactos