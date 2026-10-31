'use client';
import { useState } from "react";
import { Box, Container, TableContainer, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import theme from '@/theme/theme';

import blockProduct from '../../../../public/server/pFix.png';

import icon1 from '../../../../public/server/fixIcon/icon1.png';
import icon2 from '../../../../public/server/fixIcon/icon2.png';
import icon3 from '../../../../public/server/fixIcon/icon3.png';
import icon4 from '../../../../public/server/fixIcon/icon4.png';
import icon5 from '../../../../public/server/fixIcon/icon5.png';
import icon6 from '../../../../public/server/fixIcon/icon6.png';
import icon7 from '../../../../public/server/fixIcon/icon7.png';
import icon8 from '../../../../public/server/fixIcon/icon8.png';

export default function BlockFixAdhesive() {

    const [featureHover, setFeatureHover] = useState(null);

    const adhesiveData = {
        id: 1,
        name: "Great Wall Block Fix Adhesive",
        img_url: blockProduct.src
    };

    const adhesiveFeatures = [
  { id: 1,
    icon: icon1.src,
    title: "High Bond Strength",
    description: "Delivers exceptional load-bearing capacity with special polymers, providing adhesive strength exceeding 0.41 MPa for superior structural stability."
  },
  { id: 2,
    icon: icon2.src,
    title: "No Shrinkage Cracks & Water Resistance",
    description: "Prevents water seepage, percolation, and shrinkage cracks while ensuring precise wall leveling and long-lasting moisture protection."
  },
  {
    id: 3,
    icon: icon3.src,
    title: "Self-Curing Technology",
    description: "Advanced water-retention polymers eliminate the need for post-application water curing, saving labor, time, and water."
  },
  {
    id: 4,
    icon: icon4.src,
    title: "High Coverage & Efficiency",
    description: "A single 25 kg bag covers 50–60 sq. ft. at 3–5 mm thickness, offering high-volume yield and consistent quality."
  },
  { id: 5,
    icon: icon5.src,
    title: "Optimal Thermal Insulation",
    description: "Ultra-thin joints minimize thermal bridging across block walls, improving insulation and overall building energy efficiency."
  },
  {
    id: 6,
    icon: icon6.src,
    title: "High Impact Resistance",
    description: "Designed to absorb physical stress and vibration, making it suitable for demanding interior and exterior applications."
  },
  {
    id: 7,
    icon: icon7.src,
    title: "Pre-Mixed Convenience",
    description: "Factory-blended and ready to use. Simply add clean water on-site for faster preparation compared to conventional mortar."
  },
  {
    id: 8,
    icon: icon8.src,
    title: "Zero Site Wastage",
    description: "Easy mixing and quick application reduce labor costs and material waste, maximizing overall cost efficiency on the job site."
  }
];



    return (
        <Box sx={{ pt: 10 }}>
            {/* Product description */}
            <Box sx={{ py: 5, px: 5 }}>
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                        <Box sx={{ position: "relative", width: "100%", height: '100%', backgroundImage: `url(${adhesiveData.img_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550' }}>{"Great Wall Block Fix Adhesive"}</Typography>
                        <Typography sx={{ fontSize: '1.5rem', mb: 3, color: theme.palette.primary.text, fontWeight: '450' }}>High-Performance Polymer-Modified Thin-Bed Mortar</Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: '400' }}>
                            {`Great Wall Block Fix Adhesive is a high-performance, polymer-modified thin-bed mortar specially formulated for the precise and durable laying of AAC blocks and panels. Engineered with a balanced blend of premium cement, selected graded sand, Lime Stone Powder and high-grade functional polymers, Great Wall Block Fix Adhesive delivers exceptional bond strength, high water retention, and long-term structural reliability for both interior and exterior wall applications.\n
Applied in ultra-thin layers of 3–5 mm, Great Wall Block Fix Adhesive eliminates the inefficiencies, thermal bridging, and heavy material consumption associated with traditional site-mixed mortar—delivering faster execution and significantly lower project costs. 
`}
                        </Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Suitable For:</Box>
                            {` Interior and exterior wall applications, AAC blocks and panels laying`}
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Packaging Size:</Box>
                                {` 25 kg bag`}
                            </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Features */}
            <Box sx={{ py: 5, px: { sm: 2, md: 10 } }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Features</Typography>

                <Grid container spacing={2}>
                    {adhesiveFeatures.map((feature) => {
                        const isHovered = featureHover === feature.id;
                        return (
                            <Grid
                                size={{ sm: 12, md: 6 }}
                                key={feature.id}
                                onMouseEnter={() => setFeatureHover(feature.id)}
                                onMouseLeave={() => setFeatureHover(null)}
                            >
                                <Stack
                                    direction={{ sm: 'column', md: 'row' }}
                                    spacing={2}
                                    sx={{
                                        mb: 2,
                                        p: 2.5,
                                        borderRadius: 2,
                                        border: `2px solid ${theme.palette.secondary.main}`,
                                        alignItems: 'flex-start',
                                        // --- Smooth transition properties applied here ---
                                        maxHeight: isHovered ? '400px' : '130px', // Target realistic bounds for smooth speed
                                        overflow: 'hidden',
                                        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease-in-out',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)', // Adds a nice clean minimal lift effect
                                        }
                                    }}
                                >
                                    <Box component="img" src={feature.icon} alt={feature.title} sx={{ width: '60px', height: '60px', flexShrink: 0 }} />
                                    <Box sx={{ width: '100%' }}>
                                        <Typography variant='h6' sx={{ fontWeight: '500', mb: 1 }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography sx={{ textAlign: 'justify', fontSize: '1.05rem', color: theme.palette.primary.text, lineHeight: 1.6 }}>
                                            {isHovered ? feature.description : `${feature.description.substring(0, 120)}...`}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

            
{/* Table */}
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
                        {[
                            {
                                parameter: 'Composition',
                                specification: 'Cement, Lime Stone, Processed Sand, Chemical Additives'
                            },
                            {
                                parameter: 'Aggregate Size',
                                specification: '0-4 mm Processed Sand'
                            },
                            {
                                parameter: 'Appearance',
                                specification: 'Grey Granular Powder'
                            },
                            {
                                parameter: 'Mixing Ratio',
                                specification: '4.5 ltr water per 25 kg bag'
                            },
                            {
                                parameter: 'Density (Wet)',
                                specification: '1.75 kg per ltr'
                            },
                            {
                                parameter: 'Compressive Strength (3-Day)',
                                specification: '16.97 N/mm²'
                            },
                            {
                                parameter: 'Compressive Strength (7-Day)',
                                specification: '25.15 N/mm²'
                            },
                            {
                                parameter: 'Working Time',
                                specification: 'Approx. 30 minutes'
                            },
                            {
                                parameter: 'Standard',
                                specification: 'ASTM C1660-09, ASTM C387'
                            },
                            {
                                parameter: 'Coverage',
                                specification: '~50-60 sq. ft. per 25 kg bag at 3mm thickness'
                            },
                            {
                                parameter: 'Shelf Life',
                                specification: '12 months from manufacture (store cool & dry)'
                            }
                        ].map((item, index) => (
                            <TableRow
                                key={index}
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
                                        {item.parameter}
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
                                        {item.specification}
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