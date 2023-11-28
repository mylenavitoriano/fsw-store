
import { SimpleGrid } from "@mantine/core";
import BadgeTitle from "../../../components/BadgeTitle";
import ProductItem from "../../../components/ProductItem";
import { computeProductTotalPrice } from "../../../helpers/product";
import { prismaClient } from "../../../lib/prisma";
import { ContainerCategoryProducts, Group } from "./styles";

const CategoryProducts = async ({ params }: any) => {
    const products = await prismaClient.product.findMany({
        where: {
            category: {
                slug: params.slug
            }
        }
    });

    return ( 
        <ContainerCategoryProducts>
            <BadgeTitle title={params.slug}></BadgeTitle>

            <Group justify="center">
                <SimpleGrid cols={2} spacing={"xl"}>
                    {products.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}
                </SimpleGrid>
            </Group>
                
        
        </ContainerCategoryProducts>
     );
}
 
export default CategoryProducts;