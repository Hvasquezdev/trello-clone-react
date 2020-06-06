import React, { FC } from 'react';
import { ColumnContainer, ColumnTitle } from '../styles';

interface Props {
  text: string
};

export const Column: FC<React.PropsWithChildren<Props>> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
