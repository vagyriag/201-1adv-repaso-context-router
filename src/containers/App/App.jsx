import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Identify } from '../Identify/Identify';
import { HumanContext } from '../../utils/HumanContext';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {

  const [ name, setName ] = React.useState('');
  const [ id, setId ] = React.useState(uuidv4());

  const value = {
    name: name,
    setName: setName,
    id: id,
  }

  return (<div>
    <HumanContext.Provider value={value}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/identificar" component={Identify} />
      </BrowserRouter>
    </HumanContext.Provider>
  </div>);
}