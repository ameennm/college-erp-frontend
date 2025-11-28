import { format, parseISO, differenceInDays, addDays } from 'date-fns';

export const formatDate = (date, formatStr = 'dd MMM yyyy') => {
  return format(new Date(date), formatStr);
};

export const getCurrentDayOrder = (date, dayOrders) => {
  const dateStr = format(new Date(date), 'yyyy-MM-dd');
  const dayOrder = dayOrders.find(d => d.date === dateStr);
  return dayOrder ? dayOrder.dayNumber : null;
};

export const calculateDaysBetween = (fromDate, toDate) => {
  return differenceInDays(new Date(toDate), new Date(fromDate)) + 1;
};

export const getDateRange = (days) => {
  const end = new Date();
  const start = addDays(end, -days);
  return { start, end };
};
