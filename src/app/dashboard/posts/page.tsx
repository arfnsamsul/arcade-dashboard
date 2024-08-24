// src/app/dashboard/page.tsx

"use client";

import React from 'react';
import { Typography } from '@mui/material';

const PostPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Post
      </Typography>
      <Typography>This is your main POST area.</Typography>
    </div>
  );
};

export default PostPage;
