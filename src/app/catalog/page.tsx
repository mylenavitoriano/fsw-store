import BadgeTitle from "../../components/BadgeTitle";
import { LuLayoutGrid } from "react-icons/lu";
import { CategoryList, ContainerCatalog } from "./styles";
import CategoryCardItem from "./components/CategoryCardItem";
import { prismaClient } from "../../lib/prisma";

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({});

  return (
    <ContainerCatalog>
      <BadgeTitle
        title="Catálogo"
        icon={<LuLayoutGrid color={"#FFF"} size={16} />}
      ></BadgeTitle>

      <CategoryList>
        {categories.map(category => <CategoryCardItem key={category.id} category={category}/>)}
      </CategoryList>
    </ContainerCatalog>
  );
}
