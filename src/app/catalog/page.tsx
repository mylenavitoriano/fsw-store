import BadgeTitle from "../../components/BadgeTitle";
import { CategoryList, ContainerCatalog } from "./styles";
import CategoryCardItem from "./components/CategoryCardItem";
import { prismaClient } from "../../lib/prisma";

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({});

  return (
    <ContainerCatalog>
      <BadgeTitle icon="catálogo" title="catálogo"></BadgeTitle>

      <CategoryList>
        {categories.map((category) => (
          <CategoryCardItem key={category.id} category={category} />
        ))}
      </CategoryList>
    </ContainerCatalog>
  );
}
