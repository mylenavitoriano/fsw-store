"use client"
import Image from "next/image";
import styled from "styled-components";

interface Props {
    border: boolean
}

export const ContainerProductImages = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardImageHighlight = styled.div`
    background: var(--black-01);
    height: 23.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageHighlight = styled(Image)`
    max-width: 80%;
    max-height: 70%;
    height: auto;
    width: auto;
    object-fit: contain;
`

export const ListImages = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .875rem;
    padding: 1.875rem 1.25rem;
`

export const ListCardImage = styled.button<Props>`
    background: var(--black-01);
    border-radius: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.75rem;
    width: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.border ? "#8162FF" : "transparent"};

    &:hover{
        cursor: pointer;
    }
`

export const CardImage = styled(Image)`
    height: auto;
    width: auto;
    max-height: 70%;
    max-width: 80%;
`