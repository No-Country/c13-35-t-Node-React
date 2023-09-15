import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface FieldCarouselProps {
    images: Array<{ id: number; imageUrl: string }>;
}
const FieldCarousel: React.FC<FieldCarouselProps> = (props) => {
    const { images } = props;
    return (
        <div>
            <Carousel
                showArrows={true}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
            >
                {images.map((item) => (
                    <div key={item.id}>
                        <div>
                            <Image
                                src={item.imageUrl}
                                alt="slides"
                                width={550}
                                height={485}
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default FieldCarousel;
