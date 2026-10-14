'use client';
import { useState } from "react";
import { Autocomplete, Box, Button, Container, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import theme from '@/theme/theme';

import Image from "next/image";
import blockProduct from '../../../../public/server/block.png';
import blockProductHover from '../../../../public/server/blockHover.png';

import icon1 from '../../../../public/server/blockIcon/icon1.png';
import icon2 from '../../../../public/server/blockIcon/icon2.png';
import icon3 from '../../../../public/server/blockIcon/icon3.png';
import icon4 from '../../../../public/server/blockIcon/icon4.png';
import icon5 from '../../../../public/server/blockIcon/icon5.png';
import icon6 from '../../../../public/server/blockIcon/icon6.png';
import icon7 from '../../../../public/server/blockIcon/icon7.png';
import icon8 from '../../../../public/server/blockIcon/icon8.png';
import icon9 from '../../../../public/server/blockIcon/icon9.png';

export default function AacBlocks() {

    const [featureHover, setFeatureHover] = useState(null);
    const [wallArea, setWallArea] = useState('');
    const [selectedBlockSize, setSelectedBlockSize] = useState(null);
    const [calculationResult, setCalculationResult] = useState(null);

    const aacBlocksData = {
        id: 1,
        name: "AAC Blocks",
        img_url: blockProduct.src,
        hover_img_url: blockProductHover.src
    };

    const aacBlockFeatures = [
        {
            id: 1,
            title: "Lightweight Composition",
            description: "AAC Blocks are approximately one-third the weight of standard clay bricks. Their unique cellular structure is created through a chemical reaction that forms millions of tiny air bubbles. This reduces the building's dead load, resulting in substantial savings on foundation costs and reducing steel consumption by up to 20%.",
            icon: icon1.src,
        },
        {
            id: 2,
            title: "High Thermal Insulation",
            description: "The tiny air pores in AAC blocks provide excellent thermal insulation, significantly reducing the energy required for heating and cooling, making buildings more energy-efficient.",
            icon: icon2.src,
        },
        {
            id: 3,
            title: "Exceptional Fire Resistance",
            description: "Depending on their thickness, AAC blocks can provide fire resistance for up to 4 hours. They are non-combustible and do not emit toxic fumes when exposed to high temperatures.",
            icon: icon3.src,
        },
        {
            id: 4,
            title: "Acoustic Performance",
            description: "The porous structure of AAC blocks offers excellent sound absorption, making them ideal for hospitals, hotels, educational institutions, and multi-family residential buildings where noise reduction is essential.",
            icon: icon4.src,
        },
        {
            id: 5,
            title: "Cost Efficiency",
            description: "Due to their larger size, fewer AAC blocks are required per square meter, resulting in faster construction and lower labor costs. Their lightweight nature also reduces structural dead load, allowing savings in steel and cement for the building frame.",
            icon: icon5.src,
        },
        {
            id: 6,
            title: "Workability",
            description: "AAC blocks are easy to cut, drill, sand, and route using standard carbon steel tools. This enables precise masonry work and simplifies the installation of electrical wiring and plumbing conduits.",
            icon: icon6.src,
        },
        {
            id: 7,
            title: "Eco-Friendly & Sustainable",
            description: "Unlike traditional red clay bricks that require fertile topsoil, AAC blocks are manufactured using sand. This helps preserve agricultural land, reduces environmental degradation, and protects ecosystems from clay excavation.",
            icon: icon7.src,
        },
        {
            id: 8,
            title: "Pest Resistance",
            description: "As an inorganic building material, AAC blocks are resistant to termites, rodents, and fungal growth, contributing to a longer-lasting and more durable structure.",
            icon: icon8.src,
        },
        {
            id: 9,
            title: "Reduced Carbon Emissions",
            description: "The production of sand-based AAC blocks generates significantly fewer greenhouse gas emissions and pollutants than conventional brick kilns, which commonly rely on coal or wood as fuel.",
            icon: icon9.src,
        },
    ];

    const blockSizes = [
        { label: '600mm x 200mm x 75mm', value: '600x200x75', thickness: 0.075 },
        { label: '600mm x 200mm x 100mm', value: '600x200x100', thickness: 0.100 },
        { label: '600mm x 200mm x 110mm', value: '600x200x110', thickness: 0.110 },
        { label: '600mm x 200mm x 120mm', value: '600x200x120', thickness: 0.120 },
        { label: '600mm x 200mm x 150mm', value: '600x200x150', thickness: 0.150 },
        { label: '600mm x 200mm x 250mm', value: '600x200x250', thickness: 0.250 },
        { label: '600mm x 200mm x 300mm', value: '600x200x300', thickness: 0.300 },
    ];

    const compareTableData = [
        { id: 1, parameter: "Material Composition", aacBlock: "Cement, Sand, Lime, Gypsum, Aluminum Paste", panels: "Cement, Sand, Lime, Gypsum, Aluminum Paste", redBricks: "Top Soil", concreteBlock: "Cement, Sand and Gravel" },
        { id: 2, parameter: "Dry Density (kg/m³)", aacBlock: "550-650", panels: "550-650", redBricks: "1800-2000", concreteBlock: "2400-2500" },
        { id: 3, parameter: "Compressive Strength (N/mm²)", aacBlock: "> 4.5", panels: "> 4.5", redBricks: "> 10", concreteBlock: "> 15" },
        { id: 4, parameter: "Water Absorption", aacBlock: "Low", panels: "Low", redBricks: "High", concreteBlock: "Average" },
        { id: 5, parameter: "Thermal Conductivity (W/m·K)", aacBlock: "0.16", panels: "0.16", redBricks: "0.81", concreteBlock: "0.51" },
        { id: 6, parameter: "Sound Reduction Index (100 mm)", aacBlock: "43 dB", panels: "43 dB", redBricks: "41 dB", concreteBlock: "40 dB" },
        { id: 7, parameter: "Fire Resistance (100 mm)", aacBlock: "4 Hours", panels: "4 Hours", redBricks: "2 Hours", concreteBlock: "3 Hours" },
        { id: 8, parameter: "Speed of Installation", aacBlock: "35 m³/day (1 mason + 2 helpers)", panels: "70-80 m³/day", redBricks: "10 m³/day", concreteBlock: "18 m³/day" },
        { id: 9, parameter: "Mortar Consumption", aacBlock: "Requires less mortar due to its size, flat, and even surface.", panels: "Requires less mortar due to its large size, flat, and even surface.", redBricks: "Requires more mortar due to its irregular surface and large number of joints.", concreteBlock: "Requires less mortar than brick walls due to fewer bonds and joints." },
        { id: 10, parameter: "Structural Cost", aacBlock: "Realizes over 20% savings in structural cost.", panels: "Realizes over 20% savings in structural cost.", redBricks: "Increases structural cost due to higher weight.", concreteBlock: "Increases structural cost due to higher weight." }
    ];

    const handleCalculate = () => {
        const area = parseFloat(wallArea);
        if (isNaN(area) || area <= 0 || !selectedBlockSize) {
            alert('Please enter a valid wall area and select a block size.');
            return;
        }

        const blocksCount = area / 1.29;
        const cbmPerBlock = 0.6 * 0.2 * selectedBlockSize.thickness;
        const blocksCbm = cbmPerBlock * blocksCount;
        const adhesiveKg = area / 2.5;

        setCalculationResult({
            blocksCount: Math.round(blocksCount),
            blocksCbm: parseFloat(blocksCbm.toFixed(3)),
            adhesiveKg: parseFloat(adhesiveKg.toFixed(2)),
        });
    };

    return (
        <Box sx={{ pt: 10 }}>
            {/* Product description */}
            <Box sx={{ py: 5, px: 5 }}>
                <Grid container spacing={10}>
                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                        <Box sx={{ position: "relative", width: "100%", height: '100%', backgroundImage: `url(${aacBlocksData.hover_img_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>
                        {/* <Box sx={{ position: "relative", width: "100%", height: '100%' }}>
                            <Image
                                src={aacBlocksData.hover_img_url}
                                alt={aacBlocksData.name}
                                fill
                                sizes="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </Box> */}
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550' }}>{"Great Wall AAC Blocks"}</Typography>
                        <Typography sx={{ fontSize: '1.5rem', mb: 3, color: theme.palette.primary.text, fontWeight: '450' }}>Redefining the Future of Sustainable Construction</Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: '400' }}>
                            {`Great Wall AAC Blocks is the solution for modern home construction. Our Cutting-edge AAC blocks ensure your project is completed with superior quality, accelerated timelines, and reduced costs. Build Better, faster and cheaper- the intelligent choice for your home.\n
AAC Blocks are a lightweight, pre-fabricated building material that has gained immense popularity in the construction industry. They are a greener, more efficient alternative to traditional bricks and concrete block.`}
                        </Typography>

                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Suitable For:</Box>
                            {` Residential, Commercial, Industrial, Institutional Projects`}
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Size:</Box>
                            {` LxWxT - 600mm x 200mm x 75mm, 100mm, 110mm, 120mm, 150mm, 250mm, 300mm`}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>



            {/* Features */}
            <Box sx={{ py: 5, px: { sm: 2, md: 10 } }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Features</Typography>

                <Grid container spacing={2}>
                    {aacBlockFeatures.map((feature) => {
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
                                            {/* Show full description when expanded to 12, or truncated version when 6 */}
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
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Density</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>550-650 kg/m³</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Compressive Strength</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`>4.5 N/mm2 (MPa)`}</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Dry Shrinkage</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`< 0.04 %`}</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Thermal Conductivity</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`0.16 w/m-k`}</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Fire Resistance</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`4-6 Hours`}</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450' }}>Sound Reduction Index</Typography></TableCell>
                                    <TableCell align="left"><Typography sx={{ fontSize: '1.2rem', fontWeight: '450', color: theme.palette.secondary.light }}>{`40-45 dB`}</Typography></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Box>





            {/* Calculator */}
            <Box sx={{ py: 5 }}>
                <Container>
                    <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: '550' }}>AAC Blocks Calculator</Typography>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ backgroundColor: theme.palette.primary.main, p: 5, borderRadius: 2, boxShadow: 1 }}>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2, alignItems: 'center' }}>
                                    <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                                        <Typography sx={{ fontSize: '1.3rem', color: 'white', fontWeight: '450' }}>Wall Area (SFT)</Typography>
                                    </Box>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        value={wallArea}
                                        onChange={(e) => setWallArea(e.target.value)}
                                        placeholder="Enter area in SFT"
                                        sx={{ backgroundColor: 'white', borderRadius: 2 }}
                                    />
                                </Stack>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3, alignItems: 'center' }}>
                                    <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                                        <Typography sx={{ fontSize: '1.3rem', color: 'white', fontWeight: '450', mt: 2 }}>Size of Block</Typography>
                                    </Box>
                                    <Autocomplete
                                        fullWidth
                                        disablePortal
                                        options={blockSizes}
                                        value={selectedBlockSize}
                                        onChange={(_, newValue) => setSelectedBlockSize(newValue)}
                                        sx={{ backgroundColor: 'white', borderRadius: 2, mt: 2 }}
                                        renderInput={(params) => <TextField {...params} placeholder="Select block size" />}
                                    />
                                </Stack>

                                <Button
                                    variant="outlined"
                                    onClick={handleCalculate}
                                    sx={{
                                        p: 1.5, width: '100%', borderRadius: 20, borderColor: 'white', color: 'white',
                                        '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.dark, color: 'white' }
                                    }}
                                >
                                    CALCULATE
                                </Button>

                                {calculationResult && (
                                    <Box sx={{ mt: 4, p: 3, backgroundColor: 'white', borderRadius: 2 }}>
                                        <Typography variant="h6" sx={{ mb: 2, color: theme.palette.secondary.text, fontWeight: 'bold' }}>
                                            Total Product Required:
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.1rem', mb: 1 }}>
                                            <strong>Blocks in Numbers:</strong> {calculationResult.blocksCount} Pcs
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.1rem', mb: 1 }}>
                                            <strong>Blocks in CBM:</strong> {calculationResult.blocksCbm} m³
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            <strong>Block Joint Adhesive:</strong> {calculationResult.adhesiveKg} Kg.
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>





            {/* Compare table */}
            <Box sx={{ py: 5, px: 10 }}>
                <Typography variant='h3' sx={{ mb: 5, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: '550' }}>Walling Technology Comparison</Typography>

                <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: 3 }}>
                    <Box sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
                        <Table aria-label="technical-specification-table" sx={{ minWidth: 650, overflowX: 'auto' }}>
                            <TableHead sx={{ backgroundColor: theme.palette.primary.main }}>
                                <TableRow>
                                    <TableCell align="left" width={'30%'}><Typography variant='h6' sx={{ color: 'white' }}>Parameter</Typography></TableCell>
                                    <TableCell align="left"><Typography variant='h6' sx={{ color: 'white' }}>AAC Block</Typography></TableCell>
                                    <TableCell align="left"><Typography variant='h6' sx={{ color: 'white' }}>Red Bricks</Typography></TableCell>
                                    <TableCell align="left"><Typography variant='h6' sx={{ color: 'white' }}>Concrete Block</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{
                                "& .MuiTableRow-root:nth-of-type(odd)": {
                                    backgroundColor: "action.hover",
                                },
                            }}>
                                {compareTableData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell sx={{ fontSize: '1.2rem', fontWeight: '500' }}>{row.parameter}</TableCell>
                                        <TableCell sx={{ fontSize: '1.2rem', fontWeight: '500', color: theme.palette.primary.main }}>{row.aacBlock}</TableCell>
                                        <TableCell sx={{ fontSize: '1.2rem' }}>{row.redBricks}</TableCell>
                                        <TableCell sx={{ fontSize: '1.2rem' }}>{row.concreteBlock}</TableCell>
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