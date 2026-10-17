"use client";

import type { ComponentType } from "react";
import dynamic from "next/dynamic";
import type { landing } from "@/data/landingCopy";

export type DemoProps = { copy: typeof landing };
export type DemoComponent = ComponentType<DemoProps>;

/**
 * Every demo is lazy-loaded so only the selected style's chunk is fetched.
 * ssr stays enabled so deep links (?style=x) server-render the right page.
 */
const MinimalismDemo = dynamic(() => import("./MinimalismDemo"));
const FlatDesignDemo = dynamic(() => import("./FlatDesignDemo"));
const NeumorphismDemo = dynamic(() => import("./NeumorphismDemo"));
const GlassmorphismDemo = dynamic(() => import("./GlassmorphismDemo"));
const ClaymorphismDemo = dynamic(() => import("./ClaymorphismDemo"));
const BrutalismDemo = dynamic(() => import("./BrutalismDemo"));
const BentoGridDemo = dynamic(() => import("./BentoGridDemo"));
const CyberpunkDemo = dynamic(() => import("./CyberpunkDemo"));
const SkeuomorphismDemo = dynamic(() => import("./SkeuomorphismDemo"));
const MemphisDemo = dynamic(() => import("./MemphisDemo"));
const VaporwaveDemo = dynamic(() => import("./VaporwaveDemo"));
const ArtDecoDemo = dynamic(() => import("./ArtDecoDemo"));

const NeoBrutalismDemo = dynamic(() => import("./NeoBrutalismDemo"));
const SwissDesignDemo = dynamic(() => import("./SwissDesignDemo"));
const EditorialDemo = dynamic(() => import("./EditorialDemo"));
const LuxuryMinimalismDemo = dynamic(() => import("./LuxuryMinimalismDemo"));
const LiquidGlassDemo = dynamic(() => import("./LiquidGlassDemo"));
const MaterialDesignDemo = dynamic(() => import("./MaterialDesignDemo"));
const Y2KDemo = dynamic(() => import("./Y2KDemo"));
const RetroFuturismDemo = dynamic(() => import("./RetroFuturismDemo"));
const SynthwaveDemo = dynamic(() => import("./SynthwaveDemo"));
const AuroraDemo = dynamic(() => import("./AuroraDemo"));
const BiophilicDemo = dynamic(() => import("./BiophilicDemo"));
const HandDrawnDemo = dynamic(() => import("./HandDrawnDemo"));
const PixelArtDemo = dynamic(() => import("./PixelArtDemo"));
const CyberpunkHudDemo = dynamic(() => import("./CyberpunkHudDemo"));
const JapaneseMinimalismDemo = dynamic(() => import("./JapaneseMinimalismDemo"));
const BauhausDemo = dynamic(() => import("./BauhausDemo"));
const MaximalismDemo = dynamic(() => import("./MaximalismDemo"));
const SplitScreenDemo = dynamic(() => import("./SplitScreenDemo"));
const AsymmetricGridDemo = dynamic(() => import("./AsymmetricGridDemo"));
const CinematicDemo = dynamic(() => import("./CinematicDemo"));
const PopArtDemo = dynamic(() => import("./PopArtDemo"));
const CollageDemo = dynamic(() => import("./CollageDemo"));
const CorporateDemo = dynamic(() => import("./CorporateDemo"));
const AiNativeDemo = dynamic(() => import("./AiNativeDemo"));
const SpatialUiDemo = dynamic(() => import("./SpatialUiDemo"));

export const demoRegistry: Record<string, DemoComponent> = {
  minimalism: MinimalismDemo,
  "flat-design": FlatDesignDemo,
  neumorphism: NeumorphismDemo,
  glassmorphism: GlassmorphismDemo,
  claymorphism: ClaymorphismDemo,
  brutalism: BrutalismDemo,
  "bento-grid": BentoGridDemo,
  cyberpunk: CyberpunkDemo,
  skeuomorphism: SkeuomorphismDemo,
  memphis: MemphisDemo,
  vaporwave: VaporwaveDemo,
  "art-deco": ArtDecoDemo,
  "neo-brutalism": NeoBrutalismDemo,
  "swiss-design": SwissDesignDemo,
  editorial: EditorialDemo,
  "luxury-minimalism": LuxuryMinimalismDemo,
  "liquid-glass": LiquidGlassDemo,
  "material-design": MaterialDesignDemo,
  y2k: Y2KDemo,
  "retro-futurism": RetroFuturismDemo,
  synthwave: SynthwaveDemo,
  aurora: AuroraDemo,
  biophilic: BiophilicDemo,
  "hand-drawn": HandDrawnDemo,
  "pixel-art": PixelArtDemo,
  "cyberpunk-hud": CyberpunkHudDemo,
  "japanese-minimalism": JapaneseMinimalismDemo,
  bauhaus: BauhausDemo,
  maximalism: MaximalismDemo,
  "split-screen": SplitScreenDemo,
  "asymmetric-grid": AsymmetricGridDemo,
  cinematic: CinematicDemo,
  "pop-art": PopArtDemo,
  collage: CollageDemo,
  corporate: CorporateDemo,
  "ai-native": AiNativeDemo,
  "spatial-ui": SpatialUiDemo,
};

export const fallbackDemo: DemoComponent = MinimalismDemo;
