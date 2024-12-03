'use client';
import Slider from 'react-infinite-logo-slider'
import '../styles/components/Slider.scss';
const AutoplayCarousel = ({ images }: { images: { imgUrl: string, title: string }[] }) => {
    return (
        <Slider
            width="150px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            {images.map((image, index) => (
                <Slider.Slide key={index}>
                    <div className="logo-container">
                        <img className="carousel-image" src={image.imgUrl} alt={image.title} />
                    </div>
                    
                </Slider.Slide>
            ))}
        </Slider>
    );
    }
export default AutoplayCarousel;