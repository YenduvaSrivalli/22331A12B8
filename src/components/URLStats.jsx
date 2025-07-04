import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const URLStats = ({ list }) => {
  return (
    <>
      {list.map((item, i) => (
        <Card key={i} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">
              Short URL: http://localhost:3000/{item.code}
            </Typography>
            <Typography variant="body2">Original: {item.original}</Typography>
            <Typography variant="body2">Created: {item.createdAt}</Typography>
            <Typography variant="body2">Expires in: {item.expiry} minutes</Typography>
            <Typography variant="body2">Clicks: {item.clicks.length}</Typography>
            <List>
              {item.clicks.map((click, j) => (
                <ListItem key={j}>
                  {click.timestamp} from {click.source} ({click.location})
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default URLStats;



