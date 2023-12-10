"use client";
import styled from "styled-components";
import { Badge as BadgeMantine, Button as ButtonMantine } from "@mantine/core";

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

export const GroupButtonsAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ButtonQuantity = styled(ButtonMantine)`
  color: #fff;
  border-color: var(--dark-gray);
  padding: 8px;
`;

export const GroupDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  margin: 1.875rem 0;
`

export const ShippingFee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-gray);
  padding: 0.5rem 1.875rem;
  border-radius: 0.625rem;
  margin-top: 1.25rem;
`

export const GroupLeft = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`

export const GroupRight = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`