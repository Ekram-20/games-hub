import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { Platform } from "@/types/entities";

interface Props {
  platforms: Platform[];
}
function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    // SEGA: SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms
        .filter((platform) => platform?.slug && iconMap[platform.slug])
        .map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            color="gray.500"
            key={platform.id}
            boxSize={5} // Add explicit size
          />
        ))}
    </HStack>
  );
}

export default PlatformIconList;
