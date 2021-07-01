import React from 'react';
import "./carousel.css";
import Carousel from 'react-elastic-carousel';
import Testimonials from '../testimonials/Testimonials';

const items = [1, 2, 3, 4, 5, 6, 7, 8];

function CarouselCard() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 }
  ];
  const [currentItem, setCurrentItem] = React.useState(0);
  const onCurrentChange = (current) => {
    setCurrentItem(current.index);
  };

  return (
    <div className="testimonials container">
        <h3 className="text-center testimonialsTitle my-5">Client Testimonials</h3>
            <Carousel
                breakPoints={breakPoints}
                onNextEnd={onCurrentChange}
                onPrevEnd={onCurrentChange}
                breakPoints={breakPoints} 
                enableAutoPlay autoPlaySpeed={5000}
            >
                {items.map((item, i) => {
                const classNameActive = currentItem + 1 === i ? true : false;
                return (
                    <Testimonials key={item} middleCard={classNameActive} />
                );
                })}
            </Carousel>
    </div>
  );
}

export default CarouselCard;

