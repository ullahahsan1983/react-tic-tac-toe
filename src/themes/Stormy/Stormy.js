import X from './cloud.png';
import O from './sun.png';
import BG from './storm.png';

const Stormy = () => `
body {
  background: url(${BG}) no-repeat center fixed;
  background-size: cover;
}

.history-board {
  border-color: lightgray;
  background-color: lightgray;
}

.square {
  background-color: darkslategrey;
}

.marker {
  background-color: lightgoldenrodyellow;
}

.occupied {
  background-color: antiquewhite;
}

.X, .X:hover {
  background: transparent url(${X}) no-repeat;
  background-size: 100%;
  font-size: 0;
}

.O, .O:hover {
  background: url(${O}) no-repeat;
  background-size: 100%;
  font-size: 0;
}

.match-status {
  color: darkslategrey;
  background-color: lightgray;
}

.match .start-new {  
  background-color: lightgray;
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