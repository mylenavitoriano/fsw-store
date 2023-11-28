"use client";
import Image from "next/image";
import { styled } from "styled-components";

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  
  &:hover{
    cursor: pointer;
    transition: all ease-in-out .5s;
    transform: scale(1.05);
  }
`;

export const CardItemImage = styled.div`
  width: 100%;
  height: 9.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
  background: linear-gradient(45deg, #5033c3 0%, rgba(80, 51, 195, 0.2) 100%);
`;

export const ImageCategoryCard = styled(Image)`
  height: 5.625rem;
  width: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

export const CardItemText = styled.div`
  background: var(--black-01);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
`;
