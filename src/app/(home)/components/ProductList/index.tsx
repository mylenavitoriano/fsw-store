'use client'
import { Product } from "@prisma/client";
import { Carousel } from "./styles";
import ProductItem from "../../../../components/ProductItem";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Carousel slideSize="10%" align="start" slideGap="sm" withControls={false}>
      {products.map((product) => (
        <Carousel.Slide key={product.id}>
            <ProductItem key={product.id} product={product}/>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ProductList;

