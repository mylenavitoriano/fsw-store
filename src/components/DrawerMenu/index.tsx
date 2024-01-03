"use client";

import {
  LuHome,
  LuListOrdered,
  LuLogIn,
  LuLogOut,
  LuPercent,
} from "react-icons/lu";
import {
  Drawer as DrawerComponent,
  Button as ButtonComponent,
  Navigation,
  UserInformation,
} from "./styles";
import { Avatar, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface DrawerProps {
  opened: boolean;
  close: () => void;
}

export const DrawerMenu = ({ opened, close }: DrawerProps) => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogouClick = async () => {
    await signOut();
  };

  return (
    <DrawerComponent size="md" opened={opened} onClose={close} title="Menu">
      <Navigation>
        {status === "authenticated" && data?.user?.image && (
          <UserInformation>
            <Avatar
              src={data?.user?.image}
              alt={data?.user?.name ? data?.user?.name : "Sem imagem"}
            ></Avatar>
            <Text>{data?.user?.name}</Text>
          </UserInformation>
        )}

        {status === "unauthenticated" && (
          <ButtonComponent onClick={handleLoginClick}>
            <LuLogIn size={16} />
            <Text>Fazer Login</Text>
          </ButtonComponent>
        )}

        {status === "authenticated" && (
          <ButtonComponent onClick={handleLogouClick}>
            <LuLogOut size={16} />
            <Text>Fazer Logout</Text>
          </ButtonComponent>
        )}

        <Link href={"/"}>
          <ButtonComponent>
            <LuHome size={16} />
            <Text>Início</Text>
          </ButtonComponent>
        </Link>

        <Link href={"/catalog"}>
          <ButtonComponent>
            <LuListOrdered size={16} />
            <Text>Catálogo</Text>
          </ButtonComponent>
        </Link>

        <ButtonComponent>
          <LuPercent size={16} />
          <Text>Ofertas</Text>
        </ButtonComponent>
      </Navigation>
    </DrawerComponent>
  );
};
