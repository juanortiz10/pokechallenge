import get from "lodash/get";

export const pokemonsSelector = state =>
  get(state, "pokemons.pokemonResults.results");
export const pokemonsFetchingSelector = state =>
  get(state, "pokemons.fetching");
export const pokemonsSuccessSelector = state => get(state, "pokemons.success");
export const pokemonsErrorSelector = state => get(state, "pokemons.error");
export const pokemonDataSelector = state => get(state, "pokemons.pokemonData");
export const previousPageSelector = state =>
  get(state, "pokemons.pokemonResults.previous");
export const nextPageSelector = state =>
  get(state, "pokemons.pokemonResults.next");
