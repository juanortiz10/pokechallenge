import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const PokeItem = ({ name, url, onClick }) => (
  <ListItem
    button
    onClick={() => onClick(name)}
    className="animated fadeInLeft"
  >
    <Typography>{name}</Typography>
  </ListItem>
);

export default PokeItem;
