import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function Nav() {
  return (
    <HStack>
          <Image src={logo} boxSize="60px" />
          <Text>NavBr</Text>
    </HStack>
  );
}

export default Nav;
