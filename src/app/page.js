'use client';
import { useEffect, useState } from "react";
import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import theme from '@/theme/theme';
import BannerCarousel from "@/components/ui/BannerCarousel";

// Image Imports
import img1 from '../../public/server/heroB1.png';
import img2 from '../../public/server/heroB2.png';
import bg_e from '../../public/server/ibg.png';
import blockProduct from '../../public/server/block.png';
import blockProductHover from '../../public/server/blockHover.png';
import panelProduct from '../../public/server/panel.png';
import panelProductHover from '../../public/server/panelHover.png';
import adhesiveProduct from '../../public/server/counter.png';
import adhesiveProductHover from '../../public/server/counterHover.png';
import mortarProduct from '../../public/server/mortar.png';
import mortarProductHover from '../../public/server/mortarHover.png';
import props1 from '../../public/server/props1.png';
import props2 from '../../public/server/props2.png';
import props3 from '../../public/server/props3.png';
import props4 from '../../public/server/props4.png';
import props5 from '../../public/server/props5.png';
import hc from '../../public/server/hc.png';

import Image from "next/image";
import NonStopCarousel from "@/components/ui/NonStopCarousel";

// Shared left-to-right "wipe" reveal for the diagonal shade overlays.
// clip-path is animated (not width) so it still reads correctly once the
// box is rotated 25deg on sm+ screens.
//
// activeSelector: when set (e.g. '.swiper-slide-active'), the shade stays
// hidden (clip-path fully clipped) until an ancestor matching that selector
// is present, and only then does the animation run. Swiper adds/removes
// 'swiper-slide-active' on the current slide itself as slides change, and
// since it keeps every slide mounted in the DOM (it never remounts them),
// a mount-triggered animation would only ever fire once on page load.
// Tying the animation to the class instead means: class added -> animation
// property newly matches -> browser starts it fresh; class removed -> rule
// stops applying -> shade snaps back to its hidden base state, ready to
// wipe in again next time that slide becomes active.
const afterBase = {
  content: '""',
  position: "absolute",
  top: { xs: 0, sm: "-50%" },
  left: { xs: 0, sm: "-20%" },
  width: { xs: "100%", sm: "70%" },
  height: { xs: "100%", sm: "220%" },
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  transform: { xs: "none", sm: "rotate(25deg)" },
  clipPath: 'inset(0 100% 0 0)', // hidden until the wipe animation runs
};

