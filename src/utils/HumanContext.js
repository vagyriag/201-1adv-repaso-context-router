import * as React from 'react';

export const HumanContext = React.createContext({
  name: '',
  id: '',
  setName: () => null,
});