import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Routes from './router'
import GlobalStyle from './styles/global';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Board from './components/Board';


function App() {
  return ( 
  <BrowserRouter>
  <DndProvider backend={HTML5Backend}>
  <Header/>
  <Board/>
    <Routes/>
    <GlobalStyle/>
    </DndProvider>
  </BrowserRouter>

  );
}
export default App;