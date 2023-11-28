import { Category } from "@prisma/client";
import { Badge } from "./styles";
import { Text } from "@mantine/core";
import { CATEGORY_ICON } from "../../../../constants/category-icons";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Badge
      fullWidth
      variant="outline"
      color="rgba(42, 42, 42, 1)"
      radius="md"
      leftSection={CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
    >
      <Text c="white" span={true} size="xs" fw={700} tt="capitalize">
        {category.name}
      </Text>
    </Badge>
  );
};

export default CategoryItem;
