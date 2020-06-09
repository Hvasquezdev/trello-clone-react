import React, { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from '../styles';

interface Props {
  text: string
};

export const Column: FC<React.PropsWithChildren<Props>> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
