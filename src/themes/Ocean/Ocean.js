import X from './aqua-starfish.png';
import O from './aqua-shark.png';
import SQ from './aqua-sphere.png';
import BG from './deep-ocean.jpg';

const primeColor = 'paleturquoise';
const altColor = 'darkturquoise';
const txtColor = 'black';

const Ocean = () => `
body {
  background: url(${BG}) no-repeat center fixed;
  background-size: cover;
}

.history-board {
  border-color: ${primeColor};
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
  float: none;
}

.match-history .move-text {
  color: ${txtColor};
  background-color: ${primeColor};
}

.cross:before {
  outline-color: red;
} 

.btn-primary, .dropdown-item.active {
  background-color: ${primeColor};
  border-color: ${altColor};
  color: ${txtColor};
}

.btn-check:active+.btn-primary, 
.btn-check:checked+.btn-primary, 
.btn-primary.active, 
.btn-primary:active, 
.show>.btn-primary.dropdown-toggle, 
.btn-primary:hover, .btn-primary:focus {
  color: ${txtColor};
  background-color: ${altColor};
  border-color: ${primeColor};
}
`;

export default Ocean;