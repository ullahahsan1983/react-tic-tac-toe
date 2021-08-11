import React from 'react';
import ReactDOM from 'react-dom';
import Match from './components/tictactoe/Match';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reportWebVitals from './reportWebVitals';
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

ReactDOM.render(
  <React.StrictMode>
    <ThemeSelector />
    <SideBar />
    <Match />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
