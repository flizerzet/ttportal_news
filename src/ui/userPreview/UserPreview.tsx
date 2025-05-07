import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../icons/Icon";

interface UserPreviewProps {
  user_avatar: string;
  userFio: string;
}
export const UserPreview = ({ user_avatar, userFio }: UserPreviewProps) => {
  return (
    <>
      <div className="flex items-center">
        {user_avatar ? (
          <img
            src={user_avatar}
            // src="https://randomuser.me/api/portraits/men/1.jpg"
            alt=""
            className="h-8 w-8 rounded-full mr-2"
          />
        ) : (
          <Icon
            icon={faUser}
            className="h-8 w-8 mr-2 flex items-center justify-center border-[1px] rounded-full border-neutral-600 text-neutral-600"
          />
        )}
        <span className="text-sm font-medium">{userFio}</span>
      </div>
    </>
  );
};
