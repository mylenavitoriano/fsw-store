"use client";

import { Button, Text, rgba } from "@mantine/core";
import { ProductWithTotalPrice } from "../../../../../helpers/product";
import {
  BadgeDiscountPercentage,
  ButtonQuantity,
  ContainerProductInfo,
  CurrentPrice,
  GroupButtonsAmount,
  GroupDescription,
  GroupLeft,
  GroupRight,
  InfoPrice,
  ShippingFee,
} from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuArrowDown } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { basePrice, totalPrice, description, discountPercentage, name },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev == 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

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
          {discountPercentage > 0 && (
            <BadgeDiscountPercentage color="rgba(80, 51, 195, 1)">
              <Text size="xs" fw={700}>
                <LuArrowDown size={14} />
                {discountPercentage}%
              </Text>
            </BadgeDiscountPercentage>
          )}
        </CurrentPrice>
        {discountPercentage > 0 && (
          <Text size="sm" c="dimmed">
            De:{" "}
            <Text span td="line-through">
              {Number(basePrice).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </Text>
        )}
      </InfoPrice>

      <GroupButtonsAmount>
        <ButtonQuantity
          variant="outline"
          size="xs"
          onClick={handleDecreaseQuantity}
        >
          <IoIosArrowBack size={18} />
        </ButtonQuantity>

        <Text span={true}>{quantity}</Text>

        <ButtonQuantity
          variant="outline"
          size="xs"
          onClick={handleIncreaseQuantity}
        >
          <IoIosArrowForward size={18} />
        </ButtonQuantity>
      </GroupButtonsAmount>

      <GroupDescription>
        <Text size="lg" fw={600}>
          Descrição
        </Text>
        <Text c="dimmed" size="sm">
          {description}
        </Text>
      </GroupDescription>

      <Button tt="uppercase" color="rgba(80, 51, 195, 1)" radius="md">
        Adicionar ao carrinho
      </Button>

      <ShippingFee>
        <GroupLeft>
          <FaTruckFast size={30} />

          <div>
            <Text size="sm">
              Entrega via{" "}
              <Text span={true} fw={600} fs="italic">
                FSPacket®
              </Text>
            </Text>
            <Text c="rgba(129,98,255,1)" size="sm">
              Envio para{" "}
              <Text span={true} fw={600}>
                todo Brasil
              </Text>
            </Text>
          </div>
        </GroupLeft>

        <Text fw={600} size="sm">
          Frete grátis
        </Text>
      </ShippingFee>
    </ContainerProductInfo>
  );
};

export default ProductInfo;
