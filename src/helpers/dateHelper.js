import { format } from "date-fns";

const dateHelper = {
  parseToString: (date) => format(date, "yyyy-MM-dd"),
  parseToDate: (string) => new Date(string),
};
export default dateHelper;
