import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ComponentType, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <Icon as={BsSearch as ComponentType} />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search movies..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
