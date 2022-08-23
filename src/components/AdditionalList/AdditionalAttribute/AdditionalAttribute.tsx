import React from 'react';
import { IAdditionalAttributeProps } from '../../../types/props';
import './AdditionalAttribute.css';

export const AdditionalAttribute = ({ name, value }: IAdditionalAttributeProps) => {
  console.log(name)
  return <li className="additional-attribute">
    {`${name}: ${value}`}
  </li>;
};
