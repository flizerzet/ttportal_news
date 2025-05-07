export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 mb-2 md:mb-0">
          © {new Date().getFullYear()} Транспортные Технологии. Все права
          защищены.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-gray-500 hover-brand-red-text">
            Политика конфиденциальности
          </a>
          <a href="#" className="text-sm text-gray-500 hover-brand-red-text">
            Условия использования
          </a>
          <a href="#" className="text-sm text-gray-500 hover-brand-red-text">
            Помощь
          </a>
        </div>
      </div>
    </footer>
  );
};
