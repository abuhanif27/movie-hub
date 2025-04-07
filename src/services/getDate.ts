const MONTHS = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

const getMonths = (date: string) => {
  const month = date.split("-")[1];
  return MONTHS[month as keyof typeof MONTHS];
};

const getYear = (date: string) => date.split("-")[0];

const getDay = (date: string) => date.split("-")[2];

const getDate = (date: string) => {
  const year = getYear(date);
  const day = getDay(date);
  const month = getMonths(date);

  return `${month} ${day}, ${year}`;
};

export default getDate;
