'use client';

import './styles/container.scss'
import { FunctionComponent } from 'react';

interface Props {
  ticketNumber: number
}

const Container: FunctionComponent<Props> = ({ticketNumber}) => {
  return (
    <div className="container">
      <p className="container__text">Итого билетов: </p>
      <p className="container__text">{ticketNumber}</p>
    </div>
  )
};

export default Container