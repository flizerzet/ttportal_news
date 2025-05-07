import { AsideItem } from "./AsideItem";
import { asideLinks } from "./aside.data";
import { useAside } from "../../contexts/AsideContext";
import styles from "./Aside.module.scss";

export const Aside = () => {
  const { isOpened, toggleAside } = useAside();

  return (
    <aside
      className={`z-10 absolute w-screen border-r border-gray-200 min-h-screen transition-all py-6 px-4 md:w-64 md:relative bg-white ${
        isOpened ? `${styles.aside_opened}` : `${styles.aside_closed}`
      }`}
    >
      <nav>
        <ul className="space-y-2">
          {asideLinks.map((lnk) => (
            <AsideItem
              onClick={toggleAside}
              key={lnk.link}
              icon={lnk.icon}
              title={lnk.title}
              link={lnk.link}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
