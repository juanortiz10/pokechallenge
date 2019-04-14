import { put, call, takeLatest } from "redux-saga/effects";
import { getCall } from "../api";
import {
  GET_POKEMONS_ERROR,
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_SINGLE_POKEMON_ERROR,
  GET_SINGLE_POKEMON_SUCCESS,
  GET_SINGLE_POKEMON_START
} from "../../consts/actionTypes";

export function* getPokemons({ payload }) {
  try {
    let url = "https://pokeapi.co/api/v2/pokemon";

    if (payload.url) {
      url = payload.url;
    }

    const pokemons = yield call(getCall, url);
    yield put({ type: GET_POKEMONS_SUCCESS, pokemons });
  } catch (error) {
    yield put({ type: GET_POKEMONS_ERROR, error });
  }
}

export function* getSinglePokemon({ payload }) {
  try {
    let url = "https://pokeapi.co/api/v2/pokemon";

    const pokemonData = yield call(getCall, `${url}/${payload.pokeName}`);
    yield put({ type: GET_SINGLE_POKEMON_SUCCESS, pokemonData });
  } catch (error) {
    yield put({ type: GET_SINGLE_POKEMON_ERROR, error });
  }
}

export default function* pokemonsWatcher() {
  yield takeLatest(GET_POKEMONS_START, getPokemons);
  yield takeLatest(GET_SINGLE_POKEMON_START, getSinglePokemon);
}
