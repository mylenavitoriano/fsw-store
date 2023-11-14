"use client";

import { Container as ContainerMantine } from "@mantine/core";
import styled from "styled-components";

export const Container = styled(ContainerMantine)`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1rem;
    row-gap: .5rem;
`;
