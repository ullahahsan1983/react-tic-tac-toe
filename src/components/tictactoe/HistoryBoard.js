import React from 'react';
import Square from './Square';

class HistoryBoard extends React.Component{
  
  renderSquare(i) {
    const isMarker = this.props.marker === i;
    return <Square 
      value={this.props.squares[i]} 
      isMarker={isMarker}
    />;
  }

  render(){
    const winner = this.props.winner;
    let className = "history-board";
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

export default HistoryBoard;

