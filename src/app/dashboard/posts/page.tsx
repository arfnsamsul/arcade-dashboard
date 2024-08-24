// src/app/dashboard/page.tsx

"use client";

import React from 'react';
import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import PostCard from '@/components/post-card/PostCard';

const postsData = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/75.jpg",
    avatarAlt: "K. Anderson",
    name: "K. Anderson",
    role: "Web Designer",
    imageSrc:
      "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Web Design Project",
    title: "Elevating User Experience with Advanced CSS Techniques",
    description:
      "I’ve been experimenting with some advanced CSS techniques to improve user experience on my latest projects...",
  },
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
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    avatarAlt: "L. Brown",
    name: "L. Brown",
    role: "Graphic Designer",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Graphic Design",
    title: "The Art of Creating Stunning Visuals for Web Projects",
    description:
      "Creating visuals that align with brand identity while maintaining aesthetic appeal is crucial in graphic design...",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/85.jpg",
    avatarAlt: "C. Davis",
    name: "C. Davis",
    role: "Software Engineer",
    imageSrc:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Software Development",
    title: "Building Scalable Web Applications with Node.js",
    description:
      "Scalability is key in modern web development. This post dives into the best practices for scaling Node.js applications...",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/40.jpg",
    avatarAlt: "E. Wilson",
    name: "E. Wilson",
    role: "Content Creator",
    imageSrc:
      "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Content Creation",
    title: "How to Create Engaging Content for Social Media",
    description:
      "Creating engaging content is crucial for building an audience. Learn how to craft content that resonates with your followers...",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/51.jpg",
    avatarAlt: "M. Thompson",
    name: "M. Thompson",
    role: "Digital Marketer",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Digital Marketing",
    title: "The Power of SEO in Modern Digital Marketing",
    description:
      "Search Engine Optimization (SEO) remains a critical strategy in digital marketing. Learn the latest SEO trends and strategies...",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/30.jpg",
    avatarAlt: "H. Martinez",
    name: "H. Martinez",
    role: "Project Manager",
    imageSrc:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Project Management",
    title: "Best Practices for Agile Project Management",
    description:
      "Agile project management is essential for fast-paced teams. Discover the key principles for managing projects effectively...",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/90.jpg",
    avatarAlt: "P. Clark",
    name: "P. Clark",
    role: "Full-Stack Developer",
    imageSrc:
      "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Full-Stack Development",
    title: "Mastering Full-Stack Development with MERN Stack",
    description:
      "The MERN stack is one of the most popular choices for full-stack development. Learn how to build full-featured apps with MongoDB, Express, React, and Node.js...",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/22.jpg",
    avatarAlt: "S. Johnson",
    name: "S. Johnson",
    role: "Data Analyst",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
    imageAlt: "Data Analysis",
    title: "The Role of Data Analytics in Business Growth",
    description:
      "Data-driven decision-making is at the heart of business growth. Learn how data analytics can help organizations scale effectively...",
  },
];



const PostPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Post
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Posts</Typography>
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
              showActions={true}
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
