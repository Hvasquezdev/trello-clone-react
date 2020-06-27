import React, { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from '../styles';
import { useAppState } from '../AppStateContext';

interface Props {
  text: string,
  index: number,
  id: string
};

export const Column: FC<Props> = ({ text, index, id }) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
        {state.lists[index].tasks.map((task) => (
          <Card text={task.text} key={task.id} />)
        )}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({
          type: 'ADD_TASK',
          payload: {
            text,
            listId: id
          }
        })}
        dark
      />
    </ColumnContainer>
  );
};
