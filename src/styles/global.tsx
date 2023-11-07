"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`

    :root {
        --white: #FFFFFF;
        --light-gray: #A1A1A1;

        --dark-purple: #5033C3;
        --lighr-purple: #8162FF;

        --black-01: #1A1A1A;
        --black-02: #0B0B0B;

        --dark-gray: #2A2A2A;
        --gray: #676767;

        --radius: 0.5rem;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--black-02);
        height: 100%;

        .mantine-Drawer-content, 
        .mantine-Drawer-header {
            background: var(--black-02);
        }

        .mantine-Drawer-title{
            font-size: 1.125rem;
            font-weight: 600;
        }
    }

    hmtl{
        height: 100%;
    }
`;

export const GlobalStyles = () => {
  return <Globals />;
};
