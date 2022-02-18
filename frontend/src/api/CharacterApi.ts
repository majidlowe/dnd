import {TypeCharacter} from "../Types/TypeCharacter";
import {httpClient} from "../HttpClient";


const baseUri = '/character';


export const getAllCharacters = async (): Promise<TypeCharacter[]> => {
  const response = await httpClient.get(`${baseUri}`)
  return response.data
}
