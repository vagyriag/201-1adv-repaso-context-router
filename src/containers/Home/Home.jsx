import * as React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/identificar');
  }

  return (<div>
    <h1>Fábrica de personas</h1>

    <Button variant="contained" color="primary"
      onClick={handleClick}>
      Iniciar construcción
    </Button>

  </div>);
}