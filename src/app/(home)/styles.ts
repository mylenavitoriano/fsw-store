"use client";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1.25rem;
`;

export const DivComponents = styled.div`
  margin-top: 1.875rem;

  h1{
    margin-bottom: 1.25rem;
    font-size: 1rem;
  }
`;

export const BannerImage = styled(Image)`
  height: auto;
  width: 100%;
`;
