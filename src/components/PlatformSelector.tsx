import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/zustand/store";
import { Button, Menu } from "@chakra-ui/react";

function PlatformSelector() {
  const { data, error } = usePlatform();
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform);
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatform);

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {selectedPlatform?.name || "Platform"}
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {data?.results.map((p) => (
            <Menu.Item
              onClick={() => setSelectedPlatform(p)}
              key={p.id}
              value={p.slug}
            >
              {p.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}

export default PlatformSelector;
