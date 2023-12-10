import { Text } from "@mantine/core";
import ProductList from "../../../components/ProductList";
import { computeProductTotalPrice } from "../../../helpers/product";
import { prismaClient } from "../../../lib/prisma";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import { ContainerProduct, ContainerProducts } from "./styles";

interface ProductDatailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDatailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <>
      <ProductImages name={product.name} imageUrls={product.imageUrls}/>
    
      <ContainerProduct>
        <ProductInfo product={computeProductTotalPrice(product)}/>

        <ContainerProducts>
          <Text fw={600} tt="uppercase">Produtos Recomendados</Text>
          <ProductList products={ product.category.products }/>
        </ContainerProducts>
      </ContainerProduct>

      
    </>
  );
};

export default ProductDetailsPage;
