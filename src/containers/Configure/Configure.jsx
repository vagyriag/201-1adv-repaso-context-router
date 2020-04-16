import * as React from 'react';
import { Slider, makeStyles, Typography } from '@material-ui/core';
import { GithubPicker } from 'react-color';
import { HumanContext } from '../../utils/HumanContext';
import { Redirect } from 'react-router-dom';

export const Configure = () => {
  const context = React.useContext(HumanContext);
  const classes = useStyles();

  const handleHeight = (ev, newValue) => {
    context.setConfig({
      ...context.config,
      height: newValue,
    });
  }

  const handleColor = (color) => {
    context.setConfig({
      ...context.config,
      color: color.hex,
    });
  }

  if(context.name.length < 3){
    return <Redirect to="/identificar" />;
  }

  return (<div>
    <Typography>
      {context.name}
    </Typography>

    <label className={classes.label}>
      Altura de la persona
    </label>
    <Slider
      className={classes.slider}
      min={100}
      max={200}
      value={context.config.height}
      onChange={handleHeight}
      />

    <label className={classes.label}>
      Color de la persona
    </label>
    <GithubPicker
      value={context.config.color}
      onChange={handleColor} />
  </div>);
}

const useStyles = makeStyles({
  label: {
    fontSize: 20,
    display: 'block',
  },
  slider: {
    width: 400,
  },
});

/*.slider{
  width: 400px
}*/