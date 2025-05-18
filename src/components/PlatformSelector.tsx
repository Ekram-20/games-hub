import usePlatform, { type Platform } from "@/hooks/usePlatform";
import { Button, Menu } from "@chakra-ui/react";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data, error } = usePlatform();

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
          {data.map((p) => (
            <Menu.Item
              onClick={() => onSelectPlatform(p)}
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
