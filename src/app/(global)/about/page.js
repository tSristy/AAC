'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
} from '@mui/material';
import theme from '@/theme/theme';

import FoundationIcon from '@mui/icons-material/Foundation';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import VerifiedIcon from '@mui/icons-material/Verified';
import ScienceIcon from '@mui/icons-material/Science';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';

import img1 from '../../../../public/server/heroB1.png';

const quickFacts = [
  { icon: <LocationOnIcon fontSize="small" />, label: 'Plant location', value: 'Kholapara, Kaliganj, Gazipur' },
  { icon: <PrecisionManufacturingIcon fontSize="small" />, label: 'Annual capacity', value: '~220,000 CBM' },
  { icon: <ScienceIcon fontSize="small" />, label: 'Product engineering', value: 'Swedish-designed, Chinese technology' },
  { icon: <VerifiedIcon fontSize="small" />, label: 'Standards followed', value: 'ASTM International' },
];

const journeyMilestones = [
  {
    year: '2006',
    title: 'Great Wall Ceramic Industries Ltd.',
    description:
      'The flagship of the group and one of the largest tile manufacturers in Bangladesh, built on Italian and Spanish technology.',
  },
  {
    year: '2012',
    title: 'Charu Ceramic',
    description:
      'A premium sanitary ware brand launched in technical collaboration with COTTO (Thailand), bringing international standards to the category.',
  },
  {
    year: 'Year TBD',
    title: 'Great Wall AAC Block & Panels',
    description:
      'Entry into Autoclaved Aerated Concrete, with a dedicated plant in Kholapara, Kaliganj, Gazipur built on Swedish product engineering and Chinese manufacturing technology.',
  },
  {
    year: 'Ongoing',
    title: 'Diversifying the group',
    description:
      'Expansion into Pre-Engineered Buildings (Great Wall Steel), marine & dredging services (Great Wall Ships & Dredgers), battery manufacturing for automotive, solar, IPS and EV (Great Wall Hi-Tech), and packaging (Great Wall Printing & Packaging).',
  },
];

const highlights = [
  { stat: '~220,000 CBM', label: 'Annual production capacity' },
  { stat: '3 institutions', label: 'Independently tested by BUET, MIST & BCSIR' },
  { stat: 'ASTM', label: 'Manufactured to ASTM International standards' },
  { stat: '6 companies', label: 'Backed by the Great Wall group, since 2006' },
];

const groupCompanies = [
  {
    name: 'Great Wall Ceramic Industries Ltd (2006)',
    description:
      'The flagship of our group and one of the largest tile manufacturers in Bangladesh, known for Italian and Spanish technology.',
  },
  {
    name: 'Charu Ceramic (2012)',
    description:
      'Premium sanitary ware brand, produced in technical collaboration with COTTO (Thailand).',
  },
  {
    name: 'Great Wall Steel Building Industries',
    description:
      'End-to-end Pre-Engineered Building (PEB) solutions - design, manufacturing and installation of industrial warehouses, factories and commercial high-rises.',
  },
  {
    name: 'Great Wall Ships & Dredgers',
    description:
      'Marine logistics support, dredging and ship support operations for the development of Bangladesh\u2019s waterways.',
  },
  {
    name: 'Great Wall Hi-Tech Ltd',
    description:
      'Fast-growing energy solutions manufacturer producing high-performance batteries for automotive, solar, IPS and EV applications.',
  },
  {
    name: 'Great Wall Printing & Packaging Industries Ltd',
    description:
      'Fully automated manufacturing of cartons and packaging materials, serving both group companies and external clients.',
  },
];

const leadership = [
  {
    name: 'Sourabh Bansal',
    designation: 'Managing Director',
    bio: 'IIT alumnus guiding enterprise scaling, long-term manufacturing infrastructure layout, and core strategic development.',
  },
  {
    name: 'Puneet Mittal',
    designation: 'Executive Director',
    bio: 'Directing financial planning, regulatory compliance, corporate structuring, and institutional investments.',
  },
  {
    name: 'Sidharth Bansal',
    designation: 'Executive Director',
    bio: 'Overseeing operational workflows, supply chain integrity, and technical quality standards across plant networks.',
  },
];