// options.activeSelector: CSS-only trigger, driven by an ancestor class
//   another library toggles for us (e.g. Swiper's 'swiper-slide-active').
// options.isActive: JS-driven trigger. Pass a boolean from React state
//   (e.g. an IntersectionObserver "has scrolled into view" flag). While
//   false, the shade sits at its hidden base clip-path with no animation
//   property at all; the moment it flips true, React adds the animation
//   property to the rendered style, which counts as newly matching, so the
//   browser plays it from the start - same restart mechanism as the CSS
//   class trick, just flipped by JS instead of by another library's class.
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
  const heroSection = [
    {
      id: 1,
      img: img1,
      title: "High-Quality AAC Blocks for Modern Construction",
      ucp: 'Durable, Lightweight, and Eco-Friendly Building Solutions',
      buttonOpt: <Button variant="outlined" sx={{
        borderRadius: 20, borderColor: 'white', color: 'white',
        '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' }
      }}>Know More</Button>
    },
    {
      id: 2,
      img: img2,
      title: "Bangladesh’s Trusted AAC BlocksManufacturer",
      ucp: 'Providing Innovative and Sustainable Building Solutions',
      buttonOpt: <Button variant="outlined" sx={{
        borderRadius: 20, borderColor: 'white', color: 'white',
        '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' }
      }}>Contact Us</Button>
    }
  ];

  const [productList] = useState([
    { id: 1, name: "AAC Blocks", img_url: blockProduct.src, hover_img_url: blockProductHover.src },
    { id: 2, name: "AAC Panels", img_url: panelProduct.src, hover_img_url: panelProductHover.src },
    { id: 3, name: "Block-Fix Adhesive", img_url: adhesiveProduct.src, hover_img_url: adhesiveProductHover.src },
    { id: 4, name: "Power-Mash", img_url: mortarProduct.src, hover_img_url: mortarProductHover.src }
  ]);

  const propsList = [
    {
      id: 1,
      title: "Tested & Certified Quality",
      textDescription: "Using high-quality raw materials and advanced technology, ensuring superior strength, durability.",
      icon: props1.src
    },
    {
      id: 2,
      title: "State-of-the-Art Global Technology",
      textDescription: "Offering excellent thermal insulation, helping to reduce energy consumption and lower heating and cooling costs.",
      icon: props2.src
    },
    {
      id: 3,
      title: "Exceptional Thermal & Energy Efficiency",
      textDescription: "Lightweight and easy to handle, reducing labor costs and construction time  with energy efficiency.",
      icon: props3.src
    },
    {
      id: 4,
      title: "Sustainable & Eco-Conscious Solutions",
      textDescription: "Environmentally friendly, made from natural materials, and producing less waste during construction.",
      icon: props4.src
    },
    {
      id: 5,
      title: "Cost-Optimized, High-Performance Building",
      textDescription: "Offering excellent thermal insulation, helping to reduce energy consumption and lower heating and cooling costs.",
      icon: props5.src
    }
  ]

  const testimonialList = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, ABC Construction",
      testimonial: "Great Wall AAC Blocks have transformed our construction projects. Their durability and energy efficiency have significantly improved our building quality, and our clients are thrilled with the results.",
      logo: "https://d113wk4ga3f0l0.cloudfront.net/c?o=eJyVkE9rwzAMxb-LYLfGTpOmS3LtoTA6Bu1hR2MSNXHzx8ZyEpbS7z4HyrIdJ9DhPQn0e7oD6cEWKAbbQg61c4ZyzilmspOz7uVErNAd981aVdWOnC4apjpZIbHBtFqWxIzV5VA4pXveYamkUA47YSyOCif67SWv2TaO-XYf7XbhPs22wflSSbwd3j_e5vMwH6fPutClPDU8XCoSp0ugCt0HYcpupoINNPjlSa_J9RpnXk6qdDXkaRZuoMYF8Sk8stHkr0J-h__Fk0To_sSapEPbSdsQX_fEj8tMX60skCQvsNI8ZalItyMKg_7fvfejZAMWSc0oKitH5ZZcBz9CC4_HN4sgja0=&s=98449b61c298785137ccf2cf8e23077d443b96a5"
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

  const [clientList, setClientList] = useState([]);

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
        setClientList(res.items);
      })
  }, []);

  return (
    <Box>
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
            <Container sx={{ position: 'relative', height: '100%', zIndex: 1 }}>
              <Grid container sx={{ height: '100%' }}>
                <Grid size={{ xs: 12, sm: 6 }} sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ color: 'white' }}>
                    <Typography variant="h3" sx={{ fontWeight: '550' }}>{item.title}</Typography>
                    <Typography variant="h6">{item.ucp}</Typography>
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
                <Typography variant='h4' sx={{ fontWeight: '550' }}>{product.name}</Typography>
                <Button variant='outlined' sx={{ borderRadius: 20, borderColor: 'white', color: 'white' }}>
                  Know more
                </Button>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>


      {/* Why Choose Us */}
      <Box sx={{ py: 10, bgcolor: theme.palette.secondary.main }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Why Choose Us</Typography>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {
              propsList.map((prop, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 'auto' }} key={index}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <Box component="img" src={prop.icon} alt={prop.title} sx={{ width: '60px', height: '60px' }} />
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: '500' }} color={theme.palette.primary.text}>{prop.title}</Typography>
                  </Stack>
                </Grid>
              ))
            }
          </Grid>
          <Typography sx={{ mt: 4, color: theme.palette.primary.text, textTransform: 'none', fontSize: '1.1rem', textAlign: 'center' }}>
            {`By combining strength, lightweight performance, and eco-conscious design, Great Wall AAC Blocks & Panels stands at the forefront of next-generation building materials, shaping the future of construction in Bangladesh.`}
          </Typography>
        </Container>
      </Box>


      {/* Who we are */}
      <Box sx={{ p: 10 }}>
        <Grid container spacing={4} direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src={hc.src} alt='Great Wall'
              sx={{
                p: { sm: 0, md: 5 },
                width: '100%',
              }} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Who We Are</Typography>

              <Typography sx={{ whiteSpace: 'pre-line', mb: 3, color: theme.palette.primary.text, textTransform: 'none', fontSize: '1.1rem', textAlign: 'justify' }}>{`Great Wall AAC Blocks& Panels is a leading manufacturer of premium Autoclaved Aerated Concrete (AAC) blocks, panels, lentils and counter in Bangladesh. Built on a foundation of innovation, sustainability, and uncompromising quality, we are committed to delivering advanced construction solutions that meet the evolving demands of modern infrastructure.\n
              Our AAC products are engineered using state-of-the-art technology and rigorously tested by Bangladesh University of Engineering and Technology (BUET), Military Institute of Science and Technology (MIST) and Bangladesh Council of Scientific and Industrial Research (BCSIR) ensuring superior performance, durability, and reliability.`}
              </Typography>

              <Button variant='outlined' sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
                View More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>


      {/* Trusted by */}
      <Box sx={{ py: 5, px: 10 }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Trusted by</Typography>
        <Typography variant='h6' sx={{ mb: 3, color: theme.palette.primary.text, textAlign: 'center' }}>Preferred choice of top-tier clients for quality-driven solutions.</Typography>

        <NonStopCarousel itemName='client'>
          {clientList.length > 0 && clientList.map(item => (
            <Box component="img" key={item.id} src={'https://charuceramic.com/api' + item.featured_image} loading="lazy"
              decoding="async" alt={item.title} sx={{
                width: 'auto',
                aspectRatio: '1/1', height: '120px', objectFit: 'contain',
                "&:hover": { bgcolor: '#f8f8f8', borderRadius: 2 }
              }} />
          ))}
        </NonStopCarousel>


        {/* <Box sx={{ mt: 5 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              borderRadius: 20,
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the video fills the container
            }}
          >
            <source src="https://charuceramic.com/api/pdf/1768800185799-984379396.mp4" />
            Your browser does not support the video tag.
          </video>
        </Box> */}
      </Box>


      {/* Electric */}
      <Box ref={setElectricRef} sx={{ position: 'relative' }}>
        <Box sx={shadeOverlaySx(0, { isActive: isElectricInView })} />
        <Box sx={{ p: 10, height: '650px', backgroundImage: `url(${bg_e.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Grid container spacing={4} direction="row"
          sx={{
            justifyContent: "space-between", alignItems: "center",
             position: 'relative', zIndex: 1,
            }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.main, fontWeight: '550', textAlign: 'left' }}>AAC Blocks saves up to 30% on electricity cost</Typography>

                <Typography sx={{ whiteSpace: 'pre-line', mb: 3, color: theme.palette.secondary.main, textTransform: 'none', fontSize: '1.1rem', textAlign: 'justify' }}>{`Great Wall AAC Blocks& Panels is a leading manufacturer of premium Autoclaved Aerated Concrete (AAC) blocks, panels, lentils and counter in Bangladesh. Built on a foundation of innovation, sustainability, and uncompromising quality, we are committed to delivering advanced construction solutions that meet the evolving demands of modern infrastructure.`}
                </Typography>

                <Button variant='outlined' sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
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
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Video Gallery</Typography>
      </Box>



      {/* Testimonial */}
      <Box sx={{ py: 5, px: 10 }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, fontWeight: '550', textAlign: 'center' }}>Testimonials</Typography>
        <Typography variant='h6' sx={{ mb: 5, color: theme.palette.primary.text, textAlign: 'center' }}>Success stories straight from our Clients Nationwide.</Typography>

        <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {
            testimonialList.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Box sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  p: 3,
                  '&:hover': {
                    cursor: 'pointer',
                    boxShadow: 6,
                    transition: 'box-shadow 0.3s ease-in-out',
                  }
                }}>
                  <Typography sx={{ mt: 2, fontSize: '1.1rem', color: theme.palette.primary.text }}>{testimonial.testimonial.substring(0, 200)}...</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <img src={testimonial.logo} alt={testimonial.name} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                    <Box>
                      <Typography variant='h6' sx={{ color: theme.palette.primary.text, textAlign: 'left' }}>{testimonial.name}</Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: '#666' }}>{testimonial.position}</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            ))}
        </Grid>

        <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button variant='outlined' sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
            View More
          </Button>
        </Box>
      </Box>



      {/* Event & Exhibitions */}
      <Box sx={{ py: 5, px: 10, bgcolor: theme.palette.secondary.main }}>
        <Typography variant='h3' sx={{ mb: 3, color: theme.palette.secondary.text, textAlign: 'center', fontWeight: '550' }}>Event & Exhibitions</Typography>

        <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {
            eventList.map((event, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Box sx={{
                  bgcolor: 'white',
                  borderRadius: 3,
                  boxShadow: 1,
                  p: 2,
                  '&:hover': {
                    cursor: 'pointer',
                    boxShadow: 6,
                    transition: 'box-shadow 0.3s ease-in-out',
                  }
                }}>

                  <Box component="img" src={event.featured_image} alt={event.title} sx={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 2 }} />

                  <Typography sx={{ mt: 2, fontSize: '0.9rem', color: '#666' }}>{event.date} | {event.location}</Typography>
                  <Typography variant='h6' sx={{ color: theme.palette.primary.text, fontWeight: '600' }}>{event.title}</Typography>
                  <Typography sx={{ cursor: 'pointer', fontSize: '1.1rem', mt: 2, color: theme.palette.primary.main }}>Read more</Typography>
                </Box>
              </Grid>

            ))}
        </Grid>

        <Box sx={{ pt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button variant='outlined' sx={{ borderRadius: 20, borderColor: theme.palette.primary.main, color: theme.palette.primary.main, '&:hover': { borderColor: 'transparent', bgcolor: theme.palette.primary.main, color: 'white' } }}>
            View More
          </Button>
        </Box>
      </Box>


    </Box>
  );
}