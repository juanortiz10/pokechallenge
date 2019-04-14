import {
  GET_POKEMONS_START,
  GET_SINGLE_POKEMON_START
} from "../../consts/actionTypes";

// @flow
export const getPokemons = payload => ({
  type: GET_POKEMONS_START,
  payload
});

// @flow
export const getSinglePokemon = payload => ({
  type: GET_SINGLE_POKEMON_START,
  payload
});
