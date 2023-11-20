"use client";

import Image from "next/image";
import styled from "styled-components";
import { Badge as BadgeMantine } from "@mantine/core";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 10.625rem;
`;

export const CardImage = styled.div`
  background: var(--black-01);
  border-radius: 0.5rem;
  height: 10.625rem;
  width: 10.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BadgeDiscountPercentage = styled(BadgeMantine)`
  position: absolute;
  left: 0.625rem;
  top: 0.625rem;
  padding: 0.125rem 0.5rem;

  p{
    display: flex;
    align-items: center;
  }
`;

export const ImageProduct = styled(Image)`
  height: 5.625rem;
  width: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export const CardText = styled.div`
  height: 5.625rem;
  width: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const TextPrice = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.5rem;

  p {
    white-space: nowrap;
  }
`;
