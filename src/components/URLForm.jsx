import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { isValidUrl, generateShortcode } from '../utils/helpers';
import { logEvent } from '../middleware/logger';




const URLForm = ({ onShorten }) => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const addRow = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = () => {
    const results = [];
    for (const entry of urls) {
      const { longUrl, validity, shortcode } = entry;

      if (!isValidUrl(longUrl)) {
        alert(`Invalid URL: ${longUrl}`);
        return;
      }

      const finalCode = shortcode || generateShortcode();
      const expiry = Number(validity) || 30;

      const shortened = {
        original: longUrl,
        code: finalCode,
        expiry: expiry,
        createdAt: new Date().toLocaleString(),
        clicks: [],
      };

      logEvent('Shortened URL created', shortened);
      results.push(shortened);
    }

    onShorten(results);
  };

  return (
    <>
      {urls.map((entry, index) => (
        <Grid container spacing={2} key={index} sx={{ mt: 1 }}>
          <Grid item xs={4}>
            <TextField
              label="Original URL"
              fullWidth
              value={entry.longUrl}
              onChange={(e) => handleChange(index, 'longUrl', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Validity (min)"
              fullWidth
              type="number"
              value={entry.validity}
              onChange={(e) => handleChange(index, 'validity', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Custom Shortcode"
              fullWidth
              value={entry.shortcode}
              onChange={(e) => handleChange(index, 'shortcode', e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
      <Button onClick={addRow} sx={{ mt: 2 }}>
        + Add More
      </Button>
      <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2, ml: 2 }}>
        Shorten URLs
      </Button>
    </>
  );
};

export default URLForm;
