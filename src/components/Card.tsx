import React, { FC } from 'react';
import { CardContainer } from '../styles';

interface Props {
  text: string
};

export const Card: FC<Props> = ({ text }) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  );
};

