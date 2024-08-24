// src/app/dashboard/page.tsx

"use client";

import React from 'react';
import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import PostCard from '@/components/post-card/PostCard';

const postsData = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/65.jpg",
    avatarAlt: "J. Smith",
    name: "J. Smith",
    role: "Frontend Developer",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Frontend Project",
    title: "Building Responsive Web Applications with React",
    description:
      "Responsive web design is essential for creating applications that provide an optimal user experience...",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    avatarAlt: "A. Johnson",
    name: "A. Johnson",
    role: "UI/UX Designer",
    imageSrc:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "UI Design",
    title: "Crafting User Interfaces that Delight Users",
    description:
      "Designing user interfaces that are both visually appealing and functional requires a deep understanding of user behavior...",
  },
];



const PostPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Posts
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">My Posts</Typography>
      </Breadcrumbs>
      
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        py: 3,
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 600, // Limit the width of the content
        }}
      >
        {postsData.map((post, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <PostCard
              avatarSrc={post.avatarSrc}
              avatarAlt={post.avatarAlt}
              name={post.name}
              role={post.role}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
              title={post.title}
              description={post.description}
              showEditDeleteButtons={true}
            />
          </Box>
        ))}
      </Box>
    </Box>
    </div>
  );
};

export default PostPage;
