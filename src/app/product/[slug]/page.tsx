import { prismaClient } from "../../../lib/prisma";
import ProductImages from "./components/ProductImages";

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
    <ProductImages name={product.name} imageUrls={product.imageUrls}/>
  );
};

export default ProductDetailsPage;
