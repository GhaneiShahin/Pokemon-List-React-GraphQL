import _ from "lodash";

export const paginate = (pros, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(pros).slice(startIndex).take(perPage).value();
};
