import X from './yellow-banana.png';
import O from './yellow-monkey.png';
import SQ from './yellow-sphere.png';
import BG from './forest.jpg';

const Forest = () => `
body {
  background: url(${BG}) no-repeat center fixed;
  background-size: cover;
}

.history-board {
  border-color: palegreen;
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

.match .start-new {  
  background-color: palegreen;
  border-color: palegreen;
  color: black;
  float: none;
}

.match-history .move-text {
  color: black;
  background-color: palegreen;
}

.cross:before {
  outline-color: red;
} 

.theme-panel .dropdown-toggle {
  background-color: palegreen;
  color: black;
}
`;

export default Forest;