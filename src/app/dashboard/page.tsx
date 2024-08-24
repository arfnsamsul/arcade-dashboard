"use client";

import React from 'react';
import { Avatar, Box, Breadcrumbs, Divider, Grid, Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Dummy data for the chart
const data = [
  { time: "00:00", Sales: 40, Revenue: 30, "Customer Report": 20 },
  { time: "01:00", Sales: 50, Revenue: 40, "Customer Report": 30 },
  { time: "02:00", Sales: 60, Revenue: 50, "Customer Report": 25 },
  { time: "03:00", Sales: 70, Revenue: 60, "Customer Report": 40 },
  { time: "04:00", Sales: 80, Revenue: 70, "Customer Report": 50 },
  { time: "05:00", Sales: 90, Revenue: 80, "Customer Report": 60 },
];


const DashboardPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Dashboard</Typography>
      </Breadcrumbs>

      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Reports Section */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Reports <Typography variant="subtitle1" component="span" sx={{ color: "text.secondary" }}> | Today</Typography>
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
                  <Line type="monotone" dataKey="Revenue" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="Customer Report" stroke="#ff7300" />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Sold! Arcane Tech’s QuantumCore solution has been purchased by Mystic Innovations"
                    secondary="1 min ago"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Shadow Labs has reported an issue with our Tetris system" secondary="4 min ago" />
                </ListItem>
                <Divider />
                {/* Add more list items as needed */}
              </List>
            </Paper>
          </Grid>

          {/* Posts & Updates */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Post & Updates <Typography variant="subtitle1" component="span" sx={{ color: "text.secondary" }}> | Today</Typography>
              </Typography>
              <List>
                <ListItem alignItems="flex-start">
                  <Avatar variant="rounded" src="https://via.placeholder.com/150" sx={{ mr: 2 }} />
                  <ListItemText
                    primary="Experimenting with Next.js 13 for Server-Side Rendering"
                    secondary="I've been working with Next.js 13 recently, specifically focusing on the new..."
                  />
                </ListItem>
                <Divider />
                <ListItem alignItems="flex-start">
                  <Avatar variant="rounded" src="https://via.placeholder.com/150" sx={{ mr: 2 }} />
                  <ListItemText
                    primary="Elevating User Experience with Advanced CSS Techniques"
                    secondary="I've been experimenting with some advanced CSS techniques to improve user..."
                  />
                </ListItem>
                <Divider />
                {/* Add more list items as needed */}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DashboardPage;
