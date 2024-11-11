import React from "react";
import ProfileCard from "./ProfileCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header1 from "./Header1";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";

const rating = 4;
const ProfileCard1 = [
  {
    name: "John Doe",
    bio: "A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge.",
    avatarUrl: "./7.jpg",
    rating: rating,
  },
  {
    name: "John Doe",
    bio: "A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge.",
    avatarUrl: "./5.jpg", // Example image URL
    rating: rating,
  },
  {
    name: "John Doe",
    bio: "A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge.",
    avatarUrl: "./8.jpg", // Example image URL
    rating: rating,
  },
  {
    name: "John Doe",
    bio: "A passionate developer and tech enthusiast. Loves to explore new technologies and share knowledge.",
    avatarUrl: "./62.jpg",
    rating: rating,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1070 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1070, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function LandingPage() {
  // const [rating, setRating] = React.useState(4); // Initial rating

  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };

  return (
    <div>
      <Header1></Header1>

      <Carousel
        responsive={responsive}
        showDots={true}
        containerClass="carousel-container"
      >
        {ProfileCard1.map((e, index) => {
          return (
            <ProfileCard
              key={uuidv4}
              name={e.name}
              bio={e.bio}
              avatarUrl={e.avatarUrl}
              rating={e.rating}
              // onRatingChange={}
            />
          );
        })}
      </Carousel>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
