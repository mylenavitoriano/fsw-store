import { SimpleGrid } from "@mantine/core";
import BadgeTitle from "../../../components/BadgeTitle";
import ProductItem from "../../../components/ProductItem";
import { computeProductTotalPrice } from "../../../helpers/product";
import { prismaClient } from "../../../lib/prisma";
import { ContainerCategoryProducts, Group } from "./styles";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
        products: true
    }
  });

  if(!category){
    return null
  }

  return (
    <ContainerCategoryProducts>
      <BadgeTitle icon={params.slug} title={category?.name}></BadgeTitle>

      <Group justify="center">
        <SimpleGrid cols={2} spacing={"xl"}>
          {category.products.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </SimpleGrid>
      </Group>
    </ContainerCategoryProducts>
  );
};

export default CategoryProducts;
