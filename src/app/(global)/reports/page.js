
'use client';

import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Stack,
    Paper,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import theme from '@/theme/theme';

export default function Reports() {
    const pdfList = [
        { id: 1, title: 'Test Report 1', url: '/server/testReport/testReport1.pdf' },
        { id: 2, title: 'Test Report 2', url: '/server/testReport/testReport2.pdf' },
        { id: 3, title: 'Test Report 3', url: '/server/testReport/testReport3.pdf' },
        { id: 4, title: 'Test Report 4', url: '/server/testReport/testReport4.pdf' },
        { id: 5, title: 'Test Report 5', url: '/server/testReport/testReport5.pdf' },
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">

                {/* Header */}
                <Stack spacing={1} sx={{ mb: 6, alignItems: 'center' }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            fontWeight: 700,
                            color: theme.palette.secondary.text,
                        }}
                    >
                        Reports
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: "center" }}
                    >
                        Browse and download our available reports.
                    </Typography>
                </Stack>

                {/* Report Grid */}
                <Grid container spacing={3}>
                    {pdfList.map((report) => (
                        <Grid
                            key={report.id}
                            size={{ xs: 12, sm: 6, md: 4 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    p: 2,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 2,
                                    bgcolor: 'background.paper',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                {/* PDF Preview */}
                                <Box
                                    sx={{
                                        height: '370px',
                                        overflow: 'hidden',
                                        borderRadius: 1.5,
                                        bgcolor: '#f5f5f5',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                    }}
                                >
                                    <iframe
                                        src={`${report.url}#toolbar=0&navpanes=0&scrollbar=0`}
                                        title={report.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                        }}
                                    />
                                </Box>

                                {/* Report Details */}
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    sx={{ mt: 2, mb: 2, alignItems: 'center' }}
                                >
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 1.5,
                                            bgcolor: 'rgba(47, 211, 88, 0.08)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <PictureAsPdfOutlinedIcon
                                            sx={{ color: theme.palette.primary.main, fontSize: '1.5rem' }}
                                        />
                                    </Box>

                                    <Box sx={{ minWidth: 0, flex: 1 }}>
                                        <Typography
                                            variant="subtitle2"
                                            fontWeight={600}
                                            noWrap
                                        >
                                            {report.title}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            PDF Document
                                        </Typography>
                                    </Box>
                                </Stack>

                                {/* Download Button */}
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    fullWidth
                                    size="medium"
                                    startIcon={<DownloadIcon />}
                                    href={report.url}
                                    download
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        borderRadius: 1.5,
                                        py: 1,
                                    }}
                                >
                                    Download PDF
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
