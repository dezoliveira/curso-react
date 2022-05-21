import Frase from "./Frase"
import SayMyName from "./SayMyName"

function HelloWorld(){

  return (
    <div>
      <h1>Meu primeiro componente</h1>

      {/* Import do componente */}
      <Frase></Frase>

    </div>
  )
}

export default HelloWorld