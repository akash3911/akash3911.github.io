import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Akash Jonnalagadda - Portfolio",
  description: "Personal portfolio showcasing my work and experience in software development",
  icons: {
    icon: [
      {
        url: '/logo.svg',
        type: 'image/svg',
        sizes: '32x32'
      }
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 