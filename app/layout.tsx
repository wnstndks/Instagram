import './styles/globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export const metadata: Metadata = {
  title: 'InstaClone',
  description: 'Instagram clone created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <div style={contentWrapperStyle}>
          <Header />
          <main style={mainStyle}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

const bodyStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#f3f4f6', // Equivalent to Tailwind's bg-gray-100
};

const contentWrapperStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: '10px',
};