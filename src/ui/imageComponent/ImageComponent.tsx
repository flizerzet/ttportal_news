import { Icon } from "../icons/Icon";
import { faImage } from "@fortawesome/free-solid-svg-icons";

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
}
export const ImageComponent = ({
  src,
  alt,
  className,
}: ImageComponentProps) => {
  return src ? (
    <img src={src} alt={alt} className="w-full h-[12rem] object-cover" />
  ) : (
    <div
      className={`flex items-center justify-center text-4xl text-neutral-600 ${className}`}
    >
      <Icon icon={faImage} />
    </div>
  );
};
