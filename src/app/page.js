'use client';
import { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import theme from '@/theme/theme';
import BannerCarousel from "@/components/ui/BannerCarousel";
import { useRouter } from "next/navigation";

// Image Imports
import img1 from '../../public/server/heroB1.png';
import img2 from '../../public/server/heroB2.png';
import bg_e from '../../public/server/ibg.png';
import blockProduct from '../../public/server/block.png';
import blockProductHover from '../../public/server/blockHover.png';
import panelProduct from '../../public/server/panel.png';
import panelProductHover from '../../public/server/panelHover.png';
import adhesiveProduct from '../../public/server/counter.jpg';
import adhesiveProductHover from '../../public/server/counterHover.png';
import mortarProduct from '../../public/server/mortar.png';
import mortarProductHover from '../../public/server/mortarHover.png';
import props1 from '../../public/server/props1.png';
import props2 from '../../public/server/props2.png';
import props3 from '../../public/server/props3.png';
import props4 from '../../public/server/props4.png';
import props5 from '../../public/server/props5.png';
import hc from '../../public/server/hc1.png';

import imgClient1 from '../../public/server/partnerLogo/logo1.png';
import imgClient2 from '../../public/server/partnerLogo/logo2.jpg';
import imgClient3 from '../../public/server/partnerLogo/logo3.png';
import imgClient4 from '../../public/server/partnerLogo/logo4.png';
import imgClient5 from '../../public/server/partnerLogo/logo5.jpg';
import imgClient6 from '../../public/server/partnerLogo/logo6.png';
import imgClient7 from '../../public/server/partnerLogo/logo7.jpg';
import imgClient9 from '../../public/server/partnerLogo/logo9.jpg';
import imgClient10 from '../../public/server/partnerLogo/logo10.jpeg';
import imgClient11 from '../../public/server/partnerLogo/logo11.jpeg';
import imgClient12 from '../../public/server/partnerLogo/logo12.jpeg';
import imgClient13 from '../../public/server/partnerLogo/logo13.jpeg';



import Image from "next/image";
import NonStopCarousel from "@/components/ui/NonStopCarousel";
import SliderCarousel from "@/components/ui/SliderCarousel";

/* ------------------------------------------------------------------ */
/* Shared responsive values (used across sections)                     */
/* ------------------------------------------------------------------ */
const sectionTitleSx = { fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' }, lineHeight: 1.2 };
const subTitleSx = { fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' } };
const bodyTextSx = { fontSize: { xs: '1rem', md: '1.1rem' } };
const sectionPx = { xs: 2, sm: 5, md: 10 };

const afterBase = {
  content: '""',
  position: "absolute",
  top: { xs: 0, sm: "-50%" },
  left: { xs: 0, sm: "-20%" },
  width: { xs: "100%", sm: "63%" },
  height: { xs: "100%", sm: "220%" },
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  transform: { xs: "none", sm: "rotate(25deg)" },
  clipPath: 'inset(0 100% 0 0)', 
};


const shadeOverlaySx = (delay = 0, options = {}) => {
  const { activeSelector = null, isActive = false } = options;

  const sx = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: 'none',
    "&::after": { ...afterBase },
    '@keyframes shadeWipe': {
      '0%': { clipPath: 'inset(0 100% 0 0)' },
      '100%': { clipPath: 'inset(0 0% 0 0)' },
    },
  };

  const animationValue = `shadeWipe 1.3s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s forwards`;

  if (activeSelector) {
    // Only animate while this slide carries the active class
    sx[`${activeSelector} &::after`] = { animation: animationValue };
  } else if (isActive) {
    // Only animate once the JS trigger (e.g. scrolled into view) fires
    sx['&::after'].animation = animationValue;
  }
  // else: stays at the hidden base clip-path, no animation - nothing to see yet

  return sx;
};

export default function Home() {
  const router = useRouter();

  const heroSection = [
    {
      id: 1,
      img: img1,
      title: "High-Quality AAC Blocks for Modern Construction",
      ucp: 'Durable, Lightweight, and Eco-Friendly Building Solutions',
      buttonOpt: <Button variant="outlined" onClick={() => router.push('/aac-blocks')} sx={{
        borderRadius: 20, borderColor: 'white', color: 'white',
        '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' }
      }}>Know More</Button>
    },
    {
      id: 2,
      img: img2,
      title: "Bangladesh’s Trusted AAC BlocksManufacturer",
      ucp: 'Providing Innovative and Sustainable Building Solutions',
      buttonOpt: <Button variant="outlined" onClick={() => router.push('/contact')} sx={{
        borderRadius: 20, borderColor: 'white', color: 'white',
        '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' }
      }}>Contact Us</Button>
    }
  ];

  const [productList] = useState([
    { id: 1, name: "AAC Blocks", img_url: blockProduct.src, hover_img_url: blockProductHover.src, url: '/aac-blocks' },
    { id: 2, name: "AAC Panels", img_url: panelProduct.src, hover_img_url: panelProductHover.src, url: '/aac-panels' },
    { id: 3, name: "Block-Fix Adhesive", img_url: adhesiveProduct.src, hover_img_url: adhesiveProductHover.src, url: '/block-fix-adhesive' },
    { id: 4, name: "Power-Mash", img_url: mortarProduct.src, hover_img_url: mortarProductHover.src, url: '/power-mash' }
  ]);

  const propsList = [
    {
      id: 1,
      title: "Certified Quality",
      textDescription: "Using high-quality raw materials and advanced technology, ensuring superior strength, durability.",
      icon: props1.src
    },
    {
      id: 2,
      title: "State-of-the-Art Technology",
      textDescription: "Offering excellent thermal insulation, helping to reduce energy consumption and lower heating and cooling costs.",
      icon: props2.src
    },
    {
      id: 3,
      title: "Superior Thermal & Energy Efficiency",
      textDescription: "Lightweight and easy to handle, reducing labor costs and construction time  with energy efficiency.",
      icon: props3.src
    },
    {
      id: 4,
      title: "Sustainable & Environmentally Responsible",
      textDescription: "Environmentally friendly, made from natural materials, and producing less waste during construction.",
      icon: props4.src
    },
    {
      id: 5,
      title: "Cost-Effective, High-Performance Engineering",
      textDescription: "Offering excellent thermal insulation, helping to reduce energy consumption and lower heating and cooling costs.",
      icon: props5.src
    }
  ]

  const testimonialList = [
    {
      id: 1,
      name: "MD NUR NABI MEHEDI",
      position: "CEO, ABC Construction",
      testimonial: "Great Wall AAC Blocks have transformed our construction projects. Their durability and energy efficiency have significantly improved our building quality, and our clients are thrilled with the results.",
      logo: "https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=360"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager, XYZ Builders",
      testimonial: "We have been using Great Wall AAC Blocks for several projects now, and the feedback from our clients has been overwhelmingly positive. The blocks are easy to work with, and the finished buildings are not only strong but also more comfortable for occupants.",
      logo: "https://d113wk4ga3f0l0.cloudfront.net/c?o=eJyVkE9rwzAMxb-LYLfGTpOmS3LtoTA6Bu1hR2MSNXHzx8ZyEpbS7z4HyrIdJ9DhPQn0e7oD6cEWKAbbQg61c4ZyzilmspOz7uVErNAd981aVdWOnC4apjpZIbHBtFqWxIzV5VA4pXveYamkUA47YSyOCif67SWv2TaO-XYf7XbhPs22wflSSbwd3j_e5vMwH6fPutClPDU8XCoSp0ugCt0HYcpupoINNPjlSa_J9RpnXk6qdDXkaRZuoMYF8Sk8stHkr0J-h__Fk0To_sSapEPbSdsQX_fEj8tMX60skCQvsNI8ZalItyMKg_7fvfejZAMWSc0oKitH5ZZcBz9CC4_HN4sgja0=&s=98449b61c298785137ccf2cf8e23077d443b96a5"
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Architect, DesignPro",
      testimonial: "As an architect, I appreciate the versatility and sustainability of Great Wall AAC Blocks. They allow for creative designs while also contributing to environmentally responsible construction practices.",
      logo: "https://d113wk4ga3f0l0.cloudfront.net/c?o=eJyVkE9rwzAMxb-LYLfGTpOmS3LtoTA6Bu1hR2MSNXHzx8ZyEpbS7z4HyrIdJ9DhPQn0e7oD6cEWKAbbQg61c4ZyzilmspOz7uVErNAd981aVdWOnC4apjpZIbHBtFqWxIzV5VA4pXveYamkUA47YSyOCif67SWv2TaO-XYf7XbhPs22wflSSbwd3j_e5vMwH6fPutClPDU8XCoSp0ugCt0HYcpupoINNPjlSa_J9RpnXk6qdDXkaRZuoMYF8Sk8stHkr0J-h__Fk0To_sSapEPbSdsQX_fEj8tMX60skCQvsNI8ZalItyMKg_7fvfejZAMWSc0oKitH5ZZcBz9CC4_HN4sgja0=&s=98449b61c298785137ccf2cf8e23077d443b96a5"
    }
  ]

  const eventList = [
    {
      id: 1,
      title: "Construction Expo 2024",
      date: "March 15-17, 2024",
      location: "Dhaka, Bangladesh",
      featured_image: "https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2010/10/14/1287050043328/News-of-the-World-006.jpg?width=465&dpr=1&s=none&crop=none"
    },
    {
      id: 2,
      title: "Construction Expo 2025",
      date: "April 25-27, 2025",
      location: "Dhaka, Bangladesh",
      featured_image: "https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2010/10/14/1287050043328/News-of-the-World-006.jpg?width=465&dpr=1&s=none&crop=none"
    },
    {
      id: 3,
      title: "Construction Expo 2026",
      date: "November 01-05, 2026",
      location: "Dhaka, Bangladesh",
      featured_image: "https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2010/10/14/1287050043328/News-of-the-World-006.jpg?width=465&dpr=1&s=none&crop=none"
    }
  ]

  const [clientList, setClientList] = useState([
    { id: 1, title: "Client 1", featured_image: imgClient1.src },
    { id: 2, title: "Client 2", featured_image: imgClient2.src },
    { id: 3, title: "Client 3", featured_image: imgClient3.src },
    { id: 4, title: "Client 4", featured_image: imgClient4.src },
    { id: 5, title: "Client 5", featured_image: imgClient5.src },
    { id: 6, title: "Client 6", featured_image: imgClient6.src },
    { id: 7, title: "Client 7", featured_image: imgClient7.src },
    { id: 9, title: "Client 9", featured_image: imgClient9.src },
    { id: 10, title: "Client 10", featured_image: imgClient10.src },
    { id: 11, title: "Client 11", featured_image: imgClient11.src },
    { id: 12, title: "Client 12", featured_image: imgClient12.src },
    { id: 13, title: "Client 13", featured_image: imgClient13.src }
  ]);

  // Trigger the Electric section's shade wipe only once it scrolls into view
  const [electricRef, setElectricRef] = useState(null); // callback-ref target
  const [isElectricInView, setIsElectricInView] = useState(false);

  useEffect(() => {
    if (!electricRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsElectricInView(true);
          observer.disconnect(); // one-time reveal; remove this line to replay every time it re-enters view
        }
      },
      { threshold: 0.25 } // fires once ~25% of the section is visible
    );

    observer.observe(electricRef);
    return () => observer.disconnect();
  }, [electricRef]);

  useEffect(() => {
    const body = {
      searchVariable: "",
    };
    fetch(`https://charuceramic.com/api/client/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        // setClientList(res.items);
      })
  }, []);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <BannerCarousel>
        {heroSection.map((item) => (
          <Box key={item.id} sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={item.img}
              alt={`Slide ${item.id}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <Box sx={shadeOverlaySx(0.15, { activeSelector: '.swiper-slide-active' })} />
            <Container maxWidth="xl" sx={{ position: 'relative', height: '100%', zIndex: 1 }}>
              <Grid container sx={{ height: '100%' }}>
                <Grid size={{ xs: 12, sm: 8, md: 6 }} sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ color: 'white', px: { xs: 1, sm: 2, md: 4 } }}>
                    <Typography variant="h3" sx={{ fontWeight: '550', fontSize: { xs: '1.6rem', sm: '2.1rem', md: '3rem' }, lineHeight: 1.2 }}>{item.title}</Typography>
                    <Typography variant="h6" sx={{ mt: { xs: 1, md: 0 }, ...subTitleSx }}>{item.ucp}</Typography>
                    <Box sx={{ mt: 2 }}>{item.buttonOpt}</Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        ))}
      </BannerCarousel>


      {/* PRODUCT SECTION */}
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ height: { xs: '900px', sm: '350px', md: '550px' } }}>
          {productList.map((product) => (
            <Box key={product.id} sx={{
              flex: 1,
              position: 'relative',
              backgroundImage: `url(${product.img_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              "&:hover": {
                flex: 1.2,
                backgroundImage: `url(${product.hover_img_url})`,
              }
            }}>
              <Stack direction="column" spacing={2} sx={{
                position: 'absolute', top: 0, left: 0, width: '100%', justifyContent: 'space-around', alignItems: 'center',
                height: '100%', bgcolor: 'rgba(0, 0, 0, 0.4)', color: 'white', p: 2
              }}>
                <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: '550', fontSize: { xs: '1.6rem', sm: '1.15rem', md: '2.125rem' } }}>{product.name}</Typography>
                <Button variant='outlined' onClick={() => router.push(product.url)} sx={{ borderRadius: 20, borderColor: 'white', color: 'white', fontSize: { sm: '0.75rem', md: '0.875rem' }, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
                  Know more
                </Button>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>


      {/* Why Choose Us */}
      <Box sx={{ py: { xs: 5, md: 10 }, px: { xs: 1, sm: 0 }, bgcolor: theme.palette.secondary.main }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center', ...sectionTitleSx }}>Why Choose Us</Typography>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {
              propsList.map((prop, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 'auto' }} key={index}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', textAlign: 'center', justifyContent: { xs: 'flex-start', md: 'center' } }}>
                    <Box component="img" src={prop.icon} alt={prop.title} sx={{ width: { xs: '48px', md: '60px' }, height: { xs: '48px', md: '60px' }, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: '500', textAlign: { xs: 'left', lg: 'center' } }} color={theme.palette.primary.text}>{prop.title}</Typography>
                  </Stack>
                </Grid>
              ))
            }
          </Grid>
          <Typography sx={{ mt: 4, color: theme.palette.primary.text, textTransform: 'none', fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: 'center' }}>
            {`Combining superior strength, lightweight efficiency, and sustainable engineering, Great Wall AAC Blocks & Panels ensures your project is completed with exceptional quality, accelerated timelines, and optimized costs. Build better, faster, and smarter the intelligent choice for your construction.`}
          </Typography>
        </Container>
      </Box>


      {/* Trusted by */}
      <Box sx={{ py: { xs: 5, md: 8 }, px: sectionPx }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center', ...sectionTitleSx }}>Trusted by</Typography>
        <Typography variant='h6' sx={{ mb: 3, color: theme.palette.primary.text, textAlign: 'center', ...subTitleSx }}>Preferred choice of top-tier clients for quality-driven solutions.</Typography>

        <NonStopCarousel itemName='client'>
          {clientList.length > 0 && clientList.map(item => (
            <Box component="img" key={item.id} src={item.featured_image} loading="lazy"
              decoding="async" alt={item.title} sx={{
                width: 'auto',
                aspectRatio: '1/1', height: { xs: '80px', md: '120px' }, objectFit: 'contain',
                "&:hover": { bgcolor: '#f8f8f8', borderRadius: 2 }
              }} />
          ))}
        </NonStopCarousel>
      </Box>


      {/* Who we are */}
      <Box sx={{ p: { xs: 2, sm: 4, md: 10 } }}>
        <Grid container spacing={4} direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src={hc.src} alt='Great Wall'
              sx={{
                // p: { sm: 0, md: 5 },
                width: '100%',
                height: 'auto',
                display: 'block',
              }} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'left', ...sectionTitleSx }}>Who We Are</Typography>

              <Typography sx={{ whiteSpace: 'pre-line', mb: 3, color: theme.palette.primary.text, textTransform: 'none', fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: { xs: 'left', md: 'justify' } }}>{`Great Wall AAC Block & Panels is a leading manufacturer of premium Autoclaved Aerated Concrete (AAC) blocks, panels, lentils and counter in Bangladesh. Built on a foundation of innovation, sustainability, and uncompromising quality, we are committed to delivering advanced construction solutions that meet the evolving demands of modern infrastructure.\n
              Our AAC products are engineered using state-of-the-art technology and rigorously tested by Bangladesh University of Engineering and Technology (BUET), Military Institute of Science and Technology (MIST) and Bangladesh Council of Scientific and Industrial Research (BCSIR) ensuring superior performance, durability, and reliability.
              `}
              </Typography>

              <Button variant='outlined' onClick={() => router.push('/about')} sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
                View More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>


      {/* Electric */}
      <Box ref={setElectricRef} sx={{ position: 'relative' }}>
        <Box sx={shadeOverlaySx(0, { isActive: isElectricInView })} />
        <Box sx={{
          p: { xs: 3, sm: 5, md: 10 },
          height: { xs: 'auto', md: '650px' },
          minHeight: { xs: '420px', md: 0 },
          backgroundImage: `url(${bg_e.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <Grid container spacing={4} direction="row"
            sx={{
              justifyContent: "space-between", alignItems: "center",
              position: 'relative', zIndex: 1,
            }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.main, fontWeight: '550', textAlign: 'left', fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, lineHeight: 1.2 }}>AAC BLOCKS SAVES UPTO 30% ON ELECTRICITY COST</Typography>

                <Typography sx={{ whiteSpace: 'pre-line', mb: 3, color: theme.palette.secondary.main, textTransform: 'none', fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: { xs: 'left', md: 'justify' } }}>{`In modern construction, energy efficiency is no longer optional—it is a core requirement for sustainable, cost-effective buildings. Autoclaved Aerated Concrete (AAC) blocks offer a revolutionary approach to thermal insulation, helping property owners achieve significant, long-term savings on electricity bills.`}
                </Typography>

                <Button variant='outlined' onClick={() => router.push('/aac-blocks#electric')} sx={{ borderRadius: 20, borderColor: theme.palette.secondary.main, color: theme.palette.secondary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
                  View More
                </Button>
              </Box>
            </Grid>

            {/* <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src={hc.src} alt='Great Wall'
              sx={{
                p: { sm: 0, md: 5 },
                width: '100%',
              }} />
          </Grid> */}
          </Grid>
        </Box>
      </Box>



      {/* Video Gallery */}
      <Box sx={{ py: 5 }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center', ...sectionTitleSx }}>Video Gallery</Typography>

        <SliderCarousel />
      </Box>



      {/* Testimonial */}
      <Box sx={{ py: 5, px: sectionPx }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center', ...sectionTitleSx }}>Testimonials</Typography>
        <Typography variant='h6' sx={{ mb: 5, color: theme.palette.primary.text, textAlign: 'center', ...subTitleSx }}>Success stories straight from our Clients Nationwide.</Typography>

        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'center', alignItems: 'stretch' }}>
          {
            testimonialList.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Box sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  p: { xs: 2, md: 3 },
                  height: '100%',
                  '&:hover': {
                    cursor: 'pointer',
                    boxShadow: 6,
                    transition: 'box-shadow 0.3s ease-in-out',
                  }
                }}>
                  <Typography sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.primary.text }}>{testimonial.testimonial.substring(0, 200)}...</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <img src={testimonial.logo} alt={testimonial.name} style={{ width: '50px', height: '50px', borderRadius: '50%', flexShrink: 0, objectFit: 'cover' }} />
                    <Box>
                      <Typography variant='h6' sx={{ color: theme.palette.primary.text, textAlign: 'left', fontSize: { xs: '1rem', md: '1.25rem' } }}>{testimonial.name}</Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>{testimonial.position}</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            ))}
        </Grid>

        <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button variant='outlined' onClick={() => router.push('/testimonials')} sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
            View More
          </Button>
        </Box>
      </Box>



      {/* Event & Exhibitions */}
      <Box sx={{ py: 5, px: sectionPx, bgcolor: theme.palette.secondary.main }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: '550', ...sectionTitleSx }}>Event & Exhibitions</Typography>

        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'center', alignItems: 'stretch' }}>
          {
            eventList.map((event, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Box sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: 1,
                  p: 2,
                  height: '100%',
                  '&:hover': {
                    cursor: 'pointer',
                    boxShadow: 6,
                    transition: 'box-shadow 0.3s ease-in-out',
                  }
                }}>

                  <Box component="img" src={event.featured_image} alt={event.title} sx={{ width: '100%', height: { xs: '180px', md: '200px' }, objectFit: 'cover', borderRadius: 2 }} />

                  <Typography sx={{ mt: 2, fontSize: '0.9rem', color: '#666' }}>{event.date} | {event.location}</Typography>
                  <Typography variant='h6' sx={{ color: theme.palette.primary.text, fontWeight: '600', fontSize: { xs: '1.05rem', md: '1.25rem' } }}>{event.title}</Typography>
                  <Typography sx={{ cursor: 'pointer', fontSize: { xs: '1rem', md: '1.1rem' }, mt: 2, color: theme.palette.primary.main }} onClick={() => router.push(`/event-exhibitions`)}>
                    Read more
                  </Typography>
                </Box>
              </Grid>

            ))}
        </Grid>

        <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button variant='outlined' onClick={() => router.push('/event-exhibitions')} sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
            View More
          </Button>
        </Box>
      </Box>


    </Box>
  );
}
