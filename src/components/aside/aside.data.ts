import { faBook, faBullseye, faChartBar, faCog, faDatabase, faHome, faNewspaper, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';

export const asideLinks = [
  {
    title: "Главная",
    link: "/",
    icon: faHome,
  },
  {
    title: "Контакты",
    link: "contacts",
    icon: faUsers,
  },
  {
    title: "Справочник",
    link: "enums",
    icon: faBook,
  },
  {
    title: "Отчеты",
    link: "reports",
    icon: faChartBar,
  },
  {
    title: "Цели и KPI",
    link: "goals",
    icon: faBullseye,
  },
  {
    title: "База знаний",
    link: "knowledges",
    icon: faDatabase,
  },
  {
    title: "Новости",
    link: "news",
    icon: faNewspaper,
  },
  {
    title: "Задачи",
    link: "tasks",
    icon: faTasks,
  },
  {
    title: "Настройки",
    link: "setting",
    icon: faCog,
  },
];
