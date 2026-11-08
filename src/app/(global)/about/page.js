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

import img1 from '../../../../public/server/heroB1.png';

import imgBlock from '../../../../public/server/aboutIcon/Blocks.png';
import imgCharu from '../../../../public/server/aboutIcon/Charu.png';
import imgGW from '../../../../public/server/aboutIcon/GW.png';
import imgHiTech from '../../../../public/server/aboutIcon/Hitech.png';
import imgShips from '../../../../public/server/aboutIcon/Ships.png';

const quickFacts = [
  { icon: <LocationOnIcon fontSize="medium" />, label: 'Plant location', value: 'Kholapara, Kaliganj, Gazipur, Bangladesh' },
  { icon: <PrecisionManufacturingIcon fontSize="medium" />, label: 'Annual capacity', value: '~220,000 CBM' },
  { icon: <ScienceIcon fontSize="medium" />, label: 'Product engineering', value: 'Swedish-innovation, Chinese technology' },
  { icon: <VerifiedIcon fontSize="medium" />, label: 'Standards followed', value: 'ASTM International' },
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
    title: 'Charu Ceramic Industries Ltd.',
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
    id: 1,
    icon: imgGW.src,
    name: "Great Wall Ceramic Industries Ltd.",
    description: "Established in 2006, Great Wall Ceramic Industries Ltd. is the flagship company of the group and one of the largest tile manufacturers in Bangladesh. Known for world-class quality and advanced Italian and Spanish technology, the company has been redefining the aesthetics of Bangladeshi homes for nearly two decades."
  },
  {
    id: 2,
    icon: imgCharu.src,
    name: "Charu Ceramic Industries Ltd.",
    description: "Established in 2012, Charu Ceramic Ind. Ltd. is a contemporary premium brand in Bangladesh's sanitary ware industry. Through technical collaboration with COTTO, Thailand, the company manufactures high-end sanitary ware and fittings that combine international standards, luxury, quality, and durability."
  },
  {
    id: 3,
    icon: imgBlock.src,
    name: "Great Wall Steel Building Ind. Ltd.",
    description: "Great Wall Steel Building Ind. Ltd. is a leading provider of Pre-Engineered Building (PEB) solutions in Bangladesh. The company offers end-to-end steel building services, including design, manufacturing, and installation of industrial warehouses, factories, and commercial high-rise structures."
  },
  {
    id: 4,
    icon: imgShips.src,
    name: "Great Wall Ships & Dredgers Ltd.",
    description: "Great Wall Ships & Dredgers Ltd. operates in the maritime and infrastructure sector, specializing in marine logistics support, dredging services, and ship support operations. The company contributes to the development of Bangladesh's waterways and maritime logistics infrastructure."
  },
  {
    id: 5,
    icon: imgHiTech.src,
    name: "Great Wall Hi-Tech Industries Ltd.",
    description: "Great Wall Hi-Tech Industries Limited is an innovative and fast-growing manufacturer in Bangladesh's energy solutions sector. The company produces high-performance batteries for various applications, including automotive, solar power systems, IPS (inverter power systems), and electric vehicles (EVs)."
  },
  {
    id: 6,
    icon: imgGW.src,
    name: "Great Wall Printing & Packaging Ind. Ltd.",
    description: "Great Wall Printing & Packaging Industries Limited is a Bangladesh-based printing and packaging manufacturer specializing in cartons and packaging materials. The company utilizes fully automated and advanced machinery to deliver modern manufacturing and packaging solutions."
  }
];

