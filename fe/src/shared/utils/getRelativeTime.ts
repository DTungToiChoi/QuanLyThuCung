import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const getRelativeTime = (dateStr?: string | Date | null): string => {
  if (!dateStr) return "";
  const now = dayjs();
  const date = dayjs.utc(dateStr);
  const diffInSeconds = now.diff(date, "second");

  if (diffInSeconds < 60) return "Vừa xong";

  const diffInMinutes = now.diff(date, "minute");
  if (diffInMinutes < 60) return `${diffInMinutes} phút trước`;

  const diffInHours = now.diff(date, "hour");
  if (diffInHours < 24) return `${diffInHours} giờ trước`;

  const diffInDays = now.diff(date, "day");
  if (diffInDays < 30) return `${diffInDays} ngày trước`;

  const diffInMonths = now.diff(date, "month");
  if (diffInMonths < 12) return `${diffInMonths} tháng trước`;

  const diffInYears = now.diff(date, "year");
  return `${diffInYears} năm trước`;
};
