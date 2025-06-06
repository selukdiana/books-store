import { useState } from "react";
import { Tabs } from "../../ui-kit/Tabs";
import "./AuthPage.css";
import { SignInForm } from "../../ui-kit/SignInForm";
import { SignUpForm } from "../../ui-kit/SignUpForm";
import { Modal } from "../../ui-kit/Modal";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { type ITab } from "../../types";

export const AuthPage = () => {
  const tabs: ITab[] = [
    { id: "1", label: "Sign in" },
    { id: "2", label: "Sign up" },
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
        <AiOutlineCheckCircle size={"10rem"} color={"rgb(85, 88, 237)"} />
      </Modal>
    </section>
  );
};
