import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatsPage from './pages/StatsPage';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  const [allUrls, setAllUrls] = useState([]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>URL Shortener</Typography>
          <Button color="inherit" component={Link} to="/">Shorten</Button>
          <Button color="inherit" component={Link} to="/stats">Stats</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route
          path="/"
          element={<ShortenerPage onAdd={(urls) => setAllUrls((prev) => [...prev, ...urls])} />}
        />
        <Route path="/stats" element={<StatsPage allUrls={allUrls} />} />
      </Routes>
    </Router>
  );
}

export default App;
