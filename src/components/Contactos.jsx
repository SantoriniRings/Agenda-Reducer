import React, { useReducer, useEffect, useState } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import FormularioAdd from './FormularioAdd'
import TablasContactos from './TablasContactos'

const init = () => {
  const contactos = localStorage.getItem("contactos")
  return contactos ? JSON.parse(contactos) : []
}



const Contactos = () => {

  const [state, dispatch] = useReducer(ContactosReducer, [], init)

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state))
  
  }, [state])
  
  const [formView, setFormView] = useState(false)

  return (
    <div className='container mt-3'>

      <button onClick={() => setFormView(!formView)} className="btn btn-outline-dark btn-lg">{!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}</button>
        
        { formView && <FormularioAdd dispatch={dispatch} /> }

      <TablasContactos contactos={state} dispatch={dispatch} />  
    </div>
  )
}

export default Contactos