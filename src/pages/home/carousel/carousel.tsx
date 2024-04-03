// ** Đổi tên khi import
import { Carousel as AntCarousel } from "antd";
import { useRef } from "react";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "350px",
    color: "#fff",
    lineHeight: "160px",
    background: "#364d79",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '100px',
};

export function Carousel() {
    const carouselRef = useRef(null);

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <>
            <AntCarousel
                ref={carouselRef}
                autoplay
                autoplaySpeed={2000}
                afterChange={onChange}
            >
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </AntCarousel>
        </>
    );
}
