import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';
import {TypeCharacter} from "../Types/TypeCharacter";




const testCharacters: TypeCharacter[] = [
  {name: 'Icing Death', race: 'unknown', hitPoints:10},
  {name: 'Delina', race: 'human', hitPoints:10},
  {name: 'Gretchen Titchwillow', race: 'human', hitPoints:10}];


describe('character view', () => {

  test('user should see characters on load',() => {


    render(<App
    />);

    expect(screen.getByText('Icing Death')).toBeInTheDocument();
    expect(screen.getByText('Delina')).toBeInTheDocument();
    expect(screen.getByText('Gretchen Titchwillow')).toBeInTheDocument();


  });

});
