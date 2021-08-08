import X from './starfish-in-bubble.png';
import O from './whale-in-bubble.png';
import SQ from './water-bubble.png';
import BG from './deep-ocean.jpg';
import BB from './sea-line.png';

const Ocean = () => `
body {
  background: url(${BG}) no-repeat center fixed;
  background-size: cover;
}

.board {
  border: 1rem solid aqua;
  border-image: url(${BB}) 30 round;
}

.history-board {
  border-color: aqua;
  background: transparent;
}

.square {
  background: url(${SQ}) no-repeat;
  background-size: 100%;
  font-size: 0;
  border: none;
}

.X, .X:hover {
  background: url(${X}) no-repeat;
  background-size: 100%;
  font-size: 0;
  border: none;
}

.O, .O:hover {
  background: url(${O}) no-repeat;
  background-size: 100%;
  font-size: 0;
  border: none;
}

.match-status {
  color: black;
  background-color: transparent;
  border: none;
  padding: 5px 0 5px 0;
}

.match .start-new {  
  background-color: aqua;
  border-color: aqua;
  color: black;
  float: none;
}

.match .status-text {
  display: none;
}

.match-history .move-text {
  color: black;
  background-color: aqua;
}

.cross:before {
  outline-color: red;
} 

.theme-panel .dropdown-toggle {
  background-color: #0dcaf0;
  color: black;
}
`;

export default Ocean;