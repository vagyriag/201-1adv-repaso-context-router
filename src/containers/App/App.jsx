import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Identify } from '../Identify/Identify';
import { HumanContext } from '../../utils/HumanContext';
import { v4 as uuidv4 } from 'uuid';
import { Configure } from '../Configure/Configure';

export const App = () => {

  const [ name, setName ] = React.useState('');
  const [ id, setId ] = React.useState(uuidv4());

  const [ config, setConfig ] = React.useState({
    height: 0,
    color: '#ffff00',
  });

  const value = {
    name: name,
    setName: setName,
    id: id,
    config: config,
    setConfig: setConfig,
  }

  return (<div>
    <HumanContext.Provider value={value}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/identificar" component={Identify} />
        <Route path="/configurar" component={Configure} />
      </BrowserRouter>
    </HumanContext.Provider>
  </div>);
}