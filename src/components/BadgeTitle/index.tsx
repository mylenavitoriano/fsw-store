import { Text } from "@mantine/core";

import { Badge } from "./styles";
import { CATEGORY_ICON } from "../../constants/category-icons";

interface BadgeTitleProps {
  icon: string;
  title: string;
}

const BadgeTitle = ({ icon, title }: BadgeTitleProps) => {
  return (
    <Badge
      variant="deafult"
      leftSection={CATEGORY_ICON[icon as keyof typeof CATEGORY_ICON]}
    >
      <Text size="sm" fw={700} tt="uppercase" c="#FFF">
        {title}
      </Text>
    </Badge>
  );
};

export default BadgeTitle;
