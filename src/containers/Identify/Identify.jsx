import * as React from 'react';
import { TextField, Typography } from '@material-ui/core';

export const Identify = () => {
  
  return (<div>
    <Typography variant="h4">
      Identificar nuevo humano
    </Typography>
    <TextField
      label="Nombre"
      />
    <TextField
      label="Cédula"
      />
  </div>);
}