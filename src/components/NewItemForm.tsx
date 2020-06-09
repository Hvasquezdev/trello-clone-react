import React, { FC, useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';
import { useFocus } from '../utils/useFocus'

interface Props {
  onAdd(text: string): void
}

export const NewItemForm: FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};
