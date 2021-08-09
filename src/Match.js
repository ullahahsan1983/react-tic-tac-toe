import React from 'react';
import Board from './Board';
import HistoryBoard from './HistoryBoard';

class Match extends React.Component{
  constructor(props){
    super(props);

    this.state = this.initialState();
  }
  
  initialState(){
    return {
      history: [{
        squares: Array(9).fill(null),
        marker: null,
        winner: null,
      }],
      xIsNext: true,
      isFinished: false,
    };
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
        return { Symbol : squares[a], Position: `${a}${b}${c}` };
      }
    }
    return null;
  }

  getStatus() {
    const history = this.state.history;
    const current = history[history.length -1];
    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner.Symbol;
    }
    else if(this.state.isFinished){
      status = 'Match tied';
    }
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return status;
  }
  
  clickSquare(i) {
    const history = this.state.history;
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if (this.state.isFinished || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const winner = this.calculateWinner(squares);
    const isFinished = !squares.some(v => !v) || winner;
    
    this.setState({
      history: history.concat({
        squares: squares,
        marker: i,
        winner: winner,
      }), 
      xIsNext: !this.state.xIsNext, 
      isFinished: isFinished,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length -1];

    const buttonText = !this.state.isFinished ? 'Start Over' : 'Start Next Match';
    const moves = history.filter(e => e.marker !== null).map((step, move) => {
      const desc = step.winner ? `${step.winner.Symbol} wins!` 
        : (move >= 8 ? "It's a tie!" : `${move + 1}`);
      return (
        <span key={move}>
          <span className="badge move-text">{desc}</span>
          <HistoryBoard 
            squares={step.squares}
            marker={step.marker}
            winner={step.winner}
          />
        </span>
      );
    });

    return (
      <div className="match">
        <div className="match-board">
          <div className="match-status">
            <button
                className="start-new btn btn-primary"
                onClick={() => this.startNew()}
              >
                {buttonText}
            </button>
          </div>
          <Board 
            squares={current.squares}
            clickSquare={(i) => this.clickSquare(i)}
            winner={current.winner}
          />
        </div>
        <div className="match-history">          
          {moves}
        </div>
      </div>
    );
  }
}

export default Match;
