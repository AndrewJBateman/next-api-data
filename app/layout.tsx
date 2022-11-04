/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          {children}
        </main>
        <head></head>
      </body>
    </html>
  );
}
