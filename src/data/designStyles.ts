export type DesignStyle = {
  /** URL identifier, e.g. /?style=claymorphism */
  slug: string;
  /** Display name */
  name: string;
  /** One-liner shown in the sidebar under the name */
  signature: string;
  /** Short description — shown in the "About this style" panel */
  description: string;
  /** Key traits shown as chips */
  traits: string[];
  /** Who actually uses/ships this style */
  usage: string;
  /** Swatch color for the sidebar dot */
  swatch: string;
};

export const designStyles: DesignStyle[] = [
  {
    slug: "minimalism",
    name: "Minimalism",
    signature: "Less is more. Whitespace is the design.",
    description:
      "Minimalism strips an interface down to its essentials: generous whitespace, thin typography, hairline dividers and a nearly monochrome palette. Every element that survives earns its place.",
    traits: ["Huge whitespace", "Thin type & 1px lines", "Muted neutral palette", "Restrained motion"],
    usage: "Apple.com, Linear, Notion, Stripe marketing pages",
    swatch: "#E4E4E7",
  },
  {
    slug: "flat-design",
    name: "Flat Design",
    signature: "No shadows, no gradients. Just color.",
    description:
      "Flat design removes every skeuomorphic cue — depth, texture, gloss — and communicates hierarchy purely with color, weight and geometry. Bold, friendly and fast to render.",
    traits: ["Solid color blocks", "Zero depth cues", "Simple sans-serif type", "Long-shadow accents"],
    usage: "Google Material (v1), Microsoft Metro, Bootstrap-era SaaS",
    swatch: "#3B82F6",
  },
  {
    slug: "neumorphism",
    name: "Neumorphism",
    signature: "Soft, extruded shapes on pastel cards.",
    description:
      "Neumorphism (new + skeuomorphism) carves UI out of the background itself: elements share the surface color and appear pressed-in or puffed-out via twin light/dark soft shadows.",
    traits: ["Twin soft shadows", "Monochrome pastel surface", "Pressed / raised states", "Low contrast text"],
    usage: "Dashboards, music-player widgets, Dribbble experiments",
    swatch: "#DDE3EC",
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    signature: "Frosted translucent glass over color.",
    description:
      "Glassmorphism floats frosted-glass panels over a vibrant, blurred backdrop. Translucency, background blur and hairline highlights create the illusion of stacked panes of glass.",
    traits: ["Backdrop blur", "Translucent white cards", "Vivid gradient orbs", "1px light borders"],
    usage: "Apple Vision Pro, iOS widgets, credit cards, fintech apps",
    swatch: "#A78BFA",
  },
  {
    slug: "claymorphism",
    name: "Claymorphism",
    signature: "Puffy, friendly 3D clay shapes.",
    description:
      "Claymorphism inflates UI into soft, squeezable volumetric shapes — big radiuses, chunky pastel gradients, an inner glow on top and a fat colored shadow underneath, like toy clay.",
    traits: ["Chunky radiuses", "Pastel gradients", "Inner top highlight", "Fat colored drop shadow"],
    usage: "Duolingo-style apps, kid-friendly products, Canva illustrations",
    swatch: "#7C9CFF",
  },
  {
    slug: "brutalism",
    name: "Brutalism",
    signature: "Raw, loud and deliberately unpolished.",
    description:
      "Brutalism rejects polish: thick black borders, hard offset shadows, clashing primary colors, system fonts and smatterings of uppercase text. It is intentionally unrefined and impossible to ignore.",
    traits: ["4px black borders", "Hard offset shadows", "Clashing colors", "System / mono type"],
    usage: "Gumroad, Figma conference pages, indie Brooklyn studios",
    swatch: "#FFDC00",
  },
  {
    slug: "bento-grid",
    name: "Bento Grid",
    signature: "Everything fits in tiled modular boxes.",
    description:
      "Named after the Japanese bento box, this style packs content into a tidy grid of rounded tiles with big row/column spans. Each tile is self-contained — chart, screenshot, stat, video.",
    traits: ["Modular tiles", "Large col / row spans", "Deep rounded corners", "Per-tile micro visuals"],
    usage: "Apple keynote & product pages, Bento.me, Linear releases",
    swatch: "#1D1D1F",
  },
  {
    slug: "cyberpunk",
    name: "Dark / Cyberpunk",
    signature: "Neon glow on a pitch-black grid.",
    description:
      "Cyberpunk UI is near-black surfaces lit by neon cyan and magenta: glowing text shadows, HUD frames with clipped corners, mono grids, scanlines and terminal-inspired copy.",
    traits: ["Pitch-black surfaces", "Neon glow accents", "Clipped HUD frames", "Monospace type"],
    usage: "Gaming sites, dev-tools, Cyberpunk 2077, Spotify Wrapped darks",
    swatch: "#22D3EE",
  },
  {
    slug: "skeuomorphism",
    name: "Skeuomorphism",
    signature: "Pixels that mimic the physical world.",
    description:
      "Skeuomorphism renders interfaces with materials from real objects: brushed metal bars, glossy pills, paper textures, stitching and engraved text. Depth is built from layered gradients.",
    traits: ["Realistic textures", "Glossy 3D buttons", "Engraved / embossed type", "Multi-layer gradients"],
    usage: "Pre-iOS 7 Apple, OS X Aqua, game HUDs, vintage macOS apps",
    swatch: "#9CB7D4",
  },
  {
    slug: "memphis",
    name: "Memphis (80s)",
    signature: "80s confetti: squiggles, zigs and zags.",
    description:
      "Memphis Design channels the 1980s Milan group: confetti shapes, squiggles, zigzags and terrazzo patterns thrown over pastel color blocks with thick outlines. Playful maximalism.",
    traits: ["Pastel color blocks", "Squiggles & zigzags", "Thick outlines", "Rotated sticker cards"],
    usage: "Music/festival brands, Burger King & Fanta rebrands, Gen-Z campaigns",
    swatch: "#FF6B6B",
  },
  {
    slug: "vaporwave",
    name: "Vaporwave",
    signature: "Sunset grids and retro-future chrome.",
    description:
      "Vaporwave is pure nostalgia-futurism: purple-pink sunset gradients, chrome gradient text, infinite perspective grids, palm silhouettes and glitchy retro-tech aesthetics.",
    traits: ["Sunset gradients", "Chrome gradient text", "Perspective grid floor", "Glow everything"],
    usage: "Album art, party posters, A24-style campaigns",
    swatch: "#FF6FA5",
  },
  {
    slug: "art-deco",
    name: "Art Deco",
    signature: "Black and gold geometric luxury.",
    description:
      "Art Deco is architectural luxury: rich black surfaces, gold foil gradients, symmetrical geometric ornaments, fans, stepped frames and wide letter-spaced serif type.",
    traits: ["Black + gold palette", "Geometric ornaments", "Symmetry & framing", "Letterspaced serif caps"],
    usage: "Great Gatsby era, luxury hotels, spirits packaging",
    swatch: "#E8C872",
  },
  {
    slug: "neo-brutalism",
    name: "Neo-Brutalism",
    signature: "Raw honesty with a pastel smile.",
    description:
      "Neo-Brutalism borrows anti-design's chunky black borders and hard offset shadows, then softens them with candy pastels, rounded corners and playful stickers. The friendly face of the brutalist wave.",
    traits: ["2px black borders", "Hard offset shadows", "Candy pastel palette", "Stickers & emoji"],
    usage: "Gumroad, Figma marketing, indie products, Mailchimp energy",
    swatch: "#A6FAFF",
  },
  {
    slug: "swiss-design",
    name: "Swiss Design",
    signature: "Grid, type and nothing else on top.",
    description:
      "International Typographic Style: a strict mathematical grid, flush-left grotesk type, objective photography-free layouts and one strong accent color. The design speaks in structure, not decoration.",
    traits: ["Objective grid", "Grotesk typography", "Left-aligned type", "Single accent color"],
    usage: "IBM and Muji print cultures, Vitra, museum identity systems",
    swatch: "#E30613",
  },
  {
    slug: "editorial",
    name: "Editorial / Magazine",
    signature: "Page layout borrowed from print magazines.",
    description:
      "Web pages composed like magazine spreads: serif mastheads, folio lines, drop caps, hairline rules, pull quotes and multi-column body text that respects the print heritage of publishing.",
    traits: ["Serif masthead & drop caps", "Multi-column flow", "Hairline rules", "Folio furniture"],
    usage: "The Atlantic, Medium, Anthropic's blog, NYT Cooking",
    swatch: "#4A4238",
  },
  {
    slug: "luxury-minimalism",
    name: "Luxury Minimalism",
    signature: "Whispered spacing, serif confidence, gold.",
    description:
      "Minimalism's whitespace discipline dressed for the red carpet: champagne-gold hairlines, high-contrast serif display, letterspaced small caps and an unhurried pace. Quiet money aesthetics.",
    traits: ["Champagne-gold hairlines", "High-contrast serif display", "Letterspaced small caps", "Immaculate whitespace"],
    usage: "Rolex, Loewe, private banking, super-prime real estate",
    swatch: "#C6A15B",
  },
  {
    slug: "liquid-glass",
    name: "Liquid Glass",
    signature: "Apple's 2025 glass — light bends around pills.",
    description:
      "Apple's 2025 material language: translucency pushed past frosted glass with specular highlights along pill edges, deep layered blur and backgrounds that appear to refract around each control.",
    traits: ["Specular edge highlights", "Pill geometry", "Deep layered blur", "Vivid backdrop"],
    usage: "iOS 26 shell, visionOS, Apple keynote product pages",
    swatch: "#BFE6FF",
  },
  {
    slug: "material-design",
    name: "Material Design",
    signature: "Elevation, ink and motion by Google's book.",
    description:
      "Google's design system rendered in full: an elevated z-axis, a filled app bar, 16dp rounded cards, primary-fill buttons and a floating action button. Depth and hierarchy by spec, not surprise.",
    traits: ["Elevation shadows", "App bar + FAB", "16dp rounded cards", "Filled & outlined buttons"],
    usage: "Google apps, Android, Gmail-adjacent tooling",
    swatch: "#6200EE",
  },
  {
    slug: "y2k",
    name: "Y2K",
    signature: "Chrome, bubbles and millennium optimism.",
    description:
      "Tech flirting at the turn of the millennium: liquid-chrome gradients, bubbly mismatched radii, aqua and ice-blue over hot pink, glossy orbs and sparkle stickers. Machines were fun again.",
    traits: ["Liquid chrome gradients", "Bubble blobs & orbs", "Aqua + ice blue palette", "Sparkle stickers"],
    usage: "iPod-era tech marketing, Nokia themes, Gen-Z revival campaigns",
    swatch: "#AFC8E8",
  },
  {
    slug: "retro-futurism",
    name: "Retro-Futurism",
    signature: "The atomic-age tomorrow that never arrived.",
    description:
      "Mid-century futurism: orbit rings, starbursts and atomic whisk decorations over cream, teal and tangerine, set in confident geometric sans. A 1958 parking lot rocket ride, digitized.",
    traits: ["Orbit rings & starbursts", "Teal, cream, tangerine", "Geometric sans, wide tracking", "Atomic doodads"],
    usage: "Tomorrowland, classic diners, moonshot brand campaigns",
    swatch: "#00A5A5",
  },
  {
    slug: "synthwave",
    name: "Synthwave",
    signature: "Outrun grids, magenta night drives.",
    description:
      "Vaporwave's colder sibling: after-dark cyan/magenta duotone on near-black, a leaner perspective grid, italic neon display type and driving light streaks. Built for night highways.",
    traits: ["Magenta/cyan duotone", "Low perspective grid", "Italic neon display", "Light-streak accents"],
    usage: "Retrowave album art, outrun games, DJ poster design",
    swatch: "#FF29E5",
  },
  {
    slug: "aurora",
    name: "Aurora Gradients",
    signature: "Northern lights drifting over dark glass.",
    description:
      "Slow-shifting teal, green and violet wavelengths bleeding across a deep navy canvas, with glass-dark panels keeping the content crisp. Atmospheric gradient earning its keep.",
    traits: ["Aurora mesh gradients", "Deep navy canvas", "Glass-dark cards", "Soft gradient text"],
    usage: "Linear, Framer templates, Stripe Sessions stages",
    swatch: "#7DE2D1",
  },
  {
    slug: "biophilic",
    name: "Organic / Biophilic",
    signature: "Leaves, sand and the shape of calm.",
    description:
      "Nature-first interfaces: asymmetric leaf and pebble radii, sand neutrals with moss greens, breathing whitespace and imagery that behaves like a garden rather than a dashboard.",
    traits: ["Organic blob radii", "Sand & moss palette", "Breathing whitespace", "Plant-life accents"],
    usage: "Headspace-adjacent wellness, Patagonia storytelling, calm fintechs",
    swatch: "#6EA86F",
  },
  {
    slug: "hand-drawn",
    name: "Hand-Drawn",
    signature: "Sketched in a notebook, works like a site.",
    description:
      "Everything looks drawn in marker: irregular wobble borders, highlighter strokes, doodle arrows and slightly crooked cards on paper. Imperfection is the brand; craft hides in the wobble.",
    traits: ["Wobbly sketch borders", "Marker highlights", "Doodle arrows & stars", "Paper background"],
    usage: "Indie portfolios, explainer sites, Excalidraw-adjacent tools",
    swatch: "#FFD93D",
  },
  {
    slug: "pixel-art",
    name: "Pixel Art",
    signature: "8-bit pages with zero anti-aliasing.",
    description:
      "Hard-edged blocks at the largest crisp scale: stepped shadows, dithered backgrounds, monospace pixel display and absolutely no rounded corners. Sharpness beats smoothness.",
    traits: ["Hard-block shadows", "Dithered backgrounds", "Monospace pixel typography", "No rounded corners"],
    usage: "itch.io storefronts, retro console marketing, arcade sites",
    swatch: "#58C24F",
  },
  {
    slug: "cyberpunk-hud",
    name: "Cyberpunk HUD",
    signature: "The interface as instrumentation.",
    description:
      "Pilot-cockpit telemetry as a landing page: corner-bracket frames, radial gauges, stat bars, status chips and blinking links on dark instrument glass. The younger Cyberpunk read the manual.",
    traits: ["Corner-bracket frames", "Telemetry bars & gauges", "Status chips", "Dark instrument glass"],
    usage: "Game HUDs, flight-sim dashboards, observability tooling",
    swatch: "#3CFF8F",
  },
  {
    slug: "japanese-minimalism",
    name: "Japanese Minimalism",
    signature: "Ma — meaning carried by what is omitted.",
    description:
      "Washi-warm neutrals, sumi-ink hairlines, one vermilion seal and generous emptiness on purpose. Design as restraint: fewer elements, each placed like a tea-room ikebana stem.",
    traits: ["Warm washi neutrals", "Sumi-ink hairlines", "Vertical text accents", "Vermilion seal accent"],
    usage: "Muji, Kinfolk, tea houses, quiet luxury hotels",
    swatch: "#D6C7B2",
  },
  {
    slug: "bauhaus",
    name: "Bauhaus",
    signature: "Form follows function. Circles, not gradients.",
    description:
      "Geometric primaries on disciplined white: circle, triangle and square composed against strict rules and lowercase grotesk type. Decoration is replaced by pure composition.",
    traits: ["Primary-color geometry", "Strict rules & grids", "Lowercase geometric type", "Composition as ornament"],
    usage: "Studio identity sites, festival branding, print-inspired posters",
    swatch: "#2B5FAB",
  },
  {
    slug: "maximalism",
    name: "Maximalism",
    signature: "More. Then more again, on purpose.",
    description:
      "Everything, layered with conviction: pattern-on-pattern, border-on-border, clashing palettes and stacked typography. Controlled chaos where richness — not restraint — carries the argument.",
    traits: ["Pattern-on-pattern", "Border-on-border", "Deliberate clashes", "Stacked display type"],
    usage: "Fashion campaigns, event pages, Gucci-leaning lookbooks",
    swatch: "#FF3EB5",
  },
  {
    slug: "split-screen",
    name: "Split-Screen",
    signature: "Two ideas, one viewport, halves all the way down.",
    description:
      "Every section divides into paired halves contrasts: dark against light, serif against sans, statement against proof. The hard vertical seam is the layout's whole thesis.",
    traits: ["50/50 composed halves", "Dark/light duality", "Hard center seam", "Paired type styles"],
    usage: "Portfolio heroes, product-vs-use-case pages, A/B storytelling",
    swatch: "#7C3AED",
  },
  {
    slug: "asymmetric-grid",
    name: "Asymmetric Grid",
    signature: "Perfectly measured, deliberately off-center.",
    description:
      "A broken 12-column system: offset columns, overlapping layers, varied tile heights and oversized numerals pulling off the axis. Tension comes from precision, never randomness.",
    traits: ["Offset columns", "Overlapping layers", "Mixed tile heights", "Intentional tension"],
    usage: "Studio portfolios, fashion lookbooks, award-site pages",
    swatch: "#64748B",
  },
  {
    slug: "cinematic",
    name: "Cinematic",
    signature: "The landing page as a title sequence.",
    description:
      "Widescreen letterboxing, credits-roll typography, light-leak vignettes and fades to black. Mood leads; feature lists wait their turn. Every scroll earns a frame transition.",
    traits: ["Widescreen letterboxing", "Credits typography", "Light-leak vignettes", "Scene-based fades"],
    usage: "Apple film drops, studio trailers, luxury car config pages",
    swatch: "#2A2A3B",
  },
  {
    slug: "pop-art",
    name: "Pop Art",
    signature: "Ben-Day dots meet comic exclamations.",
    description:
      "Lichtenstein and Warhol, page-sized: halftone dot fields, thick comic outlines, speech-bubble cards and loud primary print colors. Commercial art that insists on being fun.",
    traits: ["Halftone dot patterns", "Thick comic outlines", "Speech-bubble cards", "Primary print palette"],
    usage: "Comic and animation marketing, museums, pop culture drops",
    swatch: "#FF3B3B",
  },
  {
    slug: "collage",
    name: "Collage",
    signature: "Torn paper, tape and happy accidents.",
    description:
      "Cut-and-paste zine energy: torn-edge clips, washi tape strips, layered scraps, contrasting mixed type and photographed texture. The seams stay visible — beautifully.",
    traits: ["Torn edge clips", "Washi tape scraps", "Mixed contrasting type", "Layered paper texture"],
    usage: "Zines, album packaging, creative agency heroes",
    swatch: "#D9A05B",
  },
  {
    slug: "corporate",
    name: "Corporate / Enterprise",
    signature: "Trust-first tiles for buyers with budgets.",
    description:
      "Procurement-grade comfort: navy authority, tidy feature grids, customer logo strips, compliance chips and zero surprises. Every pixel reassures a security reviewer.",
    traits: ["Navy authority", "Tidy 3-col grids", "Logo trust strips", "Compliance badge chips"],
    usage: "Salesforce, Atlassian, enterprise SaaS marketing sites",
    swatch: "#0F4C81",
  },
  {
    slug: "ai-native",
    name: "AI-Native",
    signature: "The prompt box is the hero section.",
    description:
      "Products sold by asking: a central conversational prompt bar, sparkle-gradient meshes on dark, shimmer-bordered feature cards and skeleton responses. Conversations first, screenshots last.",
    traits: ["Prompt-bar hero", "Sparkle gradient meshes", "Shimmer gradient borders", "Skeleton placeholders"],
    usage: "OpenAI-era products, Perplexity/Cursor marketing, AI startups",
    swatch: "#8B5CF6",
  },
  {
    slug: "spatial-ui",
    name: "Spatial UI",
    signature: "Interfaces that float in room-scale depth.",
    description:
      "visionOS thinking brought to the browser: glass panels suspended at varied depths in a soft neutral void, subtle parallax layering, generous radii and focus states instead of hover.",
    traits: ["Floating glass depth panels", "Soft neutral void", "Parallax layering", "Focus-first states"],
    usage: "visionOS apps, immersive showrooms, XR product demos",
    swatch: "#C3CBD4",
  },
];

export function getStyle(slug: string | null | undefined): DesignStyle {
  return designStyles.find((s) => s.slug === slug) ?? designStyles[0];
}
