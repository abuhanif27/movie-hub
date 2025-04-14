export const sortOrder = [
  { label: "Most Popular", value: "popularity.desc" },
  { label: "Newest Releases", value: "release_date.desc" },
  { label: "Highest Revenue", value: "revenue.desc" },
  { label: "Newest Primary Release", value: "primary_release_date.desc" },
  { label: "Z-A Title", value: "original_title.desc" },
  { label: "Top Rated", value: "vote_average.desc" },
  { label: "Most Voted", value: "vote_count.desc" },
];

const getSortByLabel = (value: string) => {
  const order = sortOrder.find((ord) => ord.value === value);
  return order ? order.label : "";
};

export default getSortByLabel;
