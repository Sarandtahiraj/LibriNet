import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Header } from './components/navigation/header';
import { Footer } from './components/footer';
import { ThemeProvider } from './components/theme-provider';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'LibriNet - Your Online Bookstore',
  description: 'Discover your next great read at LibriNet. Browse through our collection of books across various genres.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full mx-auto">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}