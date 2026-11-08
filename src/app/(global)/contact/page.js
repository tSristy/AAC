'use client';
import theme from '@/theme/theme';
import { useState } from 'react';
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ContactPage() {
  const [subject, setSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <Box sx={{ pt: 10 }}>
        <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box>
              <Typography variant='overline' letterSpacing={4}>Let's Talk</Typography>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 600, color: theme.palette.primary.main }}>
                Get Any Question?
              </Typography>

              <Stack direction="row" sx={{ my: 4, justifyContent: 'space-between' }}>
                <Box>
                  <Typography sx={{ fontSize: '1rem' }}>Please reach us at</Typography>
                  <Typography sx={{ fontWeight: 600 }}>info@greatwallaacblocks.com</Typography>
                </Box>
                <Box>
                  <Typography sx={{ textAlign: "right", fontWeight: 600 }}>Phone</Typography>
                  <Typography sx={{ textAlign: "right", fontSize: '1rem' }}>+880 1335 118 773</Typography>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ my: 4, justifyContent: 'space-between' }}>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Head Office</Typography>
                  <Typography sx={{ fontSize: '1rem' }}>Navana Zohura Square
                    28, Kazi Nazrul Islam Avenue
                    Bangla Motor
                    Dhaka 1205</Typography>
                </Box>
                <Box>
                  <Typography sx={{ textAlign: 'right', fontWeight: 600 }}>Factory</Typography>
                  <Typography sx={{ textAlign: 'right', fontSize: '1rem' }}>Kholapara, Kaliganj, Gazipur, Bangladesh</Typography>
                </Box>
              </Stack>
            </Box>

            {/* <Stack direction='row' spacing={2} sx={{  }}>
              <FacebookIcon sx={{ color: 'blue' }}/>
              <InstagramIcon sx={{ color: 'red' }}/>
              <YouTubeIcon sx={{ color: 'red' }}/>
              <WhatsAppIcon sx={{ color: 'green' }}/>
            </Stack> */}

          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box component="form" noValidate autoComplete="off">
              <Typography variant='overline' sx={{ mb: 2, color: theme.palette.primary.main }}>Please provide your full name</Typography>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth size="small" color="danger"
                sx={{ mt: 1 }}
              />
              <TextField
                label="Mobile"
                type="tel"
                variant="outlined"
                fullWidth size="small" color="danger"
                sx={{ mt: 1 }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth size="small" color="danger"
                sx={{ mt: 1 }}
              />

              <FormControl fullWidth color='error' size='small' sx={{ mt: 1 }}>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={subject}
                  label="Subject"
                  onChange={handleSubjectChange}
                >
                  <MenuItem value="Product Inquiry">Product Inquiry</MenuItem>
                  <MenuItem value="Technical Support">Technical Support</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              <TextField color="danger"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                sx={{ mt: 1 }}
              />

              <Box sx={{ mt: 5 }}>
                <Button variant='outlined' sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
                  View More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Container>

      <Box>
        <div style={{ height: '450px', overflow: 'hidden', width: '100%' }}>
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6136.65707468825!2d90.39705862329069!3d23.745930515109507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89619b141f3%3A0x8a108b598fcefadb!2sNavana%20Zohura%20Square!5e0!3m2!1sen!2sbd!4v1753583129199!5m2!1sen!2sbd" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </Box>
    </Box>
  );
};


