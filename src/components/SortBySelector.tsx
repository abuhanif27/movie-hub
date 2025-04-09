import { Menu, MenuList, MenuButton, Button, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortBy: (value: string) => void;
  sortOrderBy: string;
}

function SortingBySelector2({ onSortBy, sortOrderBy }: Props) {
  const getSortTitle = () => {
    const order = sortOrder.find((order) => order.value === sortOrderBy);
    if (order) return order.label;
    return null;
  };
  const sortOrder = [
    { label: "Most Popular", value: "popularity.desc" },
    { label: "Newest Releases", value: "release_date.desc" },
    { label: "Highest Revenue", value: "revenue.desc" },
    { label: "Newest Primary Release", value: "primary_release_date.desc" },
    { label: "Z-A Title", value: "original_title.desc" },
    { label: "Top Rated", value: "vote_average.desc" },
    { label: "Most Voted", value: "vote_count.desc" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {getSortTitle() || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order, index) => (
          <MenuItem onClick={() => onSortBy(order.value)} key={index}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortingBySelector2;
