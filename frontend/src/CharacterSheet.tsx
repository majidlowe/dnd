import {Paper} from "@mui/material";

interface CharacterSheetProps {
  name: string,
  race: string,
  age: number,
  alignment: string,
  speed: number,
  languages: string[],
  hitPoints: number,
  proficiencies: Proficiencies,

}

interface Proficiencies {
  armor: string,
  weapons: string[],
  tools: string[],
  savingThrows: number,
  skills: string[],
}


export const CharacterSheet: React.FC<CharacterSheetProps> = ({
                                                                name,
                                                                race,
                                                                age,
                                                                alignment,
                                                                speed,
                                                                languages,
                                                                hitPoints,
                                                                proficiencies

                                                              }) => {
  return (
    <Paper>

    </Paper>
  )
}