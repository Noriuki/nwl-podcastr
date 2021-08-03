import moment from "moment";

export const formatDuration = (timeValue: number) => {
  return moment
    .duration(timeValue, "seconds")
    .format("HH:mm:ss", { trim: false });
};
