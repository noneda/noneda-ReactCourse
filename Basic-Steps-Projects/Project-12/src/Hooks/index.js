import { useMainContext } from "../Config";

export const ModalHook = () => {
  const { Modal, setModal } = useMainContext();

  const change = () => setModal(!Modal);

  return {
    Modal,
    change,
  };
};

export const AsideHook = () => {
  const { Aside, setAside } = useMainContext();

  const change = () => setAside(!Aside);

  return {
    Aside,
    change,
  };
};
