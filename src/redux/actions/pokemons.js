import { GET_POKEMONS_START, GET_SINGLE_POKEMON_START } from '../../consts/actionTypes';

export const getPokemons = payload => ({
  type: GET_POKEMONS_START,
  payload
});

export const getSinglePokemon = payload => ({
  type: GET_SINGLE_POKEMON_START,
  payload
});
