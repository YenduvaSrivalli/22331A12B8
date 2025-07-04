import React from 'react';
import URLStats from '../components/URLStats';
import { Container, Typography } from '@mui/material';

const StatsPage = ({ allUrls }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Shortened URL Statistics
      </Typography>
      <URLStats list={allUrls} />
    </Container>
  );
};

export default StatsPage;
