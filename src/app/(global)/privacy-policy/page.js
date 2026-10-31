'use client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';
import theme from '@/theme/theme';


export default function FAQPage() {
    return (
        <Box sx={{ bgcolor: 'white', color: theme.palette.primary.text, minHeight: '100vh', pt: { xs: 8, md: 10 } }}>
            <Box py={6}>
                <Container maxWidth="md">
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
                            Privacy Policy
                        </Typography>


                            
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}