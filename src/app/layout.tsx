import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Article preview component',
  description:
    'A responsive article preview component built for a Frontend Mentor challenge.',
  generator: 'Next.js',
  applicationName: 'Article preview component',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Mentor Challenge',
    'Article preview component',
    'Next.js',
    'Tailwind CSS',
    'Typescript',
  ],
  authors: [
    {
      name: 'jaceleedev',
      url: 'https://github.com/jaceleedev/article-preview-component.git',
    },
  ],
  creator: 'jaceleedev',
  publisher: 'jaceleedev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    'https://article-preview-component-sigma-ten.vercel.app'
  ),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Frontend Mentor | Article preview component',
    description:
      'A responsive article preview component built for a Frontend Mentor challenge.',
    url: 'https://article-preview-component-sigma-ten.vercel.app',
    siteName: 'Frontend Mentor | Article preview component',
    images: [
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1593198709/Challenges/xjpdhdjod58zbaaw0fmo.jpg',
        width: 1440,
        height: 800,
        alt: 'Article preview component desktop preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1593198709/Challenges/ec51mrtfqdthryivq4nk.jpg',
        width: 1440,
        height: 800,
        alt: 'Article preview component desktop active preview',
      },
      {
        url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1593198775/Challenges/u3mryatw2vqo8rh14qg3.jpg',
        width: 375,
        height: 667,
        alt: 'Article preview component mobile preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Mentor | Article preview component',
    description:
      'A responsive article preview component built for a Frontend Mentor challenge.',
    images: [
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1593198709/Challenges/xjpdhdjod58zbaaw0fmo.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen bg-light-grayish-blue ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
