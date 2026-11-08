'use client';
import { useState } from "react";
import { Box, Container, TableContainer, Tabs, Tab, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import theme from '@/theme/theme';

// Same flat hairline-border token used on the AAC Blocks / AAC Panels pages,
// kept here for visual consistency across product-data pages.
const HAIRLINE = '#e5e3e0';

// -----------------------------------------------------------------------
// Content sourced from Technical_Specification.docx. Note: in the source
// file, each table actually sits *before* the heading that names it (a
// leftover of however the doc was assembled/converted) - e.g. the panel
// wind-load/reinforced-steel table appears ahead of the "AAC Panels"
// heading, and the mesh fabric table appears ahead of "Power Mesh". Rows
// below are grouped by what the values themselves describe, not by which
// heading was closest to them in the file.
// -----------------------------------------------------------------------
const specSheets = [
    {
        key: 'blocks',
        label: 'AAC Blocks',
        rows: [
            { parameter: 'Density', value: '650-750 kg/m³' },
            { parameter: 'Compressive Strength', value: '> 4.5 N/mm²' },
            { parameter: 'Coefficient of Thermal Expansion', value: '8.1 × 10⁻⁶ K⁻¹' },
            { parameter: 'Water Absorption', value: '8% (at equilibrium)' },
            { parameter: 'Thermal Conductivity', value: '~0.16 W/m²K' },
            { parameter: 'Drying Shrinkage', value: '0.02%' },
            { parameter: 'Fire Resistance', value: '4-6 Hrs.' },
            { parameter: 'STC Rating', value: '43~45 dB' },
        ],
    },
    {
        key: 'panels',
        label: 'AAC Panels',
        rows: [
            { parameter: 'Dry Density', value: '650-750 kg/m³' },
            // { parameter: 'Working Density', value: '600-700 kg/m³' },
            { parameter: 'Wind Load', value: '50-180 kg/m²' },
            { parameter: 'Compressive Strength', value: '> 4.5 N/mm²' },
            { parameter: 'Water Absorption', value: '< 33% by mass' },
            { parameter: 'Fire Rating', value: '4~6 hr' },
            { parameter: 'Thermal Conductivity (k)', value: '16 W/mK' },
            { parameter: 'Sound Insulation (STC)', value: '43~45 dB' },
            { parameter: 'Reinforcing Steel Tensile Strength', value: '> 500 N/mm²' },
            { parameter: 'Weight', value: '180-300 kg' },
        ],
    },
    {
        key: 'block-fix-adhesive',
        label: 'Block-Fix Adhesive',
        rows: [
            { parameter: 'Composition', value: 'Cement, Lime Stone, Processed Sand, Chemical Additives' },
            { parameter: 'Aggregate Size', value: '0-4 mm Processed Sand' },
            { parameter: 'Appearance', value: 'Grey Granular Powder' },
            { parameter: 'Mixing Ratio', value: '5 ltr' },
            { parameter: 'Density (Wet)', value: '1.75 kg per ltr' },
            { parameter: 'Compressive Strength (3-Day)', value: '16.97 N/mm²' },
            { parameter: 'Compressive Strength (7-Day)', value: '25.15 N/mm²' },
            { parameter: 'Working Time', value: 'Approx. 30 minutes' },
            { parameter: 'Standard', value: 'ASTM C1660-09, ASTM C387' },
            { parameter: 'Coverage', value: '~60-70 sq. ft. per 25 kg bag at 3~5mm thickness' },
            { parameter: 'Shelf Life', value: '12 months from manufacture (store cool & dry)' },
        ],
    },
    {
        key: 'power-mesh',
        label: 'Power Mesh',
        rows: [
            { parameter: 'Weight of Fabric', value: '350 GSM' },
            { parameter: 'Mesh Size', value: '5mm x 5mm' },
            { parameter: 'Standard Roll Length', value: '25 Metres (Tolerance 1%)' },
            { parameter: 'Standard Roll Width', value: '50mm / 75mm / 100mm' },
            { parameter: 'Warp Breaking Strength', value: '1000 N/mm²' },
            { parameter: 'Weft Breaking Strength', value: '1000 N/mm²' },
        ],
    }
];

export default function TechnicalSpecificationsPage() {
    const [activeTab, setActiveTab] = useState(0);
    const activeSheet = specSheets[activeTab];

    return (
        <Box sx={{ pt: 10 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ mb: 1, color: theme.palette.secondary.text, fontWeight: 600, textAlign: 'center' }}>
                    Technical Specifications
                </Typography>
                <Typography variant="h6" sx={{ color: theme.palette.primary.text, textAlign: 'center', mb: 6 }}>
                    Verified performance data for every Great Wall product.
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
                    {specSheets.map((sheet) => (
                        <Tab key={sheet.key} label={sheet.label} />
                    ))}
                </Tabs>

                {/* Spec table */}
                {/* Specification Table */}
                <Box
                    sx={{
                        backgroundColor: 'white',
                        p: { xs: 1.5, sm: 3, md: 5 },
                        borderRadius: 2,
                        boxShadow: 3,
                        mb: 5
                    }}
                >
                    <TableContainer
                        sx={{
                            border: `1px solid ${HAIRLINE}`,
                            borderRadius: 2,
                            overflowX: 'auto'
                        }}
                    >
                        <Table
                            aria-label={`${activeSheet.label}-technical-specification-table`}
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
                                    <TableCell
                                        align="left"
                                        sx={{
                                            width: '45%',
                                            borderBottom: `1px solid ${HAIRLINE}`
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '0.85rem',
                                                    sm: '1.1rem'
                                                },
                                                fontWeight: 700,
                                                color: theme.palette.primary.text,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Parameter
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        sx={{
                                            borderBottom: `1px solid ${HAIRLINE}`
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '0.85rem',
                                                    sm: '1.1rem'
                                                },
                                                fontWeight: 700,
                                                color: theme.palette.primary.text,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Specifications
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {activeSheet.rows.map((row) => (
                                    <TableRow
                                        key={row.parameter}
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
                                                borderColor: HAIRLINE,
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
                                                    fontWeight: 500,
                                                    color: theme.palette.primary.text,
                                                    overflowWrap: 'anywhere'
                                                }}
                                            >
                                                {row.parameter}
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            sx={{
                                                borderColor: HAIRLINE,
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
                                                    color: theme.palette.secondary.light,
                                                    fontWeight: 500,
                                                    overflowWrap: 'anywhere'
                                                }}
                                            >
                                                {row.value}
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
    );
}