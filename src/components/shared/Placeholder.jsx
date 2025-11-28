import { Box, Typography } from '@mui/material';

export default function Placeholder({ title }) {
  return (
    <Box p={3}>
      <Typography variant="h5" color="textSecondary">{title}</Typography>
      <Typography variant="body1">Feature coming soon...</Typography>
    </Box>
  );
}
