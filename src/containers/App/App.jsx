import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Identify } from '../Identify/Identify';
import { HumanContext } from '../../utils/HumanContext';
import { Configure } from '../Configure/Configure';
import { Human } from '../../components/Human/Human';
import { Typography, Button } from '@material-ui/core';

export const App = () => {

  const [ name, setName ] = React.useState('');
  const [ id, setId ] = React.useState('');

  const [ config, setConfig ] = React.useState({
    height: 0,
    color: '#ffff00',
  });

  const [ list, setList ] = React.useState([]);

  React.useEffect(() => {
    const listString = localStorage.getItem('list');
    if(listString !== null){
      setList(JSON.parse(listString));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [ list ]);

  const handleDelete = () => {
    setList([]);
  }

  const handleHumanDelete = (id) => {
    const index = list.findIndex((elem) => {
      return elem.id === id;
    });
    setList([
      ...list.slice(0, index),
      ...list.slice(index + 1),
    ]);
  }

  const handleFinish = () => {
    setList([
      ...list,
      {
        name: name,
        id: id,
        height: config.height,
        color: config.color,
      }
    ]);
    setName('');
    setConfig({
      height: 0,
      color: '#ffff00',
    });
  }

  const value = {
    name: name,
    setName: setName,
    id: id,
    setId: setId,
    config: config,
    setConfig: setConfig,
    list: list,
    setList: setList,
    handleFinish,
  }

  return (<div>
    <HumanContext.Provider value={value}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/identificar" component={Identify} />
        <Route path="/configurar" component={Configure} />

        <Human name={name} id={id} height={config.height} color={config.color} />

        {list.length > 0 && <div>
          <Typography style={{ marginTop: 100 }}>
            Lista de humanos creados:
          </Typography>
          {list.map((human) => {
            //return <Human key={human.id} {...human} onDelete={handleHumanDelete} />
            return <Human key={human.id} {...human} onDelete={() => handleHumanDelete(human.id)} />
            //return <Human key={human.id} name={human.name} id={human.id} height={human.height} color={human.color} />;
          })}
          <Button onClick={handleDelete}>
            Borrar galería
          </Button>
        </div>}
      </BrowserRouter>
    </HumanContext.Provider>
  </div>);
}