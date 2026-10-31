'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Collapse,
    Grid,
    Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import logo from '../../../public/logo.png';
import logoW from '../../../public/logo_white.png';
import theme from '@/theme/theme';

import blockProductHover from '../../../public/server/menuP1.png';
import panelProductHover from '../../../public/server/menuP2.png';
import adhesiveProductHover from '../../../public/server/menuP3.png';
import mortarProductHover from '../../../public/server/menuP4.png';

const navItems = [
    { code: 'H01', name: 'Home', path: '/' },
    { code: 'A01', name: 'About', path: '/about' },
    { code: 'P01', name: 'Products', path: '/#' },
    { code: 'T01', name: 'Resources', path: '/#' },
    { code: 'C01', name: 'Contact', path: '/contact' },
];

const productItems = [
    { name: 'AAC Blocks', path: '/aac-blocks', img_url: blockProductHover.src },
    { name: 'AAC Panels', path: '/aac-panels', img_url: panelProductHover.src },
    { name: 'Block-Fix Adhesive', path: '/block-fix-adhesive', img_url: adhesiveProductHover.src },
    { name: 'Power-Mash', path: '/power-mash', img_url: mortarProductHover.src },
];

const resourceItems = [
    { name: 'Technical Specifications', path: '/technical-specifications' },
    { name: 'Reports', path: '/reports' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Brochure', path: '/brochure' },
];

// Dropdown keys, keyed by nav item name
const DROPDOWNS = {
    Products: productItems,
    Resources: resourceItems,
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Desktop dropdown control (state-based instead of pure CSS hover,
    // so it opens/closes reliably and doesn't get stuck)
    const [openDropdown, setOpenDropdown] = useState(null); // 'Products' | 'Resources' | null

    // Mobile drawer
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState(null); // 'Products' | 'Resources' | null
    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
    const toggleMobileSection = (name) =>
        setMobileExpanded((prev) => (prev === name ? null : name));

    const navTextColor = isHome ? (isScrolled ? theme.palette.primary.text : 'white') : theme.palette.primary.text;

    return (
        <AppBar
            position="fixed"
            elevation={isScrolled ? 4 : 0}  onMouseEnter={() => setIsScrolled(true)} onMouseLeave={() => setIsScrolled(window.scrollY > 10)}
            sx={{
                backgroundColor: isHome ? (isScrolled ? 'white' : 'transparent') : 'white',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ px: 2 }}>
                    <Box sx={{ height: '40px', width: { md: '50px', lg: 'auto' }, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Link href="/">
                            <Image
                                loading="eager"
                                src={isScrolled || !isHome ? logo : logoW}
                                alt="Great_Wall_Logo"
                                height={65}
                            />
                        </Link>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        {navItems.map((item) => {
                            const dropdownItems = DROPDOWNS[item.name];
                            const isSelected = pathname === item.path;

                            if (dropdownItems) {
                                const isOpen = openDropdown === item.name;
                                return (
                                    <Box
                                        key={item.name}
                                        sx={{ position: 'relative', mx: 2 }}
                                        onMouseEnter={() => setOpenDropdown(item.name)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <Typography
                                            sx={{
                                                color: isSelected ? theme.palette.primary.main : navTextColor,
                                                fontWeight: isSelected ? 600 : 450,
                                                textTransform: 'uppercase',
                                                cursor: 'pointer',
                                                py: 2, // enlarges hit area so there's no gap to the menu below
                                                '&:hover': { color: theme.palette.primary.main },
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                        {/* Dropdown Container */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '0%',
                                                // transform: isOpen
                                                //     ? 'translateX(-50%) translateY(0)'
                                                //     : 'translateX(-50%) translateY(8px)',
                                                // minWidth: 340,
                                                maxWidth: item.name === 'Products' ? 400 : 250 ,
                                                width: 'max-content',
                                                bgcolor: 'white',
                                                boxShadow: 3,
                                                borderRadius: 1,
                                                // p: 2,
                                                zIndex: 10,
                                                opacity: isOpen ? 1 : 0,
                                                visibility: isOpen ? 'visible' : 'hidden',
                                                transition: 'opacity 0.2s ease, transform 0.2s ease',
                                            }}
                                        >
                                            <Grid container spacing={1}>
                                                {dropdownItems.map((sub) => {
                                                    const isSubSelected = pathname === sub.path;
                                                    return (
                                                        <Grid size={{ xs: 12, sm: sub.img_url ? 6 : 12 }} key={sub.name}>
                                                            <Box
                                                                component={Link}
                                                                href={sub.path}
                                                                sx={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: sub.img_url ? 'center' : 'flex-start',
                                                                    // gap: 2,
                                                                    py: 1,
                                                                    borderRadius: 1,
                                                                    px: sub.img_url ? 1 : 2,
                                                                    textDecoration: 'none',
                                                                    color: theme.palette.text.primary,
                                                                    '&:hover': { bgcolor: '#f5f5f5' },
                                                                }}
                                                            >
                                                                {sub.img_url && (
                                                                    <img
                                                                        src={sub.img_url}
                                                                        alt={sub.name}
                                                                        style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }}
                                                                    />
                                                                )}
                                                                <Typography sx={{ color: isSubSelected ? theme.palette.primary.main : theme.palette.text.primary, fontWeight: isSubSelected ? 600 : 500, fontSize: '0.95rem', textTransform: 'uppercase' }}>
                                                                    {sub.name}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    );
                                                })}
                                            </Grid>
                                        </Box>
                                    </Box>
                                );
                            }

                            // Default rendering for plain links (Home, About, Contact)
                            return (
                                <Box key={item.name} component={Link} href={item.path} sx={{ mx: 2, textDecoration: 'none' }}>
                                    <Typography sx={{ color: navTextColor, fontWeight: isSelected ? 600 : 450, textTransform: 'uppercase', '&:hover': { color: theme.palette.primary.main } }}>
                                    {/* <Typography sx={{ color: isSelected ? theme.palette.secondary.text : navTextColor, fontWeight: isSelected ? 600 : 450, textTransform: 'uppercase', '&:hover': { color: theme.palette.primary.main } }}> */}
                                        {item.name}
                                    </Typography>
                                </Box>
                            );
                        })}

                        <IconButton component="a" href="tel:+919876543210" sx={{ bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.primary.dark }, ml: 1 }}>
                            <CallIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton component="a" href="mailto:info@greatwall.com" sx={{ bgcolor: theme.palette.primary.main, '&:hover': { bgcolor: theme.palette.primary.dark }, ml: 1 }}>
                            <EmailIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Box>

                    {/* Hamburger Icon (mobile only) */}
                    <IconButton
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        onClick={handleDrawerToggle}
                        aria-label="open navigation menu"
                    >
                        <MenuIcon sx={{ color: navTextColor }} />
                    </IconButton>
                </Toolbar>
            </Container>



            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 280, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1.5 }}>
                        <Image src={logo} alt="Great_Wall_Logo" height={40} />
                        <IconButton onClick={handleDrawerToggle} aria-label="close navigation menu">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider />

                    <List sx={{ flexGrow: 1 }}>
                        {navItems.map((item) => {
                            const dropdownItems = DROPDOWNS[item.name];
                            const isSelected = pathname === item.path;

                            if (dropdownItems) {
                                const isExpanded = mobileExpanded === item.name;
                                return (
                                    <React.Fragment key={item.name}>
                                        <ListItem disablePadding>
                                            <ListItemButton onClick={() => toggleMobileSection(item.name)}>
                                                <ListItemText 
                                                    primary={item.name} 
                                                    sx={{ '& .MuiListItemText-primary': { color: isSelected ? theme.palette.primary.main : 'inherit', fontWeight: isSelected ? 600 : 400 } }} 
                                                />
                                                {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                            </ListItemButton>
                                        </ListItem>
                                        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {dropdownItems.map((sub) => {
                                                    const isSubSelected = pathname === sub.path;
                                                    return (
                                                        <ListItem key={sub.name} disablePadding>
                                                            <ListItemButton
                                                                component={Link}
                                                                href={sub.path}
                                                                onClick={handleDrawerToggle}
                                                                sx={{ pl: 4 }}
                                                            >
                                                                <ListItemText 
                                                                    primary={sub.name} 
                                                                    sx={{ '& .MuiListItemText-primary': { color: isSubSelected ? theme.palette.primary.main : 'inherit', fontWeight: isSubSelected ? 600 : 400 } }} 
                                                                />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                );
                            }

                            return (
                                <ListItem key={item.name} disablePadding>
                                    <ListItemButton component={Link} href={item.path} onClick={handleDrawerToggle}>
                                        <ListItemText 
                                            primary={item.name} 
                                            sx={{ '& .MuiListItemText-primary': { color: isSelected ? theme.palette.primary.main : 'inherit', fontWeight: isSelected ? 600 : 400 } }} 
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                    <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="tel:+919876543210">
                                <ListItemIcon>
                                    <CallIcon sx={{ color: theme.palette.primary.main }} />
                                </ListItemIcon>
                                <ListItemText primary="+91 98765 43210" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="mailto:info@greatwall.com">
                                <ListItemIcon>
                                    <EmailIcon sx={{ color: theme.palette.primary.main }} />
                                </ListItemIcon>
                                <ListItemText primary="info@greatwall.com" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}