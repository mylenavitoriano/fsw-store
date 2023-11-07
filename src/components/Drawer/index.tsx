import { LuHome, LuListOrdered, LuLogIn, LuPercent } from "react-icons/lu";
import {
  Drawer as DrawerComponent,
  Button as ButtonComponent,
  Navigation,
} from "./styles";
import { Text } from "@mantine/core";

interface DrawerProps {
  opened: boolean;
  close: () => void;
}

export const Drawer = ({ opened, close }: DrawerProps) => {
  return (
    <DrawerComponent opened={opened} onClose={close} title="Menu">
      <Navigation>
        <ButtonComponent>
          <LuLogIn size={16} />
          <Text>Fazer Login</Text>
        </ButtonComponent>

        <ButtonComponent>
          <LuHome size={16} />
          <Text>Início</Text>
        </ButtonComponent>

        <ButtonComponent>
          <LuListOrdered size={16} />
          <Text>Catálogo</Text>
        </ButtonComponent>

        <ButtonComponent>
          <LuPercent size={16} />
          <Text>Ofertas</Text>
        </ButtonComponent>
      </Navigation>
    </DrawerComponent>
  );
};
