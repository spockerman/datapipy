import React from 'react';
 import Card from '../Card';
 import { Container } from './styles';
 import { MdAdd } from 'react-icons/md';

export default function List() {
  return (
    <Container>
    <header>
    <h2>Tarefas</h2>
    <button type="button">
    <MdAdd size={24} color="#FFF"/>
    </button>
    </header>
    <li>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </li>
    
    
    </Container>
  );
}
