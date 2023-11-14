import { Product } from "@prisma/client";
import { Card, CardImage, CardText, ImageProduct } from "./styles";
import { Text } from "@mantine/core";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card>
      <CardImage>
        <ImageProduct 
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          alt={product.name}
        />
      </CardImage>

      <CardText>
        <Text size="xs" truncate="end">
          {product.name}
        </Text>

        <Text size="xs" fw={700} truncate="end">
          {product.name}
        </Text>
      </CardText>
    </Card>
  );
};

export default ProductItem;
