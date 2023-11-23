"use client";
import { Product } from "@prisma/client";
import { Carousel } from "./styles";
import ProductItem from "../../../../components/ProductItem";
import { computeProductTotalPrice } from "../../../../helpers/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Carousel
      dragFree
      slideSize="10%"
      align="start"
      slideGap="sm"
      withControls={false}
      containScroll="keepSnaps"
    >
      {products.map((product) => (
        <Carousel.Slide key={product.id}>
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ProductList;
