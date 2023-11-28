"use client"
import { useState } from "react";
import { ContainerProductImages, ListCardImage, ImageHighlight, ListImages, CardImage, CardImageHighlight } from "./styles";

interface productImagesProps {
    name: string,
    imageUrls: string[]
}

const ProductImages = ({ name, imageUrls }: productImagesProps) => {
    
    const [currentImage, setCurrentImage] = useState(imageUrls[0]);

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl)
    }
    
    return ( 
        <ContainerProductImages>
            <CardImageHighlight>
                <ImageHighlight 
                    src={currentImage}
                    alt={name}
                    height={0}
                    width={0}
                    sizes="100vw"
                />
            </CardImageHighlight>

            <ListImages>
                {imageUrls.map(imageUrl => (
                    <ListCardImage key={imageUrl} border={imageUrl == currentImage ? true : false} onClick={() => handleImageClick(imageUrl)}>
                        <CardImage
                            src={imageUrl}
                            alt={name}
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </ListCardImage>
                ))}
            </ListImages>
        </ContainerProductImages>
    );
}
 
export default ProductImages;