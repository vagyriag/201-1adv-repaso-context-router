import * as React from 'react';
import { Slider, makeStyles, Typography, Button } from '@material-ui/core';
import { GithubPicker } from 'react-color';
import { HumanContext } from '../../utils/HumanContext';
import { Redirect, useHistory } from 'react-router-dom';

export const Configure = () => {
  const context = React.useContext(HumanContext);
  const classes = useStyles();
  const history = useHistory();

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

  const handleFinish = () => {
    context.setList([
      ...context.list,
      {
        name: context.name,
        id: context.id,
        height: context.config.height,
        color: context.config.color,
      }
    ]);
    context.setName('');
    context.setConfig({
      height: 0,
      color: '#ffff00',
    });
    history.push('/');
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

    <Button
      onClick={handleFinish}>
      Terminar
    </Button>
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