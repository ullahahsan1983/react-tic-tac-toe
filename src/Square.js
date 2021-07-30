function Square(props){
  const style = props.value ? `square ${props.value}` : `square`;
  return (
    <button 
      className={style} 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;