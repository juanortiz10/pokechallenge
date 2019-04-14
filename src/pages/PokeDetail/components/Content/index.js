import React, { Component } from "react";
import get from "lodash/get";

import PokeInfo from "../PokeInfo";

class Content extends Component {
  render() {
    const pokemonDetail = get(this.props, "pokemonDetail");

    if (!pokemonDetail) {
      return <div />;
    }

    return (
      <div>
        <PokeInfo {...pokemonDetail} />
      </div>
    );
  }
}

export default Content;
