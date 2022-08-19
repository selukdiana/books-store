import React, { useState } from 'react';
import { Tabs } from '../../ui-kit/tabs';
import './auth-page.css';
import { ITab } from '../../ui-kit/tabs';
import { SignInForm } from '../../ui-kit/sign-in-form';
import { SignUpForm } from '../../ui-kit/sign-up-form';
import { Modal } from '../../ui-kit/modal';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const AuthPage = () => {
  const tabs: ITab[] = [
    { id: '1', label: 'Sign in' },
    { id: '2', label: 'Sign up' },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };

  const [modalActive, setModalActive] = useState(false);

  return (
    <section className="auth-page">
      <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
      <div className="auth-page__content">
        {selectedTabId === tabs[0].id && (
          <SignInForm active={modalActive} setActive={setModalActive} />
        )}
        {selectedTabId === tabs[1].id && (
          <SignUpForm active={modalActive} setActive={setModalActive} />
        )}
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <AiOutlineCheckCircle size={'100px'} color={'rgb(85, 88, 237)'} />
      </Modal>
    </section>
  );
};
