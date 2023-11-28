import {
  BadgeDiscountPercentage,
  Card,
  CardImage,
  CardText,
  ImageProduct,
  TextPrice,
} from "./styles";
import { Text } from "@mantine/core";
import { ProductWithTotalPrice } from "../../helpers/product";
import { LuArrowDown } from "react-icons/lu";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <Card>
        <CardImage>
          <ImageProduct
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            alt={product.name}
          />

          {product.discountPercentage > 0 && (
            <BadgeDiscountPercentage color="rgba(80, 51, 195, 1)">
              <Text size="sm" fw={700}>
                <LuArrowDown size={14} />
                {product.discountPercentage}%
              </Text>
            </BadgeDiscountPercentage>
          )}
        </CardImage>

        <CardText>
          <Text size="xs" truncate="end">
            {product.name}
          </Text>

          {product.discountPercentage > 0 ? (
            <TextPrice>
              <Text size="sm" fw={700}>
                {Number(product.totalPrice).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
              <Text size="xs" td="line-through" c="dimmed">
                {Number(product.basePrice).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </TextPrice>
          ) : (
            <TextPrice>
              <Text size="md" fw={700}>
                {Number(product.basePrice).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </TextPrice>
          )}
        </CardText>
      </Card>
    </Link>
  );
};

export default ProductItem;
