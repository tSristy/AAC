'use client';

import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';
import theme from '@/theme/theme';

import imgNews1 from '../../../../public/server/News/new1.jpeg';
import imgNews2 from '../../../../public/server/News/new2.jpeg';


export default function EventExhibitionsPage() {

    const eventList = [
        {
            id: 1,
            title: "World Habitat Day 2026",
            date: "2026",
            location: "Agargaon, Dhaka Bangladesh",
            featured_image: imgNews1.src
        },
        {
            id: 2,
            title: "Great Wall AAC Blocks & Panels at IAB Fair 2026",
            date: "2026",
            location: "IAB Fair Dhaka, Bangladesh",
            featured_image: imgNews2.src
        }
    ]


    return (
        <Box sx={{ bgcolor: 'white', color: theme.palette.primary.text, minHeight: '100vh', pt: { xs: 8, md: 10 } }}>
            <Box py={6}>
                <Container maxWidth="lg">
                    <Box px={{ sm: 2, md: 4 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2rem', md: '2.8rem' },
                                fontWeight: 700,
                                color: theme.palette.secondary.text,
                                mb: 6,
                                textAlign: 'center',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Event & Exhibitions
                        </Typography>

                        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'center', alignItems: 'stretch' }}>
                            {
                                eventList.map((event, index) => (
                                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                        <Box sx={{
                                            bgcolor: 'white',
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            p: 2,
                                            height: '100%',
                                            '&:hover': {
                                                cursor: 'pointer',
                                                boxShadow: 6,
                                                transition: 'box-shadow 0.3s ease-in-out',
                                            }
                                        }}>

                                            <Box component="img" src={event.featured_image} alt={event.title} sx={{ width: '100%', height: { xs: '180px', md: '200px' }, objectFit: 'cover', borderRadius: 2 }} />

                                            <Typography sx={{ mt: 2, fontSize: '0.9rem', color: '#666' }}>{event.date} | {event.location}</Typography>
                                            <Typography variant='h6' sx={{ color: theme.palette.primary.text, fontWeight: '600', fontSize: { xs: '1.05rem', md: '1.25rem' } }}>{event.title}</Typography>
                                            <Typography sx={{ cursor: 'pointer', fontSize: { xs: '1rem', md: '1.1rem' }, mt: 2, color: theme.palette.primary.main }} onClick={() => router.push(`/event-exhibitions`)}>
                                                Read more
                                            </Typography>
                                        </Box>
                                    </Grid>

                                ))}
                        </Grid>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
}