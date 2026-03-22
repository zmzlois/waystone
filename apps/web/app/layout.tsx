import { Geist, JetBrains_Mono } from "next/font/google"
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Waystone",
  description: "Autonomous Open-Source Fivetran Alternative",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>
          <AuthKitProvider>{children}</AuthKitProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
