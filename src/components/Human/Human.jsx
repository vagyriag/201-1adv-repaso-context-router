import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export const Human = ({ name, id, height, color }) => {
  const style = {
    height: `${height}px`,
    backgroundColor: color,
    width: '300px',
    border: '2px solid red',
    marginTop: '20px',
  }
  return (<div style={style}>
    <Typography>{name}</Typography>
    <Typography>{id}</Typography>
  </div>);
}

Human.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number,
  color: PropTypes.string,
}