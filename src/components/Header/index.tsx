"use client";
import { LuMenu, LuShoppingCart } from "react-icons/lu";
import { HeaderComponent, Button } from "./styles";
import { Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Drawer } from "../Drawer";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <HeaderComponent>
      <Button onClick={open}>
        <LuMenu size={16} />
      </Button>

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

      <Button>
        <LuShoppingCart size={16} />
      </Button>

      <Drawer opened={opened} close={close} />
    </HeaderComponent>
  );
};

export default Header;
