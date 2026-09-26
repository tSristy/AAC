// 'use client';
// import { Box,Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
// import theme from '@/theme/theme';

// import Image from "next/image";
// import panelProduct from '../../../../public/server/panel.png';
// import panelProductHover from '../../../../public/server/panelHover.png';

// import icon1 from '../../../../public/server/panelIcon/icon1.png';
// import icon2 from '../../../../public/server/panelIcon/icon2.png';
// import icon3 from '../../../../public/server/panelIcon/icon3.png';
// import icon4 from '../../../../public/server/panelIcon/icon4.png';
// import icon5 from '../../../../public/server/panelIcon/icon5.png';
// import icon6 from '../../../../public/server/panelIcon/icon6.png';
// import icon7 from '../../../../public/server/panelIcon/icon7.png';
// import icon8 from '../../../../public/server/panelIcon/icon8.png';



// export default function aacPanels() {

//     const aacPanels =
//         { id: 1, name: "AAC Panels", img_url: panelProduct.src, hover_img_url: panelProductHover.src }

//     const aacPanelFeatures = [
//         {
//             id: 1,
//             title: "Corrosion-Protected Steel Reinforcement",
//             description:
//                 "Great Wall AAC Panels are engineered with internal, corrosion-protected steel reinforcement. This high-tensile steel core provides the structural backbone required for long-term stability, enhanced durability, and superior load-bearing performance."
//             , icon: icon1.src
//         },
//         {
//             id: 2,
//             title: "Thermal Insulation & Energy Savings",
//             description:
//                 "The unique cellular structure of AAC Panels acts as an effective thermal barrier, minimizing heat transfer and maintaining a comfortable indoor climate throughout the year. This can reduce energy consumption for heating and cooling by up to 25%."
//             , icon: icon2.src
//         },
//         {
//             id: 3,
//             title: "Superior Sound Insulation",
//             description:
//                 "The internal air pockets within AAC Panels provide excellent acoustic performance with a Sound Transmission Class (STC) rating of 44 dB. They are an ideal solution for residential complexes, hospitals, educational institutions, and commercial buildings where noise reduction is essential."
//             , icon: icon3.src
//         },
//         {
//             id: 4,
//             title: "Uncompromising Fire Safety",
//             description:
//                 "Great Wall AAC Panels feature a specialized cellular composition that provides exceptional fire resistance. With a certified fire rating of up to 4 hours, they help maintain structural integrity and improve building safety during fire incidents."
//             , icon: icon4.src
//         },
//         {
//             id: 5,
//             title: "4× Faster Construction",
//             description:
//                 "AAC Panels can be installed up to four times faster than traditional AAC Blocks. Their tongue-and-groove design enables quick and easy installation, allowing installers to complete more than 10 square meters per person per day."
//             , icon: icon5.src
//         },
//         {
//             id: 6,
//             title: "No Coping or Bond Beam Required",
//             description:
//                 "AAC Panels provide excellent structural stability for wall heights of up to 6 meters without requiring coping or bond beams. This reduces material requirements, speeds up construction, and significantly lowers labor costs."
//             , icon: icon6.src
//         },
//         {
//             id: 7,
//             title: "Space Optimization",
//             description:
//                 "The thinner wall profile of AAC Panels increases the usable carpet area, maximizing valuable interior floor space for residential, commercial, and industrial buildings."
//             , icon: icon7.src
//         },
//         {
//             id: 8,
//             title: "Green Building Solution",
//             description:
//                 "Manufactured using resource-efficient processes, Great Wall AAC Panels are an environmentally friendly building material. They support green building initiatives and contribute toward LEED and other sustainable building certifications."
//             , icon: icon8.src
//         }
//     ];


