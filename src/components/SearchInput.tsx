import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  // other option instead of state (this is better performance but more complex)
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchRef.current) {
      onSearch(searchRef.current.value);
    }
  };
  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={searchRef}
          borderRadius={10}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
