import React from "react";

function Square(props){
  let className = 'square btn';
  if (props.value) {
    className += ` ${props.value}`;
  }
  if (props.isMarker) {
    className += ' marker';
  }
  else if (props.value || props.isSnap) {
    className += ' occupied'
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