const sortOptionsDesc = [
  "popularity.desc",
  "release_date.desc",
  "revenue.desc",
  "original_title.desc",
  "vote_average.desc",
  "vote_count.desc",
];

function formatSortOptionTitle(option: string) {
  // Remove .desc and convert snake_case to Title Case
  return option
    .replace(".desc", "")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export { sortOptionsDesc, formatSortOptionTitle };
