'use client';
import { useState } from "react";
import { Autocomplete, Box, Button, Container, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import theme from '@/theme/theme';

import blockProduct from '../../../../public/server/pBlock.png';
import bg_e from '../../../../public/server/ibg.png';

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
        img_url: blockProduct.src
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
            description: "Depending on their thickness, AAC blocks can provide fire resistance for up to 4~6 hours. They are non-combustible and do not emit toxic fumes when exposed to high temperatures.",
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
            description: "Unlike traditional red clay bricks that require fertile topsoil, AAC blocks are manufactured using sand, cement, and other industrial materials. This helps preserve agricultural land, reduces environmental degradation, and protects ecosystems from clay excavation.",
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
        { label: '600mm x 200mm x 100mm', value: '600x200x100', thickness: 0.100 },
        { label: '600mm x 200mm x 110mm', value: '600x200x110', thickness: 0.110 },
        { label: '600mm x 200mm x 120mm', value: '600x200x120', thickness: 0.120 },
        { label: '600mm x 200mm x 150mm', value: '600x200x150', thickness: 0.150 },
        { label: '600mm x 200mm x 200mm', value: '600x200x200', thickness: 0.200 },
        { label: '600mm x 200mm x 250mm', value: '600x200x250', thickness: 0.250 },
        { label: '600mm x 200mm x 300mm', value: '600x200x300', thickness: 0.300 },
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
                        <Box sx={{ position: "relative", width: "100%", height: '100%', backgroundImage: `url(${aacBlocksData.img_url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>
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
                            {` Residential, Commercial, Industrial & Institutional Projects`}
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', mb: 3, color: theme.palette.primary.text, whiteSpace: 'pre-line', fontWeight: '400' }}>
                            <Box component="span" sx={{ fontWeight: '500' }}>Size:</Box>
                            {` L x W x T - 600mm x 200mm x 100mm, 110mm, 120mm, 150mm, 200mm, 250mm, 300mm`}
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

            
            {/* Electric */}
<Box
    id="electric"
    sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 7, md: 11 },
        px: { xs: 2, sm: 4, md: 6 },
        bgcolor: '#fafaf9',
    }}
>
    <Container maxWidth="lg">

        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
                sx={{
                    color: theme.palette.primary.main,
                    fontSize: '0.85rem',
                    fontWeight: 650,
                    letterSpacing: 2.5,
                    textTransform: 'uppercase',
                    mb: 2,
                }}
            >
                ENERGY EFFICIENCY
            </Typography>

            <Typography
                variant="h3"
                sx={{
                    color: theme.palette.secondary.text,
                    fontWeight: 600,
                    fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3rem' },
                    lineHeight: 1.2,
                    mb: 2.5,
                }}
            >
                AAC BLOCKS SAVES UPTO 
                <Box
                    component="span"
                    sx={{ color: theme.palette.primary.main }}
                >
                    {' '}30% ON ELECTRICITY
                </Box>
            </Typography>

            <Typography
                sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    color: theme.palette.primary.text,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    fontWeight: 400,
                }}
            >
                In modern construction, energy efficiency is no longer optional—it is a core requirement for sustainable, cost-effective buildings. Autoclaved Aerated Concrete (AAC) blocks offer a revolutionary approach to thermal insulation, helping property owners achieve significant, long-term savings on electricity bills.
            </Typography>
        </Box>

        {/* Main Savings Highlight */}
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 3,
                p: { xs: 3, sm: 4, md: 5 },
                mb: 3,
                background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.text})`,
                color: '#fff',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                gap: 3,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: 260,
                    height: 260,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.10)',
                    right: -65,
                    top: -130,
                    pointerEvents: 'none',
                }}
            />

            <Box sx={{ position: 'relative', maxWidth: 560 }}>
                <Typography
                    sx={{
                        fontSize: '0.85rem',
                        letterSpacing: 1.8,
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.75)',
                        mb: 1.5,
                    }}
                >
                    LOWER ENERGY CONSUMPTION
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1.4rem', md: '1.8rem' },
                        mb: 1.5,
                    }}
                >
                    This advanced engineering minimizes heat transfer across walls:
                </Typography>

                <Typography
                    sx={{
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.7,
                        fontSize: '1rem',
                    }}
                >
                    Autoclaved Aerated Concrete blocks offer a revolutionary approach to thermal insulation, drastically reducing the load on air conditioning and heating units.
                </Typography>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    minWidth: { xs: '100%', md: 210 },
                    textAlign: { xs: 'left', md: 'center' },
                    borderLeft: { xs: 'none', md: '1px solid rgba(255,255,255,0.25)' },
                    pl: { xs: 0, md: 4 },
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '3.5rem', md: '4.5rem' },
                        fontWeight: 700,
                        lineHeight: 1,
                        color: '#fff',
                    }}
                >
                    30%
                </Typography>
                <Typography
                    sx={{
                        mt: 1,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.8)',
                    }}
                >
                    Electricity Cost Savings
                </Typography>
            </Box>
        </Box>


        {/* Seasonal Performance */}
        <Grid container spacing={3} sx={{ mb: 3 }}>

            {/* Summer */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                    sx={{
                        height: '100%',
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        bgcolor: '#fff',
                        border: '1px solid #eae8e5',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 14px 35px rgba(0,0,0,0.07)',
                            borderColor: theme.palette.primary.main,
                        },
                    }}
                >
                   
                        

                        <Typography
                            sx={{
                                color: theme.palette.primary.main,
                                fontSize: '0.8rem',
                                fontWeight: 650,
                                letterSpacing: 1,
                            }}
                        >
                            SUMMER PERFORMANCE
                        </Typography>
                    

                    <Typography
                        sx={{
                            color: theme.palette.primary.text,
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                        }}
                    >
                        Keeps interiors up to 5°C cooler naturally, drastically reducing the load on air conditioning units.
                    </Typography>

                    <Box
                        sx={{
                            mt: 3,
                            pt: 2.5,
                            borderTop: '1px solid #eeece9',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: theme.palette.primary.main,
                            }}
                        />
                        <Typography
                            sx={{
                                color: theme.palette.secondary.text,
                                fontWeight: 550,
                                fontSize: '0.9rem',
                            }}
                        >
                            Up to 5°C cooler naturally
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Winter */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                    sx={{
                        height: '100%',
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        bgcolor: '#fff',
                        border: '1px solid #eae8e5',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 14px 35px rgba(0,0,0,0.07)',
                            borderColor: theme.palette.primary.main,
                        },
                    }}
                >
                   <Typography
                            sx={{
                                color: theme.palette.primary.main,
                                fontSize: '0.8rem',
                                fontWeight: 650,
                                letterSpacing: 1,
                            }}
                        >
                            WINTER PERFORMANCE
                        </Typography>

                    <Typography
                        sx={{
                            color: theme.palette.primary.text,
                            fontSize: '1.05rem',
                            lineHeight: 1.8,
                        }}
                    >
                        Retains indoor warmth, keeping spaces comfortably heated with minimal energy consumption.
                    </Typography>

                    <Box
                        sx={{
                            mt: 3,
                            pt: 2.5,
                            borderTop: '1px solid #eeece9',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: theme.palette.primary.main,
                            }}
                        />
                        <Typography
                            sx={{
                                color: theme.palette.secondary.text,
                                fontWeight: 550,
                                fontSize: '0.9rem',
                            }}
                        >
                            Minimal energy consumption
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>

        {/* Thermal Performance Footer */}
        <Box
            sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                bgcolor: '#f0f1ed',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                gap: 3,
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography
                    variant="h5"
                    sx={{
                        color: theme.palette.secondary.text,
                        fontWeight: 600,
                        mb: 1,
                    }}
                >
                    Industry-Leading Thermal Performance
                </Typography>

                <Typography
                    sx={{
                        color: theme.palette.primary.text,
                        fontSize: '1rem',
                        lineHeight: 1.7,
                    }}
                >
                    Engineered for optimal thermal resistance, Great Wall AAC Blocks boast an industry-leading thermal rating of 0.16 W/m²K. This high level of insulation ensures a stable indoor microclimate regardless of external weather extremes.
                </Typography>
            </Box>

            <Box
                sx={{
                    minWidth: { xs: '100%', md: 205 },
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: '#fff',
                    textAlign: 'center',
                    border: '1px solid #e3e3df',
                }}
            >
                <Typography
                    sx={{
                        color: theme.palette.primary.main,
                        fontSize: '0.75rem',
                        fontWeight: 650,
                        letterSpacing: 1.2,
                        mb: 1,
                    }}
                >
                    THERMAL CONDUCTIVITY
                </Typography>

                <Typography
                    sx={{
                        color: theme.palette.secondary.text,
                        fontSize: '1.8rem',
                        fontWeight: 700,
                    }}
                >
                    0.16
                </Typography>

                <Typography
                    sx={{
                        color: theme.palette.primary.text,
                        fontSize: '0.85rem',
                    }}
                >
                    W/m²K
                </Typography>
            </Box>
        </Box>

    </Container>
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
                                        <TableCell sx={{ width: '50%' }}>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: { xs: '0.85rem', sm: '1.1rem' }
                                                }}
                                            >
                                                PARAMETERS
                                            </Typography>
                                        </TableCell>

                                        <TableCell>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: { xs: '0.85rem', sm: '1.1rem' }
                                                }}
                                            >
                                                SPECIFICATIONS
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {[
                                        { parameter: 'Density', specification: '650-750 kg/m³' },
                                        { parameter: 'Compressive Strength', specification: '>4.5 N/mm² (MPa)' },
                                        { parameter: 'Dry Shrinkage', specification: '<0.02%' },
                                        { parameter: 'Thermal Conductivity', specification: '0.16 W/m-K' },
                                        { parameter: 'Fire Resistance', specification: '4-6 Hours' },
                                        { parameter: 'Sound Reduction Index', specification: '43-45 dB' }
                                    ].map((item, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:last-child td': { borderBottom: 0 },
                                                '&:hover': {
                                                    bgcolor: theme.palette.action.hover
                                                }
                                            }}
                                        >
                                            <TableCell sx={{ py: { xs: 1.5, sm: 2 } }}>
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

                                            <TableCell sx={{ py: { xs: 1.5, sm: 2 } }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: {
                                                            xs: '0.85rem',
                                                            sm: '1rem',
                                                            md: '1.2rem'
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


            {/* Calculator */}
            <Box sx={{ py: { xs: 3, md: 5 } }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            mb: { xs: 3, md: 5 },
                            color: theme.palette.secondary.text,
                            textAlign: 'center',
                            fontWeight: '550',
                            fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3rem' }
                        }}
                    >
                        AAC Blocks Calculator
                    </Typography>

                    <Grid
                        container
                        spacing={4}
                        sx={{ alignItems: 'stretch', justifyContent: 'center' }}
                    >
                        {/* Calculator Section */}
                        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex' }}>
                            <Box
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    p: { xs: 2.5, sm: 3, md: 5 },
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Stack
                                    direction={{ xs: 'column', md: 'row' }}
                                    spacing={1.5}
                                    sx={{ mb: 3, alignItems: { xs: 'stretch', md: 'center' } }}
                                >
                                    <Box sx={{ width: { xs: '100%', md: '45%' } }}>
                                        <Typography sx={{ fontSize: '1.1rem', color: 'white', fontWeight: '450' }}>
                                            Wall Area (SFT)
                                        </Typography>
                                    </Box>

                                    <TextField
                                        fullWidth
                                        type="number"
                                        value={wallArea}
                                        onChange={(e) => setWallArea(e.target.value)}
                                        placeholder="Enter area in SFT"
                                        sx={{
                                            backgroundColor: 'white',
                                            borderRadius: 2
                                        }}
                                    />
                                </Stack>

                                <Stack
                                    direction={{ xs: 'column', md: 'row' }}
                                    spacing={1.5}
                                    sx={{ mb: 4, alignItems: { xs: 'stretch', md: 'center' } }}
                                >
                                    <Box sx={{ width: { xs: '100%', md: '45%' } }}>
                                        <Typography sx={{ fontSize: '1.1rem', color: 'white', fontWeight: '450' }}>
                                            Size of Block
                                        </Typography>
                                    </Box>

                                    <Autocomplete
                                        fullWidth
                                        disablePortal
                                        options={blockSizes}
                                        value={selectedBlockSize}
                                        onChange={(_, newValue) => setSelectedBlockSize(newValue)}
                                        sx={{
                                            backgroundColor: 'white',
                                            borderRadius: 2
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder="Select block size" />
                                        )}
                                    />
                                </Stack>

                                <Button
                                    variant="outlined"
                                    onClick={handleCalculate}
                                    sx={{
                                        p: 1.5,
                                        width: '100%',
                                        borderRadius: 20,
                                        borderColor: 'white',
                                        color: 'white',
                                        '&:hover': {
                                            borderColor: 'transparent',
                                            bgcolor: theme.palette.primary.dark,
                                            color: 'white'
                                        }
                                    }}
                                >
                                    CALCULATE
                                </Button>
                            </Box>
                        </Grid>

                        {/* Result Section */}
                        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex' }}>
                            <Box
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    p: { xs: 2.5, sm: 3, md: 5 },
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        p: { xs: 2, sm: 3 },
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        width: '100%',
                                        minHeight: { xs: 230, sm: 280 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {calculationResult ? (
                                        <>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    mb: 3,
                                                    color: theme.palette.secondary.text,
                                                    fontWeight: 'bold',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                Total Product Required
                                            </Typography>

                                            <Stack spacing={2}>
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: 'action.hover',
                                                        borderRadius: 2
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', mb: 0.5 }}>
                                                        Blocks in Numbers
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: theme.palette.primary.main }}>
                                                        {calculationResult.blocksCount} Pcs
                                                    </Typography>
                                                </Box>

                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: 'action.hover',
                                                        borderRadius: 2
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', mb: 0.5 }}>
                                                        Blocks in CBM
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: theme.palette.primary.main }}>
                                                        {calculationResult.blocksCbm} m³
                                                    </Typography>
                                                </Box>

                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        backgroundColor: 'action.hover',
                                                        borderRadius: 2
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', mb: 0.5 }}>
                                                        Block Fix Adhesive
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold', color: theme.palette.primary.main }}>
                                                        {calculationResult.adhesiveKg} Kg.
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </>
                                    ) : (
                                        <Box sx={{ textAlign: 'center', py: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: theme.palette.secondary.text,
                                                    fontWeight: 'bold',
                                                    mb: 1
                                                }}
                                            >
                                                Calculation Results
                                            </Typography>

                                            <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
                                                Enter your wall area, select a block size, and click calculate to see the required products.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
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
                                            AAC Block
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
                                            {row.aacBlock}
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