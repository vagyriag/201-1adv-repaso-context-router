import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';

export const Human = ({ name, id, height, color, onDelete }) => {
  const style = {
    height: `${height}px`,
    backgroundColor: color,
    width: '300px',
    border: '2px solid red',
    marginTop: '20px',
  }
  /*const handleDelete = () => {
    onDelete(id);
  }*/
  return (<div style={style}>
    <Typography>{name}</Typography>
    <Typography>{id}</Typography>

    {onDelete && <Button onClick={onDelete}>
      Borrar
    </Button>}
  </div>);
}

Human.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number,
  color: PropTypes.string,
  onDelete: PropTypes.func,
}