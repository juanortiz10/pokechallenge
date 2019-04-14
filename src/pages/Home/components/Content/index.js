import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import PokeItem from "../PokeItem";
import "./style.css";

class Content extends Component {
  handlePokeItemClick = pokeName =>
    this.props.history.push(`/pokemon/${pokeName}`);

  renderPokeItems() {
    const { pokemons } = this.props;

    if (pokemons) {
      return pokemons.map(pokemon => (
        <PokeItem
          key={pokemon.name}
          {...pokemon}
          onClick={this.handlePokeItemClick}
        />
      ));
    }
  }

  renderPagingButtons() {
    const { nextPage, previousPage, onLoadPokemons } = this.props;

    return (
      <div className="home-content__footer-buttons-box">
        <Button
          variant="contained"
          color="primary"
          disabled={previousPage ? null : true}
          className="home-content__footer-button"
          onClick={() => onLoadPokemons(previousPage)}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={nextPage ? null : true}
          className="home-content__footer-button"
          onClick={() => onLoadPokemons(nextPage)}
        >
          Next
        </Button>
      </div>
    );
  }

  render() {
    const { error, fetching } = this.props;

    if (fetching) {
      return (
        <div>
          <CircularProgress size={50} />
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <Typography>Something went wrong!, Please try again</Typography>
        </div>
      );
    }

    return (
      <div>
        {this.renderPokeItems()}
        {this.renderPagingButtons()}
      </div>
    );
  }
}

export default Content;
