import { Text } from "@mantine/core";
import { CartProduct } from "../../providers/cart";
import { ContainerCartImage, ContainerCartItem, DescriptionProduct, ImageCartItem, LeftBlock, RigthBlock } from "./styles";

interface CartItemProps {
    product: CartProduct
}

const CartItem = ({ product }: CartItemProps) => {
    return ( 
        <ContainerCartItem>
            <RigthBlock>
                <ContainerCartImage>
                    <ImageCartItem 
                        src={product.imageUrls[0]}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={product.name}/>
                </ContainerCartImage>

                <DescriptionProduct>
                    <Text>{product.name}</Text>

                    <div>
                        <Text size="sm" fw={700}>
                            {Number(product.totalPrice).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </Text>
                        {product.discountPercentage > 0 &&
                            <Text size="xs" td="line-through" c="dimmed">
                                {Number(product.totalPrice).toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </Text>
                        }
                    </div>
                </DescriptionProduct>
            </RigthBlock>

            <LeftBlock></LeftBlock>
        </ContainerCartItem>
     );
}
 
export default CartItem;