const flatCardSx = {
  border: '1px solid #e5e3e0',
  borderRadius: '4px',
  p: { xs: 2, md: 3 },
  height: '100%',
  transition: 'border-color 0.2s ease',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: 6,
    transition: 'box-shadow 0.3s ease-in-out',
  }
};

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden' }}>
      {/* Hero */}
      <Box
        component="header"
        sx={{
          position: 'relative',
          color: 'white',
          height: { xs: 280, sm: 350, md: 400 },
          backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.6), rgba(102, 102, 102, 0.6)), url(${img1.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="xl" sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: '550', fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }, lineHeight: 1.2, textAlign: 'center' }}>
            Bangladesh&rsquo;s Trusted AAC Blocks Manufacturer
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, maxWidth: 600, fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }, textAlign: 'center'}}>
            Delivering durable, lightweight and eco-friendly building solutions, backed by nearly two decades of manufacturing heritage.
          </Typography>
        </Container>
      </Box>

      {/* Who We Are */}
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 10 }, px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant='h3' sx={{ mb: 2, color: theme.palette.secondary.text, fontWeight: '550', fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
              Who We Are
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, mb: 2 }}>
              <Divider sx={{ width: 40, borderColor: theme.palette.primary.main, borderBottomWidth: 2, mb: { xs: 1, sm: 0 } }} />
              <Typography variant='h6' sx={{ color: theme.palette.primary.main, letterSpacing: '0.5px', fontSize: { xs: '1rem', sm: '1.15rem' } }}>
                A Legacy of Excellence and Innovation
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography sx={{ color: theme.palette.text.primary, textAlign: 'justify', whiteSpace: 'pre-line', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                {`Great Wall AAC Block & Panels is a leading manufacturer of premium Autoclaved Aerated Concrete (AAC) blocks, panels, lentils and counter in Bangladesh. Built on a foundation of innovation, sustainability, and uncompromising quality, we are committed to delivering advanced construction solutions that meet the evolving demands of modern infrastructure.\n
                Our AAC products are engineered using state-of-the-art technology and rigorously tested by Bangladesh University of Engineering and Technology (BUET), Military Institute of Science and Technology (MIST) and Bangladesh Council of Scientific and Industrial Research (BCSIR) ensuring superior performance, durability, and reliability. Designed for efficiency, Great Wall AAC blocks offer excellent thermal insulation, reduced structural load, and enhanced environmental sustainability—helping developers optimize both construction costs and long-term value.\n
                By combining strength, lightweight performance, and eco-conscious design, Great Wall AAC Block & Panels stands at the forefront of next-generation building materials, shaping the future of construction in Bangladesh.`}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ borderLeft: { xs: 'none', md: '2px solid' }, borderTop: { xs: '2px solid', md: 'none' }, borderTopRightRadius: { md: 8 }, borderBottomRightRadius: { md: 8 }, borderColor: theme.palette.primary.main, p: { xs: 2, md: 3 }, height: '100%' }}>
              <Typography variant='h6' sx={{ mb: 3, color: theme.palette.secondary.light, textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                Quick Facts
              </Typography>
              <Stack spacing={2.5}>
                {quickFacts.map((fact) => (
                  <Stack key={fact.label} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <Box sx={{ color: theme.palette.primary.main, mt: 0.2 }}>{fact.icon}</Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.9rem', color: theme.palette.secondary.light }}>{fact.label}</Typography>
                      <Typography sx={{ fontSize: '1.1rem', color: theme.palette.secondary.text, fontWeight: 500 }}>{fact.value}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Vision & Mission */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 }, mb: { xs: 6, md: 9 } }}>
        <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={flatCardSx}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 1 }}>
                <PublicIcon sx={{ fontSize: '1.6rem', color: theme.palette.primary.main, mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.secondary.text, mb: 1 }}>
                  Vision
                </Typography>
              </Stack>
              <Typography sx={{ color: theme.palette.text.primary, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                To revolutionize the construction industry in Bangladesh by delivering world-class AAC solutions that enable sustainable, smart, and cost-efficient buildings for generations to come.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={flatCardSx}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 1 }}>
                <FoundationIcon sx={{ fontSize: '1.6rem', color: theme.palette.primary.main, mb: 1.5 }} />
                <Typography variant='h6' sx={{ color: theme.palette.primary.text, mb: 1, fontWeight: 600 }}>
                  Mission
                </Typography>
              </Stack>
              <Typography sx={{ color: '#57534e', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
                To manufacture world-class AAC blocks and panels that merge structural strength with environmental responsibility—equipping developers, architects, and homeowners with solutions that accelerate construction, lower total costs, and elevate building standards.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Key Highlights */}
      <Box sx={{ mb: { xs: 6, md: 9 }, py: 5, bgcolor: theme.palette.primary.main, px: { xs: 2, md: 6 } }}>
        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={item.label}>
              <Box
                sx={{
                  textAlign: 'center',
                  px: 2,
                  borderLeft: { xs: 'none', md: index === 0 ? 'none' : '1px solid rgba(255, 255, 255, 0.2)' },
                }}
              >
                <Typography sx={{ fontWeight: 600, color: theme.palette.secondary.main, fontSize: { xs: '1.2rem', md: '1.4rem' }, mb: 0.5 }}>
                  {item.stat}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem' }, color: theme.palette.secondary.main, lineHeight: 1.5 }}>{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Journey */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 9 }, px: { xs: 2, sm: 4 } }}>
        <Box>
          <Typography variant='h3' sx={{ mb: 1, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center', fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
            Our Journey
          </Typography>
          <Typography variant='h6' sx={{ mb: { xs: 4, md: 6 }, color: theme.palette.primary.text, textAlign: 'center', fontSize: { xs: '1rem', sm: '1.15rem' } }}>
            From ceramics to AAC blocks - the milestones behind the Great Wall group.
          </Typography>

          <Stack spacing={0} sx={{ maxWidth: 760, mx: 'auto' }}>
            {journeyMilestones.map((milestone, index) => (
              <Box key={milestone.title} sx={{ display: 'flex', gap: { xs: 2, sm: 3 } }}>
                {/* Year rail */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: 60, sm: 84 }, flexShrink: 0 }}>
                  <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, fontSize: { xs: '1rem', sm: '1.1rem' }, textAlign: 'center' }}>
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
                    <Box sx={{ width: '1px', flexGrow: 1, bgcolor: '#e5e3e0' }} />
                  )}
                </Box>

                {/* Content */}
                <Box sx={{ pb: 4 }}>
                  <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 550, color: theme.palette.secondary.text, mb: 0.5 }}>
                    {milestone.title}
                  </Typography>
                  <Typography sx={{ color: theme.palette.secondary.light, fontSize: { xs: '0.95rem', sm: '1.1rem' }, lineHeight: 1.5 }}>
                    {milestone.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Our Industrial Footprint */}
      <Container maxWidth="xl" sx={{ mb: { xs: 6, md: 9 }, px: { xs: 2, sm: 4, md: 6 } }}>
        <Box>
          <Typography variant='h3' sx={{ mb: 1, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center', fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
            Our Industrial Footprint
          </Typography>
          <Typography variant='h6' sx={{ mb: { xs: 4, md: 6 }, color: theme.palette.primary.text, textAlign: 'center', fontSize: { xs: '1rem', sm: '1.15rem' } }}>
            Great Wall AAC Block & Panels is backed by the collective strength and heritage of our diverse ventures.
          </Typography>
          <Grid container spacing={3}>
            {groupCompanies.map((company) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={company.name}>
                <Box sx={flatCardSx}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
                    <Box component="img" src={company.icon} alt={company.name} sx={{ width: 32, height: 32, objectFit: 'contain' }} />
                    <Typography variant="h6" sx={{ fontWeight: 500, color: theme.palette.primary.text, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                      {company.name}
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: theme.palette.secondary.light, fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: 'justify', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                    {company.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}