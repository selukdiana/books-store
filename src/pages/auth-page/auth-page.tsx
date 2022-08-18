import React, { useState } from 'react';
import { Tabs } from '../../ui-kit/tabs';
import './auth-page.css';
import { ITab } from '../../ui-kit/tabs';
import { SignInForm } from '../../components/sign-in-form';
import { SignUpForm } from '../../components/sign-up-form';

export const AuthPage= () => {
  const tabs: ITab[] = [
    { id: '1', label: 'Sign in' },
    { id: '2', label: 'Sign up' },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };

  return (
    <section className="auth-page">
      <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
      <div className="auth-page__content">
        {selectedTabId === tabs[0].id && (
          <SignInForm/>
        )}
        {selectedTabId === tabs[1].id && (
          <SignUpForm/>
        )}
      </div>
    </section>
  );
};
