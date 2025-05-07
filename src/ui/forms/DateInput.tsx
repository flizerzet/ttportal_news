import { useState } from "react";

interface DateInputProps {
  initialDate?: string;
  onDateChange: (date: string) => void;
}
export const DateInput = ({ initialDate, onDateChange }: DateInputProps) => {
  const [date, setDate] = useState(() => {
    const today = initialDate ? new Date(initialDate) : new Date();
    return today.toISOString().split("T")[0]; // Формат 'YYYY-MM-DD'
  });

  const handleDateChange = (e) => {
    const today = initialDate ? new Date(initialDate) : new Date();
    const newDate = e.target.value;
    onDateChange(today.toISOString().split("T")[0]);
    setDate(newDate);
    return today.toISOString().split("T")[0]; // Формат 'YYYY-MM-DD'
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="newsDate"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Дата
      </label>
      <input
        type="date"
        id="newsDate"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
};
