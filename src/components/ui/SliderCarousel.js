'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, ButtonBase, IconButton, Typography } from '@mui/material';

const OFFSET = [0, 0.5, 0.7]; // horizontal shift
const SCALE = [1, 0.8, 0.6]; // card size relative to center
const DIM = [0, 0.35, 0.6]; // dark overlay opacity

// Slides populated using real video references from @GreatWallAACBlocksandPanels
const DEFAULT_SLIDES = [
  { 
    id: 1, 
    title: 'Heavy-Duty AAC Block Compressive Strength Teaser', 
    youtubeId: 'sfCsOgb09p8', 
    description: 'Witness the robust structural compressive strength and durability testing.'
  },
  { 
    id: 2, 
    title: 'Great Wall AAC Block & Panels Demo', 
    youtubeId: 'rog8tqlRj1Q', // Replace with specific video ID if separate
    description: 'An overview demonstration of modern green construction solutions and smart building materials.'
  },
  { 
    id: 3, 
    title: 'Eco-Friendly & Sustainable Construction', 
    youtubeId: 'W9veP_Fw7OA', // Fallback custom visual if needed
    description: 'Building smarter and living better with next-generation lightweight blocks.'
  },
];

function ChevronIcon({ dir }) {
  return (
    <Box component="svg" viewBox="0 0 24 48" sx={{ width: 28, height: 56, display: 'block' }} aria-hidden>
      <polyline
        points={dir === 'left' ? '20,3 4,24 20,45' : '4,3 20,24 4,45'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
}

export default function SliderCarousel({
  slides = DEFAULT_SLIDES,
  background = '#161e2b',
  initialIndex = 0,
  autoPlay = true,   // slides advance on their own
  interval = 4000,   // ms between slides
}) {
  const n = slides.length;
  const [active, setActive] = useState(initialIndex);
  const [hovered, setHovered] = useState(false);       // pause while the mouse is over the carousel
  const [videoActive, setVideoActive] = useState(false); // pause once someone clicks into a video
  const drag = useRef({ startX: 0, moved: false });
  const rootRef = useRef(null);

  const go = useCallback((i) => setActive(((i % n) + n) % n), [n]);
  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  /* ---------------- Auto-advance ---------------- */
  useEffect(() => {
    if (!autoPlay || n < 2 || hovered || videoActive) return;

    // Respect "reduce motion" system setting
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      // Don't spin in a background tab
      if (document.visibilityState === 'visible') {
        setActive((a) => (a + 1) % n);
      }
    }, interval);

    // `active` is a dependency so the timer restarts after any manual change
    return () => clearInterval(id);
  }, [autoPlay, interval, n, hovered, videoActive, active]);

  // Clicking inside the YouTube iframe moves focus into it -> window "blur".
  // Treat that as "the person is watching", and stop auto-advancing.
  useEffect(() => {
    const onWindowBlur = () => {
      setTimeout(() => {
        const el = document.activeElement;
        if (el && el.tagName === 'IFRAME' && rootRef.current?.contains(el)) {
          setVideoActive(true);
        }
      }, 0);
    };
    window.addEventListener('blur', onWindowBlur);
    return () => window.removeEventListener('blur', onWindowBlur);
  }, []);

  // Moving to another slide (arrows, dots, side-card click) resumes auto-advance
  useEffect(() => {
    setVideoActive(false);
  }, [active]);

  const relative = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const onPointerDown = (e) => {
    drag.current = { startX: e.clientX, moved: false };
  };

  const onPointerUp = (e) => {
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.abs(dx) > 10;
    if (dx <= -50) next();
    else if (dx >= 50) prev();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  return (
    <Box
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        '--w': 'clamp(220px, 52vw, 650px)',
        '--h': 'calc(var(--w) * 0.73)',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        outline: 'none',
        pt: 'calc(var(--h) * 0.1)',
        pb: 4,
        '@media (prefers-reduced-motion: reduce)': {
          '& .cs-slide, & .cs-dim': { transition: 'none !important' },
        },
      }}
    >
      {/* Stage */}
      <Box
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        sx={{ position: 'relative', height: 'var(--h)', touchAction: 'pan-y', userSelect: 'none' }}
      >
        {slides.map((slide, i) => {
          const d = relative(i);
          const a = Math.abs(d);
          const k = Math.min(a, 2);
          const visible = a <= 2;
          const dir = Math.sign(d);
          const isActive = d === 0;

          // Automatically pull YouTube thumbnail if an explicit image isn't provided
          const bgImage = slide.image 
            ? slide.image 
            : slide.youtubeId 
              ? `https://img.youtube.com/vi/${slide.youtubeId}/hqdefault.jpg`
              : null;

          return (
            <Box
              key={slide.id || i}
              className="cs-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
              aria-hidden={!visible}
              onClick={() => {
                if (!drag.current.moved && !isActive) go(i);
              }}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 'var(--w)',
                height: 'var(--h)',
                ml: 'calc(var(--w) / -2)',
                mt: 'calc(var(--h) / -2)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                background: bgImage ? `url(${bgImage}) center / cover no-repeat` : slide.color || '#000',
                transform: `translateX(calc(var(--w) * ${OFFSET[k] * dir})) scale(${SCALE[k]})`,
                opacity: visible ? 1 : 0,
                zIndex: visible ? 10 - a : 0,
                pointerEvents: visible ? 'auto' : 'none',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'transform 0.55s cubic-bezier(0.22, 0.8, 0.3, 1), opacity 0.55s',
                willChange: 'transform',
              }}
            >
              {/* YouTube Embed Player (Only renders on the active center card) */}
              {slide.youtubeId && isActive && (
                <Box
                  component="iframe"
                  src={`https://www.youtube.com/embed/${slide.youtubeId}?enablejsapi=1&rel=0`}
                  title={slide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                    zIndex: 1,
                  }}
                />
              )}

              {/* Bottom gradient overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 55%)',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />

              {/* Text content */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  p: 'calc(var(--w) * 0.03)',
                  color: '#fff',
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    fontSize: 'calc(var(--w) * 0.043)',
                    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  {slide.title}
                </Typography>
                {slide.description && (
                  <Typography
                    sx={{
                      mt: 'calc(var(--w) * 0.008)',
                      fontSize: 'calc(var(--w) * 0.026)',
                      lineHeight: 1.5,
                      opacity: 0.9,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {slide.description}
                  </Typography>
                )}
              </Box>

              {/* Dark overlay for inactive/side slides */}
              <Box
                className="cs-dim"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: background,
                  opacity: DIM[k],
                  pointerEvents: 'none',
                  transition: 'opacity 0.55s',
                  zIndex: 4,
                }}
              />
            </Box>
          );
        })}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        aria-label="Previous slide"
        onClick={prev}
        sx={{ position: 'absolute', left: 4, top: '50%', transform: 'translateY(-50%)', color: '#fff', zIndex: 20 }}
      >
        <ChevronIcon dir="left" />
      </IconButton>
      <IconButton
        aria-label="Next slide"
        onClick={next}
        sx={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', color: '#fff', zIndex: 20 }}
      >
        <ChevronIcon dir="right" />
      </IconButton>

      {/* Dots Indicator */}
      <Box sx={{ position: 'absolute', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {slides.map((_, i) => (
          <ButtonBase
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => go(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: i === active ? '#fff' : 'rgba(255,255,255,0.2)',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
