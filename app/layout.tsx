import './styles/globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
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
      <body className="bg-gray-100">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}