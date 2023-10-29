"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #252525;
    }

`;

export const GlobalStyles = () => {
  return <Globals />;
};
