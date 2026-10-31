'use client';
import { Box, Container, TableContainer, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import theme from '@/theme/theme';

import panelProduct from '../../../../public/server/pPanel.png';

import icon1 from '../../../../public/server/panelIcon/icon1.png';
import icon2 from '../../../../public/server/panelIcon/icon2.png';
import icon3 from '../../../../public/server/panelIcon/icon3.png';
import icon4 from '../../../../public/server/panelIcon/icon4.png';
import icon5 from '../../../../public/server/panelIcon/icon5.png';
import icon6 from '../../../../public/server/panelIcon/icon6.png';
import icon7 from '../../../../public/server/panelIcon/icon7.png';
import icon8 from '../../../../public/server/panelIcon/icon8.png';
import { useState } from "react";



export default function aacPanels() {
    const [featureHover, setFeatureHover] = useState(null);
    const aacPanels =
        { id: 1, name: "AAC Panels", img_url: panelProduct.src }

    const aacPanelFeatures = [
        {
            id: 1,
            title: "Corrosion-Protected Steel Reinforcement",
            description:
                "Great Wall AAC Panels are engineered with internal, corrosion-protected steel reinforcement. This high-tensile steel core provides the structural backbone required for long-term stability, enhanced durability, and superior load-bearing performance."
            , icon: icon1.src
        },
        {
            id: 2,
            title: "Thermal Insulation & Energy Savings",
            description:
                "The unique cellular structure of AAC Panels acts as an effective thermal barrier, minimizing heat transfer and maintaining a comfortable indoor climate throughout the year. This can reduce energy consumption for heating and cooling by up to 25%."
            , icon: icon2.src
        },
        {
            id: 3,
            title: "Superior Sound Insulation",
            description:
                "The internal air pockets within AAC Panels provide excellent acoustic performance with a Sound Transmission Class (STC) rating of 44 dB. They are an ideal solution for residential complexes, hospitals, educational institutions, and commercial buildings where noise reduction is essential."
            , icon: icon3.src
        },
        {
            id: 4,
            title: "Uncompromising Fire Safety",
            description:
                "Great Wall AAC Panels feature a specialized cellular composition that provides exceptional fire resistance. With a certified fire rating of up to 4 hours, they help maintain structural integrity and improve building safety during fire incidents."
            , icon: icon4.src
        },
        {
            id: 5,
            title: "4× Faster Construction",
            description:
                "AAC Panels can be installed up to four times faster than traditional AAC Blocks. Their tongue-and-groove design enables quick and easy installation, allowing installers to complete more than 10 square meters per person per day."
            , icon: icon5.src
        },
        {
            id: 6,
            title: "No Coping or Bond Beam Required",
            description:
                "AAC Panels provide excellent structural stability for wall heights of up to 6 meters without requiring coping or bond beams. This reduces material requirements, speeds up construction, and significantly lowers labor costs."
            , icon: icon6.src
        },
        {
            id: 7,
            title: "Space Optimization",
            description:
                "The thinner wall profile of AAC Panels increases the usable carpet area, maximizing valuable interior floor space for residential, commercial, and industrial buildings."
            , icon: icon7.src
        },
        {
            id: 8,
            title: "Green Building Solution",
            description:
                "Manufactured using resource-efficient processes, Great Wall AAC Panels are an environmentally friendly building material. They support green building initiatives and contribute toward LEED and other sustainable building certifications."
            , icon: icon8.src
        }
    ];


    const compareTableData = [
        { id: 1, parameter: "Material Composition", aacBlock: "Cement, Sand, Lime, Gypsum, Aluminum Paste", panels: "Cement, Sand, Lime, Gypsum, Aluminum Paste", redBricks: "Top Soil", concreteBlock: "Cement, Sand and Gravel" },
        { id: 2, parameter: "Dry Density (kg/m³)", aacBlock: "650-750", panels: "550-650", redBricks: "1800-2000", concreteBlock: "2400-2500" },
        { id: 3, parameter: "Compressive Strength (N/mm²)", aacBlock: "> 4.5", panels: "> 4.5", redBricks: "> 10", concreteBlock: "> 15" },
        { id: 4, parameter: "Water Absorption", aacBlock: "Low", panels: "Low", redBricks: "High", concreteBlock: "High" },
        { id: 5, parameter: "Thermal Conductivity (W/m·K)", aacBlock: "0.16", panels: "0.16", redBricks: "0.81", concreteBlock: "0.51" },
        { id: 6, parameter: "Sound Reduction Index", aacBlock: "43~45 dB", panels: "43 dB", redBricks: "38~40 dB", concreteBlock: "38~40 dB" },
        { id: 7, parameter: "Fire Resistance", aacBlock: "4~6 Hours", panels: "4 Hours", redBricks: "1.5 Hours", concreteBlock: "2 Hours" },
        { id: 8, parameter: "Speed of Installation", aacBlock: "35 m³/day (1 mason + 2 helpers)", panels: "70-80 m³/day", redBricks: "10 m³/day", concreteBlock: "18 m³/day" },
        { id: 9, parameter: "Mortar Consumption", aacBlock: "Requires less mortar due to its size, and even surface.", panels: "Requires less mortar due to its large size, flat, and even surface.", redBricks: "Requires more mortar due to its irregular surface and large number of joints.", concreteBlock: "Requires less mortar than brick walls due to fewer joints." },
        { id: 10, parameter: "Structural Cost", aacBlock: "Realizes over 20% savings in structural cost.", panels: "Realizes over 20% savings in structural cost.", redBricks: "High structural cost due to higher weight.", concreteBlock: "High structural cost due to higher weight." }
    ];

    return (
        <Box sx={{ pt: 10 }}>
            {/* Product description */}

            <Box sx={{ py: 5, px: 5 }}>
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                        <Box sx={{ position: "relative", width: "100%", height: '100%', backgroundImage: `url(${aacPanels.img_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550' }}>{"AAC WALL PANELS "}</Typography>
                        <Typography sx={{ fontSize: '1.5rem', mb: 3, color: theme.palette.primary.text, fontWeight: '450' }}>The Future of Sustainable Building</Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400', textAlign: 'justify' }}>
                            {`Great wall AAC (Autoclaved Aerated Concreate) wall panels are the premier choice for green building materials in today’s construction industry. Designed to replace traditional red clay bricks and heavy concrete block’s our panels provide a high strength, lightweight and eco friendly solution for residential, commercial and industrial projects.\n
By integrating steel-reinforce AAC technology, Great wall offers a building material that balances structural durability with rapid installation, helping developers meet aggressive project timelines without comprising quality.
`}
                        </Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>
                                Suitable For:
                            </Box>
                            {` Residential, Commercial, Industrial, Institutional Projects`}
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>
                                Size:
                            </Box>
                            {` L x W x T- 3000mm x 600mm x 75mm, 100mm, 120mm, 150mm, 200mm `}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>


            {/* Features */}
            <Box sx={{ py: 5, px: { sm: 2, md: 10 } }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Features</Typography>

                <Grid container spacing={2}>
                    {aacPanelFeatures.map((feature) => {
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
                                            parameter: 'Density',
                                            specification: '550-650 kg/m³'
                                        },
                                        {
                                            parameter: 'Compressive Strength',
                                            specification: '>4.5 N/mm² (MPa)'
                                        },
                                        {
                                            parameter: 'Dry Shrinkage',
                                            specification: '<0.04%'
                                        },
                                        {
                                            parameter: 'Thermal Conductivity',
                                            specification: '0.16 W/m-K'
                                        },
                                        {
                                            parameter: 'Fire Resistance',
                                            specification: '4-6 Hours'
                                        },
                                        {
                                            parameter: 'Sound Reduction Index',
                                            specification: '40-45 dB'
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
                                                            md: '1.12rem'
                                                        },
                                                        fontWeight: 450,
                                                        color: theme.palette.secondary.light
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



            {/* Compare table */}
            
<Box sx={{ py: { xs: 3, sm: 4, md: 5 }, px: { xs: 2, sm: 4, md: 10 } }}>
    <Typography
        variant="h3"
        sx={{
            mb: { xs: 3, md: 5 },
            color: theme.palette.secondary.text,
            textAlign: 'center',
            fontWeight: '550',
            fontSize: { xs: '1.6rem', sm: '2rem', md: '3rem' }
        }}
    >
        Walling Technology Comparison
    </Typography>

    <Box
        sx={{
            backgroundColor: 'white',
            p: { xs: 1.5, sm: 2, md: 3 },
            borderRadius: 2,
            boxShadow: 3
        }}
    >
        <Box
            sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                overflowX: 'auto',
                width: '100%'
            }}
        >
            <Table
                aria-label="technical-specification-table"
                sx={{
                    minWidth: { xs: 600, sm: 650 },
                    width: '100%'
                }}
            >
                <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
                    <TableRow>
                        <TableCell align="left" width="30%">
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'white',
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.25rem' }
                                }}
                            >
                                Parameter
                            </Typography>
                        </TableCell>

                        <TableCell align="left">
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'white',
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.25rem' }
                                }}
                            >
                                AAC Panels
                            </Typography>
                        </TableCell>

                        <TableCell align="left">
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'white',
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.25rem' }
                                }}
                            >
                                Red Bricks
                            </Typography>
                        </TableCell>

                        <TableCell align="left">
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'white',
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.25rem' }
                                }}
                            >
                                Concrete Block
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody
                    sx={{
                        "& .MuiTableRow-root:nth-of-type(odd)": {
                            backgroundColor: "action.hover",
                        },
                    }}
                >
                    {compareTableData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell
                                sx={{
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
                                    fontWeight: '500',
                                    whiteSpace: 'normal'
                                }}
                            >
                                {row.parameter}
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
                                    fontWeight: '500',
                                    color: theme.palette.primary.main
                                }}
                            >
                                {row.panels}
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' }
                                }}
                            >
                                {row.redBricks}
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' }
                                }}
                            >
                                {row.concreteBlock}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    </Box>
</Box>


        </Box>
    );
}
