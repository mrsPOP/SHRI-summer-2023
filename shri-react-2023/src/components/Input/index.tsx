'use client';

import './styles/input.scss'
import React, {FunctionComponent, ChangeEvent, useState, useEffect } from 'react';

interface InputProps {
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

const Input: FunctionComponent<InputProps> = ({ onChange, placeholder, label }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(inputValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue, onChange]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='input'>
      <label className='input__label'>{label}</label>
      <input
        className='input__input'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
