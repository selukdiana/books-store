import React, { useState } from 'react';
import { Tabs } from '../../ui-kit/Tabs';
import { IBookDescriptionProps } from '../../types/props';
import './BookDescription.css';
import { ITab } from '../../types';

export const BookDescription = ({ description }: IBookDescriptionProps) => {
  const tabs: ITab[] = [{ id: '1', label: 'Description' }];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };

  return (
    <div className="book-page__description">
      <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
      <div className="book-description__content">
        {selectedTabId === tabs[0].id && <div>{description}</div>}
      </div>
    </div>
  );
};
