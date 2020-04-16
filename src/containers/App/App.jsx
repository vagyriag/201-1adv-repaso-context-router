import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';

export const App = () => {
  return (<div>
    <BrowserRouter>
      
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  </div>);
}