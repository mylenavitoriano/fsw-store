import Image from "next/image";
import styled from "styled-components";

export const ContainerCartItem = styled.div`
    display: flex;

`;

export const RigthBlock = styled.div`
    display: flex;
    align-items: flex-start;
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

export const DescriptionProduct = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LeftBlock =  styled.div`

`;