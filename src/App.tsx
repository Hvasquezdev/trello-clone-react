import React from 'react';
import { AppContainer } from './styles';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { useAppState } from './AppStateContext';

function App() {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id}>
          {list.tasks.map((task) => <Card text={task.text} key={task.id} />)}
        </Column>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
