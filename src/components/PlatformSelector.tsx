import usePlatform from "@/hooks/usePlatform";
import { Button, Menu } from "@chakra-ui/react";

function PlatformSelector() {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Platform
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          ok
          {data.map((p) => (
            <Menu.Item key={p.id} value={p.slug}>
              {p.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}

export default PlatformSelector;
