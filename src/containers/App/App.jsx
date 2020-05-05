import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Identify } from '../Identify/Identify';
import { HumanContext } from '../../utils/HumanContext';
import { Configure } from '../Configure/Configure';
import { Human } from '../../components/Human/Human';
import { Typography, Button } from '@material-ui/core';
import { userCol, humansCol } from '../../utils/firebase';

export const App = () => {

  const [ name, setName ] = React.useState('');
  const [ id, setId ] = React.useState('');

  const [ config, setConfig ] = React.useState({
    height: 0,
    color: '#ffff00',
  });

  const [ list, setList ] = React.useState([]);
  const [ loaded, setLoaded ] = React.useState(false);

  React.useEffect(() => {
    const listString = localStorage.getItem('list');
    if(listString !== null){
      setList(JSON.parse(listString));
    }
    /*userCol.doc('gavi').onSnapshot((doc) => {
      if(doc.exists && doc.data().list){
        setList(doc.data().list);
      }
      setLoaded(true);
    });*/
  }, []);

  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    /*if(loaded){
      userCol.doc('gavi').set({
        list: list,
      });
    }*/
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
    //humansCol.doc(id).delete();
  }

  const handleHumanEdit = (id) => {
    const index = list.findIndex((elem) => {
      return elem.id === id;
    });
    const human = list[index];
    setName(human.name);
    setId(human.id);
    setConfig({
      height: human.height,
      color: human.color,
    })
  }

  const handleFinish = () => {
    const newHuman = {
      name: name,
      id: id,
      height: config.height,
      color: config.color,
    };
    setName('');
    setId('');
    setConfig({
      height: 0,
      color: '#ffff00',
    });
    //humansCol.doc(newHuman.id).set(newHuman);

    const index = list.findIndex((elem) => {
      return elem.id === newHuman.id;
    });
    if(index === -1){
      setList([
        ...list,
        newHuman
      ]);
    } else {
      /*const newList = list.slice();
      newList.splice(index, 1, newHuman);
      setList(newList);*/
      setList([
        ...list.slice(0, index),
        newHuman,
        ...list.slice(index + 1)
      ]);
    }
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
            return <div key={human.id}>
              <Human {...human} onDelete={() => handleHumanDelete(human.id)} />
              <Button onClick={() => handleHumanEdit(human.id)}>Editar</Button>
            </div>
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