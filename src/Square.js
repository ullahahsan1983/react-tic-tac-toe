function Square(props){
  let className = 'square';
  if (props.value) {
    className += ` ${props.value}`;
  }
  if (props.isMarker) {
    className += ' marker';
  }
  
  return (
    <button 
      className={className} 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;