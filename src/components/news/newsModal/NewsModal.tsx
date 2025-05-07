import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useNewsModal } from "../../../contexts/NewsModalContext";
import { DateInput } from "../../../ui/forms/DateInput";
import { INews } from "../News";
import { useState, useEffect } from "react";

interface NewsModalProps {
  modalTitle: string;
  newsContent?: INews | null;
  onSubmit: (data: INews) => void;
}

export const NewsModal = ({
  modalTitle,
  newsContent,
  onSubmit,
}: NewsModalProps) => {
  const { isOpen, toggleModal } = useNewsModal();
  const [formData, setFormData] = useState<INews>({
    title: "",
    category_tag: "events",
    category: "События",
    timestamp: new Date().toISOString(),
    thumb: "",
    text: "",
  });

  // Инициализация формы при открытии или изменении newsContent
  useEffect(() => {
    if (newsContent) {
      setFormData(newsContent);
    } else {
      setFormData({
        title: "",
        category_tag: "events",
        category: "События",
        timestamp: new Date().toISOString(),
        thumb: "",
        text: "",
      });
    }
  }, [newsContent, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      category: e.target.querySelector(`option[value=${value}]`)!.innerHTML,
    }));
  };

  const handleDateChange = (date: string) => {
    setFormData((prev) => ({
      ...prev,
      timestamp: date,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    toggleModal();
  };

  return (
    <Dialog open={isOpen} onClose={toggleModal}>
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel className="bg-white p-6 rounded-lg max-w-[700px] w-[80%]">
          <div className="modal-content">
            <div className="flex items-center justify-between mb-4">
              <DialogTitle className="text-xl font-bold">
                {modalTitle}
              </DialogTitle>
              <button
                onClick={toggleModal}
                className="close text-[#aaa] text-2xl font-bold cursor-pointer"
              >
                ×
              </button>
            </div>
            <form id="newsForm" onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={formData.id} />
              <div className="mb-4">
                <label
                  htmlFor="newsTitle"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Заголовок новости
                </label>
                <input
                  type="text"
                  id="newsTitle"
                  name="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="newsCategory"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Категория
                </label>
                <select
                  id="newsCategory"
                  name="category_tag"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                  value={formData.category_tag}
                  onChange={handleSelectChange}
                >
                  <option value="events">События</option>
                  <option value="updates">Обновления</option>
                  <option value="achievements">Достижения</option>
                  <option value="employees">Сотрудники</option>
                </select>
              </div>

              <DateInput
                initialDate={formData.timestamp}
                onDateChange={handleDateChange}
              />

              <div className="mb-4">
                <label
                  htmlFor="newsImage"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Изображение (URL)
                </label>
                <input
                  type="url"
                  id="newsImage"
                  name="thumb"
                  value={formData.thumb}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Текст новости
                </label>
                <div className="editor-toolbar">
                  <button type="button">
                    <i className="fas fa-bold"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-italic"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-underline"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-list-ul"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-list-ol"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-align-left"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-align-center"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-align-right"></i>
                  </button>
                </div>
                <textarea
                  id="newsContent"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 min-h-[150px]"
                  name="text"
                  value={formData?.text}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 cursor-pointer py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                  onClick={toggleModal}
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