// Shared "flat card" look used everywhere instead of shadow-heavy MUI Cards:
// a hairline border, no radius theatrics, no shadow, no hover lift. Only the
// border color shifts to the accent on hover, kept subtle on purpose.
const flatCardSx = {
  border: '1px solid #e5e3e0',
  borderRadius: '4px',
  p: 3,
  height: '100%',
  transition: 'border-color 0.2s ease',
  '&:hover': { borderColor: theme.palette.primary.main },
};

const sectionTitleSx = {
  fontWeight: 600,
  color: theme.palette.secondary.text,
  mb: 1,
  fontSize: { xs: '1.5rem', md: '1.85rem' },
};

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero */}
      <Box
        component="header"
        sx={{
          position: 'relative',
          color: 'white',
          height: { xs: 300, md: 400 },
          backgroundImage:
            // TODO: swap in a real plant/product photo instead of this placeholder
            `linear-gradient(rgba(1, 1, 1, 0.6), rgba(102, 102, 102, 0.6)), url(${img1.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 600, fontSize: { xs: '1.9rem', md: '2.6rem' }, mb: 2 }}>
            Bangladesh&rsquo;s Trusted AAC Blocks Manufacturer
          </Typography>
          <Typography sx={{ color: '#e5e3e0', fontWeight: 400, lineHeight: 1.7 }}>
            Delivering durable, lightweight and eco-friendly building solutions, backed by nearly two decades of manufacturing heritage.
          </Typography>
        </Container>
      </Box>

      {/* Who We Are */}
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h3" sx={sectionTitleSx}>
              Who We Are
            </Typography>
            <Divider sx={{ width: 40, borderColor: theme.palette.primary.main, borderBottomWidth: 2, mb: 3 }} />
            <Stack spacing={2}>
              <Typography sx={{ color: '#57534e', lineHeight: 1.75, textAlign: 'justify' }}>
                Great Wall AAC Block & Panels is a leading manufacturer of premium Autoclaved Aerated Concrete (AAC) blocks, panels, lentils and counter in Bangladesh. Built on a foundation of innovation, sustainability, and uncompromising quality, we are committed to delivering advanced construction solutions that meet the evolving demands of modern infrastructure.
              </Typography>
              <Typography sx={{ color: '#57534e', lineHeight: 1.75, textAlign: 'justify' }}>
                Our AAC products are engineered using state-of-the-art technology and rigorously tested by the Bangladesh University of Engineering and Technology (BUET), Military Institute of Science and Technology (MIST) and Bangladesh Council of Scientific and Industrial Research (BCSIR), ensuring superior performance, durability, and reliability.
              </Typography>
              <Typography sx={{ color: '#57534e', lineHeight: 1.75, textAlign: 'justify' }}>
                Designed for efficiency, our blocks offer excellent thermal insulation, reduced structural load, and enhanced environmental sustainability - helping developers optimize both construction costs and long-term value.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ borderLeft: '2px solid', borderTopRightRadius: 8, borderBottomRightRadius: 8, borderColor: theme.palette.primary.main, p: 3, 
              // backgroundColor: '#f9f9f9', 
              height: '100%' }}>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: theme.palette.secondary.light, textTransform: 'uppercase', letterSpacing: '0.5px', mb: 2.5 }}>
                Quick Facts
              </Typography>
              <Stack spacing={2.5}>
                {quickFacts.map((fact) => (
                  <Stack key={fact.label} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Box sx={{ color: theme.palette.primary.main, mt: 0.2 }}>{fact.icon}</Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.8rem', color: theme.palette.secondary.light }}>{fact.label}</Typography>
                      <Typography sx={{ color: theme.palette.secondary.text, fontWeight: 500 }}>{fact.value}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Vision & Mission */}
      <Container>
        <Grid container spacing={3} sx={{ mb: 9 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={flatCardSx}>
              <PublicIcon sx={{ fontSize: '1.6rem', color: theme.palette.primary.main, mb: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.secondary.text, mb: 1 }}>
                Vision
              </Typography>
              <Typography sx={{ color: '#57534e', lineHeight: 1.75 }}>
                To revolutionize the construction industry in Bangladesh by delivering world-class AAC solutions that enable sustainable, smart, and cost-efficient buildings for generations to come.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={flatCardSx}>
              <FoundationIcon sx={{ fontSize: '1.6rem', color: theme.palette.primary.main, mb: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.secondary.text, mb: 1 }}>
                Mission
              </Typography>
              <Typography sx={{ color: '#57534e', lineHeight: 1.75 }}>
                To deliver high-quality AAC blocks and panels that combine durability, efficiency, and eco-friendliness - empowering builders, architects, and homeowners with solutions that make construction faster, safer, and more cost-effective.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Key Highlights */}
      <Box sx={{ mb: 9, py: 5, bgcolor: theme.palette.primary.main,
        // borderTop: '1px solid #e5e3e0', 
        // borderBottom: '1px solid #e5e3e0' 
       }}>
        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={item.label}>
              <Box
                sx={{
                  textAlign: 'center',
                  px: 2,
                  borderLeft: { xs: 'none', md: index === 0 ? 'none' : '1px solid #e5e3e0' },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: theme.palette.secondary.main, fontSize: '1.4rem', mb: 0.5 }}>
                  {item.stat}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: theme.palette.secondary.main, lineHeight: 1.5 }}>{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* Our Journey */}
      <Container maxWidth="lg" sx={{ mb: 9 }}>
        <Box>
          <Typography variant="h3" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
            Our Journey
          </Typography>
          <Typography sx={{ color: theme.palette.secondary.light, textAlign: 'center', mb: 6 }}>
            From ceramics to AAC blocks - the milestones behind the Great Wall group.
          </Typography>

          <Stack spacing={0} sx={{ maxWidth: 760, mx: 'auto' }}>
            {journeyMilestones.map((milestone, index) => (
              <Box key={milestone.title} sx={{ display: 'flex', gap: 3 }}>
                {/* Year rail */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 84, flexShrink: 0 }}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, fontSize: '0.9rem' }}>
                    {milestone.year}
                  </Typography>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: theme.palette.primary.main,
                      my: 1.5,
                      flexShrink: 0,
                    }}
                  />
                  {index < journeyMilestones.length - 1 && (
                    <Box sx={{ width: '1px', flexGrow: 1, bgcolor: '#e5e3e0', minHeight: 40 }} />
                  )}
                </Box>

                {/* Content */}
                <Box sx={{ pb: 4 }}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.secondary.text, mb: 0.5 }}>
                    {milestone.title}
                  </Typography>
                  <Typography sx={{ color: '#57534e', lineHeight: 1.75, fontSize: '0.95rem' }}>
                    {milestone.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Our Industrial Footprint */}
      <Container maxWidth="lg" sx={{ mb: 9 }}>
      <Box sx={{ mb: 9 }}>
        <Typography variant="h3" sx={{ ...sectionTitleSx, textAlign: 'center' }}>
          Our Industrial Footprint
        </Typography>
        <Typography sx={{ color: theme.palette.secondary.light, textAlign: 'center', maxWidth: 620, mx: 'auto', mb: 6 }}>
          Great Wall AAC Block & Panels is backed by the collective strength and heritage of our diverse ventures.
        </Typography>
        <Grid container spacing={3}>
          {groupCompanies.map((company) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={company.name}>
              <Box sx={flatCardSx}>
                <Typography sx={{ fontWeight: 600, color: theme.palette.secondary.text, mb: 1 }}>
                  {company.name}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: '#57534e', lineHeight: 1.75 }}>
                  {company.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>

      {/* Leadership */}
      <Container maxWidth="xl" sx={{ mb: 9 }}>
      <Box>
        <Typography variant="h3" sx={{ ...sectionTitleSx, textAlign: 'center', mb: 6 }}>
          Board &amp; Executive Leadership
        </Typography>
        <Grid container spacing={3}>
          {leadership.map((leader) => (
            <Grid size={{ xs: 12, md: 4 }} key={leader.name}>
              <Box sx={flatCardSx}>
                <Typography sx={{ fontWeight: 600, color: theme.palette.secondary.text, mb: 0.3 }}>
                  {leader.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    mb: 2,
                  }}
                >
                  {leader.designation}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: '#57534e', lineHeight: 1.75 }}>{leader.bio}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>

    </Box>
  );
}