import dayjs from "dayjs";
import localeId from "dayjs/locale/id";

export function formatDate(date) {
  return dayjs(date).locale(localeId).format("DD MMMM YYYY");
}
