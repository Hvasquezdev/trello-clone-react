import React, { FC, useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';

interface Props {
  onAdd(text: string): void
}

export const NewItemForm: FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};
