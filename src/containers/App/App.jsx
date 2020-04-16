import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Identify } from '../Identify/Identify';

export const App = () => {
  return (<div>
    <BrowserRouter>
      
      <Route path="/" exact component={Home} />
      <Route path="/identificar" component={Identify} />
    </BrowserRouter>
  </div>);
}