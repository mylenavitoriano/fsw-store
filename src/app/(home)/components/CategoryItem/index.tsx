import { Category } from "@prisma/client";
import { Badge } from "./styles";
import { LuHeadphones, LuKeyboard, LuMonitor, LuMouse, LuSpeaker, LuSquare } from "react-icons/lu";
import { Text } from "@mantine/core";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    const categoryIcon = {
        keyboards: <LuKeyboard size={16} color={"#FFF"}/>,
        mouses: <LuMouse size={16} color={"#FFF"}/>,
        headphones: <LuHeadphones size={16} color={"#FFF"}/>,
        mousepads: <LuSquare size={16} color={"#FFF"}/>,
        speakers: <LuSpeaker size={16} color={"#FFF"}/>,
        monitors: <LuMonitor size={16} color={"#FFF"}/>
    }

    return (
        <Badge
        fullWidth
        variant="outline"
        color="rgba(42, 42, 42, 1)"
        radius="md"
        leftSection={categoryIcon[category.slug as keyof typeof categoryIcon]}
        >
        <Text c="white" span={true} size="xs" fw={700} tt="capitalize">
            {category.name}
        </Text>
        </Badge>
    );
};

export default CategoryItem;
