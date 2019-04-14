import React, { Component } from "react";
import get from "lodash/get";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import Content from "./components/Content";
import { getSinglePokemon } from "../../redux/actions/pokemons";
import {
  pokemonDataSelector,
  pokemonsFetchingSelector
} from "../../redux/selectors";
import "./style.css";

class PokeDetail extends Component {
  componentDidMount() {
    const { match, getSinglePokemon } = this.props;
    const pokeName = get(match, "params.name");

    if (pokeName) {
      getSinglePokemon({ pokeName });
    }
  }
  render() {
    if (this.props.fetching) {
      return (
        <div className="pokeDetail__progress-box">
          <CircularProgress size={50} />
        </div>
      );
    }
    return <Content {...this.props} />;
  }
}

const actions = {
  getSinglePokemon
};

const mapStateToProps = state => ({
  pokemonDetail: pokemonDataSelector(state),
  fetching: pokemonsFetchingSelector(state)
});

export default connect(
  mapStateToProps,
  actions
)(PokeDetail);
