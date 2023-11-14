import { Product } from "@prisma/client";

const computeProductTotalPrice = (product: Product) => {
    if(product.discountPercentage === 0){
        return {
            ...product,
            totalPrice: product.basePrice,
        }
    }
}