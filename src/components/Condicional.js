import {useState} from 'react'

function Condicional(){
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    alert(userEmail)
  }

  function limparEmail(e){
    e.preventDefault()
    setUserEmail('')
  }

  return(
    <div>
      <h2>Cadastre o seu e-mail</h2>
      <form>
        <input type="email"
          placeholder="Digite o seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          onClick={enviarEmail}>
            Enviar Email
        </button>
        {userEmail && (
          <div>
            <p>
              Email: {userEmail}
            </p>
            <button onClick={limparEmail}>Limpar</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional