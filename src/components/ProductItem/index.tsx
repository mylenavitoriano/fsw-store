import { BadgeDiscountPercentage, Card, CardImage, CardText, ImageProduct, TextPrice } from "./styles";
import { Text } from "@mantine/core";
import { ProductWithTotalPrice } from "../../helpers/product";
import { LuArrowDown } from "react-icons/lu";

interface ProductItemProps {
  product: ProductWithTotalPrice;
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

      <BadgeDiscountPercentage color="rgba(80, 51, 195, 1)">
        <Text size="sm" fw={700}>
          <LuArrowDown size={14}/>
          {product.discountPercentage}%
        </Text>
      </BadgeDiscountPercentage>

      <CardText>
        <Text size="xs" truncate="end">
          {product.name}
        </Text>

        {product.discountPercentage > 0 ? (
          <TextPrice>
            <Text size="md" fw={700}>R$ {product.totalPrice.toFixed(2)}</Text>
            <Text size="sm" td="line-through" c="dimmed">R$ {Number(product.basePrice).toFixed(2)}</Text>
          </TextPrice>
        ): (
          <TextPrice>
            <Text size="md" fw={700}>R$ {Number(product.basePrice).toFixed(2)}</Text>
          </TextPrice>
        )}
      </CardText>
    </Card>
  );
};

export default ProductItem;
