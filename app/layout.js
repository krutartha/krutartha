import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Krutartha | Portfolio',
  description: 'Software Engineer & AI/ML Enthusiast',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  )
} 