//     const compareTableData = [
//         {
//             "id": 1,
//             "parameter": "Material Composition",
//             "aacBlock": "Cement, Sand, Lime, Gypsum, Aluminum Paste",
//             "panels": "Cement, Sand, Lime, Gypsum, Aluminum Paste",
//             "redBricks": "Top Soil",
//             "concreteBlock": "Cement, Sand and Gravel"
//         },
//         {
//             "id": 2,
//             "parameter": "Dry Density (kg/m³)",
//             "aacBlock": "550-650",
//             "panels": "550-650",
//             "redBricks": "1800-2000",
//             "concreteBlock": "2400-2500"
//         },
//         {
//             "id": 3,
//             "parameter": "Compressive Strength (N/mm²)",
//             "aacBlock": "> 4.5",
//             "panels": "> 4.5",
//             "redBricks": "> 10",
//             "concreteBlock": "> 15"
//         },
//         {
//             "id": 4,
//             "parameter": "Water Absorption",
//             "aacBlock": "Low",
//             "panels": "Low",
//             "redBricks": "High",
//             "concreteBlock": "Average"
//         },
//         {
//             "id": 5,
//             "parameter": "Thermal Conductivity (W/m·K)",
//             "aacBlock": "0.16",
//             "panels": "0.16",
//             "redBricks": "0.81",
//             "concreteBlock": "0.51"
//         },
//         {
//             "id": 6,
//             "parameter": "Sound Reduction Index (100 mm)",
//             "aacBlock": "43 dB",
//             "panels": "43 dB",
//             "redBricks": "41 dB",
//             "concreteBlock": "40 dB"
//         },
//         {
//             "id": 7,
//             "parameter": "Fire Resistance (100 mm)",
//             "aacBlock": "4 Hours",
//             "panels": "4 Hours",
//             "redBricks": "2 Hours",
//             "concreteBlock": "3 Hours"
//         },
//         {
//             "id": 8,
//             "parameter": "Speed of Installation",
//             "aacBlock": "35 m³/day (1 mason + 2 helpers)",
//             "panels": "70-80 m³/day",
//             "redBricks": "10 m³/day",
//             "concreteBlock": "18 m³/day"
//         },
//         {
//             "id": 9,
//             "parameter": "Mortar Consumption",
//             "aacBlock": "Requires less mortar due to its size, flat, and even surface.",
//             "panels": "Requires less mortar due to its large size, flat, and even surface.",
//             "redBricks": "Requires more mortar due to its irregular surface and large number of joints.",
//             "concreteBlock": "Requires less mortar than brick walls due to fewer bonds and joints."
//         },
//         {
//             "id": 10,
//             "parameter": "Structural Cost",
//             "aacBlock": "Realizes over 20% savings in structural cost.",
//             "panels": "Realizes over 20% savings in structural cost.",
//             "redBricks": "Increases structural cost due to higher weight.",
//             "concreteBlock": "Increases structural cost due to higher weight."
//         }

//     ]

//     return (
//         <Box sx={{ pt: 10 }}>
//             {/* Product description */}

//             <Box sx={{ py: 5, px: 5 }}>
//                 <Grid container spacing={10}>
//                     <Grid size={{ xs: 12, sm: 6, md: 5 }}>
//                         <Box sx={{ position: "relative", width: "100%", height: '100%', }}>
//                             <Image
//                                 src={aacPanels.hover_img_url}
//                                 alt={aacPanels.name}
//                                 fill
//                                 sizes="100%"
//                                 style={{
//                                     objectFit: "cover",
//                                 }}
//                             />
//                         </Box>
//                     </Grid>

//                     <Grid size={{ xs: 12, sm: 6, md: 7 }}>
//                         <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550' }}>{"AAC WALL PANELS "}</Typography>
//                         <Typography sx={{ fontSize: '1.5rem', mb: 3, color: theme.palette.primary.text, fontWeight: '450' }}>The Future of Sustainable Building</Typography>

