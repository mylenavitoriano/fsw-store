"use client";
import { LuMenu, LuShoppingCart } from "react-icons/lu";
import { HeaderComponent, Button } from "./styles";
import { Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { DrawerMenu } from "../DrawerMenu";
import Link from "next/link";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <HeaderComponent>
      <Button onClick={open}>
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

      <Button>
        <LuShoppingCart size={16} />
      </Button>

      <DrawerMenu opened={opened} close={close} />
    </HeaderComponent>
  );
};

export default Header;
