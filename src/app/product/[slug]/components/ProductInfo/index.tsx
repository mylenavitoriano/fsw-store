import { Text } from "@mantine/core";
import { ProductWithTotalPrice } from "../../../../../helpers/product";
import { BadgeDiscountPercentage, ContainerProductInfo, CurrentPrice, InfoPrice } from "./styles";
import { LuArrowDown } from "react-icons/lu";

interface ProductInfoProps {
    product: Pick<
        ProductWithTotalPrice,
        "basePrice"
        | "description"
        | "discountPercentage"
        | "totalPrice"
        | "name"
    >
}

const ProductInfo = ({product: { basePrice, totalPrice, description, discountPercentage, name}}: ProductInfoProps) => {
    return ( 
        <ContainerProductInfo>
            <Text size="lg">{name}</Text>

            <InfoPrice>
                <CurrentPrice>
                    <Text size="xl" fw={700}>
                        {Number(totalPrice).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </Text>
                    {discountPercentage > 0 && 
                        <BadgeDiscountPercentage color="rgba(80, 51, 195, 1)">
                            <Text size="xs" fw={700}>
                                <LuArrowDown size={14} />
                                {discountPercentage}%
                            </Text>
                        </BadgeDiscountPercentage>
                    }
                </CurrentPrice>
                {discountPercentage > 0 && 
                    <Text size="sm" c="dimmed">
                        De: <Text span td="line-through">
                                {Number(basePrice).toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                        </Text>
                    </Text>
                }
            </InfoPrice>

            
        </ContainerProductInfo>
     );
}
 
export default ProductInfo;