import "./globals.css";
import ScrollProgress from '../components/ScrollProgress';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata = {
  title: 'Pathik Foundation — A Living BuddhaField',
  description: 'A spiritual/wellness NGO based in Nepal focused on holistic living and transformation.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        {/* Apple Touch Icon - can add later */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ScrollProgress />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
