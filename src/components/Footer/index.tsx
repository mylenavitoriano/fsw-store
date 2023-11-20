"use client"
import { FooterStyled } from "./styles";
import { Text } from "@mantine/core";

const Footer = () => {
    return ( 
        <FooterStyled>
            <Text size="xs">
                © 2023 Copyright <Text span fw={600}>FSW Store</Text>
            </Text>
        </FooterStyled>
    );
}
 
export default Footer;