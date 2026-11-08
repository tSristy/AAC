'use client';

import React from 'react';
import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import theme from '@/theme/theme';

export default function TermsConditionsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden' }}>
      {/* Header / Hero Section */}
      <Box
        component="header"
        sx={{
          position: 'relative',
          color: 'white',
          height: { xs: 240, sm: 280, md: 320 },
          bgcolor: theme.palette.secondary.text,
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              fontWeight: '550',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Terms & Conditions
          </Typography>
          
        </Container>
      </Box>

      {/* Main Content Container */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 4 } }}>
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
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Welcome to greatwallaacblocks.com. These Terms & Conditions outline the rules and regulations for the use of Great Wall AAC Block & Panels&rsquo;s website. By accessing this website, you acknowledge and agree that you accept these Terms & Conditions. If you do not agree to all the terms stated on this page, please do not continue to use greatwallaacblocks.com.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Website Use */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Website Use
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            The content provided on greatwallaacblocks.com is for general informational purposes only. The website acts as a digital catalog to display our ceramic products, provide detailed information, and share user reviews.
          </Typography>
          <Stack spacing={1} sx={{ mb: 3, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• This website does not offer e-commerce capabilities. Products displayed on greatwallaacblocks.com cannot be purchased directly through the site.</Typography>
            <Typography>• The information provided is maintained by Great Wall AAC Block & Panels. While we strive to keep it accurate and updated, we make no representations or warranties of any kind regarding its completeness, reliability, or suitability.</Typography>
          </Stack>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Intellectual Property */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Intellectual Property Rights
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            Unless otherwise stated, Great Wall AAC Block & Panels and/or its licensors own all intellectual property rights for material on greatwallaacblocks.com. This includes—but is not limited to—text, images, graphics, logos, and the design layout. You may access material for personal, non-commercial use, but you must not:
          </Typography>
          <Stack spacing={1} sx={{ mb: 4, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• Republish material.</Typography>
            <Typography>• Sell, rent, or sub-license material.</Typography>
            <Typography>• Reproduce, duplicate, or copy material.</Typography>
            <Typography>• Redistribute content from the website.</Typography>
          </Stack>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* User Responsibilities & Conduct */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            User Responsibilities & Conduct
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            You agree to use greatwallaacblocks.com only for lawful purposes.
            <br /><br />
            <strong>User-Generated Content (Reviews):</strong> Parts of the website allow users to post reviews and opinions. Great Wall AAC Block & Panels does not filter or edit comments before they appear. Reviews reflect the opinions of the individuals posting them—not Great Wall AAC Block & Panels or its affiliates. By posting a review, you confirm that:
          </Typography>
          <Stack spacing={1} sx={{ mb: 2, pl: 2, color: theme.palette.text.primary }}>
            <Typography>• You have the right to post the content.</Typography>
            <Typography>• Your content does not violate any intellectual property rights.</Typography>
            <Typography>• Your content is not defamatory, offensive, indecent, or unlawful.</Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Great Wall AAC Block & Panels reserves the right to monitor and remove any review considered inappropriate or in violation of these Terms.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Limitation of Liability */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Limitation of Liability
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            This includes indirect, consequential, or special liabilities. We do not warrant that the website will always be available or that its information is complete, accurate, or reliable. Nothing on this website constitutes professional advice.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Indemnification */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Indemnification
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            You agree to indemnify Great Wall AAC Block & Panels against any liabilities, damages, expenses, or demands resulting from your breach of these Terms & Conditions.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Changes to Terms */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Changes to Terms
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Great Wall AAC Block & Panels reserves the right to update or revise these Terms at any time. You are encouraged to review this page regularly to ensure you understand the conditions governing your use of the website.
          </Typography>

          <Divider sx={{ my: 4, borderColor: '#e5e3e0' }} />

          {/* Governing Law & Jurisdiction */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: theme.palette.secondary.text,
              mb: 2,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Governing Law & Jurisdiction
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.8,
            }}
          >
            These terms are governed by the laws of the jurisdiction in which Great Wall AAC Block & Panels is located. You agree to submit to the non-exclusive jurisdiction of the state and federal courts in that region for dispute resolution.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}