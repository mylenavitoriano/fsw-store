import { Text, Button } from "@mantine/core";
import { CartContext, CartProduct } from "../../providers/cart";
import {
  ContainerCartImage,
  ContainerCartItem,
  TextPrice,
  DescriptionProduct,
  ImageCartItem,
  LeftBlock,
  RigthBlock,
  GroupButtonsAmount,
  ButtonQuantity,
} from "./styles";
import { LuTrash } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
    const { decreaseProductQuantity, incriseProductQuantity, removeProductFromCart } = useContext(CartContext);

    const handleDecreaseProductQuantityClick = () => {
        decreaseProductQuantity(product.id)
    }

    const handleIncreaseProductQuantityClick = () => {
        incriseProductQuantity(product.id)
    }

    const removeProductQuantityClick = () => {
        removeProductFromCart(product.id)
    }

  return (
    <ContainerCartItem>
      <RigthBlock>
        <ContainerCartImage>
          <ImageCartItem
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
          />
        </ContainerCartImage>

        <DescriptionProduct>
          <Text size="sm">{product.name}</Text>

          <TextPrice>
            <Text size="sm" fw={700}>
              {Number(product.totalPrice).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>

            {product.discountPercentage > 0 && (
              <Text size="xs" td="line-through" c="dimmed" span>
                {Number(product.totalPrice).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            )}
          </TextPrice>

            <GroupButtonsAmount>
                <ButtonQuantity
                variant="outline"
                size="xs"
                onClick={handleDecreaseProductQuantityClick}
                >
                    <IoIosArrowBack size={12} />
                </ButtonQuantity>

                <Text span={true} size="sm">{product.quantity}</Text>

                <ButtonQuantity
                variant="outline"
                size="xs"
                onClick={handleIncreaseProductQuantityClick}
                >
                    <IoIosArrowForward size={12} />
                </ButtonQuantity>
            </GroupButtonsAmount>
        </DescriptionProduct>
      </RigthBlock>

      <LeftBlock>
        <Button variant="outline" color="#2A2A2A" onClick={removeProductQuantityClick}>
          <LuTrash color={"#FFF"} size={16} />
        </Button>
      </LeftBlock>
    </ContainerCartItem>
  );
};

export default CartItem;
