import X from './blue-storm-cloud.png';
import O from './blue-sun-cloud.png';
import SQ from './blue-sphere.png';
import BG from './stormy-sky.png';

const Stormy = () => `
body {
  background: url(${BG}) no-repeat center fixed;
  background-size: cover;
}

.history-board {
  border-color: lightgray;
  background-color: transparent;
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
}

.O, .O:hover {
  background: url(${O}) no-repeat;
  background-size: 100%;
  font-size: 0;
}

.match .start-new {  
  background-color: lightgray;
  border-color: lightgray;
  color: darkslategrey;
}

.match-history .move-text {
  color: darkslategray;
  background-color: lightgray;
}

.cross:before {
  outline-color: red;
}

.theme-panel .dropdown-toggle {
  background-color: lightgray;
  color: darkslategray;
}
`;

export default Stormy;