import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  NewsModalProvider,
  useNewsModal,
} from "../../contexts/NewsModalContext";
import { Icon } from "../../ui/icons/Icon";
import { SectionHeader } from "../../ui/SectionHeader";
import { FutureEvents } from "./futureEvents/FutureEvents";
import { NewsFilter } from "./newsFilter/NewsFilter";
import { NewsModal } from "./newsModal/NewsModal";
import { useState } from "react";
import { newsCategories, news } from "./news.data";

export interface INews {
  id: number;
  title: string;
  label: string;
  category: string;
  category_tag: string;
  timestamp: string;
  text: string;
  author: string;
  author_avatar: string;
  thumb: string;
}

export interface INewsCategory {
  title: string;
  category: string;
}

export const News = () => {
  return (
    <NewsModalProvider>
      <NewsContent />
    </NewsModalProvider>
  );
};

const NewsContent = () => {
  const { toggleModal } = useNewsModal();
  // const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [currentEdit, setCurrentEdit] = useState<INews | null>(null);
  const [newsArray, setNewsArray] = useState<INews[]>(news);

  let modalTitle: string = "Добавить новость";

  const handleModalOpening = (mode: "add" | "edit", currentNews?: INews) => {
    setCurrentEdit(currentNews || null);
    if (mode == "add") {
      handleAddNew();
    } else {
      handleEdit();
    }
  };

  const handleEdit = () => {
    modalTitle = "Редактировать новость";
    toggleModal();
  };

  const handleAddNew = () => {
    modalTitle = "Добавить новость";
    toggleModal();
  };

  const handleSave = (data: INews) => {
    if (data.id) {
      setNewsArray((prev) =>
        prev.map((item) => (item.id === data.id ? { ...data } : item))
      );
    } else {
      const newNews: INews = {
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      };
      setNewsArray((prev) => [...prev, newNews]);
    }
  };

  const handleDelete = (data: INews) => {
    setNewsArray((prev) => {
      return (prev = prev.filter((item) => item.id !== data.id));
    });
  };

  return (
    <section>
      <SectionHeader
        title="Корпоративные новости"
        button={
          <button
            onClick={() => handleModalOpening("add")}
            id="addNewsBtn"
            className="brand-red-bg text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Icon icon={faPlus} />
            <span>Добавить новость</span>
          </button>
        }
      />
      <NewsModal
        modalTitle={modalTitle}
        newsContent={currentEdit}
        onSubmit={handleSave}
      />
      <NewsFilter
        news={newsArray}
        newsCategories={newsCategories}
        onEditNews={handleModalOpening}
        onDelete={handleDelete}
      />
      <FutureEvents />
    </section>
  );
};
