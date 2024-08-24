"use client";

import React, { ReactNode } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { Inbox, Dashboard, PostAdd, Bookmark, Person } from '@mui/icons-material';
import Link from 'next/link';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  { text: 'Posts', icon: <PostAdd />, path: '/dashboard/posts' },
  { text: 'My Posts', icon: <Inbox />, path: '/dashboard/my-posts' },
  { text: 'Saved Posts', icon: <Bookmark />, path: '/dashboard/saved-posts' },
  { text: 'My Profile', icon: <Person />, path: '/dashboard/profile' },
];

// Define the type for the component props
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#f5f5f5', // Light background color for the drawer
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={Link} href={item.path}>
              <ListItemIcon sx={{ color: '#333' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: '#333' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
