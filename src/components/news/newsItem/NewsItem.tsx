import { ImageComponent } from "../../../ui/imageComponent/ImageComponent";
import { formatTimestamp } from "../../../utilities/formatDate";
import { UserPreview } from "../../../ui/userPreview/UserPreview";

interface NewsItemProps {
  title: string;
  label: string;
  category: string;
  timestamp: string;
  text: string;
  author: string;
  author_avatar: string;
  thumb: string;
  layout: string;
  categoryTag: string;
  onNewsEdit: () => void;
  onDeleteNews: () => void;
}

export const NewsItem = ({
  title,
  label,
  category,
  timestamp,
  text,
  author,
  author_avatar,
  thumb,
  layout,
  onNewsEdit,
  onDeleteNews,
}: NewsItemProps) => {
  return (
    <>
      <div
        className={`lg:col-span-2 border flex border-gray-200 rounded-lg overflow-hidden news-card transition hover:border-[#e30613] duration-200 ${
          layout.includes("vertical")
            ? "flex-col"
            : "md:flex-row flex-col p-4 gap-4"
        }`}
      >
        {layout.includes("vertical") && (
          <div className="relative flex-[12rem] grow bg-gray-200">
            <ImageComponent className={"h-[12rem]"} src={thumb} alt={title} />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              {label && (
                <span className="bg-white text-xs font-medium px-2 py-1 rounded">
                  {label}
                </span>
              )}
              {layout.includes("vertical") && (
                <h3 className="text-white font-bold mt-2 text-lg">{title}</h3>
              )}
            </div>
          </div>
        )}

        {layout.includes("horizontal") && (
          <div className="md:w-1/4 mb-4 md:mb-0">
            <div className="h-40 bg-gray-200 rounded overflow-hidden">
              <ImageComponent className={"h-full"} src={thumb} alt={title} />
            </div>
          </div>
        )}

        <div
          className={`flex h-full w-full flex-col justify-between ${
            layout.includes("vertical") && "p-4"
          }`}
        >
          <div>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{formatTimestamp(timestamp)}</span>
              <span className="mx-2">•</span>
              <span>{category}</span>
            </div>
            {layout.includes("horizontal") && (
              <h4 className="font-bold text-lg text-dark-gray mb-2">{title}</h4>
            )}
            <div className={`text-gray-600 mb-3 text-overflow-3-lines`}>
              <p>{text}</p>
            </div>
          </div>
          <div className="flex justify-between items-center min-h-8 flex-col md:flex-row gap-2">
            {!layout.includes("no-user") && (
              <UserPreview user_avatar={author_avatar} userFio={author} />
            )}
            <div className="flex space-x-4">
              <button
                onClick={onNewsEdit}
                className="cursor-pointer text-sm text-gray-500 hover-brand-red-text"
              >
                Редактировать
              </button>
              <button
                // onClick="deleteNews(1)"
                className="cursor-pointer text-sm text-gray-500 hover-brand-red-text"
                onClick={onDeleteNews}
              >
                Удалить
              </button>
              <a href="#" className="text-sm brand-red-text hover:underline">
                Читать далее
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
