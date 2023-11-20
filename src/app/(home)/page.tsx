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

      <DivComponents>
        {/* @ts-expect-error Server Component */}
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
        className="banner"
        alt="Até 55% de Desconto em Mouses"
      />
    </Container>
  );
}
