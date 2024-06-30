import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
import "./equipo.css"

const Equipo = (props) => {

  //Destructuración
  const { titulo, colorPrimario, colorSegundario, id } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  }

  return <>
    {
      colaboradores.length > 0 &&
      <section className="equipo" style={ obj }>
        <input
          type="color"
          className="input-color"
            value={hexToRgba(colorPrimario, 0.6)}
          onChange={(evento) => {
            actualizarColor(evento.target.value, id);
          }}
        />
        <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
        <div className="colaboradores">
          {
            colaboradores.map((colaborador, index) => 
            <Colaborador 
              datos={colaborador} 
              key={index} 
              colorPrimario={colorPrimario} 
              eliminarColaborador={eliminarColaborador}
              like={like}>
            </Colaborador>)
          }
        </div>
      </section>
    }
  </> 
}

export default Equipo