"use client";
import styled from "styled-components";
import {
  Drawer as DrawerMantine,
  Button as ButtonMantine,
} from "@mantine/core";

export const Drawer = styled(DrawerMantine)`
  color: var(--white);
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Navigation = styled.div`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const UserInformation = styled.div`
  margin: 0.5rem 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled(ButtonMantine)`
  width: 100%;
  background: transparent;
  padding: 0;

  .mantine-Button-label {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`;
