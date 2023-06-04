import moment from "moment";

export const dateTimeFull = (date: Date | string) => {
  return moment(date).format("hh:mm DD MMMM YYYY");
};
