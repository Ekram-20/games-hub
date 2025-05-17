import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root checked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Color Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