//                         <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400', textAlign: 'justify' }}>
//                             {`Great wall AAC (Autoclaved Aerated Concreate) wall panels are the premier choice for green building materials in today’s construction industry. Designed to replace traditional red clay bricks and heavy concrete block’s our panels provide a high strength, lightweight and eco friendly solution for residential, commercial and industrial projects.\n
// By integrating steel-reinforce AAC technology, Great wall offers a building material that balances structural durability with rapid installation, helping developers meet aggressive project timelines without comprising quality.
// `}
//                         </Typography>

//                         <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
//                             <Box component="span" sx={{ fontWeight: '500' }}>
//                                 Suitable For:
//                             </Box>
//                             {` Residential, Commercial, Industrial, Institutional Projects`}
//                         </Typography>
//                         <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
//                             <Box component="span" sx={{ fontWeight: '500' }}>
//                                 Size:
//                             </Box>
//                             {` L x W x T- 3000mm x 600mm x 75mm, 100mm, 120mm, 150mm, 200mm `}
//                         </Typography>
//                     </Grid>
//                 </Grid>
//             </Box>


//             {/* Features */}
//             <Box sx={{ py: 5, px: { sm: 2, md: 10 } }}>
//                 <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Features</Typography>

//                 <Grid container spacing={2}>
//                     {aacPanelFeatures.map((feature) => (
//                         <Grid size={{ sm: 12, md: 6 }} key={feature.id}>
//                             <Stack direction="row" spacing={2} sx={{ mb: 2, p: 2, borderRadius: 2, border: `2px solid ${theme.palette.secondary.main}`, alignItems: 'center' }}>
//                                 <Box component="img" src={feature.icon} alt={feature.title} sx={{ width: '60px', height: '60px' }} />
//                                 <Box sx={{ height: '100px'}}>
//                                     <Typography variant='h6' sx={{ fontWeight: '550' }}>
//                                         {feature.title}
//                                     </Typography>
//                                     <Typography sx={{ fontSize: '0.9rem', color: theme.palette.primary.text }}>
//                                         {feature.description.slice(0, 200)}{feature.description.length > 200 ? '...' : ''}
//                                     </Typography>
//                                 </Box>
//                             </Stack>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>

//             {/* Table */}
//             <Box sx={{ py: 5, px: 10, bgcolor: theme.palette.secondary.main }}>
//                 <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: '550' }}>Technical Specification</Typography>

//                 <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: 3 }}>
//                     <Box sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
//                         <Table aria-label="technical-specification-table" sx={{ minWidth: 650, overflowX: 'auto' }}>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell align="left" width={'30%'}><Typography variant='h6'>PARAMETERS</Typography></TableCell>
//                                     <TableCell align="left"><Typography variant='h6'>SPECIFICATIONS</Typography></TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 <TableRow>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Density</Typography></TableCell>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.12rem', fontWeight: '450', color: theme.palette.secondary.light }}>550-650 kg/m³</Typography></TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Compressive Strength</Typography></TableCell>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.12rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`>4.5 N/mm2 (MPa)`}</Typography></TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Dry Shrinkage</Typography></TableCell>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.12rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`< 0.04 %`}</Typography></TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Thermal Conductivity</Typography></TableCell>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.12rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`0.16 w/m-k`}</Typography></TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Fire Resistance</Typography></TableCell>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.12rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`4-6 Hours`}</Typography></TableCell>
//                                 </TableRow>
//                                 <TableRow>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Sound Reduction Index</Typography></TableCell>
//                                     <TableCell align="left"><Typography sx={{ fontSize: '1.12rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`40-45 dB`}</Typography></TableCell>
//                                 </TableRow>
//                             </TableBody>
//                         </Table>
//                     </Box>
//                 </Box>
//             </Box>


//             {/* Compare table */}
//             <Box sx={{ py: 5, px: 10 }}>
//                 <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: '550' }}>Walling Technology Comparison</Typography>

