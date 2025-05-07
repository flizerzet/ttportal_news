export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const year = date.getFullYear();
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const month = months[date.getMonth()];
  return `${day} ${month} ${year} г.`;
};

export const getTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes =
    date.getMinutes().toString().length == 1
      ? `0${date.getMinutes()}`
      : date.getMinutes();
  return `${hours}:${minutes}`;
};
