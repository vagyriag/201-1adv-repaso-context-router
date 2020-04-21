import * as React from 'react';

export const HumanContext = React.createContext({
  name: '',
  id: '',
  setName: () => null,
  setId: () => null,
  config: {
    height: 0,
    color: '#ffff00',
  },
  setConfig: () => null,
  list: [],
  setList: () => null,
  handleFinish: () => null,
});