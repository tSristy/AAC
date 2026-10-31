'use client';
import theme from "@/theme/theme";
import { Autocomplete, Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CalculatorPage() {
    const [wallArea, setWallArea] = useState('');
    const [selectedBlockSize, setSelectedBlockSize] = useState(null);
    const [calculationResult, setCalculationResult] = useState(null);
    const blockSizes = [
        { label: '600mm x 200mm x 100mm', value: '600x200x100', thickness: 0.100 },
        { label: '600mm x 200mm x 110mm', value: '600x200x110', thickness: 0.110 },
        { label: '600mm x 200mm x 120mm', value: '600x200x120', thickness: 0.120 },
        { label: '600mm x 200mm x 150mm', value: '600x200x150', thickness: 0.150 },
        { label: '600mm x 200mm x 200mm', value: '600x200x200', thickness: 0.200 },
        { label: '600mm x 200mm x 250mm', value: '600x200x250', thickness: 0.250 },
        { label: '600mm x 200mm x 300mm', value: '600x200x300', thickness: 0.300 },
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
        <Box sx={{ pt: 13, pb: 7 }}>
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
    )
}