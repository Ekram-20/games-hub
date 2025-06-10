import userGameQueryStore from "@/zustand/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  // other option instead of state (this is better performance but more complex)
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = userGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchRef.current) {
      setSearchText(searchRef.current.value);
      navigate("/");
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
