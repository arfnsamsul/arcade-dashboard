"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface PostCardProps {
  avatarSrc: string;
  avatarAlt: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  showSaveButton?: boolean;
  showLikeButton?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  avatarSrc,
  avatarAlt,
  name,
  role,
  imageSrc,
  imageAlt,
  title,
  description,
  showSaveButton = true,
  showLikeButton = true,
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
  };

  const handleSaveClick = () => {
    setSaved((prev) => !prev);
  };

  return (
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} alt={avatarAlt} sx={{ width: 56, height: 56 }} />}
        title={<Typography variant="h6" sx={{ fontWeight: "bold" }}>{name}</Typography>}
        subheader={<Typography variant="body2" color="text.secondary">{role}</Typography>}
      />
      <Box p={2}>
        <CardMedia
          component="img"
          image={imageSrc}
          alt={imageAlt}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {(showSaveButton || showLikeButton) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 2,
            pb: 2,
          }}
        >
          {showSaveButton && (
            <IconButton aria-label="bookmark" onClick={handleSaveClick}>
              {saved ? (
                <BookmarkIcon sx={{ color: "#000" }} /> // Filled icon with color
              ) : (
                <BookmarkBorderIcon sx={{ color: "#000" }} /> // Outlined icon with color
              )}
            </IconButton>
          )}
          {showLikeButton && (
            <IconButton aria-label="like" onClick={handleLikeClick}>
              {liked ? (
                <FavoriteIcon sx={{ color: "#ff1744" }} /> // Filled icon with color
              ) : (
                <FavoriteBorderIcon sx={{ color: "#ff1744" }} /> // Outlined icon with color
              )}
            </IconButton>
          )}
        </Box>
      )}
    </Card>
  );
};

export default PostCard;
