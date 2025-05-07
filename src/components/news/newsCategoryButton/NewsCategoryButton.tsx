import "./NewsCategoryButton.scss";

interface NewsCategoryButtonProps {
  title: string;
  category: string;
  onClick: (tag: string) => void;
  className?: string;
}

export const NewsCategoryButton = ({
  title,
  category,
  onClick,
  className,
}: NewsCategoryButtonProps) => {
  return (
    <button
      className={`cursor-pointer text-nowrap category-tab pb-2 px-1 text-gray-500 hover-brand-red-text ${className}`}
      onClick={() => onClick(category)}
      data-category={category}
    >
      {title}
    </button>
  );
};
