import * as React from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { HumanContext } from '../../utils/HumanContext';
import { Link } from 'react-router-dom';

export const Identify = () => {
  const context = React.useContext(HumanContext);
  
  const handleName = (ev) => {
    context.setName(ev.target.value);
  }

  return (<div>
    <Typography variant="h4">
      Identificar nuevo humano
    </Typography>
    <TextField
      label="Nombre"
      value={context.name}
      onChange={handleName}
      />
    <TextField
      label="Cédula"
      value={context.id}
      disabled
      />

    {context.name.length > 2 && <Button variant="outlined" color="secondary"
      component={Link} to="/configurar">
      Configurar
    </Button>}
  </div>);
}