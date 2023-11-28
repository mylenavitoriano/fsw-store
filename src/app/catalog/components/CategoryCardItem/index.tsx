import { Text } from "@mantine/core";
import {
  CardItem,
  CardItemImage,
  CardItemText,
  ImageCategoryCard,
} from "./styles";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategotyCardItemProps {
  category: Category;
}

const CategoryCardItem = ({ category }: CategotyCardItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <CardItem>
        <CardItemImage>
          <ImageCategoryCard
            src={category.imageUrl}
            alt={category.name}
            height={0}
            width={0}
            sizes="100vw"
          />
        </CardItemImage>

        <CardItemText>
          <Text size="sm" fw={700}>
            {category.name}
          </Text>
        </CardItemText>
      </CardItem>
    </Link>
  );
};

export default CategoryCardItem;
