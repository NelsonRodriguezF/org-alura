import "./MiOrg.css"
import { useState } from "react"

const MiOrgo = (props) => {

  // const [nombreVariable, funcionQueactualiza] = useState(valorInicial)
  const [mostrar, actualizarMostrar] = useState(true); 

  const manejarClick = () => {
    actualizarMostrar(!mostrar)
  }

  return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="img/add.png" alt="add" onClick={props.cambiarMostrar}/>
  </section>
}

export default MiOrgo