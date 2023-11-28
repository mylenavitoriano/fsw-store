import Link from "next/link";
import { prismaClient } from "../../../../lib/prisma";
import CategoryItem from "../CategoryItem";
import { Container } from "./styles";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <Container>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.id}>
          <CategoryItem  category={category} />
        </Link>
      ))}
    </Container>
  );
};

export default Categories;
