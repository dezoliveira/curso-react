function Button (props){
  return <button onClick={props.event} class="button">{props.text}</button>
}

export default Button