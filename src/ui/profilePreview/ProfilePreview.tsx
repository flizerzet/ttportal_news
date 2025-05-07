interface ProfileButtonProps {
  name: string;
  job: string;
  className?: string;
}
export const ProfilePreview = ({
  name,
  job,
  className,
}: ProfileButtonProps) => {
  return (
    <div className={`header-profile flex items-center gap-2 ${className}`}>
      <div className="profile-img">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full"
        ></img>
      </div>
      <div className="flex flex-col">
        <div className="profile-name text-sm font-medium text-dark-gray">
          {name ?? "имя не определено"}
          {/* Иван Иванов */}
        </div>
        <div className="profile-job text-xs text-gray-500">
          {job ?? "работа не определена"}
          {/* Менеджер по логистике */}
        </div>
      </div>
    </div>
  );
};
