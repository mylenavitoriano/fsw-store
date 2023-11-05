"use client";
import styled from "styled-components";
import { Button as ButtonMantine } from "@mantine/core";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.65625rem 1.875rem;

  h4{
    font-size: 1.125rem;
    color: var(--white);
  }

  span{
    margin-right: .3rem;
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

export const Button = styled(ButtonMantine)`
  background: transparent;
`;
