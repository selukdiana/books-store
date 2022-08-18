import React from 'react';
import './additional-attribute.css';

interface IAdditionalAttributeProps{
  name: string;
  value: string|undefined;
}

export const AdditionalAttribute = ({ name, value }: IAdditionalAttributeProps) => {
  console.log(name)
  return <li className="additional-attribute">
    {`${name}: ${value}`}
  </li>;
};
