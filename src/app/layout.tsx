import '@/styles/ress.scss';
import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { AppSidebar } from '@/components/app-sidebar';
import Header from '@/components/Header';
import { NextAuthProvider } from '@/components/SessionProvider';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  formatDetection: { telephone: false, address: false, email: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang='ja' suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5J97NNRK');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-5J97NNRK'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                <Header />
                <main className='p-4 custom-min-height'>{children}</main>
              </SidebarInset>
            </SidebarProvider>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
