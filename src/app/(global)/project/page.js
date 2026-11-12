'use client';
import { useState } from "react";
import { Box, Container, Tabs, Tab, Typography, Grid, Stack } from "@mui/material";
import theme from '@/theme/theme';

import imgPro1 from '../../../../public/server/project/p1.jpeg';
import imgPro2 from '../../../../public/server/project/p2.jpeg';
import imgPro3 from '../../../../public/server/project/p3.jpeg';


const HAIRLINE = '#e5e3e0';

const projectSheets = [
    {
        key: 'govermental',
        label: 'Govermental',
        rows: [
            ,
        ],
    },
    {
        key: 'industrial',
        label: 'Industrial',
        rows: [
        ],
    },
    {
        key: 'developer',
        label: 'Developer',
        rows: [
            { id: 1, name: 'Chyabithi', img: imgPro1.src },
            { id: 2, name: 'Dreamview Real Estate', img: imgPro3.src },
            { id: 3, name: 'Real Estate', img: imgPro2.src }
        ],
    },
    {
        key: 'personal',
        label: 'Personal',
        rows: [
        ],
    }
];

export default function ProjectPage() {
    const [activeTab, setActiveTab] = useState(2);
    const activeSheet = projectSheets[activeTab];

    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ mb: 5, fontSize: { xs: '2rem', md: '2.8rem' }, color: theme.palette.secondary.text, fontWeight: 600, textAlign: 'center' }}>
                    Technical Specifications
                </Typography>


                {/* Product switcher */}
                <Tabs
                    value={activeTab}
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        mb: 4,
                        // borderBottom: `1px solid ${HAIRLINE}`,
                        minHeight: 'unset',
                        '& .MuiTab-root': {
                            fontSize: '1.1rem',
                            textTransform: 'none',
                            fontWeight: 500,
                            color: theme.palette.secondary.light,
                            minWidth: 'auto',
                            minHeight: 'unset',
                            px: 2.5,
                            py: 1,
                            mr: 1,
                            borderRadius: 8,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)', // Subtle hover background tint
                                color: theme.palette.secondary.text,
                            },
                        },
                        '& .Mui-selected': {
                            backgroundColor: `${theme.palette.primary.main} !important`,
                            color: '#ffffff !important',
                            fontWeight: 500,
                            '&:hover': {
                                backgroundColor: `${theme.palette.primary.main} !important`,
                            },
                        },
                        '& .MuiTabs-indicator': {
                            display: 'none', // Hidden since background highlights the active tab
                        },
                    }}
                >
                    {projectSheets.map((sheet) => (
                        <Tab key={sheet.key} label={sheet.label} />
                    ))}
                </Tabs>

                {/* projects */}
                <Grid container spacing={4}>
                    {activeSheet.rows.map((row) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={row.id}>
                            <Stack direction="column" spacing={2}>
                                <Box
                                    component="img"
                                    src={row.img}
                                    alt={row.name}
                                    sx={{
                                        height: '350px',
                                        // aspectRatio: '4 / 3',
                                        objectFit: 'fit',
                                        display: 'block',
                                        borderRadius: 2,
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        fontWeight: 500,
                                        textAlign: { xs: 'left', lg: 'center' },
                                    }}
                                    color={theme.palette.primary.text}
                                >
                                    {row.name}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
