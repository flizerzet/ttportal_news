import {
  faBars,
  faBell,
  faEnvelope,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../ui/icons/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAside } from "../../contexts/AsideContext";
import { ProfilePreview } from "../../ui/profilePreview/ProfilePreview";

export const Header: React.FC = () => {
  const { toggleAside } = useAside();

  return (
    <header className="border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center">
          <div className="brand-red-bg text-white p-2 rounded mr-4">
            <FontAwesomeIcon icon={faTruckMoving} />
          </div>
          <h1 className="text-2xl font-bold text-gray-700 md:block hidden">
            Транспортные Технологии
          </h1>
        </div>
      </Link>
      <div className="header-navbar flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700 hover:cursor-pointer w-6 h-6">
          <Icon markerCounter={3} icon={faBell} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 hover:cursor-pointer w-6 h-6">
          <Icon icon={faEnvelope} />
        </button>
        <button
          onClick={() => toggleAside()}
          className="text-gray-500 hover:text-gray-700 hover:cursor-pointer w-6 h-6 md:hidden block"
        >
          <Icon icon={faBars} />
        </button>
        <ProfilePreview
          name="Иван Иванов"
          job="Менеджер по продажам"
          className="md:flex hidden"
        />
      </div>
    </header>
  );
};
