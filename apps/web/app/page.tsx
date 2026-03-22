"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { ArrowRight } from "@phosphor-icons/react"
import {
  Shader,
  CursorRipples,
  FilmGrain,
  FloatingParticles,
  LensFlare,
  Spherize,
  StudioBackground,
  Swirl,
} from "shaders/react"

export default function LandingPage() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#130f1a] text-white">
      {/* crystal ball background — ball positioned right, resend-style */}
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        <Shader className="min-h-svh">
          <StudioBackground
            ambientIntensity={32}
            ambientSpeed={0.3}
            backColor="#1a0f2e"
            backIntensity={34}
            backSoftness={61}
            brightness={5}
            center={{ x: 0.57, y: 0.94 }}
            color="#17171c"
            fillAngle={84}
            fillColor="#ffffff"
            fillIntensity={55}
            fillSoftness={100}
            keyColor="#ffffff"
            keyIntensity={15}
            keySoftness={70}
            lightTarget={64}
            seed={42}
            vignette={25}
            wallCurvature={42}
          />
          <Spherize
            center={{ x: 0.91, y: 0.54 }}
            depth={1.1}
            lightColor="#a9cbe8"
            lightIntensity={0.3}
            lightPosition={{ x: 0.43, y: 0.15 }}
            lightSoftness={0.2}
            radius={1.2}
          >
            <Swirl
              colorA="#0a0a0d"
              colorB="#0f0f1a"
              colorSpace="oklab"
              detail={1.2}
              speed={0.5}
            />
            <LensFlare
              ghostChroma={0}
              ghostIntensity={0.35}
              ghostSpread={0.78}
              glareIntensity={0.15}
              glareSize={0.15}
              haloChroma={2}
              haloIntensity={0.27}
              haloRadius={0.38}
              haloSoftness={1.1}
              lightPosition={{ x: 0.19, y: 0.39 }}
              speed={0.9}
              starburstIntensity={0.05}
              starburstPoints={4}
              streakIntensity={0}
              streakLength={0.21}
            />
            <FloatingParticles
              angle={188}
              angleVariance={77}
              opacity={0.49}
              particleColor="#c5b7ed"
              particleSize={0.6}
              randomness={0.3}
              speed={0.1}
              speedVariance={0.6}
              twinkle={1}
            />
            <CursorRipples chromaticSplit={3} decay={4} />
          </Spherize>
          <FilmGrain strength={0.05} visible={true} />
        </Shader>
      </div>

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
            The sync engine works like your principal data engineer, <br/> because integrating with legacy softwares is hard.
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
