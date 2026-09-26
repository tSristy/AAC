'use client';
import { Box, Container, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, bgcolor: 'background.paper', mt: 'auto' }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} My Blogging Website. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}