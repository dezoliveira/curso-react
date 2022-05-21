import Item from './Item'

function List(){
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" anoLancamento={1997}></Item>
        <Item marca="Diablo" anoLancamento={1984}></Item>
      </ul>
    </>
  )
}

export default List