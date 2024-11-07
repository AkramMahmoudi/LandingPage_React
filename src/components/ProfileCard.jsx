import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Rating,
} from "@mui/material";

const ProfileCard = ({ name, bio, avatarUrl, rating, onRatingChange }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={avatarUrl}
            sx={{ backgroundColor: "#1976d2" }} // Primary color
          >
            {name.charAt(0)}
          </Avatar>
        }
        title={
          <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
            {name}
          </Typography>
        }
        subheader={
          <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
            User Profile
          </Typography>
        }
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          component="p"
          sx={{ fontFamily: "Poppins, sans-serif" }}
        >
          {bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating
          name="user-rating"
          value={rating}
          onChange={(event, newValue) => onRatingChange(newValue)}
          precision={0.5}
          sx={{
            color: "green", // Green color for filled stars
            "& .MuiRating-iconFilled": { color: "green" },
            "& .MuiRating-iconHover": { color: "lightgreen" }, // Light green on hover
          }}
        />
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
