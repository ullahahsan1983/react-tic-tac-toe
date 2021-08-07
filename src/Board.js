import React from 'react';
import Square from './Square';

class Board extends React.Component{
  
  renderSquare(i) {
    return <Square 
      value={this.props.squares[i]} 
      onClick={() => this.props.clickSquare(i)}
    />;
  }

  render(){
    const winner = this.props.winner;
    let className = "board";
    if (winner) {
      className += ` cross cross-${winner.Position}`;
    }
    return (
      <div className={className}>          
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}          
      </div>      
    );
  }
}

export default Board;

