import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../ui/icons/Icon";
import { NavLink } from "react-router-dom";

interface AsideItemProps {
  icon: IconDefinition;
  title: string;
  link: string;
  onClick: () => void;
}
export const AsideItem = ({ icon, title, link, onClick }: AsideItemProps) => {
  return (
    <li onClick={onClick}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `flex items-center space-x-3 py-2 px-3 rounded hover-brand-red-text hover-transition ${
            isActive ? "brand-red-text" : "text-gray-500"
          }`
        }
      >
        <Icon icon={icon} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
