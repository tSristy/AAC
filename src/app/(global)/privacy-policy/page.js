'use client';

import React from 'react';
import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import theme from '@/theme/theme';

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden' }}>
      {/* Header / Hero Section */}

      {/* Main Content Container */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 4 } }}>
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
                            Privacy & Policy
                        </Typography>

        <Box
          sx={{
            p: { xs: 3, sm: 5, md: 6 },
            bgcolor: '#ffffff',
            // borderRadius: '8px',
            // border: '1px solid #e5e3e0',
          }}
        >
          {/* Introduction */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Introduction
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Welcome to Great Wall AAC Block & Panels. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.greatwallaacblocks.com.
            <br /><br />
            Please read this Privacy Policy carefully. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Site.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Information We Collect */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Information We Collect
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Information You Provide to Us
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            We may collect information that you voluntarily provide when you:
          </Typography>
          <Stack spacing={1} sx={{ mb: 3, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• Sign up for our newsletter</Typography>
            <Typography>• Contact our customer service</Typography>
            <Typography>• Complete surveys or forms</Typography>
            <Typography>• Participate in promotions or contests</Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            This information may include:
          </Typography>
          <Stack spacing={1} sx={{ mb: 3, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• Name</Typography>
            <Typography>• Email address</Typography>
            <Typography>• Phone number</Typography>
            <Typography>• Product preferences</Typography>
          </Stack>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
                color: theme.palette.secondary.text,
              mb: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Information Automatically Collected
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            When you visit our Site, we may automatically collect certain information about your device and usage patterns, including:
          </Typography>
          <Stack spacing={1} sx={{ mb: 4, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• IP address</Typography>
            <Typography>• Browser type</Typography>
            <Typography>• Operating system</Typography>
            <Typography>• Pages viewed</Typography>
            <Typography>• Time spent on pages</Typography>
            <Typography>• Referral source</Typography>
            <Typography>• Clickstream data</Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            We collect this information using cookies and similar technologies. For more information about our use of cookies, please see the &quot;Cookies and Similar Technologies&quot; section below.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* How We Use Your Information */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            How We Use Your Information
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            We use the information we collect for various purposes, including to:
          </Typography>
          <Stack spacing={1} sx={{ mb: 4, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• Process and fulfill your orders</Typography>
            <Typography>• Provide customer service and respond to inquiries</Typography>
            <Typography>• Send transactional emails</Typography>
            <Typography>• Send marketing communications (with your consent)</Typography>
            <Typography>• Improve our website and services</Typography>
            <Typography>• Personalize your experience</Typography>
            <Typography>• Analyze usage patterns</Typography>
            <Typography>• Protect against fraud</Typography>
            <Typography>• Comply with legal obligations</Typography>
          </Stack>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Children's Privacy */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Children&rsquo;s Privacy
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Our Site is appropriate for all ages, including children. We comply with all applicable laws regarding children&rsquo;s data.
            <br /><br />
            We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from your child without consent, please contact us at info@greatwallaacblocks.com
            <br /><br />
            For users under 13, we limit data collection to what is reasonably necessary for participation in online activities.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Cookies and Similar Technologies */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Cookies and Similar Technologies
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            We use cookies and similar technologies to collect information and improve your browsing experience.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
               color: theme.palette.secondary.text,
              mb: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Types of Cookies We Use:
          </Typography>
          <Stack spacing={1} sx={{ mb: 2, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• Essential Cookies</Typography>
            <Typography>• Preference Cookies</Typography>
            <Typography>• Analytics Cookies</Typography>
            <Typography>• Marketing Cookies</Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            You can control cookies through your browser settings, but disabling them may limit certain features on our Site.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Information Sharing */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Information Sharing
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            We do not sell, rent, or lease your personal information to third parties. We may share your information with:
          </Typography>
          <Stack spacing={1} sx={{ mb: 4, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• Service Providers</Typography>
            <Typography>• Legal authorities</Typography>
            <Typography>• Business transfer entities</Typography>
            <Typography>• Third parties with your consent</Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            All third parties are required to protect your information and use it only for the services they provide.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Data Security */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Data Security
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            We implement technical and organizational measures to protect your personal information, but no method of data transmission is 100% secure.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Your Rights and Choices */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Your Rights and Choices
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Depending on your location, you may have rights to:
          </Typography>
          <Stack spacing={1} sx={{ mb: 3, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• Access your information</Typography>
            <Typography>• Correct data</Typography>
            <Typography>• Delete data</Typography>
            <Typography>• Restrict processing</Typography>
            <Typography>• Data portability</Typography>
            <Typography>• Object to processing</Typography>
            <Typography>• Withdraw consent</Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            To exercise these rights, contact us at info@greatwallaacblocks.com
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Updates to This Privacy Policy */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Updates to This Privacy Policy
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
            }}
          >
            We may update this Privacy Policy from time to time. The updated version will include a revised “Last Updated” date. We encourage you to review it regularly.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}