//                 <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: 3 }}>
//                     <Box sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
//                         <Table aria-label="technical-specification-table" sx={{ minWidth: 650, overflowX: 'auto' }}>
//                             <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
//                                 <TableRow>
//                                     <TableCell align="left" width={'30%'}><Typography variant='h6' sx={{ color: 'white' }}>Parameter</Typography></TableCell>
//                                     <TableCell align="center"><Typography variant='h6' sx={{ color: 'white' }}>AAC Panel
//                                     </Typography></TableCell>
//                                     <TableCell align="center"><Typography variant='h6' sx={{ color: 'white' }}>Red Bricks
//                                     </Typography></TableCell>
//                                     <TableCell align="center"><Typography variant='h6' sx={{ color: 'white' }}>Concrete Block
//                                     </Typography></TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody sx={{
//                                 "& .MuiTableRow-root:nth-of-type(odd)": {
//                                     backgroundColor: "action.hover",
//                                 },
//                             }}>
//                                 {compareTableData.map((row) => (
//                                     <TableRow key={row.id}>
//                                         <TableCell sx={{ fontSize: '1.2rem', fontWeight: '500' }}>{row.parameter}</TableCell>
//                                         <TableCell sx={{ fontSize: '1.2rem', fontWeight: '500', color: theme.palette.primary.main }}>{row.panels}</TableCell>
//                                         <TableCell sx={{ fontSize: '1.2rem' }}>{row.redBricks}</TableCell>
//                                         <TableCell sx={{ fontSize: '1.2rem' }}>{row.concreteBlock}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </Box>
//                 </Box>

//             </Box>

//         </Box>
//     );
// }


