import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./style.css";

const PokeInfo = ({ name, weight, base_experience, stats, height }) => {
  const statistics = stats.map(stat => (
    <div
      key={stat.stat.name}
      className="pokeInfo__base-stat animated fadeInUpBig"
    >
      <Typography>{stat.stat.name}</Typography>
      <LinearProgress variant="determinate" value={stat.base_stat} />
    </div>
  ));
  return (
    <Card className="pokeInfo">
      <Typography className="animated fadeIn">
        <strong>Name: </strong>
        {name}
      </Typography>
      <Typography className="animated fadeIn">
        <strong>Weight: </strong>
        {weight}
      </Typography>
      <Typography className="animated fadeIn">
        <strong>Height: </strong>
        {height}
      </Typography>
      <Typography className="animated fadeIn">
        <strong>Base experience: </strong>
        {base_experience}
      </Typography>
      <Fragment>
        <Typography>
          <strong>Statistics</strong>
        </Typography>
        {statistics}
      </Fragment>
    </Card>
  );
};

export default PokeInfo;
