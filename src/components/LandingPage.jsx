import React from "react";
import ProfileCard from "./ProfileCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";
import Footer from "./Footer";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function LandingPage() {
  // const [rating, setRating] = React.useState(4); // Initial rating
  const rating = 4;
  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };

  return (
    <div>
      <Header></Header>

      <Carousel
        responsive={responsive}
        showDots={true}
        containerClass="carousel-container"
      >
        <ProfileCard
          name="John Doe"
          bio="A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge."
          avatarUrl="./7.jpg" // Example image URL
          rating={rating}
          // onRatingChange={null}
        />
        <ProfileCard
          name="John Doe"
          bio="A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge."
          avatarUrl="./5.jpg" // Example image URL
          rating={rating}
          // onRatingChange={}
        />
        <ProfileCard
          name="John Doe"
          bio="A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge."
          avatarUrl="./8.jpg" // Example image URL
          rating={rating}
          // onRatingChange={}
        />
        <ProfileCard
          name="John Doe"
          bio="A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge."
          avatarUrl="./62.jpg" // Example image URL
          rating={rating}
          // onRatingChange={}
        />
      </Carousel>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
