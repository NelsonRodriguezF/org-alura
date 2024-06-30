import "./Campo.css"
import { useState } from "react"

const Campo = (props) => {

  const { type = "text" } = props

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }

  const placeHolderModificado = `${props.placeholder}...`

  return <div className={`campo campo-${type}`}>
    <label>{props.titulo}</label>
    <input 
      placeholder={placeHolderModificado} 
      required={props.required}
      value={props.value}
      onChange={manejarCambio}
      type={type}
    />
  </div>
}

export default Campo