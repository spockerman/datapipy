import React from 'react';
 import Card from '../Card';
 import { Container } from './styles';
 import { MdAdd } from 'react-icons/md';

export default function List({data}) {
  return (
    <Container done={data.done}>
    <header>
    <h2>{ data.title }</h2>
    {data.creatable && (
        <button type="button">
        <MdAdd size={24} color="#FFF"/>
        </button>
      )}
    </header>
    <li>
    {data.cards.map( card => <Card key={card.id} data={card}/>)}
    </li>
    
    
    </Container>
  );
}
