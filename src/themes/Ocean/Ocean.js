import X from './aqua-starfish.png';
import O from './aqua-shark.png';
import SQ from './aqua-sphere.png';
import BG from './deep-ocean.jpg';

const Ocean = () => `
body {
  background: url(${BG}) no-repeat center fixed;
  background-size: cover;
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

.match .start-new {  
  background-color: aqua;
  border-color: aqua;
  color: black;
  float: none;
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