"use client";
import { LuMenu, LuShoppingCart } from "react-icons/lu";
import { HeaderComponent, Button } from "./styles";
import { Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { DrawerMenu } from "../DrawerMenu";
import Link from "next/link";
import { DrawerShoppingCart } from "../DrawerShoppingCart";

const Header = () => {
  const [openedMenu, { open: openMenu, close: closeMenu }] = useDisclosure(false);
  const [openedShoppingCart, { open: openShoppingCart, close: closeShoppingCart }] = useDisclosure(false);

  return (
    <HeaderComponent>
      <Button onClick={openMenu}>
        <LuMenu size={16} />
      </Button>

      <Link href="/">
        <Title order={4}>
          <Text
            span={true}
            variant="gradient"
            gradient={{ from: "#5033C3", to: "#8162FF" }}
          >
            FSW
          </Text>
          Store
        </Title>
      </Link>

      <Button onClick={openShoppingCart}>
        <LuShoppingCart size={16} />
      </Button>

      <DrawerMenu opened={openedMenu} close={closeMenu} />
      <DrawerShoppingCart opened={openedShoppingCart} close={closeShoppingCart} />
    </HeaderComponent>
  );
};

export default Header;
