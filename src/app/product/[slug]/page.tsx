import { computeProductTotalPrice } from "../../../helpers/product";
import { prismaClient } from "../../../lib/prisma";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import { ContainerProduct } from "./styles";

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
  });

  if (!product) return null;

  return (
    <>
      <ProductImages name={product.name} imageUrls={product.imageUrls}/>
    
      <ContainerProduct>
        <ProductInfo product={computeProductTotalPrice(product)}/>
      </ContainerProduct>
    </>
  );
};

export default ProductDetailsPage;
