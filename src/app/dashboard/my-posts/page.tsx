"use client";

import React, { useEffect, useState } from 'react';
import { Box, Breadcrumbs, Button, Link, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import PostCard from '@/components/post-card/PostCard';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebaseConfig';
import { Post } from '@/types/Post'; // Import the Post interface
import { useRouter } from 'next/navigation';
import { deletePost } from '@/services/postService'; // Import the delete service function

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openDialog, setOpenDialog] = useState(false); // State to control the confirmation dialog
  const [postIdToDelete, setPostIdToDelete] = useState<string | null>(null); // Store the post ID to delete
  const router = useRouter();

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

  const handleDeletePost = async () => {
    if (postIdToDelete) {
      await deletePost(postIdToDelete); // Call the delete function
      // Remove the deleted post from the state
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== postIdToDelete));
      setPostIdToDelete(null); // Reset the state
      setOpenDialog(false); // Close the confirmation dialog
    }
  };

  const handleOpenDeleteDialog = (postId: string) => {
    setPostIdToDelete(postId);
    setOpenDialog(true); // Open the confirmation dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setPostIdToDelete(null); // Reset the state
  };

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
        onClick={() => {
          router.push("/dashboard/new-post");
        }}
      >
        New Post
      </Button>

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
                onEditClick={() => router.push(`/dashboard/edit-post/${post.id}`)}
                onDeleteClick={() => handleOpenDeleteDialog(post.id)} // Open the confirmation dialog before deleting
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this post? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeletePost} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostPage;
