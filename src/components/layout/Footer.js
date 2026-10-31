
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import theme from '@/theme/theme';

const Footer = () => {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchInstagramPosts = async () => {
    //         try {
    //             const response = await fetch('/api/instagram');

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch Instagram posts');
    //             }

    //             const data = await response.json();

    //             if (Array.isArray(data.posts)) {
    //                 setPosts(
    //                     data.posts.filter(
    //                         (post) => post.media_type === 'IMAGE'
    //                     )
    //                 );
    //             }
    //         } catch (error) {
    //             console.error('Instagram fetch error:', error);
    //         }
    //     };

    //     fetchInstagramPosts();
    // }, []);

    const linkButtonSx = {
        fontSize: '.9rem',
        textTransform: 'none',
        justifyContent: 'flex-start',
        color: theme.palette.footer.light,
        minWidth: 0,
        '&:hover': {
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.08)',
        },
    };

    const sectionTitleSx = {
        fontSize: '0.9rem',
        fontWeight: 500,
        color: theme.palette.footer.light,
    };

    const sectionDivider = (
        <Divider
            sx={{
                my: 2,
                borderColor: theme.palette.secondary.light,
            }}
        />
    );

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: theme.palette.footer.newColor,
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    py: 4,
                    textAlign: 'left',
                    fontSize: '.9rem',
                }}
            >
                <Grid container spacing={3}>

                    {/* Instagram Feed */}
                    <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                        <Typography sx={sectionTitleSx}>
                            Visit Our Instagram Feed
                        </Typography>

                        {sectionDivider}

                        <Grid container spacing={1}>
                            {posts.slice(0, 4).map((item) => (
                                <Grid
                                    key={item.id}
                                    size={{ xs: 6, sm: 3 }}
                                >
                                    <Box
                                        component="a"
                                        href={item.permalink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View Instagram post"
                                        sx={{
                                            display: 'block',
                                            aspectRatio: '1 / 1',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.media_url}
                                            loading="lazy"
                                            alt="AAC Block Instagram post"
                                            sx={{
                                                display: 'block',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform .3s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Social Links */}
                    <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                        <Typography sx={sectionTitleSx}>
                            Social Links
                        </Typography>

                        {sectionDivider}

                        <Stack direction='column'>
                            <Button
                                href="https://facebook.com/CharuCeramic"
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<FacebookIcon />}
                                sx={linkButtonSx}
                            >
                                Facebook
                            </Button>

                            <Button
                                href="https://instagram.com/charuceramic"
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<InstagramIcon />}
                                sx={linkButtonSx}
                            >
                                Instagram
                            </Button>

                            <Button
                                href="https://www.youtube.com/@CharuCeramic"
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<YouTubeIcon />}
                                sx={linkButtonSx}
                            >
                                YouTube
                            </Button>

                            <Button
                                href="https://wa.me/8801335118773"
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<WhatsAppIcon />}
                                sx={linkButtonSx}
                            >
                                WhatsApp
                            </Button>
                        </Stack>
                    </Grid>

                    {/* Company */}
                    <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                        <Typography sx={sectionTitleSx}>
                            Company
                        </Typography>

                        {sectionDivider}

                        <Stack direction='column'>
                            <Button component={Link} href="/about" sx={linkButtonSx}>
                                About
                            </Button>

                            <Button component={Link} href="/project" sx={linkButtonSx}>
                                Project
                            </Button>

                            <Button component={Link} href="/career" sx={linkButtonSx}>
                                Career
                            </Button>

                            {/* <Button component={Link} href="/certification" sx={linkButtonSx}>
                                Certifications
                            </Button> */}
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                        <Typography sx={sectionTitleSx}>
                            Quick Links
                        </Typography>

                        {sectionDivider}

                        <Stack direction='column'>
                            <Button component={Link} href="/testimonials" sx={linkButtonSx}>
                                Testimonials
                            </Button>

                            <Button component={Link} href="/event-exhibitions" sx={linkButtonSx}>
                                Event & Exhibitions
                            </Button>

                            <Button component={Link} href="/privacy-policy" sx={linkButtonSx}>
                                Privacy Policy
                            </Button>

                            <Button component={Link} href="/terms-conditions" sx={linkButtonSx}>
                                Terms & Conditions
                            </Button>
                        </Stack>
                    </Grid>

                    {/* Talk to Us */}
                    <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                        <Typography sx={sectionTitleSx}>
                            Talk to Us
                        </Typography>

                        {sectionDivider}

                        <Stack direction='column'>
                            <Button component={Link} href="/faq" sx={linkButtonSx}>
                                FAQ
                            </Button>

                            <Button component={Link} href="/contact" sx={linkButtonSx}>
                                Contact
                            </Button>
                        </Stack>
                    </Grid>

                </Grid>

                <Divider
                    sx={{
                        my: 2,
                        borderColor: theme.palette.secondary.light,
                    }}
                />

                <Typography
                    sx={{
                        fontSize: '.9rem',
                        color: theme.palette.secondary.light,
                        textAlign: 'center',
                    }}
                >
                    © {new Date().getFullYear()} AAC Blocks & Panels.
                    All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
