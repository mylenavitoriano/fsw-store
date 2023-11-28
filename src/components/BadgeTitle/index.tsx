import {
  LuHeadphones,
  LuKeyboard,
  LuLayoutGrid,
  LuMonitor,
  LuMouse,
  LuSpeaker,
  LuSquare,
} from "react-icons/lu";
import { Text } from "@mantine/core";

import { Badge } from "./styles";

interface BadgeTitleProps {
  title: string;
}

const BadgeTitle = ({ title }: BadgeTitleProps) => {
  const categoryIcon = {
    keyboards: <LuKeyboard size={16} color={"#FFF"} />,
    mouses: <LuMouse size={16} color={"#FFF"} />,
    headphones: <LuHeadphones size={16} color={"#FFF"} />,
    mousepads: <LuSquare size={16} color={"#FFF"} />,
    speakers: <LuSpeaker size={16} color={"#FFF"} />,
    monitors: <LuMonitor size={16} color={"#FFF"} />,
    catálogo: <LuLayoutGrid size={16} color={"#FFF"} />,
  };

  return (
    <Badge
      variant="deafult"
      leftSection={categoryIcon[title as keyof typeof categoryIcon]}
    >
      <Text size="sm" fw={700} tt="uppercase" c="#FFF">
        {title}
      </Text>
    </Badge>
  );
};

export default BadgeTitle;
