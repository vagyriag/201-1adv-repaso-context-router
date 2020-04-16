import * as React from 'react';
import { Slider, makeStyles } from '@material-ui/core';
import { GithubPicker } from 'react-color';
import { HumanContext } from '../../utils/HumanContext';

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

  return (<div>
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