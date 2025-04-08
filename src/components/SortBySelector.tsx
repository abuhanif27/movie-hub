import { Select } from "@chakra-ui/react";
import {
  sortOptionsDesc,
  formatSortOptionTitle,
} from "../services/sortHelpers";

interface Props {
  onSortBy: (value: string) => void;
}

function SortBySelector({ onSortBy }: Props) {
  return (
    <Select
      placeholder="Select Sort Options"
      maxWidth={80}
      textAlign="center"
      marginLeft={2}
      onChange={(e) => onSortBy(e.target.value)}
      size="lg"
    >
      {sortOptionsDesc.map((option, index) => (
        <option key={index} value={option}>
          {formatSortOptionTitle(option)}
        </option>
      ))}
    </Select>
  );
}

export default SortBySelector;
