import Image from "next/image";
import styled from "styled-components";
import { Button as ButtonMantine } from "@mantine/core";


export const ContainerCartItem = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const RigthBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ContainerCartImage = styled.div`
    background: var(--black-01);
    border-radius: 0.5rem;
    height: 4.75rem;
    width: 4.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageCartItem = styled(Image)`
    width: auto;
    height: auto;
    max-width: 80%;
    height: 70%;
    object-fit: contain;
`;

export const TextPrice = styled.div`
    display: flex;
    align-items: flex-end;
    gap: .25rem;
`

export const GroupButtonsAmount = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-top: .5rem;
`;

export const ButtonQuantity = styled(ButtonMantine)`
  color: #fff;
  border-color: var(--dark-gray);
  padding: 6px;
`;

export const DescriptionProduct = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LeftBlock =  styled.div`
    button{
        padding: .5rem;
    }
`;