import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  button?: ReactNode;
  className?: string;
}
export const SectionHeader = ({
  title,
  subtitle,
  button,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between md:items-center items-start gap-4 mb-6 ${className}`}
    >
      <div>
        <h2 className="text-2xl font-bold text-dark-gray">{title}</h2>
        <span>{subtitle}</span>
      </div>
      {button}
    </div>
  );
};
