import { prismaClient } from "../../lib/prisma";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import { BannerImage, Container, DivComponents } from "./styles";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keayboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <Container>
      <BannerImage
        src="/banner-home-01.png"
        height={0}
        width={0}
        sizes="100vw"
        alt="Até 55% de Desconto só esse mês!"
      />

      <DivComponents>
        <Categories />
      </DivComponents>

      <DivComponents>
        <h1>OFERTAS</h1>
        <ProductList products={deals} />
      </DivComponents>

      <BannerImage
        src="/banner-home-02.png"
        height={0}
        width={0}
        sizes="100vw"
        alt="Até 55% de Desconto em Mouses"
      />

      <DivComponents>
        <h1>TECLADOS</h1>
        <ProductList products={keayboards} />
      </DivComponents>

      <BannerImage
        src="/banner-home-03.png"
        height={0}
        width={0}
        sizes="100vw"
        alt="Até 55% de Desconto em Fones"
      />

      <DivComponents>
        <h1>MOUSES</h1>
        <ProductList products={mouses} />
      </DivComponents>
    </Container>
  );
}
