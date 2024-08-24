"use client"

import React from 'react';
import { Button, Typography } from '@mui/material';
import { redirect, useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/about');
  };

  return (
    redirect('/dashboard')
  );
};

export default HomePage;
