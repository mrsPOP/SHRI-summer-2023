'use client';

import './styles/popup.scss'
import { cartActions } from '@/redux/features/cart';
import { useDispatch } from 'react-redux';
import Cross from './styles/images/popupCross.svg';
import Yes from './styles/images/popupNo.svg';
import No from './styles/images/popupYes.svg'
import Portal from '../Portal';
import Image from 'next/image';

export default function Popup({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  return (
    <Portal>
      <div className='popup'>
        <div className='popup__card'>
          <h2 className='popup__card-head'>Удаление билета</h2>
          <button
            className='popup__card-button-close'
            type="button"
            title="Закрыть"
            onClick={onClose}
          >
          <Image
            src={Cross}
            alt='Закрыть'
            width={16}
            height={16}
          />
          </button>
          <span className='popup__card-text'>
            Вы уверены, что хотите удалить билет?
          </span>
          <button
            className='popup__card-button-yes'
            type="button"
            title="Да"
            onClick={() => {
              dispatch(cartActions.reset(id));
              onClose();
            }}
          >
          <Image
            src={No}
            alt='нет'
            width={57}
            height={40}
          />
          </button>
          <button
            className='popup__card-button-no'
            type="button"
            title="Нет"
            onClick={onClose}
          >
          <Image
            src={Yes}
            alt='да'
            width={57}
            height={40}
          />
          </button>
        </div>
      </div>
    </Portal>
  );
}