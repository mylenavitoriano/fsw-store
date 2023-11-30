"use client";
import styled from "styled-components";
import { Badge as BadgeMantine } from "@mantine/core";

export const ContainerProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrentPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const BadgeDiscountPercentage = styled(BadgeMantine)`
  padding: 0.125rem 0.5rem;

  p {
    display: flex;
    align-items: center;
  }
`;
