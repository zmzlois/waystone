"use client"

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

// extracted so it can be dynamically imported with ssr: false,
// avoiding hydration mismatches from random shader ids
export function LandingBackground() {
  return (
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
  )
}
