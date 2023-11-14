"use client";
import Categories from "./components/Categories";
import { BannerImage, Container, DivCategories } from "./styles";

export default function Home() {
  return (
    <Container>
      <BannerImage
        src="/banner-home-01.png"
        height={0}
        width={0}
        sizes="100vw"
        className="banner"
        alt="Até 55% de Desconto só esse mês!"
      />
      
      <DivCategories>
        {/* @ts-expect-error Server Component */}
        <Categories />
      </DivCategories>
    </Container>
  );
}
