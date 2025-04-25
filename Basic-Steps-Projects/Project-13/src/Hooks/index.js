import { useMainContext } from "../Config";
import subLinks from "../Utils";
import { useEffect } from "react";

export const Refresh = (Pointer, is) => {
  useEffect(() => {
    is !== null ? Pointer.method(true) : Pointer.method(false);
  }, [is]);
};

export const ShowLinks = () => {
  const { show, setShow } = useMainContext();
  const ChangeShow = (variable) => {
    if (variable === "All") {
      setShow(subLinks);
      console.log(show);
      return;
    }

    if (variable === "Clean") {
      setShow(null);
      return;
    }

    const send = subLinks.find((_) => _.page === variable);
    if (send) {
      setShow(send);
      return;
    }
  };

  return { show, ChangeShow };
};

export const SubMenuToggle = () => {
  const { isSubMenu, setSubMenu } = useMainContext();

  const subCh = (bol) => setSubMenu(bol);

  return { isSubMenu, subCh };
};

export const SidebarToggle = () => {
  const { isSidebar, setSidebar } = useMainContext();
  const { setShow } = useMainContext();

  const sideCh = (bol) => setSidebar(bol);

  const clean = () => {
    setShow(null);
  };

  return { isSidebar, sideCh, clean };
};
