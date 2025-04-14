import {
  Menu,
  MenuList,
  MenuButton,
  Button,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { sortOrder } from "../services/getSortByLabel";
import { ComponentType } from "react";

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

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={BsChevronDown as ComponentType} />}
      >
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
