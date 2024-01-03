"use client";

import {
  LuHome,
  LuListOrdered,
  LuPercent,
} from "react-icons/lu";
import { CgClose } from "react-icons/cg";

import {
  Drawer as DrawerComponent,
  Button as ButtonComponent,
  Navigation,
  HeaderTitle,
} from "./styles";
import { CloseButton, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import BadgeTitle from "../BadgeTitle";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import CartItem from "../CartItem";
import { computeProductTotalPrice } from "../../helpers/product";

interface DrawerProps {
  opened: boolean;
  close: () => void;
}

export const DrawerShoppingCart = ({ opened, close }: DrawerProps) => {
  const { products } = useContext(CartContext);

  return (
    <DrawerComponent
      size="md"
      position="right"
      opened={opened}
      onClose={close}
      withCloseButton={false}
    >
      <HeaderTitle>
        <BadgeTitle icon={"shoppingCart"} title={"Carrinho"}></BadgeTitle>
        <CloseButton onClick={close}/>
      </HeaderTitle>

      <Navigation>
        {products.map((item) => (
          <CartItem key={item.id} product={computeProductTotalPrice(item as any) as any} />
        ))}
      </Navigation>
    </DrawerComponent>
  );
};
