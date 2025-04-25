import { SubMenuToggle } from "../../Hooks";

const SubMenu = ({ show }) => {
  const { isSubMenu } = SubMenuToggle();
  return (
    <div className={`submenu ${isSubMenu && "show-submenu"}`}>
      <h5>{show && show.page}</h5>
      <div className="submenu-links">
        {isSubMenu &&
          show &&
          show.links.map((_) => (
            <a key={_.id} href={_.url}>
              {_.icon} {_.label}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SubMenu;
