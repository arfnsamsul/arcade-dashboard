"use client";

import React, { useEffect, useState } from 'react';
import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material';
import PostCard from '@/components/post-card/PostCard';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebaseConfig';
import { Post } from '@/types/Post'; // Import the Post interface
import { useRouter } from 'next/navigation';

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Ensure the posts array is typed

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({
        id: doc.id, // Include the document ID
        ...doc.data(),
      })) as Post[]; // Type assertion to ensure TypeScript knows the structure
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  const router = useRouter();

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
      
      <Button 
        sx={{ m: 2 }}
        variant='contained'
        onClick={()=> {
          router.push("/dashboard/new-post");
        }}
      > New Post </Button>

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
          {posts.map((post) => (
            <Box key={post.id} sx={{ mb: 4 }}>
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
