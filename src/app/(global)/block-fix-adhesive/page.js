'use client';
import { useState } from "react";
import { Autocomplete, Box, Button, Container, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import theme from '@/theme/theme';

import Image from "next/image";
import blockProduct from '../../../../public/server/counter.png';
import blockProductHover from '../../../../public/server/counterHover.png';

import icon1 from '../../../../public/server/blockIcon/icon1.png';
import icon2 from '../../../../public/server/blockIcon/icon2.png';
import icon3 from '../../../../public/server/blockIcon/icon3.png';
import icon4 from '../../../../public/server/blockIcon/icon4.png';
import icon5 from '../../../../public/server/blockIcon/icon5.png';
import icon6 from '../../../../public/server/blockIcon/icon6.png';
import icon7 from '../../../../public/server/blockIcon/icon7.png';
import icon8 from '../../../../public/server/blockIcon/icon8.png';
import icon9 from '../../../../public/server/blockIcon/icon9.png';

export default function BlockFixAdhesive() {

    const [featureHover, setFeatureHover] = useState(null);

    const adhesiveData = {
        id: 1,
        name: "Great Wall Block Fix Adhesive",
        img_url: blockProduct.src,
        hover_img_url: blockProductHover.src
    };

    const adhesiveFeatures = [
        {
            id: 1,
            title: "High Bond Strength",
            description: "Delivers exceptional load-bearing capacity with special polymers providing adhesive strength exceeding 0.41 MPa for superior structural stability[cite: 1].",
            icon: icon1.src,
        },
        {
            id: 2,
            title: "No Shrinkage Cracks & Water Resistant",
            description: "Prevents water seepage, percolation, and shrinkage cracks while aiding precise wall leveling with durable moisture protection[cite: 1].",
            icon: icon2.src,
        },
        {
            id: 3,
            title: "Self-Curing (Zero Water Curing)",
            description: "Formulated with advanced water-retention polymers that eliminate post-application water curing—saving significant labor, time, and precious water[cite: 1].",
            icon: icon3.src,
        },
        {
            id: 4,
            title: "High Coverage & Efficiency",
            description: "A single 25 kg bag covers 50–60 sq. ft. at a 3-5 mm thickness, delivering low density, high volume yield, and consistent quality batch after batch[cite: 1].",
            icon: icon4.src,
        },
        {
            id: 5,
            title: "Optimal Thermal Insulation",
            description: "Ultra-thin joints eliminate thermal bridging across block walls, trapping insulation to boost overall building energy efficiency[cite: 1].",
            icon: icon5.src,
        },
        {
            id: 6,
            title: "High Impact Resistance",
            description: "Engineered to absorb physical stress and vibration, making it ideal for both heavy-duty interior and exterior applications[cite: 1].",
            icon: icon6.src,
        },
        {
            id: 7,
            title: "Pre-Mixed Convenience",
            description: "Factory-blended and ready to use—simply add clean water on-site to drastically reduce preparation time compared to conventional mortar[cite: 1].",
            icon: icon7.src,
        },
        {
            id: 8,
            title: "Zero Site Wastage",
            description: "Effortless mixing and swift application cut labor overhead and eliminate material waste, maximizing cost effectiveness on the job site[cite: 1].",
            icon: icon8.src,
        },
    ];


    // const compareTableData = [
    //     { id: 1, parameter: "Material Composition", aacBlock: "Cement, Graded Sand, Lime Stone Powder, Functional Polymers", panels: "Cement, Graded Sand, Lime Stone Powder, Functional Polymers", redBricks: "Traditional Site-Mixed Mortar", concreteBlock: "Conventional Mortar Mix" },
    //     { id: 2, parameter: "Adhesive Strength", aacBlock: "> 0.41 MPa", panels: "> 0.41 MPa", redBricks: "Low", concreteBlock: "Average" },
    //     { id: 3, parameter: "Application Thickness", aacBlock: "3–5 mm (Ultra-thin)", panels: "3–5 mm", redBricks: "10-12 mm", concreteBlock: "10-15 mm" },
    //     { id: 4, parameter: "Water Curing Requirement", aacBlock: "Self-Curing (Zero Water Curing)", panels: "Self-Curing", redBricks: "Required", concreteBlock: "Required" },
    //     { id: 5, parameter: "Coverage", aacBlock: "50–60 sq. ft. per 25 kg bag", panels: "50–60 sq. ft.", redBricks: "Low Coverage", concreteBlock: "Low Coverage" },
    //     { id: 6, parameter: "Shrinkage Cracks", aacBlock: "None", panels: "None", redBricks: "High", concreteBlock: "Moderate" },
    //     { id: 7, parameter: "Preparation", aacBlock: "Pre-mixed, add water", panels: "Pre-mixed, add water", redBricks: "Manual Site Mixing", concreteBlock: "Manual Site Mixing" },
    //     { id: 8, parameter: "Wastage & Efficiency", aacBlock: "Zero site wastage, high efficiency", panels: "High efficiency", redBricks: "High material wastage", concreteBlock: "Moderate wastage" },
    //     { id: 9, parameter: "Application Type", aacBlock: "Interior & Exterior Wall Applications", panels: "Interior & Exterior", redBricks: "General Masonry", concreteBlock: "General Masonry" },
    //     { id: 10, parameter: "Cost Effectiveness", aacBlock: "Lowers project cost & accelerates execution", panels: "Accelerates execution", redBricks: "Higher labor & time", concreteBlock: "Higher material consumption" }
    // ];


    return (
        <Box sx={{ pt: 10 }}>
            {/* Product description */}
            <Box sx={{ py: 5, px: 5 }}>
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                        <Box sx={{ position: "relative", width: "100%", height: '100%', backgroundImage: `url(${adhesiveData.hover_img_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550' }}>{"Great Wall Block Fix Adhesive"}</Typography>
                        <Typography sx={{ fontSize: '1.5rem', mb: 3, color: theme.palette.primary.text, fontWeight: '450' }}>High-Performance Polymer-Modified Thin-Bed Mortar</Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: '400' }}>
                            {`Great Wall Block Fix Adhesive is a high-performance, polymer-modified thin-bed mortar specially formulated for the precise and durable laying of AAC blocks and panels[cite: 1]. Engineered with a balanced blend of premium cement, selected graded sand, Lime Stone Powder and high-grade functional polymers, it delivers exceptional bond strength, high water retention, and long-term structural reliability[cite: 1].\n
Applied in ultra-thin layers of 3–5 mm, Great Wall Block Fix Adhesive eliminates the inefficiencies, thermal bridging, and heavy material consumption associated with traditional site-mixed mortar—delivering faster execution and significantly lower project costs[cite: 1].`}
                        </Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Suitable For:</Box>
                            {` Interior and exterior wall applications, AAC blocks and panels laying[cite: 1]`}
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Packaging Size:</Box>
                            {` 25 kg bag[cite: 1]`}
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
                                            {isHovered ? feature.description : `${feature.description.slice(0, 150)}...`}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

            {/* Table */}
            <Box sx={{ py: 5, px: 10, bgcolor: theme.palette.secondary.main }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: '550' }}>Technical Specification</Typography>

                <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: 3 }}>
                    <Box sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
                        <Table aria-label="technical-specification-table" sx={{ minWidth: 650, overflowX: 'auto' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" width={'30%'}><Typography variant='h6'>PARAMETERS</Typography></TableCell>
                                    <TableCell align="left"><Typography variant='h6'>SPECIFICATIONS</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Composition</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>Cement, Lime Stone, Processed Sand, Chemical Additives</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Aggregate Size</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>0-4 mm Processed Sand</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Appearance</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>Grey Granular Powder</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Mixing Ratio</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>4.5 ltr water per 25 kg bag</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Density (Wet)</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>1.75 kg per ltr</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Compressive Strength (3-Day)</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>16.97 N/mm²</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Compressive Strength (7-Day)</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>25.15 N/mm²</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Working Time</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>Approx. 30 minutes</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Standard</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>ASTM C1660-09, ASTM C387</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Coverage</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>~50-60 sq. ft. per 25 kg bag at 3mm thickness</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Shelf Life</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>12 months from manufacture (store cool & dry)</Typography></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}