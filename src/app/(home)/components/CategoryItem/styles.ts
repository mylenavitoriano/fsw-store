"use client";

import { Badge as BadgeMantine } from "@mantine/core";
import styled from "styled-components";

export const Badge = styled(BadgeMantine)`
    padding-top: 1rem;
    padding-bottom: 1rem;
    
    &.mantine-Badge-label,
    &.mantine-Badge-section{
        color: #FFF;
    }
`;
