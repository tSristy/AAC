'use client';

import React, { useState, useEffect } from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const phoneNumber = "8801335118773"; 
    const message = encodeURIComponent("Hello! I'd like to inquire about your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <Tooltip title="Chat with us" placement="left" arrow>
            <Fab
                color="success"
                aria-label="WhatsApp chat"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    zIndex: 1300,
                    backgroundColor: '#25D366',
                    '&:hover': {
                        backgroundColor: '#20ba5a',
                        transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <WhatsAppIcon sx={{ fontSize: '2rem', color: '#fff' }} />
            </Fab>
        </Tooltip>
    );
}