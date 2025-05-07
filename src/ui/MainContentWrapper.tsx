import { ReactNode } from "react";

export const MainContentWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="flex-1 py-6 px-8">{children}</div>;
};
