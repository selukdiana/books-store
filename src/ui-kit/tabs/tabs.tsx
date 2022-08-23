import React from 'react';
import './Tabs.css';
import classNames from 'classnames';
import { ITabsProps } from '../../types/props';


export const Tabs = ({
  className,
  selectedId,
  tabs,
  onClick,
}:ITabsProps) => {
  return (
    <div className={classNames('tabs', className)}>
      {tabs &&
        tabs.map((tab) => (
          <div
            className={classNames('tab', {
              tab__selected: tab.id === selectedId,
            })}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={classNames('tablabel', {
                tablabel__selected: tab.id === selectedId,
              })}
            >
              {tab.label}
            </div>
          </div>
        ))}
    </div>
  );
};

