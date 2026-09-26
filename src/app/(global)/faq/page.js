'use client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';
import theme from '@/theme/theme';

// Static FAQ Data derived directly from product documents
const faqList = [
    {
        category: "Product Overview & Specifications",
        items: [
            {
                question: "What are AAC blocks and panels, and how are they made?",
                answer: "Autoclaved Aerated Concrete (AAC) is a lightweight, precast building material made from natural raw materials such as quartz sand, lime, cement, water, and an expansion agent. The mixture is cured under high-pressure steam in an autoclave, resulting in a cellular structure that delivers exceptional strength, thermal insulation, and durability[cite: 1]."
            },
            {
                question: "How do AAC blocks compare to traditional red clay bricks in structural weight?",
                answer: "AAC blocks are approximately 60% lighter than standard red clay bricks. Using AAC significantly reduces the dead load of a structure, allowing for optimized structural designs, reduced steel and concrete requirements in foundations and frames, and improved seismic resistance[cite: 1]."
            },
            {
                question: "What sizes and dimensions are available for your AAC blocks and panels?",
                answer: "We manufacture standard block thicknesses ranging from 100 mm to 300 mm, with uniform length (600 mm) and height (200 mm). Reinforced wall and floor panels are custom-engineered to project specifications, with lengths up to 6 meters. Custom sizes can also be produced to meet specific architectural requirements[cite: 1]."
            }
        ]
    },
    {
        category: "Performance & Technical Benefits",
        items: [
            {
                question: "What is the fire resistance rating of AAC materials?",
                answer: "AAC is non-combustible and offers a fire resistance rating of up to 4 hours (depending on wall thickness) in accordance with international safety standards. It does not release toxic fumes when exposed to high temperatures[cite: 1]."
            },
            {
                question: "How efficient is AAC for thermal and acoustic insulation?",
                answer: "The porous cellular structure gives AAC a thermal conductivity value significantly lower than traditional masonry, reducing indoor heating and cooling loads by up to 30%. Additionally, AAC offers excellent sound attenuation (STC ratings up to 45–50 dB), making it ideal for residential, commercial, and industrial partition walls[cite: 1]."
            },
            {
                question: "Are AAC blocks resistant to moisture and pests?",
                answer: "Yes. While AAC has microscopic closed pores that minimize capillary water absorption compared to traditional clay bricks, applying standard external plastering or water-repellent coatings ensures long-term weather resistance. AAC is completely inorganic, making it immune to termites, mold, and pest infestations[cite: 1]."
            }
        ]
    },
    {
        category: "Installation & Cost Efficiency",
        items: [
            {
                question: "How does using AAC impact overall construction timelines and labor costs?",
                answer: "AAC blocks are significantly larger than traditional bricks, allowing masons to lay walls up to 3 times faster. The precise dimensions and smooth surface finish eliminate the need for thick mortar joints and heavy plastering, drastically reducing mortar consumption, labor expenses, and overall project schedules[cite: 1]."
            },
            {
                question: "What type of mortar should be used for installing AAC blocks?",
                answer: "We recommend using a specialized thin-bed polymer-modified mortar (2 mm to 3 mm joint thickness) designed specifically for AAC. Thin-bed mortar ensures maximum bonding strength, eliminates thermal bridging, and minimizes water consumption during construction[cite: 1]."
            },
            {
                question: "Why should I use AAC Block Adhesive instead of traditional sand-cement mortar?",
                answer: "Traditional sand-cement mortar requires a thick joint (12–15 mm), creates thermal bridges, adds dead weight, and needs constant water curing. AAC Block Adhesive is formulated for thin-bed application (2–3 mm). It offers up to 5 times higher bond strength, prevents shrinkage cracks, eliminates water curing, and significantly speeds up wall construction[cite: 1]."
            }
        ]
    },
    {
        category: "Sustainability & Adhesives Best Practices",
        items: [
            {
                question: "Why is AAC considered a green building material?",
                answer: "AAC manufacturing uses eco-friendly raw materials, consumes less energy than traditional brick firing, and produces zero toxic emissions. Its superior insulation properties lower operational carbon footprints over the building's lifecycle, contributing toward green building certifications such as LEED[cite: 1]."
            },
            {
                question: "Does AAC Block Adhesive require water curing after application?",
                answer: "No. The adhesive contains polymer additives that retain moisture within the mortar matrix. This allows full hydration of the cement binder without external spraying, saving water and labor costs while avoiding delays on the job site[cite: 1]."
            },
            {
                question: "Do AAC blocks need to be soaked in water before laying with adhesive?",
                answer: "No. Unlike traditional clay bricks, AAC blocks should not be soaked. Simply wipe or brush away loose dust and debris from the block surface before applying the mortar. Lightly dampening the block surface with a wet sponge in hot weather conditions is sufficient to prevent rapid moisture suction[cite: 1]."
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <Box sx={{ bgcolor: 'white', color: theme.palette.primary.text, minHeight: '100vh', pt: { xs: 8, md: 10 } }}>
            <Box py={6}>
                <Container maxWidth="md">
                    <Box px={{ sm: 2, md: 4 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2rem', md: '2.8rem' },
                                fontWeight: 700,
                                color: theme.palette.secondary.text,
                                mb: 6,
                                textAlign: 'center',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Frequently Asked Questions
                        </Typography>

                        {faqList.map((section, secIdx) => (
                            <Box key={secIdx} sx={{ mb: 6 }}>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        color: theme.palette.primary.main,
                                        mb: 3,
                                        borderBottom: `2px solid ${theme.palette.secondary.main}`,
                                        pb: 1
                                    }}
                                >
                                    {section.category}
                                </Typography>

                                {section.items.map((item, index) => (
                                    <Accordion
                                        key={index}
                                        defaultExpanded={secIdx === 0 && index === 0}
                                        sx={{
                                            mb: 2,
                                            boxShadow: 'none',
                                            '&:before': { display: 'none' },
                                            border: '1px solid rgba(0, 0, 0, 0.08)',
                                            borderRadius: '8px !important',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                                            aria-controls={`panel-${secIdx}-${index}-content`}
                                            id={`panel-${secIdx}-${index}-header`}
                                        >
                                            <Typography component="span" sx={{ fontSize: '1.15rem', fontWeight: 550, color: theme.palette.primary.text }}>
                                                {item.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography sx={{ fontSize: "0.98rem", color: theme.palette.primary.text, lineHeight: 1.8 }}>
                                                {item.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}