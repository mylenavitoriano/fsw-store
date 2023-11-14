"use client";

import { Badge as BadgeMantine } from "@mantine/core";
import styled from "styled-components";

export const Badge = styled(BadgeMantine)`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    
    &.mantine-Badge-label,
    &.mantine-Badge-section{
        color: #FFF;
    }
`;
