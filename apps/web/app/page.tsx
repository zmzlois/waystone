"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { ArrowRight } from "@phosphor-icons/react"

// dynamically imported to avoid hydration mismatch from random shader ids
const LandingBackground = dynamic(
  () =>
    import("@/components/landing-background").then(
      (mod) => mod.LandingBackground
    ),
  { ssr: false }
)

export default function LandingPage() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#130f1a] text-white">
      <LandingBackground />

      {/* nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
        <span className="text-xl font-semibold tracking-wide text-white">
          Waystone
        </span>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            className="px-5 py-2.5 text-sm text-white/60 hover:bg-white/10 hover:text-white sm:text-base"
            asChild
          >
            <Link href="/chat">Sign in</Link>
          </Button>
          <Button
            className="inline-flex items-center gap-2 bg-white px-5 py-5 text-sm text-[#130f1a] hover:bg-white/90 sm:text-base"
            asChild
          >
            <Link href="/chat">
              Get started
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </nav>

      {/* hero */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-6 text-center sm:space-y-8">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Autonomous Open-Source Fivetran Alternative
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            The sync engine works like your principal data engineer,
            <br /> because integrating with legacy softwares is hard.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2 sm:pt-4">
            <Button
              size="lg"
              className="inline-flex items-center gap-2 bg-white px-6 py-5 text-base text-[#130f1a] hover:bg-white/90 sm:px-8 sm:py-6 sm:text-lg"
              asChild
            >
              <Link href="/chat">
                Start syncing
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="relative z-10 px-6 py-4 sm:px-10">
        <p className="text-center text-xs text-white/30">
          Waystone@2026 | All rights reserved
        </p>
      </footer>
    </div>
  )
}
