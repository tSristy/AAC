'use client';
import { useState } from "react";
import { Box, Container, TableContainer, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import theme from '@/theme/theme';

import blockProduct from '../../../../public/server/pMash.png';

import icon1 from '../../../../public/server/mashIcon/icon1.png';
import icon2 from '../../../../public/server/mashIcon/icon2.png';
import icon3 from '../../../../public/server/mashIcon/icon3.png';
import icon4 from '../../../../public/server/mashIcon/icon4.png';

export default function PowerMesh() {

    const [featureHover, setFeatureHover] = useState(null);

    const powerMeshData = {
        id: 1,
        name: "Great Wall Power Mesh",
        img_url: blockProduct.src
    };

    const powerMeshFeatures = [
        {
            id: 1,
            title: "Crack Control",
            description: "Minimizes shrinkage and settlement cracks at joints.",
            icon: icon1.src,
        },
        {
            id: 2,
            title: "Strong Bonding",
            description: "Improves tensile strength across masonry interfaces.",
            icon: icon2.src,
        },
        {
            id: 3,
            title: "Easy to Apply",
            description: "Lightweight, flexible, and cuts easily to size.",
            icon: icon3.src,
        },
        {
            id: 4,
            title: "Multipurpose Use",
            description: "Suitable for walls, beams, lintels, and door/window joints.",
            icon: icon4.src,
        },
    ];

    const technicalSpecs = [
        { id: 1, parameter: 'Weight of Fabric', value: '350 GSM' },
        { id: 2, parameter: 'Mesh Size', value: '5mm x 5mm' },
        { id: 3, parameter: 'Standard Roll Length', value: '25 Metres (Tolerance 1%)' },
        { id: 4, parameter: 'Standard Roll Width', value: '50mm / 75mm / 100mm' },
        { id: 5, parameter: 'Warp Breaking Strength', value: '3200 N/mm²' },
        { id: 6, parameter: 'Weft Breaking Strength', value: '3200 N/mm²' },
    ];

    return (
        <Box sx={{ pt: 10 }}>
            {/* Product description */}
            <Box sx={{ py: 5, px: 5 }}>
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                        <Box sx={{ position: "relative", width: "100%", height: '100%', backgroundImage: `url(${powerMeshData.img_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550' }}>{"Great Wall Power Mesh"}</Typography>
                        <Typography sx={{ fontSize: '1.5rem', mb: 3, color: theme.palette.primary.text, fontWeight: '450' }}>Invisible Structural Reinforcement & Crack Protection</Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: '400' }}>
                            {`Great Wall Power Mesh delivers invisible structural strength that protects your walls against cracks, vibrations, and structural shifts. By distributing mechanical loads evenly across masonry joints, it ensures your building remains flawless for generations.`}
                        </Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Suited For:</Box>
                            {` AAC Blocks, Clay Bricks, Concrete Masonry & Internal Partition Walls`}
                        </Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500', mb: 2 }}>Application Areas:</Box>
                            {`\n•	AAC Block Masonry – Reinforce horizontal bed joints between block layers
•	Openings – Around windows, doors, and other wall cutouts to prevent cracking
•	Wall-to-Column Joints – Ensures stable connection between dissimilar materials
•	Beams & Lintels – Adds structural strength above door and window spans
•	Partition Walls – Keeps lightweight walls strong and impact-resistant
`}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Features */}
            <Box sx={{ py: 5, px: { sm: 2, md: 10 } }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Features</Typography>

                <Grid container spacing={2}>
                    {powerMeshFeatures.map((feature) => {
                        const isHovered = featureHover === feature.id;
                        return (
                            <Grid
                                size={{ sm: 12, md: 6 }}
                                key={feature.id}
                                onMouseEnter={() => setFeatureHover(feature.id)}
                                onMouseLeave={() => setFeatureHover(null)}
                                sx={{
                                    transition: 'all 0.5s ease-in-out',
                                    cursor: 'pointer'
                                }}
                            >
                                <Stack
                                    direction={{ sm: 'column', md: 'row' }}
                                    spacing={2}
                                    sx={{
                                        mb: 2,
                                        p: 2,
                                        borderRadius: 2,
                                        border: `2px solid ${theme.palette.secondary.main}`,
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box component="img" src={feature.icon} alt={feature.title} sx={{ width: '60px', height: '60px' }} />
                                    <Box sx={{ width: '100%' }}>
                                        <Typography variant='h6' sx={{ fontWeight: '550' }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography sx={{ textAlign: 'justify', fontSize: '1.1rem', color: theme.palette.primary.text }}>
                                            {isHovered ? feature.description : `${feature.description.slice(0, 150)}`}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

            
{/* Technical Specification Table */}
<Box
    sx={{
        py: { xs: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 10 },
        bgcolor: theme.palette.secondary.main
    }}
>
    <Typography
        variant="h3"
        sx={{
            mb: 5,
            color: theme.palette.secondary.text,
            textAlign: 'center',
            fontWeight: 550,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' }
        }}
    >
        Technical Specification
    </Typography>

    <Container maxWidth="lg">
        <Box
            sx={{
                backgroundColor: 'white',
                p: { xs: 1.5, sm: 3, md: 5 },
                borderRadius: 2,
                boxShadow: 3
            }}
        >
            <TableContainer
                sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    overflowX: 'auto'
                }}
            >
                <Table
                    aria-label="technical-specification-table"
                    sx={{
                        minWidth: { xs: 450, sm: 550 },
                        width: '100%'
                    }}
                >
                    <TableHead>
                        <TableRow
                            sx={{
                                bgcolor: theme.palette.action.hover
                            }}
                        >
                            <TableCell align="left" sx={{ width: '50%' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: {
                                            xs: '0.85rem',
                                            sm: '1.1rem'
                                        }
                                    }}
                                >
                                    PARAMETERS
                                </Typography>
                            </TableCell>

                            <TableCell align="left">
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: {
                                            xs: '0.85rem',
                                            sm: '1.1rem'
                                        }
                                    }}
                                >
                                    SPECIFICATIONS
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {technicalSpecs.map((spec) => (
                            <TableRow
                                key={spec.id}
                                sx={{
                                    '&:last-child td': {
                                        borderBottom: 0
                                    },
                                    '&:hover': {
                                        bgcolor: theme.palette.action.hover
                                    }
                                }}
                            >
                                <TableCell
                                    align="left"
                                    sx={{
                                        py: { xs: 1.5, sm: 2 }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '1rem',
                                                md: '1.2rem'
                                            },
                                            fontWeight: 450
                                        }}
                                    >
                                        {spec.parameter}
                                    </Typography>
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{
                                        py: { xs: 1.5, sm: 2 }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '0.85rem',
                                                sm: '1rem',
                                                md: '1.2rem'
                                            },
                                            fontWeight: 450,
                                            color: theme.palette.secondary.light,
                                            overflowWrap: 'anywhere'
                                        }}
                                    >
                                        {spec.value}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Container>
</Box>

        </Box>
    );
}