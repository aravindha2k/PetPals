import { Carousel } from "@material-tailwind/react";

export default function HeroCarousel() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full h-80vh overflow-hidden mt-20">
        <Carousel
          transition={{ duration: 2 }}
          loop={true}
          autoplay={false}
          autoplayDelay={8000}
        >
          <div className="h-full">
            <img
              src="https://i.imgur.com/Yf5oP2j.jpg"
              alt="image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              src="https://i.imgur.com/qeaT7sM.jpg"
              alt="image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              src="https://i.imgur.com/A2nU5MN.jpg"
              alt="image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
