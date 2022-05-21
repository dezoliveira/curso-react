function OutraLista({ itens }){
  return(
    <>
      <h3>Lista:</h3>
      {
        itens.length > 0 ? 
        (
          itens.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        ) : (<h4>Sem dados disponíveis!</h4>)
      }
    </>
  )
}

export default OutraLista