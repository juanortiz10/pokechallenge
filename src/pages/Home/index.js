import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPokemons } from "../../redux/actions/pokemons";
import {
  pokemonsSelector,
  pokemonsFetchingSelector,
  pokemonsSuccessSelector,
  pokemonsErrorSelector,
  previousPageSelector,
  nextPageSelector
} from "../../redux/selectors";
import Content from "./components/Content";

class Home extends Component {
  static propTypes = {
    getPokemons: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.any,
    pokemons: PropTypes.array
  };

  componentDidMount() {
    this.loadPokemons();
  }

  loadPokemons = url => {
    this.props.getPokemons({ url });
  };

  render() {
    return <Content {...this.props} onLoadPokemons={this.loadPokemons} />;
  }
}

const actions = {
  getPokemons
};

const mapStateToProps = state => ({
  fetching: pokemonsFetchingSelector(state),
  success: pokemonsSuccessSelector(state),
  error: pokemonsErrorSelector(state),
  pokemons: pokemonsSelector(state),
  previousPage: previousPageSelector(state),
  nextPage: nextPageSelector(state)
});

export default connect(
  mapStateToProps,
  actions
)(Home);
