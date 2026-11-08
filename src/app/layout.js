import './globals.css';
import theme from '../theme/theme';
import Navbar from '../components/layout/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata = {
  title: "AAC Blocks & Panels",
  description: "High quality modern construction materials for your projects. Explore our wide range of AAC blocks, lightweight and durable solutions for efficient building. Contact us for more information.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            <WhatsAppButton />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}