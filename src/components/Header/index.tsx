import { LuMenu, LuShoppingCart } from "react-icons/lu";
import { HeaderComponent, Button } from "./styles";
import { Text, Title } from '@mantine/core';

const Header = () => {
  return (
    <HeaderComponent>
      <Button>
        <LuMenu size={16} />
      </Button>

      <Title order={4} >
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
    </HeaderComponent>
  );
};

export default Header;
