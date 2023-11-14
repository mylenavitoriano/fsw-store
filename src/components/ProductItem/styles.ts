"use client";

import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 9.75rem;
`;

export const CardImage = styled.div`
    background: var(--black-01);
    border-radius: 0.5rem;
    height: 10.625rem;
    width: 9.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

