import React from 'react';
import Square from './Square';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = this.initialState();
  }

  initialState(){
    return {
      squares: Array(9).fill(null),
      xIsNext: true,
      isFinished: false,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (squares[i] || this.state.isFinished) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const isFinished = !squares.some(v => !v) || !!this.calculateWinner(squares);
    this.setState({
      squares: squares, 
      xIsNext: !this.state.xIsNext, 
      isFinished: isFinished,
    });
  }

  startNew() {
    this.setState(this.initialState());
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
    />;
  }

  render(){
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else if(this.state.isFinished){
      status = 'Match tied';
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
     
    return (
      <div>
        <div className="status">{status}</div>
        <button
          hidden={!this.state.isFinished}
          onClick={() => this.startNew()}
        >
          Start New
        </button>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;

