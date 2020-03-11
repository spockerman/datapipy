import React from 'react';
import Routes from './router'
import GlobalStyle from './styles/global';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return ( 
  <BrowserRouter>
  <Header/>
  <Board/>
    <Routes/>
    <GlobalStyle/>
  </BrowserRouter>

  );
}
export default App;