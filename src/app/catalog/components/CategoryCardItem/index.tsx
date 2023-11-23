import { Text } from "@mantine/core";
import { CardItem, CardItemImage, CardItemText, ImageCategoryCard } from "./styles";
import { Category } from "@prisma/client";

interface CategotyCardItemProps {
    category: Category
}

const CategoryCardItem = ({ category }: CategotyCardItemProps) => {
    return ( 
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
                <Text size="sm" fw={700}>{category.name}</Text>
            </CardItemText>

        </CardItem>
     );
}
 
export default CategoryCardItem;