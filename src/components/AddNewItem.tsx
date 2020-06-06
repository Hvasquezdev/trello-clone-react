import React, { FC, useState } from 'react';
import { AddItemButton } from '../styles';
import { NewItemForm } from './NewItemForm';

interface Props {
  onAdd(text: string): void,
  toggleButtonText: string,
  dark?: boolean
};

export const AddNewItem: FC<Props> = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton
      dark={dark}
      onClick={() => setShowForm(true)}
    >
      {toggleButtonText}
    </AddItemButton>
  );
};


