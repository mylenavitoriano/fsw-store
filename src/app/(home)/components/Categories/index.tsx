import { prismaClient } from "../../../../lib/prisma";
import CategoryItem from "../CategoryItem";
import { Container } from "./styles";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
