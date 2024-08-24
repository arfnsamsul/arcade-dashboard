"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter, useParams } from "next/navigation"; // Import useParams and useRouter

import { createPost, getPostById, updatePost } from "@/services/postService";
import { Post } from "@/types/Post";

export default function NewPostPage() {
  const { id } = useParams(); // Get the postId from the URL
  const isEditMode = Boolean(id); // If there is an id, it's edit mode
  const router = useRouter();

  const [post, setPost] = useState<Omit<Post, "id">>({
    avatarSrc: "",
    avatarAlt: "",
    name: "",
    role: "",
    imageSrc: "",
    imageAlt: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (isEditMode && id) {
      const fetchPost = async () => {
        const fetchedPost = await getPostById(id);
        if (fetchedPost) {
          setPost({
            avatarSrc: fetchedPost.avatarSrc,
            avatarAlt: fetchedPost.avatarAlt,
            name: fetchedPost.name,
            role: fetchedPost.role,
            imageSrc: fetchedPost.imageSrc,
            imageAlt: fetchedPost.imageAlt,
            title: fetchedPost.title,
            description: fetchedPost.description,
          });
        }
      };
      fetchPost();
    }
  }, [isEditMode, id]);

  const handleImageUpload = () => {
    setPost((prev) => ({
      ...prev,
      imageSrc: "https://via.placeholder.com/800x450",
    }));
  };

  const handleImageDelete = () => {
    setPost((prev) => ({
      ...prev,
      imageSrc: "",
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Automatically set avatarAlt to match the title
    if (name === "title") {
      setPost((prev) => ({
        ...prev,
        [name]: value,
        avatarAlt: value, // Set avatarAlt to the same value as the title
      }));
    } else {
      setPost((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    if (isEditMode && id) {
      await updatePost(id, post);
    } else {
      await createPost(post);
    }
    router.push("/dashboard/posts");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f7fa",
        padding: "16px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          {post.imageSrc ? (
            <img
              src={post.imageSrc}
              alt={post.imageAlt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "250px",
                bgcolor: "#e0e0e0",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                No Image
              </Typography>
            </Box>
          )}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <IconButton
              color="primary"
              onClick={handleImageUpload}
              sx={{
                backgroundColor: "#1976D2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1565C0",
                },
              }}
            >
              <UploadIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={handleImageDelete}
              sx={{
                backgroundColor: "#f44336",
                color: "white",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          value={post.name}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Role"
          variant="outlined"
          name="role"
          value={post.role}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          name="title"
          value={post.title}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          label="Content"
          variant="outlined"
          multiline
          rows={8}
          name="description"
          value={post.description}
          onChange={handleChange}
          placeholder="Share your thoughts..."
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{
            padding: "12px 0",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          {isEditMode ? "Update Post" : "Post"}
        </Button>
      </Card>
    </Box>
  );
}
