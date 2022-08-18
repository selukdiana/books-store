import React from 'react';
import './tabs.css';
import classNames from 'classnames';

export interface ITab {
  id: string | number;
  label?: string | number;
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: string | number) => void;
}

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

