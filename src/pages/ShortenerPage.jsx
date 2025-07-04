import React, { useState } from 'react';
import URLForm from '../components/URLForm';
import URLStats from '../components/URLStats';
import { Container, Typography } from '@mui/material';

const ShortenerPage = ({ onAdd }) => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (data) => {
    setUrls((prev) => [...prev, ...data]);
    onAdd(data); // sync with global stats
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        URL Shortener
      </Typography>
      <URLForm onShorten={handleShorten} />
      <URLStats list={urls} />
    </Container>
  );
};

export default ShortenerPage;
