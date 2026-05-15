import { Inter } from 'next/font/google';
import './globals.css';
import ClientProviders from './providers';

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'] });

export const metadata = {
  title: 'Sportify India — Find Sports Academies Near You',
  description: 'Discover the best sports academies in Delhi NCR. Football, Cricket, Tennis, Badminton coaching for all levels.',
  keywords: 'sports academy delhi, football coaching, cricket academy, tennis training, badminton coaching',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
