import get from "lodash/get";
import {
  GET_POKEMONS_ERROR,
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_SINGLE_POKEMON_ERROR,
  GET_SINGLE_POKEMON_SUCCESS,
  GET_SINGLE_POKEMON_START
} from "../../consts/actionTypes";

const initialState = {
  pokemons: null,
  success: null,
  error: null,
  fetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_START:
      return { ...state, fetching: true, success: null, error: null };
      break;
    case GET_POKEMONS_ERROR:
      return { ...state, success: null, error: true, fetching: false };
      break;
    case GET_POKEMONS_SUCCESS:
      const pokemonResults = get(action, "pokemons.data");
      return {
        ...state,
        pokemonResults,
        success: true,
        error: null,
        fetching: false
      };
      break;
    case GET_SINGLE_POKEMON_START:
      return { ...state, fetching: true, success: null, error: null };
      break;
    case GET_SINGLE_POKEMON_SUCCESS:
      const pokemonData = get(action, "pokemonData.data");
      return {
        ...state,
        fetching: false,
        success: true,
        pokemonData,
        error: null
      };
      break;
    case GET_SINGLE_POKEMON_ERROR:
      return { ...state, error: true, success: null, fetching: false };
      break;
    default:
      return { ...state };
  }
}
