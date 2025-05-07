import { useEffect, useState } from "react";
import { NewsCategoryButton } from "../newsCategoryButton/NewsCategoryButton";
import styles from "./NewsFilter.module.scss";
import { NewsItem } from "../newsItem/NewsItem";
import { INews, INewsCategory } from "../News";

interface NewsFilterProps {
  news: INews[];
  newsCategories: INewsCategory[];
  onEditNews: (mode: "add" | "edit", currentNews?: INews) => void;
  onDelete: (news: INews) => void;
}

export const NewsFilter = ({
  news,
  newsCategories,
  onEditNews,
  onDelete,
}: NewsFilterProps) => {
  const [filteredNews, setFilteredNews] = useState(news);
  const [activeCategory, setActiveCategory] = useState("all");

  const onBtnClickHandler = (tag: string) => {
    setActiveCategory(tag);
  };

  useEffect(() => {
    if (activeCategory !== "all") {
      const filtered = news.filter(
        (item) => item.category_tag === activeCategory
      );
      filtered.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
      setFilteredNews(filtered);
    } else {
      const sortedNews = [...news].sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      setFilteredNews(sortedNews);
    }
  }, [activeCategory, news]);

  return (
    <>
      <div className="flex space-x-6 border-b border-gray-200 mb-6 overflow-scroll w-screen pb-2 md:pb-0">
        {newsCategories.map((e) => {
          if (e.category == activeCategory) {
            return (
              <NewsCategoryButton
                onClick={onBtnClickHandler}
                key={e.category}
                title={e.title}
                category={e.category}
                className={"active"}
              />
            );
          } else {
            return (
              <NewsCategoryButton
                onClick={onBtnClickHandler}
                key={e.category}
                title={e.title}
                category={e.category}
              />
            );
          }
        })}
      </div>
      <section
        className={`${styles.news_container} grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-6 mb-10`}
      >
        {filteredNews.map((e, idx) => {
          if (idx == 0) {
            return (
              <div className="h-full">
                <div className="xl:flex hidden h-full">
                  <NewsItem
                    key={e.id}
                    title={e.title}
                    label={e.label}
                    category={e.category}
                    timestamp={e.timestamp}
                    text={e.text}
                    author={e.author}
                    author_avatar={e.author_avatar}
                    thumb={e.thumb}
                    layout={"vertical"}
                    categoryTag={e.category_tag}
                    onNewsEdit={() => onEditNews("edit", e)}
                    onDeleteNews={() => onDelete(e)}
                  />
                </div>
                <div className="xl:hidden flex h-full">
                  <NewsItem
                    key={e.id}
                    title={e.title}
                    label={e.label}
                    category={e.category}
                    timestamp={e.timestamp}
                    text={e.text}
                    author={e.author}
                    author_avatar={e.author_avatar}
                    thumb={e.thumb}
                    layout={"vertical no-user"}
                    categoryTag={e.category_tag}
                    onNewsEdit={() => onEditNews("edit", e)}
                    onDeleteNews={() => onDelete(e)}
                  />
                </div>
              </div>
            );
          } else if (idx == 1) {
            return (
              <NewsItem
                key={e.id}
                title={e.title}
                label={e.label}
                category={e.category}
                timestamp={e.timestamp}
                text={e.text}
                author={e.author}
                author_avatar={e.author_avatar}
                thumb={e.thumb}
                layout={"vertical no-user"}
                categoryTag={e.category_tag}
                onNewsEdit={() => onEditNews("edit", e)}
                onDeleteNews={() => onDelete(e)}
              />
            );
          } else {
            return (
              <NewsItem
                label=""
                key={e.id}
                title={e.title}
                category={e.category}
                timestamp={e.timestamp}
                text={e.text}
                author={e.author}
                author_avatar={e.author_avatar}
                thumb={e.thumb}
                layout={"horizontal"}
                categoryTag={e.category_tag}
                onNewsEdit={() => onEditNews("edit", e)}
                onDeleteNews={() => onDelete(e)}
              />
            );
          }
        })}
      </section>
    </>
  );
};
