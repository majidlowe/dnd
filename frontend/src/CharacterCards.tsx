import {TypeCharacter} from "./Types/TypeCharacter";
import React, {useEffect, useState} from "react";
import {CharacterCard} from "./CharatcerCard";
import {getAllCharacters} from "./api/CharacterApi";


interface CharacterCardProps {
  name?: string,
  race?: string,
  hitPoints?: number,
}


export const CharacterCards: React.FC<CharacterCardProps> = ({name, race, hitPoints}) => {

  const [characters, setCharacters] = useState<TypeCharacter[]>([
    {name: 'Majid', race: 'Robot', hitPoints: 20},
    {name: 'Mi-Mi', race: 'Dog', hitPoints: 10},
    {name: 'Athena', race: 'Helian', hitPoints: 15},
    {name: 'Diane', race: 'Biter', hitPoints: 17},
    {name: 'Bastet', race: 'Lioness', hitPoints: 33},
    {name: 'DeCeline', race: 'Lap-Sitter', hitPoints: 67},
  ]);


  useEffect(() => {
    getAllCharacters().then(data => {
      setCharacters(data)
    })
  }, [])


  return (
    <ul>
      {characters.map((character, index) => (
        <ul key={index}>
          <CharacterCard
            name={character.name}
            race={character.race}
            hitPoints={character.hitPoints}
          />
        </ul>
      ))}
    </ul>
  )
}

