import useGameQueryStore from "@/zustand/store";
import { Button, Menu } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

function SortSelector() {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "rating", label: "Average Rating" },
  ];

  const selectedSort = useGameQueryStore((s) => s.gameQuery.sort);
  const setSelectedSort = useGameQueryStore((s) => s.setSortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          <IoIosArrowDown /> {selectedSort || "Order by:"}
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {sortOptions.map((option) => (
            <Menu.Item
              key={option.value}
              value={option.value}
              onClick={() => setSelectedSort(option.value)}
            >
              {option.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}

export default SortSelector;