'use client';
import { useState } from 'react';
import { Box, Container, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import theme from '@/theme/theme';

import Image from "next/image";
import panelProduct from '../../../../public/server/panel.png';
import panelProductHover from '../../../../public/server/panelHover.png';

import icon1 from '../../../../public/server/panelIcon/icon1.png';
import icon2 from '../../../../public/server/panelIcon/icon2.png';
import icon3 from '../../../../public/server/panelIcon/icon3.png';
import icon4 from '../../../../public/server/panelIcon/icon4.png';
import icon5 from '../../../../public/server/panelIcon/icon5.png';
import icon6 from '../../../../public/server/panelIcon/icon6.png';
import icon7 from '../../../../public/server/panelIcon/icon7.png';
import icon8 from '../../../../public/server/panelIcon/icon8.png';

// Shared flat, hairline-border look - same token used on the AAC Blocks page
// so the two product pages stay visually consistent.
const HAIRLINE = '#e5e3e0';

export default function AacPanels() {
    const [hoveredFeatureId, setHoveredFeatureId] = useState(null);

    const aacPanels =
        { id: 1, name: "AAC Panels", img_url: panelProduct.src, hover_img_url: panelProductHover.src }

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
        {
            "id": 1,
            "parameter": "Material Composition",
            "aacBlock": "Cement, Sand, Lime, Gypsum, Aluminum Paste",
            "panels": "Cement, Sand, Lime, Gypsum, Aluminum Paste",
            "redBricks": "Top Soil",
            "concreteBlock": "Cement, Sand and Gravel"
        },
        {
            "id": 2,
            "parameter": "Dry Density (kg/m³)",
            "aacBlock": "550-650",
            "panels": "550-650",
            "redBricks": "1800-2000",
            "concreteBlock": "2400-2500"
        },
        {
            "id": 3,
            "parameter": "Compressive Strength (N/mm²)",
            "aacBlock": "> 4.5",
            "panels": "> 4.5",
            "redBricks": "> 10",
            "concreteBlock": "> 15"
        },
        {
            "id": 4,
            "parameter": "Water Absorption",
            "aacBlock": "Low",
            "panels": "Low",
            "redBricks": "High",
            "concreteBlock": "Average"
        },
        {
            "id": 5,
            "parameter": "Thermal Conductivity (W/m·K)",
            "aacBlock": "0.16",
            "panels": "0.16",
            "redBricks": "0.81",
            "concreteBlock": "0.51"
        },
        {
            "id": 6,
            "parameter": "Sound Reduction Index (100 mm)",
            "aacBlock": "43 dB",
            "panels": "43 dB",
            "redBricks": "41 dB",
            "concreteBlock": "40 dB"
        },
        {
            "id": 7,
            "parameter": "Fire Resistance (100 mm)",
            "aacBlock": "4 Hours",
            "panels": "4 Hours",
            "redBricks": "2 Hours",
            "concreteBlock": "3 Hours"
        },
        {
            "id": 8,
            "parameter": "Speed of Installation",
            "aacBlock": "35 m³/day (1 mason + 2 helpers)",
            "panels": "70-80 m³/day",
            "redBricks": "10 m³/day",
            "concreteBlock": "18 m³/day"
        },
        {
            "id": 9,
            "parameter": "Mortar Consumption",
            "aacBlock": "Requires less mortar due to its size, flat, and even surface.",
            "panels": "Requires less mortar due to its large size, flat, and even surface.",
            "redBricks": "Requires more mortar due to its irregular surface and large number of joints.",
            "concreteBlock": "Requires less mortar than brick walls due to fewer bonds and joints."
        },
        {
            "id": 10,
            "parameter": "Structural Cost",
            "aacBlock": "Realizes over 20% savings in structural cost.",
            "panels": "Realizes over 20% savings in structural cost.",
            "redBricks": "Increases structural cost due to higher weight.",
            "concreteBlock": "Increases structural cost due to higher weight."
        }

    ]

    const techSpecs = [
        { parameter: 'Density', value: '550-650 kg/m³' },
        { parameter: 'Compressive Strength', value: '>4.5 N/mm2 (MPa)' },
        { parameter: 'Dry Shrinkage', value: '< 0.04 %' },
        { parameter: 'Thermal Conductivity', value: '0.16 w/m-k' },
        { parameter: 'Fire Resistance', value: '4-6 Hours' },
        { parameter: 'Sound Reduction Index', value: '40-45 dB' },
    ];

    return (
        <Box sx={{ pt: 10 }}>
            {/* Product description */}
            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                        <Box sx={{ position: "relative", width: "100%", height: '100%', backgroundImage: `url(${aacPanels.hover_img_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            {/* <Image
                                src={aacPanels.hover_img_url}
                                alt={aacPanels.name}
                                fill
                                sizes="100%"
                                style={{ objectFit: "cover" }}
                            /> */}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <Typography variant='h3' sx={{ mb: 1, color: theme.palette.secondary.text, fontWeight: 600 }}>{"AAC Wall Panels"}</Typography>
                        <Typography sx={{ fontSize: '1.15rem', mb: 3, color: theme.palette.primary.main, fontWeight: 500 }}>The Future of Sustainable Building</Typography>

                        <Typography sx={{ fontSize: '1rem', mb: 3, color: theme.palette.secondary.light, whiteSpace: 'pre-line', textAlign: 'justify', lineHeight: 1.75 }}>
                            {`Great wall AAC (Autoclaved Aerated Concreate) wall panels are the premier choice for green building materials in today's construction industry. Designed to replace traditional red clay bricks and heavy concrete block's our panels provide a high strength, lightweight and eco friendly solution for residential, commercial and industrial projects.\n
By integrating steel-reinforce AAC technology, Great wall offers a building material that balances structural durability with rapid installation, helping developers meet aggressive project timelines without comprising quality.
`}
                        </Typography>

                        <Stack spacing={1.5} sx={{ pt: 1, borderTop: `1px solid ${HAIRLINE}` }}>
                            <Typography sx={{ fontSize: '0.95rem', color: theme.palette.secondary.light, pt: 1.5 }}>
                                <Box component="span" sx={{ fontWeight: 600, color: theme.palette.secondary.text }}>Suitable For: </Box>
                                {`Residential, Commercial, Industrial, Institutional Projects`}
                            </Typography>
                            <Typography sx={{ fontSize: '0.95rem', color: theme.palette.secondary.light }}>
                                <Box component="span" sx={{ fontWeight: 600, color: theme.palette.secondary.text }}>Size: </Box>
                                {`L x W x T - 3000mm x 600mm x 75mm, 100mm, 120mm, 150mm, 200mm`}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>


            {/* Features */}
            <Box sx={{ py: 5, px: { sm: 2, md: 10 } }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, fontWeight: 600, textAlign: 'center' }}>Features</Typography>

                <Grid container spacing={2}>
                    {aacPanelFeatures.map((feature) => (
                        <Grid size={{ sm: 12, md: 6 }} key={feature.id}>
                            <Stack
                                direction="row"
                                spacing={2}
                                onMouseEnter={() => setHoveredFeatureId(feature.id)}
                                onMouseLeave={() => setHoveredFeatureId(null)}
                                sx={{
                                    mb: 2,
                                    p: 2.5,
                                    height: '100%',
                                    borderRadius: '4px',
                                    border: `1px solid ${HAIRLINE}`,
                                    alignItems: 'center',
                                    transition: 'border-color 0.2s ease',
                                    '&:hover': { borderColor: theme.palette.primary.main },
                                }}
                            >
                                <Box component="img" src={feature.icon} alt={feature.title} sx={{ width: '48px', height: '48px', flexShrink: 0 }} />
                                <Box>
                                    <Typography sx={{ fontWeight: 600, color: theme.palette.secondary.text, mb: 0.5 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.9rem', color: theme.palette.secondary.light, lineHeight: 1.7, transition: 'all 0.3s ease' }}>
                                        {hoveredFeatureId === feature.id
                                            ? feature.description
                                            : `${feature.description.slice(0, 200)}${feature.description.length > 200 ? '...' : ''}`}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Table */}
            <Box sx={{ py: 5, px: { xs: 2, md: 10 } }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: 600 }}>Technical Specification</Typography>

                <Box sx={{ border: `1px solid ${HAIRLINE}`, borderRadius: '4px', maxWidth: 700, mx: 'auto' }}>
                    <Table aria-label="technical-specification-table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" width={'40%'} sx={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Parameter</Typography>
                                </TableCell>
                                <TableCell align="left" sx={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specification</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {techSpecs.map((row) => (
                                <TableRow key={row.parameter} sx={{ '&:last-child td': { borderBottom: 0 } }}>
                                    <TableCell sx={{ borderColor: HAIRLINE }}>
                                        <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: theme.palette.secondary.text }}>{row.parameter}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderColor: HAIRLINE }}>
                                        <Typography sx={{ fontSize: '1rem', color: theme.palette.primary.main, fontWeight: 500 }}>{row.value}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Box>


            {/* Compare table */}
            <Box sx={{ py: 5, px: { xs: 2, md: 10 } }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: 600 }}>Walling Technology Comparison</Typography>

                <Box sx={{ border: `1px solid ${HAIRLINE}`, borderRadius: '4px', overflowX: 'auto' }}>
                    <Table aria-label="walling-comparison-table" sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" width={'30%'} sx={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Parameter</Typography>
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: theme.palette.primary.main, textTransform: 'uppercase', letterSpacing: '0.5px' }}>AAC Panel</Typography>
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Red Bricks</Typography>
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: `1px solid ${HAIRLINE}` }}>
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Concrete Block</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {compareTableData.map((row) => (
                                <TableRow key={row.id} sx={{ '&:last-child td': { borderBottom: 0 } }}>
                                    <TableCell sx={{ fontSize: '0.9rem', fontWeight: 500, color: theme.palette.secondary.text, borderColor: HAIRLINE }}>{row.parameter}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '0.9rem', fontWeight: 600, color: theme.palette.primary.main, borderColor: HAIRLINE }}>{row.panels}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '0.9rem', color: theme.palette.secondary.light, borderColor: HAIRLINE }}>{row.redBricks}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '0.9rem', color: theme.palette.secondary.light, borderColor: HAIRLINE }}>{row.concreteBlock}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Box>

        </Box>
    );
}